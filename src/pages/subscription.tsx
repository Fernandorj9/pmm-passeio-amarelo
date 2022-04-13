import { Button, Checkbox, Container, Flex, Icon, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { useState } from "react";
import { Image } from "../components/Image";
import { MainHero } from "../components/parts/MainHero";
import { Section } from "../components/Section";
import { theme } from "../styles/theme";
import Router from 'next/router'
import { Header } from "../components/Header";

export default function SubscriptionPage() {
  const toast = useToast()

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Header pageName="Formulário de inscrição | Passeio ciclístico Maio Amarelo 2022" />

      {/* principal */}
      <MainHero h="md">

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