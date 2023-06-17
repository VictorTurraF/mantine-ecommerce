import React from "react";
import FooterSection from "./FooterSection";
import { Title } from "@mantine/core";
import List, { ListItem } from "./List";
import Image from "next/image";

// Import payment icons
import AmexLightLarge from "@/assets/payments/amex-light-large.svg";
import BtcLightLarge from "@/assets/payments/btc-light-large.svg";
import CirrusLightLarge from "@/assets/payments/cirrus-light-large.svg";
import DinnerClubLightLarge from "@/assets/payments/dinnerclub-light-large.svg";
import MaestroLightLarge from "@/assets/payments/maestro-light-large.svg";
import MastercardLightLarge from "@/assets/payments/mastercard-light-large.svg";
import PaypalLightLarge from "@/assets/payments/paypal-light-large.svg";
import VisaLightLarge from "@/assets/payments/visa-light-large.svg";

function FooterPayments() {
  return (
    <FooterSection>
      <Title order={4}>Formas de pagamento</Title>
      <List direction="row" sx={{ flexWrap: "wrap", gap: ".5rem" }}>
        <ListItem>
          <Image src={AmexLightLarge} alt="Amex" width={48} height={32} />
        </ListItem>
        <ListItem>
          <Image src={BtcLightLarge} alt="BTC" width={48} height={32} />
        </ListItem>
        <ListItem>
          <Image src={CirrusLightLarge} alt="Cirrus" width={48} height={32} />
        </ListItem>
        <ListItem>
          <Image
            src={DinnerClubLightLarge}
            alt="Dinner Club"
            width={48}
            height={32}
          />
        </ListItem>
        <ListItem>
          <Image src={MaestroLightLarge} alt="Maestro" width={48} height={32} />
        </ListItem>
        <ListItem>
          <Image
            src={MastercardLightLarge}
            alt="Mastercard"
            width={48}
            height={32}
          />
        </ListItem>
        <ListItem>
          <Image src={PaypalLightLarge} alt="Paypal" width={48} height={32} />
        </ListItem>
        <ListItem>
          <Image src={VisaLightLarge} alt="Visa" width={48} height={32} />
        </ListItem>
      </List>
    </FooterSection>
  );
}

export default FooterPayments;
