import React from "react";
import { Anchor, Box, BoxProps, Footer as MFooter, Title } from "@mantine/core";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandYoutube,
  IconPhone,
} from "@tabler/icons-react";

function Footer() {
  return (
    <MFooter className="p--container" height={100}>
      <Image src={Logo} alt="logo" width={100} height={50} />
      <Section>
        <Title order={4}>Atendimento</Title>
        <List>
          <ListItem>
            <IconPhone />
            <Anchor unstyled href="tel:15994221589">
              (15) 99422 - 1589
            </Anchor>
          </ListItem>
          <ListItem>
            <IconBrandWhatsapp />
            <Anchor
              unstyled
              href="https://api.whatsapp.com/send?phone=5515994221589"
              target="_blank"
              rel="noopener noreferrer"
            >
              (15) 99422 - 1589
            </Anchor>
          </ListItem>
          {/* Email list Item */}
          <ListItem>
            <IconAt />
            <Anchor
              unstyled
              href="mailto:turra667@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              atendimento@logoipsum.com
            </Anchor>
          </ListItem>
        </List>
      </Section>
      <Section>
        <Title order={4}>Nossos Horarios</Title>
        <List>
          <ListItem>Segunda a Sexta: 8:00 as 18:00</ListItem>
          <ListItem>Sabado: 8:00 as 12:00</ListItem>
          <ListItem>Domingo: Fechado</ListItem>
        </List>
      </Section>
      <Section>
        <Title order={4}>Redes Sociais</Title>
        <List>
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
      </Section>
      <Section>
        <Title order={4}>Institucional</Title>
        <List>
          <ListItem><Anchor>Sobre Nós</Anchor></ListItem>
        </List>
      </Section>
    </MFooter>
  );
}

function Section(props: BoxProps) {
  return (
    <Box
      component="section"
      sx={{ display: "flex", flexDirection: "column" }}
      {...props}
    >
      {props.children}
    </Box>
  );
}

function List({ children }: React.HTMLAttributes<HTMLElement>) {
  return <ul className="unstyled">{children}</ul>;
}

function ListItem({ children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <Box component="li" sx={{ display: "flex", gap: ".5rem" }}>
      {children}
    </Box>
  );
}

export default Footer;
