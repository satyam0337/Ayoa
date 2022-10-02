import React from 'react';
import {Box,Text,Image,Button,Flex} from "@chakra-ui/react"

const H4 = () => {
  return (
    <div>
        <Box m='auto' w='90%' mt='20px'>
           <Flex gap='30px'>
              <Box w='50%'>
                 <Image src='https://www.ayoa.com/wp-content/uploads/2021/11/diverse_teams_ayoa-1024x862.webp'   />
              </Box>
              <Box w='50%' textAlign='left' p='20px' mt='50px'>
              <Text fontSize='5xl' fontWeight='bold'>Designed for H4 of thought</Text>
              <Text fontSize='xl'color='#717273'>Diverse ideas discover alternative paths, they break moulds, they lead to breakthroughs. Discover how Ayoa’s neuro-inclusive design makes it a tool which helps different types of people work together to achieve their best work.</Text>

              <Flex gap='20px'>
                 <Image w='200px' h='80px' src='https://www.ayoa.com/wp-content/uploads/2021/07/ayoa_assistive_tech-300x120.png' />
                 <Image w='100px' h='90px' src='https://www.ayoa.com/wp-content/uploads/2021/07/bata_logo-234x300.png' />
                 <Image w='200px' h='80px' src='https://www.ayoa.com/wp-content/uploads/2021/07/bda_assured@2x-300x157.png' />
              </Flex>
              </Box>
           </Flex>
        </Box>
    </div>
  )
}

export default H4
