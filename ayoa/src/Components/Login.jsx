import React from 'react';
import { Box,Text,Image,Flex,Input,Button} from "@chakra-ui/react";
import { FcGoogle} from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
  return (
    <div>
        <Box w='25%' m='auto'>
           <Box w='100px' m='auto'  mb='20px'>
              <Image src='https://auth.ayoa.com/images/ayoa-icon.png' />
           </Box>
           <Box  mb='20px'>
           <Text fontSize='2xl'>Sign in to Ayoa</Text>
           </Box>
           <Box >
                <Input mb='20px' variant='outline' placeholder='Email'  type='email' />
                <Input  mb='20px' variant='outline' placeholder='Password' type='password' />
                <Button  mb='20px' colorScheme='blue' variant='solid' onClick={() => navigate("/")} >SIGN IN WITH EMAIL</Button>
           </Box>
           <Box> 
              <Text fontSize='xs'  mb='20px'>or sign in with:</Text>
           </Box>
           
           <Box mb='40px'>
               <Flex gap='20px'>
               <Button colorScheme='blue' variant='outline' borderRadius='20px'><FcGoogle/>Google</Button>
               <Button colorScheme='blue' variant='outline' borderRadius='20px'> <GrFacebook />Facebook</Button>
               <Button colorScheme='blue' variant='outline' borderRadius='20px'><BsApple color='black' />Apple</Button>
               </Flex>
           </Box>
           <hr />

           <Box ml='60px' mt='20px' >
             <Flex gap='20px'>
                <Text fontSize='sm' fontWeight='bold'>Don't have an account? </Text>
                <Button colorScheme='blue' variant='link' onClick={() => navigate("/Signup")}>Sign Up</Button>
             </Flex>
           </Box>
           <Text fontSize='sm' mb='10px'>Forgot password? </Text>
           <Text fontSize='xs' mb='10px' >This site is protected by reCAPTCHA and the Google Privacy Policy and </Text>
           <Button colorScheme='blue' variant='link'>Terms of Service apply.</Button>

           <Image w='200px' ml='80px'mt='40px' src='https://auth.ayoa.com/images/og_logo.svg' />
        </Box>
    </div>
  )
}

export default LogIn
