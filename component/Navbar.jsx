import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.500' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>Real State</Link>
    </Box>
    <Spacer />
    <Flex  display={['none', 'none', 'flex', 'flex']}
           p='2' justifyContent='space-between' color='blue.400' gap ="6" fontWeight='bold'>
      <Box>
      <Link icon={<FcHome />} href='/' passHref>Home</Link>

      </Box>
      <Box>
      <Link icon={<BsSearch />} href='/search' passHref>Search</Link>
        
      </Box>
      <Box>
      <Link icon={<FcAbout />} href='/search?purpose=for-sale' passHref> Buy Property</Link>
        
      </Box>
      <Box>
      <Link icon={<FiKey />} href='/search?purpose=for-rent' passHref> Rent Property</Link>
      </Box>
    </Flex>
     <Box display={['flex', 'flex', 'none', 'none']}>

      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        <MenuList>
          <Link href='/' passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href='/search' passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box> 
    
    
    
  </Flex>
);

export default Navbar;
