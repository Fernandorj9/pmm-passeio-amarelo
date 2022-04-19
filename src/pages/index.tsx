import { Flex, Heading } from '@chakra-ui/react'
import { ButtonLink } from '../components/ButtonLink'
import { Header } from '../components/Header'
import { MainHero } from '../components/parts/MainHero'
import { useIsActiveSubscription } from '../hooks/useIsActiveSubscription'
import { Contact } from '../components/parts/Contact'
import { Footer } from '../components/parts/Footer'
import { ProposalSection } from '../components/parts/Section/Proposal'
import { InfoSection } from '../components/parts/Section/Info'
import { RouteSection } from '../components/parts/Section/Route'
import { DonationSection } from '../components/parts/Section/Donation'

export default function Home() {
  const { isActiveSubscription } = useIsActiveSubscription();

  return (
    <Flex
      w="100%"
      direction="column"
    >
      <Header pageName="Passeio ciclístico Maio Amarelo 2022" />

      <MainHero>
        <Heading
          fontWeight="black"
          textTransform="uppercase"

          zIndex="2"
        >
          Inscrições de <br />18 a 27 de abril
        </Heading>
        <ButtonLink
          href={"/regulamento"}
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
          {isActiveSubscription ? "Quero me inscrever" : "Regulamento"}
        </ButtonLink>
      </MainHero>

      <InfoSection />
      <DonationSection />
      <RouteSection />
      <ProposalSection />
      <Contact />

      <Footer />

    </Flex >
  )
}