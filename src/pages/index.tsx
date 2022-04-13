import { Button, Container, Divider, Flex, Heading, Icon, Text } from '@chakra-ui/react'
import { Image } from '../components/Image'
import { MdWatchLater } from 'react-icons/md'
import { MainHero } from '../components/parts/MainHero'
import { Section } from '../components/Section'
import { ButtonLink } from '../components/ButtonLink'

export default function Home() {
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
        <Heading
          fontWeight="black"
          textTransform="uppercase"
        >
          Inscrições de <br />18 a 27 de abril
        </Heading>
        <ButtonLink
          href="/submit"
          pos="absolute"
          transform="translate(-50%, 50%)"
          bottom="0"
          left="50%"

          size="lg"

          fontFamily="heading"
          fontWeight="black"
          fontSize="4xl"
          textTransform="uppercase"

          px="8"
          py="10"

          zIndex="2"
        >
          Quero me inscrever
        </ButtonLink>
      </MainHero>

      {/* quando será */}
      <Section
        id="info-section"

        backgroundColor="brand.black"
        position="relative"
        overflow="hidden"
        backgroundImage="/assets/camisa-maio-amarelo.png"
        backgroundRepeat="no-repeat"
        backgroundSize="1400px"
        backgroundPosition={["right -860px bottom -200px",]}
      >
        <Heading
          color="brand.yellow"
          fontWeight="black"
          textTransform="uppercase"
          fontSize="5xl"

          maxW="xl"
        >
          Quando será o passeio ciclístico?
        </Heading>

        <Heading
          color="white"
          fontSize="5xl"
          fontWeight="black"
          textTransform="uppercase"
        >
          1° de maio <br />
          <Flex align="center" gridGap=""><Icon as={MdWatchLater} /> 6H30</Flex>
        </Heading>

        <Text
          fontSize="2xl"
          color="yellow"
          maxW="2xl"
        >
          O ponto de partida do Passeio Ciclístico Maio Amarelo 2022 será no Corredor Cultural,
          localizado na Avenida Rio Branco, centro da cidade.
        </Text>
        {/* <Image
          src="/assets/camisa-maio-amarelo.png"
          w="auto"
          h="xl"
          width={`${1459 * 0.8}`}
          height={`${891 * 0.8}`}
          position="absolute"
          left="0"
          bottom="0"
        /> */}
      </Section>

      {/* doação */}
      <Section
        id="doacao-section"

        color="black"
        backgroundColor="brand.yellow"
      >
        <Flex
          align="center"
          justify="space-between"
          h="100%"
          gridGap="10"
          flexGrow={1}
        >
          <Flex
            align="center"
            justify="center"
          >
            <Image
              src="/assets/icons/doacao-icone.png"
              w="36"
              width="400"
              height="400"
              objectFit="contain"
            />
            <Flex
              direction="column"
              fontSize="5xl"
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
              justify="center"
            >
              <Text fontSize="7xl" mb="-10">1KG</Text>
              <Text>DE ALIMENTO</Text>
            </Flex>
          </Flex>

          <Text
            fontSize="9xl"
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
          >
            =
          </Text>

          <Flex
            align="flex-start"
            justify="center"
            direction="column"
            gridGap="4"
          >
            <Flex className="medalha"
              align="center"
              justify="center"
              gridGap="8"
            >
              <Image
                src="/assets/icons/medalha-icone.png"
                w="36"
                width="400"
                height="400"
              />
              <Text
                fontSize="4xl"
                fontWeight="extrabold"
                textTransform="uppercase"
                fontFamily="heading"
                lineHeight="36px"
              >
                medalha personalizada
              </Text>
            </Flex>

            <Flex className="camiseta"
              align="center"
              justify="center"
              gridGap="8"
            >
              <Image
                src="/assets/icons/camisa-icone.png"
                w="36"
                width="400"
                height="400"
              />
              <Text
                fontSize="4xl"
                fontWeight="extrabold"
                textTransform="uppercase"
                fontFamily="heading"
                w="lg"
                lineHeight="36px"
              >
                camisa do passeio maio amarelo 2022
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section>

      {/* percurso */}
      <Section
        id="percurso-section"

        color="black"
      >
        <Flex
          align="center"
          justify="space-between"
          gridGap="10"
        >
          <Image
            src="/assets/icons/percurso-icone.png"
            w="lg"
            width="400"
            height="400"
          />

          <Divider
            orientation="vertical"
            borderWidth="4px"
            borderColor="brand.black"
            opacity="1"
            mx="2"
          />

          <Flex
            direction="column"


            maxW="lg"
          >
            <Text
              fontSize="7xl"
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
            >
              PERCURSO
            </Text>
            <Text
              fontSize="6xl"
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
            >
              14,7 KM
            </Text>
            <Text
              fontSize="2xl"
              w="lg"
            >
              Contemplando espaços públicos e unidades dos principais parceiros do projeto.</Text>
          </Flex>
        </Flex>
      </Section>

      <Section
        id="proposta-section"

        color="white"
        backgroundColor="black"
      >
        <Flex
          align="center"
          justify="space-between"
          gridGap="10"
          h="100%"
          flexGrow={1}
        >
          <Flex
            align="center"
            direction="column"
            gridGap="4"
          >
            <Image
              src="/assets/icons/ciclista-icone.png"
              w="60"
              width="500"
              height="443"
            />

            <Text
              fontSize="7xl"
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
            >
              PERCURSO
            </Text>
          </Flex>

          <Divider
            orientation="vertical"
            borderWidth="4px"
            borderColor="white"
            opacity="1"
            mx="2"
          />

          <Flex
            direction="column"
          >

            <Text
              fontSize="2xl"
              textAlign="justify"
            >
              O passeio ciclístico Maio Amarelo 2022, idealizado pela Secretaria Municipal de Segurança Pública, Defesa Civil,
              Mobilidade Urbana e Trânsito (SESDEM) tem como objetivo alertar a população sobre a importância de um
              trânsito seguro. Além de estimular o uso de bicicletas como atividade física esportiva, na promoção da
              saúde e bem-estar. Possibilitando ainda uma alternativa de transporte, promovendo um ambiente mais saudável
              e sustentável.
            </Text>
          </Flex>
        </Flex>
      </Section>

    </Flex>
  )
}
