import React from "react";
import FooterSection from "./FooterSection";
import { Anchor, Title } from "@mantine/core";
import List, { ListItem } from "./List";

function FooterInstitutionals() {
  return (
    <FooterSection>
      <Title order={4}>Institucional</Title>
      <List>
        <ListItem>
          <Anchor>Sobre Nós</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Missão e Visão</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Valores</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Equipe</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Parceiros</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Políticas de Privacidade</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Termos e Condições</Anchor>
        </ListItem>
        <ListItem>
          <Anchor>Contato</Anchor>
        </ListItem>
      </List>
    </FooterSection>
  );
}

export default FooterInstitutionals;
