import {
  Box,
  Heading,
  Container,
  Text,
  Link,
  Button,
  Stack,
  UnorderedList,
  ListItem,
  ChakraProvider
} from '@chakra-ui/react';

import './App.css'

function App() {
  return (
    <ChakraProvider>
      <Container maxW={'3xl'}>
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Example with <br/>
            <Text as={'span'} color={'#646cff'}>
              Vite & React 18 & ChakraUI
            </Text>
          </Heading>

          <Stack
            direction={'column'}
            color="gray.600"
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
              <UnorderedList spacing={5} textAlign="left">
                <ListItem>💡 Instant Server Start</ListItem>
                <ListItem>⚡️ Lightning Fast HMR</ListItem>
                <ListItem>🛠️ Rich Features</ListItem>
                <ListItem>📦 Optimized Build</ListItem>
                <ListItem>🔩 Universal Plugin Interface</ListItem>
                <ListItem>🔑 Fully Typed APIs</ListItem>
              </UnorderedList>
          </Stack>

          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Link href="https://github.com/mauriciomutte/vite-example" isExternal>
              <Button
                colorScheme={'#646cff'}
                bg={'#646cff'}
                rounded={'full'}
                px={6}
              >
                View Github
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </ChakraProvider>
  )
}

export default App
