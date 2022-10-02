import React from 'react'
import { Link, Stack, Flex, SimpleGrid, Text, Image, Box, Center, Container } from "@chakra-ui/react"
import "./Footer.css"


function Footer() {
    return (

        <Stack bg={"#002638"} color={"white"} m='auto' >


            <SimpleGrid color={'#8aa2b3'} fontSize={'13px'} columns={[1, 3, 5]} spacing='9' margin={"auto"} mt='20' >

                <Stack className='FC' textAlign={'left'} >

                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Ayoa</Text >
                    <Link >Features</Link>
                    <Link  > About Us</Link>
                    <Link  >Pricing</Link>
                    <Link  >Integrations</Link>
                    <Link  >Security</Link>
                    <br />
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'}  >News</Text >
                    <Link  >Blog</Link>
                    <Link  >Press</Link>
                    <Link  >Roadmap</Link>
                    <Link  >Release Notes</Link>
                </Stack>

                <Stack className='FC' textAlign={'left'}>
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Use Cases</Text >
                    <Link  >Task Management</Link>
                    <Link  >Mind Mapping</Link>
                    <Link  >Project Management</Link>
                    <Link  >Marketing</Link>
                    <Link  >Finance</Link>
                    <Link  >Education</Link>
                    <Link  >NeuroStackersity</Link>
                    <br />
                    <Link  >All Use Cases</Link>
                    <Link  >Template Library</Link>
                    <br />
                    <Link  >Customer Success Stories</Link>
                </Stack>

                <Stack className='FC' textAlign={'left'}>
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Support</Text >
                    <Link  >Help</Link>
                    <Link  >FAQ</Link>
                    <Link  >Contact Us</Link>
                    <Link  >Free Demos & Webinars</Link>
                    <Link  >Where is DropTask?</Link>
                    <Link  >How to Mind Map</Link>
                </Stack>
                <Stack className='FC' textAlign={'left'}>
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Services</Text >
                    <Link  >Applied Innovation Training</Link>
                    <Link  >Trainers</Link>
                    <Link  >Keynote Speaker</Link>
                    <Link  >Partnership Programs</Link>
                    <Link  >Decision Radar Profiler</Link>
                    <br />
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Legal</Text >
                    <Link  >Terms and Conditions</Link>
                    <Link  >Privacy Policy</Link>
                    <Link  >License Agreement</Link>
                    <Link  >Use Policy</Link>
                </Stack>

                <Stack className='FC' textAlign={'left'} >
                    <Text color={'white'} textDecoration={"none"} fontSize={"15px"} fontWeight={'bold'} >Download</Text >
                    <Link  >Android</Link>
                    <Link  >iPhone</Link>
                    <Link  >iPad</Link>
                    <Link  >Windows(Desktop)</Link>
                    <Link  >Mac(Desktop)</Link>
                    <br />
                    <Link  >All Apps</Link>
                </Stack>
            </SimpleGrid>




            <Center><SimpleGrid justifyItems={'center'} columns={[1, 1, 4]} w="70%" mt='6%' mb='1%'>

                <Image className='img1' src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/combined_logos.png" alt="img" />
                <Image className='img2' w='42%' src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/gcloudsupplier@2x.png" alt="img" />
                <Image className='img3' w='22%' src="https://www.ayoa.com/wp-content/uploads/2022/06/bata_logo-250.png" alt="img" />
                <Image className='img4' w='50%' src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/bda_assured@2x.png" alt="img" />

            </SimpleGrid>
            </Center>





            <Box bg='#002130' borderTop={"1px solid #213e4c"} alignItems={'center'} w={'100%'} display='flex' p='2.8%' gap={'50%'} flexDir={{ base: 'row', md: 'row', lg: 'row', sm: 'column' }}>
                <Box  >
                    <Flex gap='1rem' flexDir={{ base: 'row', md: 'row', lg: 'row', sm: 'column'}}>
                        <Image w='9rem'  src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa.svg' />
                        <Box borderRight={"1px solid #213e4c"}> </Box>
                       
                        <Image w='9rem' src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/opengenius_logo.svg' />
                    </Flex>
                </Box>
                <Box >
                    <Flex gap='14px'  >
                        <Image src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/twitter.png' />
                        <Image src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/facebook.png' />
                        <Image src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/youtube.png' />
                        <Image src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/instagram.png' />
                        <Image src='https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/linkedin.png' />
                    </Flex>
                </Box>
            </Box>




        </Stack>
    )
}

export default Footer















































