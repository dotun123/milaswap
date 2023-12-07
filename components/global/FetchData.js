import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../abi/utils/constant';

const rpcUrl = 'https://polygon-mumbai.g.alchemy.com/v2/vn61eXIkpvUX5dPgfdirJyhHzm93wQNW';

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const contract = new ethers.Contract(contractAddress, contractABI, provider);

export const Etherescan = React.createContext();

export const FetchData2 = ({ children }) => {
  const data = 'Etherscan CLONE';

  const [uniqueAddressLength, setUniqueAddressLength] = useState(0);
  const [days, setDays] = useState([]);
  const [uniqueFromAddresses, setUniqueFromAddresses] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [eventData2, setEventData2] = useState([]);

  const AccountDetails = async () => {
    const transferEvent = (await contract.queryFilter('Transfer')).reverse();

    const uniqueAddresses = transferEvent.reduce((acc, event) => {
      if (!acc.includes(event.args.to)) {
        acc.push(event.args.to);
      }
      return acc;
    }, []);

    setUniqueFromAddresses(uniqueAddresses);
    setUniqueAddressLength(uniqueAddresses.length);

    const set5Transfer = transferEvent.slice(0, 10);

    const blockHashes = set5Transfer.map((event) => event.blockHash);
    const blockPromises = blockHashes.map((hash) => provider.getBlock(hash));
    const blocks = await Promise.all(blockPromises);

    const nowInSeconds = Date.now() / 1000;
    const durations = blocks.map((block, index) => {
      const durationInSeconds = nowInSeconds - block.timestamp;
      const durationInHours = durationInSeconds / 3600;
      const durationInDays = durationInHours / 24;

      const intDays = Math.floor(durationInDays);
      const hours = Math.round((durationInDays - intDays) * 24);

      const eventObject = {
        from: set5Transfer[index].args.from,
        to: set5Transfer[index].args.to,
        value: ethers.utils.formatEther(set5Transfer[index].args.value),
        blockNumber: set5Transfer[index].blockNumber,
        transactionHash: set5Transfer[index].transactionHash,
        blockHash: set5Transfer[index].blockHash,
      };

      setEventData((prevEventData) => [...prevEventData, eventObject]);

      return `${intDays} days and ${hours} hours`;
    });

    setDays(durations);

    const thirtyOneDaysEvents = set5Transfer.filter((event, index) => {
      return durations[index].includes('days') && parseInt(durations[index]) <= 8;
    });

    const eventData2Array = thirtyOneDaysEvents.map((event) => ({
      from: event.args.from,
      to: event.args.to,
      value: ethers.utils.formatEther(event.args.value),
      blockNumber: event.blockNumber,
      transactionHash: event.transactionHash,
      blockHash: event.blockHash,
    }));

    setEventData2(eventData2Array);
  };

  useEffect(() => {
    const fetchData = async () => {
      await AccountDetails();

      console.log('Wallet address:', uniqueFromAddresses.slice(0, 30));
      console.log('Unique address length:', uniqueAddressLength);
      console.log('Event Data:', eventData);
      console.log('Event Data 2 (within 31 days):', eventData2);
    };

    fetchData();
  }, []);

  return (
    <Etherescan.Provider
      value={{
        data,
        provider,
        days,
        uniqueAddressLength,
        uniqueFromAddresses,
        eventData,
        eventData2,
      }}
    >
      {children}
    </Etherescan.Provider>
  );
};
