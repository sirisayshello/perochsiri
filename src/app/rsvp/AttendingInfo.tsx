import { Input, MenuItem } from "@mui/material";
import { Label } from "../components/Label";
import { Select } from "./Select";
import { TextInput } from "./Input";

type AttendingInfoProps = {
  index: number;
};

export const AttendingInfo = ({ index }: AttendingInfoProps) => {
  return (
    <div
      className="grid grid-cols-[120px,1fr] gap-4 border-accent border-[1px] p-4 border-solid rounded-md"
      key={`guest-rsvp-${index}`}
    >
      <Label htmlFor={`g-${index}-name`}>Namn:</Label>
      <TextInput name={`g-${index}-name`} id={`g-${index}-name`} />
      <Label htmlFor={`g-${index}-food`}>Matpreferens:</Label>
      <Select defaultValue="" name={`g-${index}-food`} id={`g-${index}-food`}>
        <MenuItem value="kött">Kött</MenuItem>
        <MenuItem value="vegetarisk">Vegetarisk</MenuItem>
        <MenuItem value="vegan">Vegan</MenuItem>
      </Select>
      <Label htmlFor={`g-${index}-allergies`}>Allergier:</Label>
      <TextInput name={`g-${index}-allergies`} id={`g-${index}-allergies`} />
    </div>
  );
};
