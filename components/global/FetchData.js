import React,{useState,useEffect} from 'react'
import {ethers} from "ethers";
import { contractABI,contractAddress} from '../abi/utils/constant';

const rpcUrl = "https://polygon-mumbai.g.alchemy.com/v2/vn61eXIkpvUX5dPgfdirJyhHzm93wQNW";
  
//   // Create a provider using the JsonRpcProvider class
  const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
//   // Create a contract instance
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  


 export const Etherescan= React.createContext();

 let eventData = [];

 let timestamps = [];

 let days = [];
 export const FetchData2 = ({children}) => {
  
const data ="Etherscan CLONE"







const AccountDetails = async () => {


 const transferEvent=(await contract.queryFilter('Transfer')).reverse()
const set5Transfer= transferEvent.slice(0,10)


 // Create an empty array to store the event data

 // Loop through the events and extract the from, to, and value fields
 for (let event of set5Transfer) {
   // Create an object with the event data
   let eventObject = {
     from: event.args.from,
     to: event.args.to,
     value: ethers.utils.formatEther( (event.args.value)),
     blockNumber:event.blockNumber,
    transactionHash:event.transactionHash,
    blockHash:event.blockHash
   };
   // Push the object to the array
   eventData.push(eventObject);
 }

 
  
 const BlockHash = eventData.map( (tx) => tx.blockHash);


  // Get the block object for each hash





  // Create an empty array to store the timestamps
  

  // Loop through the key array and get the block details for each hash
  for (let hash of BlockHash) {
    // Get the block object from the provider
    let block =await provider.getBlock(hash)
      
   

    // Push the timestamp property to the timestamps array
    timestamps.push(block.timestamp);
  }

console.log(timestamps)



 // Create an empty array to store the timestamps
 

  // Loop through the key array and get the block details for each hash
  for (let Ages of timestamps) {
    // Get the block object from the provider
   
    const durationInSeconds = (Date.now() / 1000) - Ages;
   
    const durationInHours = (durationInSeconds / 3600);
    const durationInDays =(durationInHours / 24);
    
    let intDays = Math.floor(durationInDays);
    let hours = Math.round((durationInDays - intDays) * 24);
    // Return a formatted string with days and hours
   days.push(`${intDays} days and ${hours} hours`);
    
  }
 
  }

 





useEffect(()=>{
  AccountDetails();
  
},[]);


// console.log(eventData)

// console.log(days)

  return (
    <Etherescan.Provider value={{data,eventData,provider,days}}>
      {children}
    </Etherescan.Provider>
  )
}





