import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react'
import React from "react";


function InchModal({ open, onClose, setToken, tokenList }) {
  
  if (!open) return null;

  return (
    
    <Modal
    isCentered
    onClose={onClose}
    isOpen={open}
        motionPreset='slideInBottom'
       
    >
        <ModalOverlay />
        <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody >
    <div style={{ overflow: "auto", height: "500px" }}>
      {!tokenList
        ? null
        : Object.keys(tokenList).map((token, index) => (
            <div id="token_select"
              style={{
                padding: "5px 20px",
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => {
                setToken(tokenList[token]);
                onClose();
              }}
              key={index}
            >
              <img
                style={{
                  height: "32px",
                  width: "32px",
                  marginRight: "20px",
                }}
                src={tokenList[token].logoURI}
                alt="noLogo"
              />
              <div>
                <h4>{tokenList[token].name}</h4>
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "15px",
                    lineHeight: "14px",
                  }}
                >
                  {tokenList[token].symbol}
                </span>
              </div>
            </div>
          ))}
          </div>
          </ModalBody>
                        <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
  );
}

export default InchModal;
