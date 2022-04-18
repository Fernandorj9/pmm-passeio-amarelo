import { Heading, Text } from "@chakra-ui/react";
import { ContactFormFields } from "../Forms/ContactFields";
import { Section } from "../Section";

export function Contact() {
  return (
    <Section
      bgColor="brand.yellow"
    >
      <Heading>Contato</Heading>
      <Text
        fontSize={["xl", "xl", "2xl",]}
        fontFamily="heading"
        fontWeight="medium"
      >
        Em caso de dúvidas, suporte ou sugestão, por favor considere entrar em contato conosco:
      </Text>

      <ContactFormFields />
    </Section>
  )
}