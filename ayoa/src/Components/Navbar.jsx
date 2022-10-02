import {
  Image,
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { useNavigate } from 'react-router-dom';



export default function WithSubnavigation() {
  const { isOpen, onToggle } = useDisclosure();
  const navigate = useNavigate();


  return (
    <Box  position="sticky" >
      <Flex 
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}

        align={'center'}>
        
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
         
          <Image  onClick={() => navigate("/")} alignItems={useBreakpointValue({ base: 'center', md: 'left' })} w={"40"} h={"20"} paddingLeft="3" m={"-2"} ml={"0.5"} src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="ayao-logo" />  

          
        </Flex>
        <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <DesktopNav />
          </Flex>
          
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}>
        
          <Button onClick={() => navigate("/Login")}
            display={{ base: 'none', md: 'inline-flex' }}
            fontSize={'md'}
            fontWeight={400}
            color={'5c5c5c'}
            bg={'#eef3f5'}
            borderRadius='full'
            borderBottom={'1px solid #eef3f5'}
                                                                 
            _hover={{
              bg: 'white',
              border:'1px solid #00d1ff'
            }}>
                                                                        Log In
          </Button>

        </Stack>

        <Flex
          flex={{ base: 1, md: 'auto' }}
       
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200');
  const linkHoverColor = useColorModeValue('gray.800', 'white');
  const popoverContentBgColor = useColorModeValue('white', 'gray.800');

  return (
    <Stack direction={'row'} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '#'}
                fontSize={'md'}
                fontWeight={'400}'}
                // fontFamily='sans-serif'
                
                color={'#555555'}
                _hover={{
                  textDecoration: 'none',
                  color: '#1db1fb',
                  borderBottom:'2px solid #1db1fb'
                }}>
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={popoverContentBgColor}
                p={4}
                rounded={'xl'}
                minW={'sm'}>
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label }) => {
  return (
    <Link
 
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'pink.400' }}
            fontWeight={5400}>
            {label}
          </Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}>
          <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}>
        <Text
          fontWeight={6400}
          color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
 
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
   
  
  },
  {
    
    label: 'Products',
    children: [
      {
        label: 'Ayoa Mind Map'
       
      },
      {
        label: 'Ayoa Task'
       
      },
      {
        label: 'Ayoa Ultimate'
      }
    ],
  },
  {
    label: 'Neurodiversity',
    children: [
      {
        label: 'DSA '
      },
      {
        label: 'Software'
      },
      {
        label: 'Workplace'
      },
      {
        label:'Education'
      }
    ],
  },
  {
    label: 'Resources',
    children: [
      {
        label: 'Ayoa Blog'
      },
      {
        label: 'Press & Articles'
      },
      {
        label: 'Keynote Speaker'
      },
      {
        label:'Our Partners'
      },
      {
        label:'Help Center'
      }
    ],
  },
  {
    label: 'Price',
  
  },
  {
    label:' EN ⮟',
    children: [
      {
        label: 'FR'
      },
      {
        label: 'CR'
      },
      {
        label: 'JP'
      },
      {
        label:'KR'
      }
    ],
  }
];