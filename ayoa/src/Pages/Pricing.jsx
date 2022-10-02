
import React, { useState } from 'react';
import {Box,Flex,Text,Image, Checkbox,Button,Slider,SliderMark,SliderFilledTrack,SliderThumb,SliderTrack,Tooltip} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ModalOpen from "../Components/Pricing/ModalOpen"

const Pricing = () => {
   const [isModalVisible, setIsModalVisible] = useState(false);
   const [sliderValue, setSliderValue] = useState(1)
   const [showTooltip, setShowTooltip] = useState(false)
  
   console.log(sliderValue)
   
  return (
    
    <div>
      <Navbar />
        <Box w='80%' m='auto'>
             <Box  w='80%' m='auto' mt='20px'>
                <Flex >
                  
                   <Box textAlign='left'>
                   <Text  fontSize='5xl' fontWeight='bold'> Choose the right plan for you</Text>

                   <Text fontSize='lg' mt='30px'>In true mind mapping form, find flexibility galore. Take your pick from unique features, different plan types, and sizes.</Text>
                   </Box>
                   <Box mt='20px'>
                      <Image src='https://www.ayoa.com/wp-content/uploads/2020/02/Stars.png'   />
                      <Text fontSize='lg'>Average rating of</Text>
                      <Text fontSize='lg' color='#ffbf09' fontWeight='bold'>4.5 stars</Text> 
                      <Text fontSize='lg'>from 1,000+ reviews</Text>
                   </Box>
                </Flex>
             </Box>

             <Box m='auto' w='60%' mt='40px' mb='40px'>
             <Slider
             id='slider'
             step={10}
             defaultValue={1}
             min={0}
             max={50}
             colorScheme='teal'
             onChange={(v) => setSliderValue(v)}
             onMouseEnter={() => setShowTooltip(true)}
             onMouseLeave={() => setShowTooltip(false)}
           >
           <SliderMark value={1} mt='1' ml='-2.5' fontSize='sm'>
           1%
         </SliderMark>
         <SliderMark value={10} mt='1' ml='-2.5' fontSize='sm'>
         10%
       </SliderMark>
             <SliderMark value={20} mt='1' ml='-2.5' fontSize='sm'>
               20%
             </SliderMark>
             <SliderMark value={30} mt='1' ml='-2.5' fontSize='sm'>
               30%
             </SliderMark>
             <SliderMark value={40} mt='1' ml='-2.5' fontSize='sm'>
               40%
             </SliderMark>
             <SliderMark value={50} mt='1' ml='-2.5' fontSize='sm'>
               50%
             </SliderMark>
             <SliderTrack>
               <SliderFilledTrack />
             </SliderTrack>
             <Tooltip
               hasArrow
               bg='teal.500'
               color='white'
               placement='top'
               isOpen={showTooltip}
               label={`${sliderValue}%`}
             >
               <SliderThumb />
             </Tooltip>
           </Slider>
             </Box>

             <Box mt='20px' textAlign='left' w='100%' m='auto' p='20px'>
                <Flex gap='30px'>
                    <Box w='33%' borderRadius='20px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'  p='30px'>
                    <Text fontSize='3xl' color='#6a2fcc'>Mind Map</Text>
                    <Text fontSize='5xl' fontWeight='bold'>₹{620-(620*(sliderValue/100))}</Text>
                    <Text fontSize='sm'>Per user / Month / When billed annually</Text>
                    <Text fontSize='lg' >Ideal for developing ideas and boosting creativity.</Text>
                    <Text fontSize='md' mt='70px' fontWeight='bold'>This plan includes:</Text>

                    <Checkbox >Mind maps incl. organic maps, radial maps, speed maps & capture maps</Checkbox>
                    <Checkbox >Unlimited sharing and collaboration</Checkbox>
                    <Checkbox >Extensive image libraries</Checkbox>
                    
                    <Button bg='#6a2fcc' mt='190px' ml='20px' w='250px' color='white' variant='solid' onClick={() => setIsModalVisible(true)}>Buy Plan</Button>
                    
                    </Box>
                    <Box w='33%' borderRadius='20px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'   p='30px'>
                    <Text fontSize='3xl' color='#29a745'>Task</Text>
                    <Text fontSize='5xl' fontWeight='bold'>₹{620-(620*(sliderValue/100))}</Text>
                    <Text fontSize='sm'>Per user / Month / When billed annually</Text>
                    <Text fontSize='lg'>Stay flexible with the most fun and visual way to creatively plan and organise your work and everyday life.</Text>
                    <Text fontSize='md' mt='20px' fontWeight='bold'>This plan includes:</Text>

                    <Checkbox >Unlimited task boards</Checkbox>
                    <Checkbox >Unlimited sharing and real-time collaboration</Checkbox>
                    <Checkbox >Personal planner</Checkbox>
                    <Checkbox >Access to Canvas and Workflow task board styles</Checkbox>

                    <Button bg='#29a745' mt='160px' ml='20px' w='250px' color='white' variant='solid' onClick={() => setIsModalVisible(true)}>Buy Plan</Button>
                    </Box>

                    <Box w='33%' borderRadius='20px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px' p='30px'>
                    <Text fontSize='3xl' color='#e9056c'>Ultimate</Text>
                    <Text fontSize='5xl' fontWeight='bold'>₹{810-(810*(sliderValue/100))}</Text>
                    <Text fontSize='sm'>Per user / Month / When billed annually</Text>
                    <Text fontSize='lg'>Includes Ayoa Task, Ayoa Mind Map, collaboration tools and much more.</Text>
                   
                    <Text fontSize='md' mt='70px' fontWeight='bold'>This plan includes:</Text>

                    <Checkbox >AI to accelerate thinking</Checkbox>
                    <Checkbox >Gantt timeline view / export</Checkbox>
                    <Checkbox >Advanced presentation modes</Checkbox>
                    <Checkbox >Built in video conferencing</Checkbox>
                    <Checkbox >Group brainstorming modes</Checkbox>
                    <Checkbox >File storage (up to 60MB per file)</Checkbox>
                    <Checkbox >Zoom / Dropbox / Evernote / Google Cal integrations</Checkbox>
                    <Checkbox >Priority support and updates</Checkbox>

                    <Text fontSize='lg'>Contains:</Text>
                    <Text fontSize='lg'>The world's only AI mapping Tool</Text>

                    <Button bg='#e9056c' mt='20px' ml='20px' w='250px' color='white' variant='solid' onClick={() => setIsModalVisible(true)} >Buy Plan</Button>

                    {isModalVisible && (
                      <ModalOpen
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                       
                      />
                    )}


                    </Box>
                </Flex>
             </Box>
        </Box>
        <Footer />
    </div>
  )
}

export default Pricing

