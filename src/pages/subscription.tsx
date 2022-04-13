import { Button, Checkbox, Container, Flex, Icon, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { useState } from "react";
import { Image } from "../components/Image";
import { MainHero } from "../components/parts/MainHero";
import { Section } from "../components/Section";
import { theme } from "../styles/theme";
import Router from 'next/router'

export default function SubscriptionPage() {
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

      </MainHero>
      <Section
        bgColor="black"
      >
        <Text
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
        >
          Página de inscrição
        </Text>
      </Section>

    </Flex>

  )
}