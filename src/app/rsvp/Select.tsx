import { Select as MuiSelect, SelectProps } from "@mui/material"

export const Select = ({ children, ...props }: SelectProps) => {
  return (
    <MuiSelect
      MenuProps={{ disableScrollLock: true }}
      {...props} sx={{
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--accent)',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--accent)',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: 'var(--accent)',
        },
        '.MuiSvgIcon-root ': {
          fill: "var(--accent)",
        }
      }}>
      {children}
    </MuiSelect>
  )
}
