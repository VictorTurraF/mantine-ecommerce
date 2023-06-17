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

// Import payment icons
import AmexLightLarge from "@/assets/payments/amex-light-large.svg";
import BtcLightLarge from "@/assets/payments/btc-light-large.svg";
import CirrusLightLarge from "@/assets/payments/cirrus-light-large.svg";
import DinnerClubLightLarge from "@/assets/payments/dinnerclub-light-large.svg";
import MaestroLightLarge from "@/assets/payments/maestro-light-large.svg";
import MastercardLightLarge from "@/assets/payments/mastercard-light-large.svg";
import PaypalLightLarge from "@/assets/payments/paypal-light-large.svg";
import VisaLightLarge from "@/assets/payments/visa-light-large.svg";

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
      </Section>
      <Section>
        <Title order={4}>Formas de pagamento</Title>
        <List>
          <ListItem>
            <Image
              src={AmexLightLarge}
              alt="Amex"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={BtcLightLarge}
              alt="BTC"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={CirrusLightLarge}
              alt="Cirrus"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={DinnerClubLightLarge}
              alt="Dinner Club"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={MaestroLightLarge}
              alt="Maestro"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={MastercardLightLarge}
              alt="Mastercard"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={PaypalLightLarge}
              alt="Paypal"
              width={48}
              height={48}
            />
          </ListItem>
          <ListItem>
            <Image
              src={VisaLightLarge}
              alt="Visa"
              width={48}
              height={48}
            />
          </ListItem>
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
