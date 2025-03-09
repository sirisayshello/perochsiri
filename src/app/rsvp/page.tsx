"use client";

import { ChangeEventHandler, useState } from "react";
import { H1 } from "../components/H1";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Select } from "../components/Select";
import { Button } from "../components/Button";

export default function RSVP() {
  const [numberOfGuests, setNumberOfGuests] = useState(0);

  const handleNumberOfGuestsChange: ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = parseInt(e.target.value, 10);

    setNumberOfGuests(value);
  };

  const guestArray = [...Array(numberOfGuests)];

  return (
    <div className="flex flex-col items-center h-full">
      <H1>RSVP</H1>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-[120px,1fr] gap-4 mb-6">
          <Label htmlFor="antal">Antal som kommer</Label>
          <Select id="antal" onChange={handleNumberOfGuestsChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
        </div>
        {guestArray.map((_, index) => (
          <div
            className="grid grid-cols-[120px,1fr] gap-4"
            key={`guest-rsvp-${index}`}
          >
            <Label htmlFor={`g-${index}-name`}>Namn:</Label>
            <Input id={`g-${index}-name`} />
            <Label htmlFor={`g-${index}-food`}>Matpreferens:</Label>
            <Select id={`g-${index}-food`}>
              <option value="kött">Kött</option>
              <option value="vegetarisk">Vegetarisk</option>
              <option value="vegetarisk">Vegan</option>
            </Select>
            <Label htmlFor={`g-${index}-allergies`}>Allergier:</Label>
            <Input id={`g-${index}-allergies`} />
          </div>
        ))}

        {numberOfGuests > 0 && <Button type="submit">Skicka</Button>}
      </form>
    </div>
  );
}
