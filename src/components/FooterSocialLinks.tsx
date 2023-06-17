import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandYoutube,
} from "@tabler/icons-react";
import FooterSection from "./FooterSection";
import { Anchor, Title } from "@mantine/core";
import List, { ListItem } from "./List";

function FooterSocialLinks() {
  return (
    <FooterSection>
      <Title order={4}>Redes Sociais</Title>
      <List direction="row" sx={{ gap: "1rem" }}>
        <ListItem>
          <Anchor
            unstyled
            href="https://www.facebook.com/Logo-Ipsum-100100102345678"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandFacebook />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            unstyled
            href="https://www.instagram.com/victor.turra.f/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandInstagram />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            unstyled
            href="https://www.youtube.com/channel/UC6kQOAPpvKpCa3w_Y5rThXg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandYoutube />
          </Anchor>
        </ListItem>
        <ListItem>
          <Anchor
            unstyled
            href="https://br.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBrandLinkedin />
          </Anchor>
        </ListItem>
      </List>
    </FooterSection>
  );
}

export default FooterSocialLinks;
