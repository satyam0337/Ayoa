import { Stack , Text} from '@chakra-ui/react'
import React from 'react'
import WithSubnavigation from './Navbar' 
const Home = () => {
  return (
    <div>
        
        <WithSubnavigation/>
    <Stack dir='column' alignItems={"center"} m={"-2"} > 
        <Text   fontSize='6xl' fontWeight={'900'} >
        Be different, work visually
        </Text>
        <Text  fontSize={"xl"} fontWeight={"thin"} > Try the world’s most visual productivity app. Supercharge thinking, planning and</Text>
        <Text fontSize={"xl"} fontWeight={"thin"}  > learning with AI, mind maps, task boards, and more </Text>


    </Stack>
    
   
    
    </div>

  )
}

export default Home