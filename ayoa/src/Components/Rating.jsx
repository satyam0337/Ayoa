import React from 'react';
import { Box,Text,Image,Flex,Input,Button, Center, SimpleGrid } from "@chakra-ui/react";
import Getstarted from './Getstarted';
const Rating = () => {
  return (
    <div > 
      <Box  w='100%' m='auto'  color='white'  p='40px' backgroundImage={"radial-gradient(circle, #04acea, #00a3ea, #009ae9, #0090e8, #0486e5)"}>
          <Box m='auto' mb='-2' mt='2rem' >
             <Flex  gap='10px'justifyContent={'center'} alignItems='center'>
             <Text fontSize='2.5rem' fontWeight='bold'>Try</Text><Image src='https://www.ayoa.com/wp-content/uploads/2019/11/ayoa_logo.png' /> <Text fontSize='5xl' fontWeight='bold'> today   </Text> </Flex>
          </Box>
          
         <Getstarted  />

   
         {/* <Box w='45%' m='auto'  border='10px solid rgb(228, 243, 255)'  borderRadius='5px' bg='white' mt='30px'>
          <Flex gap='20px'>
          <Input  w={"100%"}
                    variant={'solid'}
                    id={'email'}
                    type={'email'}
                    required
                 
                    placeholder={'Enter Your Email'}
                    p={"1.5rem"}
                    h={"100%"} size='xl' bg='white' />
          <Button textAlign={"center"}
                    fontSize={"22px"}
                    padding={["1", "6"]}
                    h={"100%"}
                    bg={"#00a8fb"}
                  
                    color={"white"}
                    _hover={{ bg: "#008fd5" }}
                    w={{ base: "70%", md: "50%", sm: "50%" }}
                   >Get started</Button>
          </Flex>
          </Box> */}



          <Box  m='auto' mt='4.5rem'  >
          <Text fontWeight='bold' textAlign={'center'} fontSize='1.5rem'>Trusted by</Text>
          <SimpleGrid  columns={[4,4,7]} m='auto' w='70%' h='33px' mt='1rem' >
               <Image  src='https://www.ayoa.com/wp-content/uploads/2021/04/amazon_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/samsung_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/oracle_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/continental_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/salesforce_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/aetna_logo_new.png'   />
               <Image src='https://www.ayoa.com/wp-content/uploads/2021/04/bbc_logo_new.png'   />
          </SimpleGrid>
          </Box>


          <Box m='auto' w='70%' mt='40px'>
             <Box m='auto' w='25%'>
               <Image src='https://www.ayoa.com/wp-content/uploads/2020/02/Stars.png'  />
             </Box>

             <Box m='auto' >
               <Box >
                <Flex  justifyContent='center' fontSize='1.4rem' gap='10px' textAlign={"center"}  mt='20px'>
                   <Text >Average rating of </Text>
                   <Text  fontWeight='bold' color='#eec810 '>4.5 stars</Text>
                   <Text >from </Text>
                   <Text  fontWeight='bold'>1,000+</Text>
                   <Text >reviews </Text>
                   
                </Flex>
                <Text textAlign={"center"} fontSize='md'>across the Apple App Store, Google Play and Capterra</Text>

                </Box>
             </Box>
          </Box>
      </Box>
    </div>
  )
}

export default Rating
