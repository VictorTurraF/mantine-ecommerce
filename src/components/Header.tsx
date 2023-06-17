import { Box, UnstyledButton, UnstyledButtonProps } from "@mantine/core";
import { IconHeart, IconMenu2, IconShoppingBag } from "@tabler/icons-react";
import React from "react";
import Logo from "@/assets/logo.svg";
import Image from "next/image";

function Header() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        height: 50,
        display: "flex",
        alignItems: "center",
        gap: ".5rem",
      }}
      className="p--container"
    >
      <HeaderButton>
        <IconMenu2 />
      </HeaderButton>
      <Image src={Logo} alt="logo" width={110} height={50} />
      <HeaderButton sx={{ marginLeft: "auto" }}>
        <IconHeart />
      </HeaderButton>
      <HeaderButton>
        <IconShoppingBag />
      </HeaderButton>
    </Box>
  );
}

function HeaderButton({ children, sx }: UnstyledButtonProps) {
  return (
    <UnstyledButton sx={{ padding: ".5rem", display: "flex", ...sx }}>
      {children}
    </UnstyledButton>
  );
}

export default Header;
