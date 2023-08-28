import React from 'react'
import {Container, Heading, VStack, Input, Link, Button, Text, Avatar} from "@chakra-ui/react"

const SignUp = () => {
  return (
    <Container maxW={'container.xl'} h={"100vh"} p={'16'}>
        <form>
            <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                <Heading textAlign={'center'}>
                    VIDEO HUB
                </Heading>
                <Avatar alignSelf={'center'} boxSize={'32'}/>
                <Input placeholder='Name' type='Text' required focusBorderColor='purple.500'/>
                <Input placeholder='Email' type='email' required focusBorderColor='purple.500'/>
                <Input placeholder='Password' type='password' required focusBorderColor='purple.500'/>

                <Button colorScheme='purple' type='submit'>Sign Up</Button>

                <Text textAlign={'right'}> 
                    Already Signed Up?{' '}
                    <Button colorScheme='purple' variant={'link'}>
                        <Link to = {'/login'} > Login </Link>
                    </Button>
                </Text>
                

            </VStack>
        </form>

    </Container>
  )
}




export default SignUp
