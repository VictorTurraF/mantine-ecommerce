import React from "react";
import { Footer as MFooter, Text } from "@mantine/core";
import Image from "next/image";

import AuthorLogo from "@/assets/author-logo.svg";

import FooterPayments from "./FooterPayments";
import FooterContacts from "./FooterContacts";
import FooterInstitutionals from "./FooterInstitutionals";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterTimes from "./FooterTimes";
import styled from "@emotion/styled";
import Logo from "./Logo";

const FooterGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  
  @media (min-width: ${({ theme }) => theme.breakpoints.xs}) {
    grid-template-columns: 1fr 1fr;
  }
`;

function Footer() {
  return (
    <MFooter height="auto" pt="md">
      <Logo />
      <FooterGrid className="p--container">
        <FooterContacts />
        <FooterTimes />
        <FooterSocialLinks />
        <FooterInstitutionals />
        <FooterPayments />
      </FooterGrid>
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
