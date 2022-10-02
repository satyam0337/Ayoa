import React from 'react';
import { Box,Text,Image,Flex,Input,Button,Checkbox} from "@chakra-ui/react";
import { FcGoogle} from "react-icons/fc";
import { GrFacebook } from "react-icons/gr";
import { BsApple } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const navigate = useNavigate();
  return (
    <div>
    <Box w='25%' m='auto'>
    <Box w='100px' m='auto'  mb='20px'>
       <Image src='https://auth.ayoa.com/images/ayoa-icon.png' />
    </Box>
    <Box  mb='10px'>
    <Text fontSize='xl'>Create your account below to get started.</Text>
    </Box>
    <Box >
         <Input mb='15px' variant='outline' placeholder='First and last name'  type='text' />
         <Input mb='15px' variant='outline' placeholder='Email address'  type='email' />
         <Input  mb='15px' variant='outline' placeholder='Create Password' type='password' />

    </Box>
    <Box>
         <Checkbox mb='20px'><Text fontSize='xs'>I agree to the Ayoa Terms & Conditions, License Agreement and Privacy Policy.</Text></Checkbox>
         <Checkbox mb='20px'><Text fontSize='xs'>Tick to receive offers, vouchers, free bonuses, how-to guides, and marketing communications. We will also immediately send you a welcome 5% discount code off all annual plans. You can change your email preferences at any time.</Text></Checkbox>
         
    </Box>
    <Box>
    <Button  mb='20px' colorScheme='blue' variant='solid' onClick={() => navigate("/login")} >SIGN UP IT'S FREE</Button>
    </Box>

    <Box> 
       <Text fontSize='xs'  mb='20px'>or sign up with:</Text>
    </Box>
    
    <Box mb='20px'>
        <Flex gap='20px'>
        <Button colorScheme='blue' variant='outline' borderRadius='20px'><FcGoogle/>Google</Button>
        <Button colorScheme='blue' variant='outline' borderRadius='20px'> <GrFacebook />Facebook</Button>
        <Button colorScheme='blue' variant='outline' borderRadius='20px'><BsApple color='black' />Apple</Button>
        </Flex>
    </Box>
    <hr />

    <Box ml='60px' mt='20px' >
      <Flex gap='20px'>
         <Text fontSize='sm' fontWeight='bold'>Already have an account? </Text>
         <Button colorScheme='blue' variant='link' onClick={() => navigate("/login")} >Sign In</Button>
      </Flex>
    </Box>
    <Text fontSize='sm' mb='10px'>Forgot password? </Text>
    <Text fontSize='xs' mb='10px' >This site is protected by reCAPTCHA and the Google Privacy Policy and </Text>
    <Button colorScheme='blue' variant='link'>Terms of Service apply.</Button>

    <Image  w='200px' ml='80px'mt='40px' src='https://auth.ayoa.com/images/og_logo.svg' />
 </Box>
    </div>
  )
}

export default SignUp
