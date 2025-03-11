"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { FormEventHandler, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { useRSVP } from "./useRSVP";

export default function RSVP() {
  const { saveRSVP } = useRSVP();
  const [numberOfGuests, setNumberOfGuests] = useState<number>();

  const handleNumberOfGuestsChange = (event: SelectChangeEvent<number>) => {
    if (typeof event.target.value === "string") {
      const value = parseInt(event.target.value);
      setNumberOfGuests(value);
      return;
    }
    const value = event.target.value;

    setNumberOfGuests(value);
  };

  const guestArray = numberOfGuests ? [...Array(numberOfGuests)] : [];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const guests = guestArray.map((_, index) => ({
      name: formData.get(`g-${index}-name`) as string,
      food: formData.get(`g-${index}-food`) as string,
      allergies: formData.get(`g-${index}-allergies`) as string,
      attending: true,
    }));

    await saveRSVP(guests);
  };

  return (
    <div className="flex flex-col items-center h-full">
      <h1>OSA</h1>
      <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">Antal</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={numberOfGuests}
            label="Antal"
            onChange={handleNumberOfGuestsChange}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>

        {guestArray.map((_, index) => (
          <div
            className="grid grid-cols-[120px,1fr] gap-4"
            key={`guest-rsvp-${index}`}
          >
            <Label htmlFor={`g-${index}-name`}>Namn:</Label>
            <Input name={`g-${index}-name`} id={`g-${index}-name`} />
            <Label htmlFor={`g-${index}-food`}>Matpreferens:</Label>
            <Select name={`g-${index}-food`} id={`g-${index}-food`}>
              <option disabled selected hidden>
                Välj
              </option>
              <option value="kött">Kött</option>
              <option value="vegetarisk">Vegetarisk</option>
              <option value="vegetarisk">Vegan</option>
            </Select>
            <Label htmlFor={`g-${index}-allergies`}>Allergier:</Label>
            <Input name={`g-${index}-allergies`} id={`g-${index}-allergies`} />
          </div>
        ))}

        {numberOfGuests && numberOfGuests > 0 && (
          <Button type="submit">Skicka</Button>
        )}
      </form>
    </div>
  );
}
