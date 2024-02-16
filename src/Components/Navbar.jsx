import Logo from "../Photos/Daco_6048519.png"
import {Simple_Modal} from "./Modal"
import React, { useContext,useState } from "react";
import {
    Box,
    Flex,
    Input,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    TagLeftIcon,
    Link,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Image,Menu,MenuButton,MenuList,TagLabel, useToast
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
  import { NavLink } from "react-router-dom";
  import { AiOutlineShoppingCart } from "react-icons/ai";
  import { TransitionExample } from "./Login&Signin";
  import { AuthContext } from "../Context/AuthContext";
  import { BiLogOut} from "react-icons/bi";
  

  export default function Navbar() {
    const {isAuth,setAuth}=useContext(AuthContext)
    const { isOpen, onToggle } = useDisclosure();
    const [name,setName]=useState("")
  
    return (
      <Box position="sticky" top="0" zIndex={1}>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={[4,8,30,35,40]}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}
          >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          
            >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                <NavLink to="/"><Image src="data:image/png;base64,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" height={{base:"20px",md:"30px",xl:"30px"}} alt='Dan Abramov' /></NavLink>
                <div class="rento-sprite rento-sprite-logo" itemID="logoofsite">E-Rentals</div>
                <Box display={{base:"none",md:"inline-flex"}}><Simple_Modal /></Box>
          </Flex>
            <Input display={{base:"none",md:"inline-flex"}} placeholder="Search" width={[80,100,200,250,300]} mr="10px" />
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
           <NavLink to="/cart">
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              mt="10px"
            >
             <TagLeftIcon as={AiOutlineShoppingCart} w={8}/>Cart 
            </Button>
            </NavLink>
              {isAuth?<Profile Name={name} setAuth={setAuth}/>:<TransitionExample setName={setName} />}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  
  const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
      <Link
        href={href}
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
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
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
            fontWeight={600}
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
  
  const NAV_ITEMS= [
    {
      label: <Input placeholder="Search"/>
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Freelance Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Learn Design',
      href: '#',
    },
    {
      label: 'Hire Designers',
      href: '#',
    },
  ];

  const Profile=({Name,setAuth})=>{
    const toast=useToast()
   return <Menu>
  <MenuButton as={Button} >
    {Name}
  </MenuButton>
  
  <MenuList cursor={"pointer"} onClick={()=>{setAuth(false);return(toast({
          title: 'Warning!',
          description: "You have been logged out",
          status: 'warning',
          duration: 2000,
          isClosable: true,
        }))}}>
    Logout
  </MenuList>
</Menu>
  }