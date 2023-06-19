import { Box, BoxProps, UnstyledButton, UnstyledButtonProps, createPolymorphicComponent } from "@mantine/core";
import { IconHeart, IconMenu2, IconShoppingBag } from "@tabler/icons-react";
import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import styled from "@emotion/styled";

const HeaderRow = createPolymorphicComponent<"header", BoxProps>(styled(Box)`
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 50px;
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(.25rem);
  border-bottom: 1px solid #e9ecef;

  @media (min-width: ${({theme}) => theme.breakpoints.xs}) {
  }
`)


function Header() {
  return (
    <HeaderRow component="header" className="p--container">
      <HeaderButton>
        <IconMenu2 />
      </HeaderButton>
      <Image
        style={{ margin: "0 1rem" }}
        src={Logo}
        alt="logo"
        width={110}
        height={50}
      />
      <HeaderButton sx={{ marginLeft: "auto" }}>
        <IconHeart />
      </HeaderButton>
      <HeaderButton>
        <IconShoppingBag />
      </HeaderButton>
    </HeaderRow>
  );
}

function HeaderButton(props: UnstyledButtonProps) {
  const { children, sx, ...rest } = props;
  return (
    <UnstyledButton sx={{ padding: ".5rem", display: "flex", ...sx }} {...rest}>
      {children}
    </UnstyledButton>
  );
}

export default Header;
