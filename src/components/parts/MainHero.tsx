import { Flex, Heading } from "@chakra-ui/react";
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
      h="md"
      bgColor="brand.yellow"
      position="relative"
      align="center"
      justify="center"
      gridGap="20"
    >
      <Image
        src="/assets/banner-simbolo-maio-amarelo.png"
        w="auto"
        h="lg"
        width="985"
        height="504"
        objectFit="contain"
        position="absolute"
        right="0"
        bottom="-2"
      />

      {children}

      <Image
        src="/assets/logo-passeio-ciclistico.png"
        w="auto"
        width="475"
        height="252"
        objectFit="contain"
        right="0"
        bottom="-2"
      />
    </Flex>
  )
}