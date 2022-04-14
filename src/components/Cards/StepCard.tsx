import { Flex, Image, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  step: ReactNode,
  concluded: boolean,
}

export function StepCard({ step, concluded }: Props) {
  return (
    <Flex
      h="52"

      justify="center"
      align="center"
      rounded="3xl"

      borderColor={concluded ? "none" : "white"}
      borderWidth={concluded ? "0px" : "8px"}
      bgColor={concluded ? "white" : "none"}
      position="relative"
    >
      {concluded && <Image
        src="/assets/icons/success-icon.webp"
        alt="ícone de sucesso"
        w="28"

        top="0"
        left="0"
        position="absolute"
        transform="translate(-25%, 50%)"
      />
      }

      <Text
        color={concluded ? "brand.green" : "white"}
        fontFamily="heading"
        fontWeight="black"
        textTransform="uppercase"
        fontSize="2xl"
        textAlign="center"

        pt={concluded ? "10" : "0"}
        pl={concluded ? "10" : "0"}
      >
        {step}
      </Text>
    </Flex>
  )
}