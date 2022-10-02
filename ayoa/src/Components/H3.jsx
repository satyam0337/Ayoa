import React from 'react';
import { Box,Flex,Image,Text} from "@chakra-ui/react"

const H3 = () => {
  return (
    <div>
         <Box w='90%' m='auto' mt='60px'>
            <Box m='auto' w='50%'>
            <Flex gap='15px' ml='40px'>
               <Text fontSize='6xl' fontWeight='bold'>Unrivaled </Text>
               <Text fontSize='6xl' fontWeight='bold' color='white' bg='#e9056c' p='3px'>flexibility </Text>
            </Flex>
               <Text fontSize='xl'>Whether you’re brainstorming ideas, presenting in meetings, or managing tasks, Ayoa provides you with flexibility and intuitive working methods every step of the way.</Text>
            </Box>
            <Box w='60%' m='auto' mt='40px'>
               <Flex gap='40px'>
                  <Box >
                    <Image w='50px' ml='20px' src='https://www.ayoa.com/wp-content/uploads/2020/10/organic.svg' />
                    <Text fontSize='xl' fontWeight='bold' color='#6c757c '>Mind Map </Text>
                  </Box>
                  <Box>
                  <Image w='50px' ml='30px' src='https://www.ayoa.com/wp-content/uploads/2020/10/whiteboard.svg' />
                  <Text fontSize='xl' fontWeight='bold' color='#6c757c '>Whiteboard  </Text>
                  </Box>
                  <Box>
                  <Image w='50px' ml='20px' src='https://www.ayoa.com/wp-content/uploads/2020/10/workflow.svg' />
                  <Text fontSize='xl' fontWeight='bold' color='#6c757c '>Workflow </Text>
                  </Box>
                  <Box>
                  <Image w='50px' src='https://www.ayoa.com/wp-content/uploads/2020/10/canvas.svg' />
                  <Text fontSize='xl' color='#6c757c' fontWeight='bold'>Canvas</Text>
                  </Box>
                  <Box>
                  <Image w='50px' ml='10px' src='https://www.ayoa.com/wp-content/uploads/2020/10/gantt.svg' />
                  <Text fontSize='xl' color='#6c757c' fontWeight='bold'>Gantt </Text>
                  </Box>
                  <Box>
                  <Image w='50px'   src='https://www.ayoa.com/wp-content/uploads/2020/10/radial.svg' />
                  <Text fontSize='xl' color='#6c757c' fontWeight='bold'>Radial </Text>
                  </Box>
                  <Box>
                  <Image w='50px' ml='10px' src='https://www.ayoa.com/wp-content/uploads/2022/06/catpuremaps.svg' />
                  <Text fontSize='xl' color='#6c757c' fontWeight='bold'>Capture</Text>
                  </Box>
               </Flex>
            </Box>
            <Box w='75%' m='auto' mt='40px'>
            <Flex gap='40px'>
               <Box>
                  <Box textAlign='left' mt='40px' mb='40px'>
                    <Text fontSize='4xl' fontWeight='bold' color='#027bff '>Mind maps</Text>
                    <Text fontSize='xl' mt='40px'  >Mind Mapping is proven to boost productivity, creativity and memory. Grow ideas, structure information, and see the whole picture.</Text>
                  </Box>
                  <hr />
                  <Box mt='20px'>
                     <Flex gap='40px'>
                       <Box>
                          <Image src='https://www.ayoa.com/wp-content/uploads/2021/11/mm_thumbnail_new.png' />
                       </Box>
                       <Box textAlign="left">
                          <Text fontSize='xl'>How to use mind maps</Text>
                          <Text fontSize='xl'>02:22</Text>
                       </Box>
                     </Flex>
                  </Box>
               </Box>
               <Box>
                   <Image src='https://www.ayoa.com/wp-content/uploads/2021/03/Unrivaled_mm_new_webp.webp'  />
               </Box>
            </Flex>
            </Box>

         </Box>
    </div>
  )
}

export default H3
