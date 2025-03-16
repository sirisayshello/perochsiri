import { Input, InputProps } from "@mui/material"

export const TextInput = ({ ...props }: InputProps) => {
  return (
    <Input
      sx={{
        "&:before, &:after": {
          borderColor: "var(--accent)"
        },
        ":hover:not(.Mui-focused)": {
          "&:before": {
            borderColor: "var(--accent)"
          }
        }
      }}
      {...props}
    />
  )
}