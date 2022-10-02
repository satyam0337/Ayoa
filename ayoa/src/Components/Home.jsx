import { Stack, Text, Box, Image, Container, Center } from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from './Navbar'
import Getstarted from './Getstarted'
import Imgvideo from './Imgvideo'

const Home = () => {
  return (
    <Box alignItems="center"  >

      <WithSubnavigation />

      <Box dir='column' textAlign={"center"}  >
        <Text fontSize='6xl' fontWeight={'900'} lineHeight={1} >
          Be different, work visually
        </Text>
        <Box>

          <Box w="50%" m={"auto"} > <Text fontSize={'xl'} mt={'8'} textAlign={'center'} fontWeight={"thin"}  > Try the world’s most visual productivity app. Supercharge thinking, planning and learning with AI, mind maps, task boards, and more </Text> </Box>

        </Box>


      </Box>

      <  Getstarted />

      <Stack alignItems={"center"}>
        <Image src={"https://www.ayoa.com/wp-content/uploads/2022/07/ayoa_allinone_watch.webp"} mt="4" alt="video-pic" />

      </Stack>
      <Imgvideo />




    </Box>

  )
}

export default Home