import { Box, BoxProps } from '@mantine/core'
import React from 'react'

interface ListProps extends BoxProps {
  direction?: "row" | "column"
}

function List(props: ListProps) {
  const { sx, direction = "column", ...rest } = props

  const styles = {
    display: "flex",
    flexDirection: direction,
    ...sx
  }

  return (
    <Box sx={styles} component='ul' className='unstyled' {...rest} />
  )
}

function ListItem(props: BoxProps) {
  return (
    <Box component="li" {...props} />
  )
}

export default List
export { ListItem }