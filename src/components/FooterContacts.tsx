import React from "react";
import FooterSection from "./FooterSection";
import { Anchor, BoxProps, Title } from "@mantine/core";
import List, { ListItem } from "./List";
import { IconAt, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

function FooterContacts() {
  return (
    <FooterSection>
      <Image
        src={Logo}
        alt="logo"
        width={110}
        height={30}
      />
      <Title order={4}>Atendimento</Title>
      <List>
        <ContactListItem>
          <IconPhone />
          <Anchor unstyled href="tel:15994221589">
            (15) 99422 - 1589
          </Anchor>
        </ContactListItem>
        <ContactListItem>
          <IconBrandWhatsapp />
          <Anchor
            unstyled
            href="https://api.whatsapp.com/send?phone=5515994221589"
            target="_blank"
            rel="noopener noreferrer"
          >
            (15) 99422 - 1589
          </Anchor>
        </ContactListItem>
        <ContactListItem>
          <IconAt />
          <Anchor
            unstyled
            href="mailto:turra667@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            atendimento@logoipsum.com
          </Anchor>
        </ContactListItem>
      </List>
    </FooterSection>
  );
}

function ContactListItem(props: BoxProps) {
  const { sx } = props;
  return (
    <ListItem
      sx={{ display: "flex", gap: ".5rem", alignItems: "center", ...sx }}
      {...props}
    />
  );
}

export default FooterContacts;
