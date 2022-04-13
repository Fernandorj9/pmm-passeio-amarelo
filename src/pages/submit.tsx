import { Button, Checkbox, Container, Flex, Icon, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { useState } from "react";
import { Image } from "../components/Image";
import { MainHero } from "../components/parts/MainHero";
import { Section } from "../components/Section";
import { theme } from "../styles/theme";
import Router from 'next/router'

export default function SubmitPage() {
  const toast = useToast()

  const [isChecked, setIsChecked] = useState(false);

  function handleChecked() {
    setIsChecked(!isChecked);
  }

  function handleContinue() {
    if (isChecked) {
      Router.push('/subscription')
    } else {
      toast({
        title: "Aceitar regulamento",
        description: "Você precisa aceitar o regulamento para continuar",
        isClosable: true,
        position: "top",
        status: "info"
      })
    }
  }
  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Flex
        as="header"
        w="100%"
        h="20"
        bgColor="brand.black"
        position="relative"
      >
        <Container
          maxW="8xl"
        >

          <Image
            src="/assets/logo-prefeitura.png"
            w="xs"
            width="600"
            height="258"

            position="absolute"
            bottom="-20"

            zIndex="2"
          />

        </Container>
      </Flex>

      {/* principal */}
      <MainHero>
        <Text
          pos="absolute"
          bottom="0"
          left="50%"

          fontFamily="heading"
          fontWeight="black"
          fontSize="4xl"
          textTransform="uppercase"

          bgColor="white"

          w="lg"
          textAlign="center"
          px="8"
          py="6"

          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

          size="lg"
          rounded="full"
          transform="translate(-50%, 50%)"
          zIndex="2"
        >
          INSCRIÇÃO
        </Text>
      </MainHero>
      <Section
        bgColor="black"
      >

        <Flex>
          <Flex
            align="center"
            gridGap="4"
            bgColor="brand.yellow"
            rounded="full"
            w="5xl"
            px="8"

            cursor="pointer"
            transition=".5s all"
            _hover={{
              bgColor: darken(0.07, '#FCE321')

            }}

            onClick={handleChecked}
          >

            <Switch
              size="lg"
              colorScheme="blackAlpha"
              isChecked={isChecked}
            />
            <Text
              color="black"
              fontSize="4xl"
              textTransform="uppercase"
              fontFamily="heading"
              fontWeight="black"

            >
              Eu li e concordo com o regulamento
            </Text>
          </Flex>
          <Button
            size="lg"

            fontFamily="heading"
            fontWeight="black"
            fontSize="4xl"
            textTransform="uppercase"

            rounded="full"

            w="sm"
            px="8"
            py="10"
            ml="-20"

            zIndex="2"

            disabled={!isChecked}
            autoFocus={isChecked}
            _disabled={{
              opacity: 1,
              backgroundColor: darken(0.3, '#fff')
            }}

            onClick={handleContinue}
          >
            CONTINUAR
          </Button>
        </Flex>

      </Section>

    </Flex>

  )
}