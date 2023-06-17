import React from "react";
import FooterSection from "./FooterSection";
import { Title } from "@mantine/core";
import List, { ListItem } from "./List";

function FooterTimes() {
  return (
    <FooterSection>
      <Title order={4}>Nossos Horarios</Title>
      <List>
        <ListItem>Segunda a Sexta: 8:00 as 18:00</ListItem>
        <ListItem>Sabado: 8:00 as 12:00</ListItem>
        <ListItem>Domingo: Fechado</ListItem>
      </List>
    </FooterSection>
  );
}

export default FooterTimes;
