import React from 'react';
import { CheckIcon } from "@chakra-ui/icons"
import { Box,Text,Image,Button,Flex } from "@chakra-ui/react";
const H2 = () => {
  return (
    <div>
      <Box w='90%' m='auto'>
      <Box w='70%' m='auto'>
      <Text fontSize='6xl' fontWeight='bold'>Choose creativity or productivity, or why not have it all?</Text>
      </Box>
       
      <Box >
        <Flex gap='20px'>
           <Box  mt='20px' mb='20px'>
              <Flex gap='20px'>
                 <Box  p='20px' borderRadius='20px' textAlign='left' boxShadow= ' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px' > 
                 <Text fontSize='3xl' color='#6a2fcc' fontWeight='bold'>Ayoya Mind Map</Text>
                 <Text fontSize='lg'>Great for those looking to brainstorm ideas and get creative</Text>
                 <Text fontSize='lg'>  <CheckIcon mr='5px'/> Organic mind maps</Text>
                 <Text fontSize='lg'>  <CheckIcon mr='5px'/> Speed mind maps</Text>
                 <Text fontSize='lg'>  <CheckIcon mr='5px'/> Radial maps</Text>
                 <Text fontSize='lg'>  <CheckIcon mr='5px' /> Capture maps</Text>
                 <Image ml="10rem" src='https://www.ayoa.com/wp-content/uploads/2022/07/mm-laptop.png' />
                 </Box>
                 <Box  p='20px' borderRadius='20px' textAlign='left' boxShadow= ' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px'>
                 <Text fontSize='3xl' color='#81c43b' fontWeight='bold'>Ayoa Task</Text>
                 <Text fontSize='lg'>Easily manage your workload and meet your deadlines</Text>
                 <Text fontSize='lg'><CheckIcon mr='5px'/>Workflow view</Text>
                 <Text fontSize='lg'><CheckIcon mr='5px'/>Canvas view</Text>
                 <Text fontSize='lg'><CheckIcon mr='5px'/>Urgency lists</Text>
                 <Text fontSize='lg'><CheckIcon mr='5px'/> Personal planner</Text>
                 <Image ml="6rem" src='https://www.ayoa.com/wp-content/uploads/2022/07/canvas-laptop.png' />
                 </Box>
              </Flex>
           </Box>
           <Box   borderRadius='20px' boxShadow= ' rgba(0, 0, 0, 0.16) 0px 10px 36px 0px' >
             <Box bg="#002130" color='white' borderTopRadius='20px' p='10px' >
             <Flex gap='40px'>
             <Image w='120px' h='120px' src='https://www.ayoa.com/wp-content/uploads/2022/07/AYOA-GUY.png' />
             <Image src='https://www.ayoa.com/wp-content/uploads/2022/07/nowwithai.png' />
             </Flex>
             <Text fontSize='3xl'>Ayoa Ultimate</Text>
             <Text fontSize='xl'>The full suite of Ayoa Mind Map, Ayoa Task and more…</Text>
             </Box>
             <Box textAlign='left' p='20px' ml='80px'>
             <Text fontSize='lg'><CheckIcon mr='5px' />AI powered mind maps</Text>
             <Text fontSize='lg'><CheckIcon mr='5px'/>Gantt timelines</Text>
             <Text fontSize='lg'><CheckIcon mr='5px'/>Team collaboration</Text>
             <Text fontSize='lg'><CheckIcon mr='5px'/> Interactive whiteboards</Text>
             
             </Box>
           </Box>
         </Flex>
         <Button h='50px' w='400px' mt='30px' fontSize='30' colorScheme='blue' variant='solid'>See Full feature comparison</Button>
      </Box>

      </Box>
    </div>
  )
}

export default H2
