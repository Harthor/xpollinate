import { Button, Flex, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';

import { Web3Context } from 'contexts/Web3Context';

const ConnectWeb3 = () => {
  const { connectWeb3, loading, account, disconnect } = useContext(Web3Context);

  return (
    <Flex
      background="white"
      boxShadow="0px 1rem 2rem rgba(204, 218, 238, 0.8)"
      borderRadius="1rem"
      direction="column"
      align="center"
      w="calc(100% - 2rem)"
      mt="5rem"
      p="2rem"
      maxW="27.5rem"
      mx={4}
    >
      <Flex
        bg={account && !loading ? 'red.500' : 'teal.500'}
        borderRadius="50%"
        p="1rem"
        justify="center"
        align="center"
        color="white"
        mb={4}
      ></Flex>
      {loading && (
        <Text fontSize="xl" fontWeight="bold" mb={4}>
          Connecting Wallet
        </Text>
      )}
      {account && !loading ? (
        <Button onClick={disconnect} colorScheme="teal" px={12}>
          Disconnect
        </Button>
      ) : (
        <Button
          onClick={connectWeb3}
          colorScheme="teal"
          px={12}
          isLoading={loading}
        >
          Connect
        </Button>
      )}
    </Flex>
  );
};

export default ConnectWeb3;
