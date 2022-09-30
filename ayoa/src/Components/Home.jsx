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


{/* Card Section  */}

      <Center alignItems={"center"} w={{lg:'5xl',xl:'5xl',md:'3xl',sm:'3xl'}} m="auto" mt={'10'} dir={{md:'row',xl:'row'}}>
        <Stack alignItems={"center"} gap="5">
          <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/cbsnews_logo.png' alt="cardpic" />
          </Box>
          <Box textAlign={"center"} >
            <Text fontSize={"16px"} fontWeight={"thin"} fontFamily={"sans-serif"}  >“The most unique twist on task management I’ve ever seen” </Text>

          </Box>
        </Stack >
        <Stack alignItems={"center"} gap="5">
          <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/techcrunch-logo.png' alt="cardpic" />
          </Box>
          <Box textAlign={"center"} >
            <Text fontSize={"16px"} fontWeight={"thin"} fontFamily={"sans-serif"} >“Visually-oriented people – this layout boosts productivity” </Text>

          </Box>
        </Stack >
        <Stack alignItems={"center"} gap="5">
          <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-lhacker.png' alt="cardpic" />
          </Box>
          <Box textAlign={"center"} >
            <Text fontSize={"16px"} fontWeight={"thin"} fontFamily={"sans-serif"} >“Turns your tasks into an awesome venn diagram” </Text>

          </Box>
        </Stack >
        <Stack alignItems={"center"} gap="5">
          <Box>
            <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-pcworld.png' alt="cardpic" />
          </Box>
          <Box textAlign={"center"} >
            <Text fontSize={"16px"} fontWeight={"thin"} fontFamily={"sans-serif"} >“A more intuitive way to manage workloads” </Text>

          </Box>
        </Stack >

      </Center>


    </Box>

  )
}

export default Home