import { Box, Button, Checkbox, Container, Flex, Heading, Icon, Image, SimpleGrid, Switch, Text, useToast } from "@chakra-ui/react";
import { darken } from "polished";
import { useState } from "react";
import { Section } from "../../components/Section";
import { theme } from "../../styles/theme";
import Router from 'next/router'
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { CyclistFormFields } from "../../components/Forms/CyclistFormFields";
import { MainHero } from "../../components/parts/MainHero";
import { StepCard } from "../../components/Cards/StepCard";

export default function SuccessPage() {
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
        bgColor="brand.green"
      >
        <Text
          fontFamily="heading"
          fontWeight="black"
          fontSize={["xl", "2xl", "2xl", "3xl"]}
          textTransform="uppercase"
          alignSelf={["center", "center",]}

          bgColor="white"

          w={["md", "sm", "2xl", "container.md"]}
          textAlign="center"
          px="8"
          py="6"

          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

          size="lg"
          rounded="full"
        >
          Inscrição realizada com sucesso
        </Text>

        <Flex
          direction="column"
          align="center"
          mt="10"

          gridGap="4"
        >
          <Heading
            textTransform="uppercase"
            color="white"
            fontWeight="black"
            fontSize="5xl"
          >
            Próximos passos
          </Heading>

          <SimpleGrid
            columns={4}
            w="100%"
            gridGap="8"
          >
            <StepCard
              step={<>Inscrição <br /> realizada</>}
              concluded={true}
            />
            <StepCard
              step={<>Confirmar <br /> inscrição</>}
              concluded={false}
            />
            <StepCard
              step={<>Pegar <br /> camiseta</>}
              concluded={false}
            />
            <StepCard
              step={<>Passeio <br /> ciclístico</>}
              concluded={false}
            />
          </SimpleGrid>
        </Flex>
      </Section>
    </Flex>

  )
}