import { Divider, Flex, Heading, Icon, Text, useBreakpointValue } from '@chakra-ui/react'
import { Image } from '../components/Image'
import { MdWatchLater } from 'react-icons/md'
import { MainHero } from '../components/parts/MainHero'
import { Section } from '../components/Section'
import { ButtonLink } from '../components/ButtonLink'
import { Header } from '../components/Header'

export default function Home() {
  const isMobileVersion = useBreakpointValue({
    base: true,
    md: false,
  })

  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Header pageName="Passeio ciclístico Maio Amarelo 2022" />

      {/* principal */}
      <MainHero>
        <Heading
          fontWeight="black"
          textTransform="uppercase"

          zIndex="2"
        >
          Inscrições de <br />18 a 27 de abril
        </Heading>
        <ButtonLink
          href="/submit"
          pos="absolute"
          transform="translate(-50%, 50%)"
          bottom={["12", "12", "0", "0",]}
          left="50%"

          size="lg"

          fontFamily="heading"
          fontWeight="black"
          fontSize={["lg", "2xl", "4xl"]}
          textTransform="uppercase"
          boxShadow="0px 0px 10px 10px rgba(0,0,0,0.05)"

          px={["8"]}
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
        backgroundSize={["800px", "950px", "950px", "1400px"]}
        backgroundPosition={["right -600px bottom -50px", "right -700px bottom -50px", "right -700px bottom -50px", "right -860px bottom -200px",]}
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
          direction={["column", "column", "row", "row"]}
          justify="space-around"
          h="100%"
          gridGap={["4", "4", "4", "10"]}
        >
          <Flex
            align="center"
            justify="center"
            direction={["column", "column", "column", "column", "row", "row"]}
            w={["lg", "lg", "xl", "4xl"]}
          >
            <Image
              src="/assets/icons/doacao-icone.png"
              alt="Figura monocromática em preto de duas mãos e uma cesta de alimentos representando a doação de alimentos."
              w="36"
              width="400"
              height="400"
              objectFit="contain"
            />
            <Flex
              direction="column"
              fontSize={["4xl", "4xl", "4xl", "4xl", "5xl"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
              justify="center"
              align={["center", "center", "center", "center", "flex-start"]}
            >
              <Text fontSize={["4xl", "4xl", "4xl", "5xl", "7xl"]} mb={["-6", "-6", "-6", "-8", "-10"]}>1KG</Text>
              <Text>DE ALIMENTO</Text>
            </Flex>
          </Flex>

          <Text
            fontSize={["6xl", "6xl", "6xl", "6xl", "9xl"]}
            fontWeight="extrabold"
            textTransform="uppercase"
            fontFamily="heading"
          >
            =
          </Text>

          <Flex
            align={["center", "center", "flex-start", "flex-start"]}
            justify="center"
            direction="column"
            gridGap="4"
          >
            <Flex className="medalha"
              align="center"
              justify="center"
              gridGap="8"
              flexDirection={["column", "column", "column", "row"]}
            >
              <Image
                src="/assets/icons/medalha-icone.png"
                alt="Figura monocromática em preto de uma medalha com uma estrela desenhada no centro."
                w="36"
                width="400"
                height="400"
              />
              <Text
                fontSize={["2xl", "2xl", "2xl", "4xl"]}
                w={["xs", "auto", "md", "md", "md"]}
                textAlign={["center", "center", "center", "left"]}
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
              flexDirection={["column", "column", "column", "row"]}
            >
              <Image
                src="/assets/icons/camisa-icone.png"
                alt="Figura monocromática em preto do contorno de uma camisa."
                w="36"
                width="242"
                height="243"
              />
              <Text
                fontSize={["2xl", "2xl", "2xl", "4xl"]}
                w={["xs", "auto", "md", "md", "md"]}
                textAlign={["center", "center", "center", "left"]}
                fontWeight="extrabold"
                textTransform="uppercase"
                fontFamily="heading"
                lineHeight="36px"
              >
                camisa do passeio maio amarelo 2022
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Section >

      {/* percurso */}
      <Section
        id="percurso-section"

        color="black"
      >
        <Flex
          align="center"
          justify="space-between"
          gridGap="10"

          flexDirection={["column", "column", "row"]}
        >
          <Image
            src="/assets/icons/percurso-icone.png"
            alt="Figura monocromática em preto de dois alfinetes de mapa e uma linha pontilhada simbolizando um percurso."
            maxW="lg"
            width="400"
            height="400"
          />

          {isMobileVersion
            ? <Divider
              orientation={"horizontal"}
              borderWidth="4px"
              borderColor="brand.black"
              opacity="1"
              mx="2"
            />
            : <Divider
              orientation={"vertical"}
              borderWidth="4px"
              borderColor="brand.black"
              opacity="1"
              mx="2"
            />}

          <Flex
            direction="column"
            maxW="lg"
          >
            <Text
              fontSize={["5xl", "7xl", "5xl", "6xl", "7xl"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
            >
              PERCURSO
            </Text>
            <Text
              fontSize={["4xl", "7xl", "5xl", "6xl", "7xl"]}
              fontWeight="extrabold"
              textTransform="uppercase"
              fontFamily="heading"
            >
              14,7 KM
            </Text>
            <Text
              fontSize="2xl"
              maxW="lg"
            >
              Contemplando espaços públicos e unidades dos principais parceiros do projeto.</Text>
          </Flex>
        </Flex>
      </Section >

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
          flexDirection={["column", "column", "row"]}
        >
          <Flex
            align="center"
            direction="column"
            gridGap="4"
          >
            <Image
              src="/assets/icons/ciclista-icone.png"
              alt="Figura monocromática em amarelo de uma bicicleta e um ciclista em cima dela."
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
              PROPOSTA
            </Text>
          </Flex>

          {isMobileVersion
            ? <Divider
              orientation="horizontal"
              borderWidth="4px"
              borderColor="white"
              opacity="1"
              mx="2"
            />
            : <Divider
              orientation="vertical"
              borderWidth="4px"
              borderColor="white"
              opacity="1"
              mx="2"
            />}


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

    </Flex >
  )
}
