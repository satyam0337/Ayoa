import Navbar from "../Components/Navbar";
import {Box,Text,AspectRatio} from "@chakra-ui/react"
import Footer from "../Components/Footer";
function SubScribe() {
    return (
        <>
           <div>
              <Navbar />

              <Box>
              <Box w='50%'  m='auto' mt='20px'>
              <Text fontSize='4xl'>Watch Ayoa mind mapping with Chiris Griffiths</Text>
            <AspectRatio mt='30px'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Od6_SP9YIG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </AspectRatio>
            </Box>

            <Box w='50%'  m='auto' mt='20px'>
            <Text fontSize='4xl'>Watch Ayoa mind mapping in action:</Text>
          <AspectRatio mt='30px'>
          <iframe width="560" height="150" src="https://www.youtube.com/embed/k7ZOBuHw7Ts" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </AspectRatio>
          </Box>



          <Box w='50%'  m='auto' mt='20px'>
          <Text fontSize='4xl'>Watch Ayoa Task Management Tool</Text>
        <AspectRatio mt='30px'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/6yg8eP5spa4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         </AspectRatio>
        </Box>




        <Box w='50%'  m='auto' mt='20px'>
        <Text fontSize='4xl'>Watch Ayoa mind mapping:- Branch Editor</Text>
         <AspectRatio mt='30px'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/_JfFCoLILUw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       </AspectRatio>
      </Box>


      <Box w='50%'  m='auto' mt='20px'>
      <Text fontSize='4xl'>Watch Ayoa Gantt Timeline</Text>
       <AspectRatio mt='30px'>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/OhAMQSDtots" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </AspectRatio>
    </Box>
              
              </Box>
           <Footer />
           </div>
        
        </>
    )
}

export default SubScribe;