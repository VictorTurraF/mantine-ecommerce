import { Box, BoxProps } from '@mantine/core'
import React from 'react'

function FooterSection(props: BoxProps) {
  return (
    <Box
      component="section"
      sx={{ gap: ".5rem", display: "flex", flexDirection: "column" }}
      {...props}
    />
  )
}

export default FooterSection