import { Image,Flex,Input,Button,Text} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function CheckOutPage({isModal,setIsModal}) {
  const navigate = useNavigate()
  const onClose = () => {
    setIsModal(false);
  };

  const showAlert = () => {
   alert("Transition Successful")
  //  navigate("/")
   navigate("/subcribed")
  }
  return (
    <>
    <Modal isOpen={isModal}  blockScrollOnMount={true}  onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader ml='60px'>Add your payment details</ModalHeader>
      <ModalCloseButton />


      <ModalBody>
            
              <Image mb='35px' src='https://cb-invoice-logos-prod.s3.us-east-1.amazonaws.com/opengenius/logo_1652973046_AzqSC4T6IERuPq7a.png'  />
               
              <Input placeholder='Card Number'  type='number' size='md' mb='20px' />
              <Flex mb='20px'>
              <Input placeholder='Expiry'  size='md' />
              <Input placeholder='CVV' type='number' size='md' />
              </Flex>
              <Text fontSize='sm' mb='40px'>I authorize OpenGenius Limited to save and automatically charge this payment method for automatic renewals unless I cancel before the renewal date. I accept all sales are final and non-refundable.</Text>
              
              
              <Button colorScheme='blue' ml='150px' mb='40px' variant='solid' onClick={showAlert}>Next</Button>
              </ModalBody>
  
          
              </ModalContent>
            </Modal>
    </>
  )
}
export default CheckOutPage;