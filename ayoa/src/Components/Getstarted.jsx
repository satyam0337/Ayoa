import { useState } from 'react';
import {
    Stack,
    Input,
    Button,
    Container,

} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";


export default function Getstarted() {
    // const [email, setEmail] = useState('');
    const navigate = useNavigate();


    return (

        <Container
            maxW={'xl'}
            mt={'8'}
            border={"8px"} borderRadius="10px" borderColor='rgb(228, 243, 255)'
         
            p={"6px"}
            direction={'column'}
            mb={{sm:'20px'}}
             >

            <Stack
                direction={{ base: 'column', lg: 'row', md: 'column', sm: 'column', }}
                alignItems={"center"}
                spacing={'1px'}
                h={'58'}
                
                >


                <Input
                    w={"100%"}
                    variant={'solid'}
                    id={'email'}
                    type={'email'}
                    required
                 
                    placeholder={'Enter Your Email'}
                    p={"1.5rem"}
                    h={"100%"}


                />

                <Button
                    textAlign={"center"}
                    fontSize={"22px"}
                    padding={["1", "6"]}
                    h={"100%"}
                    bg={"#00a8fb"}
                  
                    color={"white"}
                    _hover={{ bg: "#008fd5" }}
                    w={{ base: "70%", md: "50%", sm: "50%" }}
                    onClick={() => navigate("/Signup")}

                >
                    Get Started
                </Button>

            </Stack>

        </Container>

    );
}


