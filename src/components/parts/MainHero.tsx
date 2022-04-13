import { Container, Flex, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";
import { ButtonLink } from "../ButtonLink";
import { Image } from "../Image";

type Props = {
  children: ReactNode
}

export function MainHero({ children }: Props) {
  return (
    <Flex
      as="main"
      id="principal-section"
      w="100%"
      h={["90vh", "90vh", "md"]}
      bgColor="brand.yellow"
      position="relative"
      align="center"
      justify="center"
    >
      <Container
        w="100%"
        h="100%"
        maxW="8xl"
        as={Flex}
        justify="center"
        align="center"
        gridGap={["4", "4", "20"]}

        flexDirection={["column-reverse", "column-reverse", "row"]}
      >

        {children}

        <Image
          src="/assets/banner-simbolo-maio-amarelo.png"
          w="975px"
          h="500px"
          width="975"
          height="500"
          position="absolute"
          right="0"
          bottom="0"
        />

        <Image
          src="/assets/logo-passeio-ciclistico.png"
          w="auto"
          maxW={["sm", "sm", "xs", "max-content"]}
          maxH={["48", "max-content", "max-content", "max-content"]}
          width="475"
          height="252"
          objectFit="contain"
          right="0"
          bottom="0"
        />
      </Container>
    </Flex>
  )
}