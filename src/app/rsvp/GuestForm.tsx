'use client'

import { Checkbox, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, SelectChangeEvent } from "@mui/material";
import { FormEventHandler, useState } from "react";
import { AttendingInfo } from "./AttendingInfo";
import { useRSVP } from "./useRSVP";
import { Label } from "../components/Label";
import { Select } from "./Select";
import { Button } from "../components/Button";
import { TextInput } from "./Input";
import { form } from "framer-motion/client";


type GuestFormProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const GuestForm = () => {
  const { saveRSVP } = useRSVP();
  const [numberOfGuests, setNumberOfGuests] = useState<number>();
  const [attending, setAttending] = useState<"yes" | "no" | "no response">("no response");

  const handleNumberOfGuestsChange = (event: SelectChangeEvent) => {
    if (typeof event.target.value === "string") {
      const value = parseInt(event.target.value);
      setNumberOfGuests(value);
      return;
    }
    const value = event.target.value;

    setNumberOfGuests(value);
  };

  const handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAttending(event.target.value as "yes" | "no");
  };

  const guestArray = numberOfGuests ? [...Array(numberOfGuests)] : [];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get("attending") === "no") {
      await saveRSVP([{ name: formData.get("name") as string, attending: false, food: "", allergies: "" }]);
      return;
    }

    const guests = guestArray.map((_, index) => ({
      name: formData.get(`g-${index}-name`) as string,
      food: formData.get(`g-${index}-food`) as string,
      allergies: formData.get(`g-${index}-allergies`) as string,
      attending: true,
    }));

    await saveRSVP(guests);
  };

  return <form className="flex flex-col gap-4 w-full max-w-[500px]" onSubmit={handleSubmit}>
    <FormControl sx={{ display: "flex", alignItems: "center" }} >
      <Label id="attending">Ses vi där?</Label>
      <RadioGroup
        row
        sx={{ justifyContent: "center", display: "flex" }}
        aria-labelledby="attending"
        name="attending"
        onChange={handleCheck}
      >
        <FormControlLabel value="yes" control={<Radio sx={{
          color: "var(--accent)", '&.Mui-checked': {
            color: "var(--accent)",
          },
        }} />} label="Ja!" />
        <FormControlLabel value="no" control={<Radio sx={{
          color: "var(--accent)", '&.Mui-checked': {
            color: "var(--accent)",
          },
        }} />} label="Nej, tyvärr." />

      </RadioGroup>
    </FormControl>
    {attending === "yes" &&
      <>
        <div className="flex items-center flex-col">
          <h2>Va kul! Hur många blir ni?</h2>
        </div>
        <FormControl>
          <InputLabel sx={{ color: "var(--foreground)", "&.Mui-focused": { color: "var(--accent)" } }} id="attending-number-label">Antal</InputLabel>
          <Select
            labelId="attending-number-label"
            id="attending-number"
            value={numberOfGuests}
            label="Antal"
            onChange={e => handleNumberOfGuestsChange(e as SelectChangeEvent)}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </>
    }
    {attending === "no" &&
      <div className="flex items-center flex-col">

        <div className="flex gap-4">

          <Label htmlFor="">Namn</Label>
          <TextInput name="name" required />
        </div>
      </div>
    }

    {attending === "yes" && guestArray.map((_, index) => (
      <AttendingInfo key={`guest-rsvp-${index}`} index={index} />
    ))}

    {(attending === "yes" && numberOfGuests && numberOfGuests > 0 || attending === "no") && (
      <Button type="submit">Skicka</Button>
    )}
  </form>
}