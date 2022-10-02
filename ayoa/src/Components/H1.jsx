import React from 'react'
import { Stack, Text, Box, Image, Container, Center,SimpleGrid } from '@chakra-ui/react'


const H1 = () => {
  return (

     
    <SimpleGrid id='Footer' columns={[1,5,5]} spacing='10' alignSelf={"center"} pl={{xl:'5rem',md:'5rem',lg:'5rem',sm:'-5rem'}} justifyContent='center' >
    <Stack alignItems={"center"} >
      <Box>
        <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/cbsnews_logo.png' alt="cardpic" />
      </Box>
      <Box textAlign={"center"} >
        <Text  fontWeight={"thin"} fontFamily={"sans-serif"}  >“The most unique twist on task management I’ve ever seen” </Text>

      </Box>
    </Stack >
    <Stack alignItems={"center"} >
      <Box>
        <Image src='https://www.ayoa.com/wp-content/uploads/2018/05/techcrunch-logo.png' alt="cardpic" />
      </Box>
      <Box  textAlign={"center"}>
        <Text  fontWeight={"thin"} fontFamily={"sans-serif"} >“Visually-oriented people – this layout boosts productivity” </Text>

      </Box>
    </Stack >
    <Stack alignItems={"center"} >
      <Box >
        <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-lhacker.png' alt="cardpic" />
      </Box>
      <Box textAlign={"center"} >
        <Text  fontWeight={"thin"} fontFamily={"sans-serif"} >“Turns your tasks into an awesome venn diagram” </Text>

      </Box>
    </Stack >
    <Stack alignItems={"center"} >
      <Box>
        <Image src='https://www.ayoa.com/wp-content/uploads/2019/09/logo-pcworld.png' alt="cardpic" />
      </Box>
      <Box textAlign={"center"} >
        <Text  fontWeight={"thin"} fontFamily={"sans-serif"} >“A more intuitive way to manage workloads” </Text>

      </Box>
    </Stack >

  </SimpleGrid>


  )
}

export default H1
      