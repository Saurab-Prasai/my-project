import { UnlockIcon } from "@chakra-ui/icons"
import { Avatar, Box,Button,Flex, HStack, Heading,Spacer,Text, useToast } from "@chakra-ui/react"


const Navbar = () => {
  const toast=useToast()
  const showToast=()=>{
    toast(
      {
        title:'Logged Out',
        description:'Successfully logged out',
        duration:5000,
        isClosable:true,
        status:'success',
        position:'top',
        icon:<UnlockIcon/>
      }
    )
  }
  return (

    <Flex as={'nav'} p={'10px'} alignItems={'center'} mb={'40px'}>
        <Heading as={'h1'}>Dojo Tasks</Heading>
        <Spacer/>
        <HStack spacing={'20px'}>
       <Avatar name="mario" src="/img/mario.png"/>
         <Text>saurab@gmail.com</Text>
         <Button colorScheme="purple" onClick={showToast}>Logout</Button>  
        </HStack>
        
    </Flex>
  ) 
}

export default Navbar