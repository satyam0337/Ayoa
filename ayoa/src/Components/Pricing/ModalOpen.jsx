import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    Text,
    Flex,
    Image,
    Input,
    Button,
    Select,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react';
  import {useState} from "react";


import { useNavigate} from "react-router-dom"

import CheckOutPage from './CheckOutPage';
function ModalOpen({ isModalVisible, setIsModalVisible }) {
   const navigate = useNavigate()
  const onClose = () => {
    setIsModalVisible(false);
  };
  const [isModal,setIsModal] = useState(false)
    return (
      <>
  
        <Modal isOpen={isModalVisible}  blockScrollOnMount={true}  onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader ml='60px'>Add your billing address</ModalHeader>
            <ModalCloseButton />


            <ModalBody>
            
              <Image src='https://cb-invoice-logos-prod.s3.us-east-1.amazonaws.com/opengenius/logo_1652973046_AzqSC4T6IERuPq7a.png'  />
            
              <Flex mb='20px'>
              <Input placeholder='First Name' size='md' />
              <Input placeholder='Last Name' size='md' />
              </Flex>
              <Input placeholder='Address Line1' size='md' mb='20px' />
              <Input placeholder='Address Line2 (optional)' size='md' mb='20px' />
              <Flex mb='20px'>
              <Input placeholder='City' size='md' />
              <Input type='number' placeholder='Zip (Optional)' size='md' />
              </Flex>
              <Flex mb='20px'>
              <Input placeholder='State' size='md' />
              <Select placeholder='Country'>
                  <option value='option1'>India</option>
                  <option value='option2'>Nepal</option>
                  
              </Select>
              </Flex>
              <Button colorScheme='blue' ml='150px' mb='20px' variant='solid' onClick={()=>{
               
               setIsModal(true);
               
              }
              }>Next</Button>

              {isModal && (
                <CheckOutPage
                  isModal={isModal}
                  
                  setIsModal={setIsModal}
                 
                />
              )}
            </ModalBody>
  
          
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalOpen;