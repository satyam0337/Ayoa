import { Image,Flex,Input,Box,Text, Button, AspectRatio} from "@chakra-ui/react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


function MindMap() {
    return (
        <>
          <Box >
             <Navbar />
         
             <Box w='100%' m='auto' mt='20px' bg='#002c41' p='20px' h='900px'>
                <Box w='250px' m='auto' bg='#6a2fcc ' p='10px' borderRadius='30px'>
                  <Flex gap='10px'>
                   <Image w='100px' src='https://www.ayoa.com/wp-content/uploads/2022/07/ayoa_editions_logo.svg' />
                   <Text fontSize='xl' color='white' fontWeight='bold'>Mind Map </Text>
                  </Flex>
                </Box>
                <Box>
                   <Text fontSize='5xl' color='white' >Experience the power of </Text>
                   <Text fontSize='5xl' color='#027bff' fontWeight='bold'>organic mind mapping</Text>
                </Box>
                <Box>
                <Text fontSize='2xl' color='white' >Produce the most creative, flexible and effective mind maps. Ayoa Mind Map gives</Text>
                <Text fontSize='2xl' color='white' >you total freedom to express your thoughts in so many visual ways</Text>
                </Box>

                <Box m='auto' w='30%' mt='20px'>
                    <Flex>
                       <Input placeholder='Enter your email' w='300px' bg='white' />
                       <Button color='white' bg='#027bff' variant='solid'>Get Started for free</Button>
                    </Flex>
                </Box>

                <Box w='80%' m='auto' mt='20px'>
                   <Image src='https://www.ayoa.com/wp-content/uploads/2021/01/official_mindmapsoftware_three.png' />
                </Box>
             </Box>
             
            
             <Box w='80%' m='auto' mt='150px' textAlign='left'>
             <Flex gap='20px'>
                <Box w='40%'>
                  <Image src='https://www.ayoa.com/wp-content/uploads/2021/07/nd_banner_variation_2_1.webp' />
                </Box>
                <Box w='60%' p='20px'>
                   <Text fontSize='4xl' color='#027bff' fontWeight='bold' >For neurodiversity and beyond</Text>
                   <Text fontSize='xl' color='#6c757c'>Did you know? Mind maps are renowned for their ability to support diverse minds and diverse thinking. With it being estimated that around 1 in 7 people are neurodivergent (meaning that the brain functions, learns and processes information differently), mind maps are the flexible and inclusive tool that allow everyone to work together to the best of their ability.</Text>

                   <Button mt='20px' w='400px' bg='#027bff' color='white' variant='solid'>Learn about neurodiversity </Button>
                   
                </Box>
             </Flex>
             </Box>
             <hr />
             <Box w='50%'  m='auto' mt='20px'>
               <Text fontSize='4xl'>Watch Ayoa mind mapping in action:</Text>
             <AspectRatio mt='30px'>
             <iframe width="560" height="150" src="https://www.youtube.com/embed/k7ZOBuHw7Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           </AspectRatio>
             </Box>

             <Box m='auto' w='30%' mt='30px' mb='20px'>
                    <Flex>
                       <Input placeholder='Enter your email' w='300px' bg='white' />
                       <Button color='white' bg='#027bff' variant='solid'>Get Started for free</Button>
                    </Flex>
                </Box>
           
                {/*
              <Box w='90%' m='auto'>
                <Box w='40%' m='auto'>
                 <Flex gap='15px'>
                   <Text fontSize='4xl'>Explore</Text>
                   <Text fontSize='4xl' color='#0f81ff'>Ayoa Ultimate</Text>
                 </Flex>
                 <Text  fontSize='3xl'>Includes Ayoa Mind Map, Ayoa Task, AI and much more</Text>
                 </Box> 
              
               </Box>   */}
                <Footer />
          </Box>
        </>
    )
}

export default MindMap;
