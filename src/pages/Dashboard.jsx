import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Flex,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
  Heading,
  HStack,
  Button,
  Divider,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Dashboard = () => {
  const tasks = useLoaderData();
  console.log(tasks);

  return (
    <SimpleGrid spacing={10} minChildWidth={"300px"} p={10}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop={'8px'} borderColor={'purple.400'} bg={'white'}>
            <CardHeader>
              <Flex gap={5}>
               <Avatar src={task.img}/>
                <Box>
                  <Heading as={'h3'} size={'sm'}>{task.title}</Heading>
                  <Text>by {task.author}</Text>
                </Box>

              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>
              <Text>{task.description}</Text>
            </CardBody>
            <Divider borderColor={'gray.200'}/>
            <CardFooter>
              <HStack>
                <Button leftIcon={<ViewIcon/>} variant={'ghost'}>Watch</Button>
                <Button leftIcon={<EditIcon/>} variant={'ghost'}>Comment</Button>
              </HStack>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;

export const tasksLoader = async () => {
  const res = await fetch("http://localhost:3000/tasks");
  return res.json();
};
