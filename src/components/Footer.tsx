import React from "react";
import { Box, Footer as MFooter, Text } from "@mantine/core";
import Image from "next/image";

import AuthorLogo from "@/assets/author-logo.svg";

import FooterPayments from "./FooterPayments";
import FooterContacts from "./FooterContacts";
import FooterInstitutionals from "./FooterInstitutionals";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterTimes from "./FooterTimes";

function Footer() {
  return (
    <MFooter height="auto" pt="md">
      <Box
        className="p--container"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          gap: "1.5rem",
        }}
      >
        <FooterContacts />
        <FooterTimes />
        <FooterSocialLinks />
        <FooterInstitutionals />
        <FooterPayments />
      </Box>
      <Text
        sx={(theme) => ({
          background: theme.colors.purple[6],
          color: theme.white,
        })}
        p={"md"}
        mt="md"
        size="xs"
        align="center"
      >
        CIA. BRASILEIRA DE SERVICOS DIGITAIS LTDA - CNPJ: 49.359.908/0001-85 ©
        Todos os direitos reservados.
      </Text>

      <Text
        px="md"
        sx={(theme) => ({
          background: theme.colors.purple[8],
          color: theme.white,
        })}
        size="xs"
        align="center"
      >
        Desenvolvido por:{" "}
        <Image
          src={AuthorLogo}
          width={100}
          height={30}
          alt="Logo do Desenvolvedor"
        />
      </Text>
    </MFooter>
  );
}

export default Footer;
