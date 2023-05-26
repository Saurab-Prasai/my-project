import { Box, Button, Checkbox, FormControl, FormHelperText, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { Form } from 'react-router-dom'

const Create = () => {
  return (
    <Box maxW={'480px'}>
 <Form>
  <FormControl isRequired mb={'40px'}>
    <FormLabel>Task name:</FormLabel>
    <Input type='text' name='title '/>
    <FormHelperText>Enter a descriptive task</FormHelperText>
  </FormControl>
  <FormControl mb={'40px'}>
    <FormLabel>Task description:</FormLabel>
    <Textarea 
    placeholder='Enter a detail description for the task...' name='description'/>
  </FormControl>
  <FormControl display={'flex'} alignItems={'center'} mb={'40px'}>
    <Checkbox
    name='isPriority'
    size={'lg'}
    colorScheme='purple'
    />
    <FormLabel mb={'0px'} ml={'10px'}>Make this a priority task</FormLabel>
  </FormControl>
  <Button type='submit'>Submit</Button>
 </Form>

    </Box>
  )
 }

export default Create