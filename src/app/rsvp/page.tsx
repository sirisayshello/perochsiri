"use client";

import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { H1 } from "../components/H1";
import { Input } from "../components/Input";
import { Label } from "../components/Label";
import { Select } from "../components/Select";
import { Button } from "../components/Button";
import { useRSVP } from "./useRSVP";
import { useIsAdmin } from "../hooks/useIsAdmin";

export default function RSVP() {
  const { saveRSVP, rsvp } = useRSVP();
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const isAdmin = useIsAdmin();

  const handleNumberOfGuestsChange: ChangeEventHandler<HTMLSelectElement> = (
    e
  ) => {
    const value = parseInt(e.target.value, 10);

    setNumberOfGuests(value);
  };

  const guestArray = [...Array(numberOfGuests)];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const guests = guestArray.map((_, index) => ({
      name: formData.get(`g-${index}-name`) as string,
      food: formData.get(`g-${index}-food`) as string,
      allergies: formData.get(`g-${index}-allergies`) as string,
    }));

    await saveRSVP(guests);
  };

  if (isAdmin) {
    console.log('rsvp:', rsvp);

    return <div className="flex flex-col items-center h-full">
      <H1>RSVP Admin</H1>
      {rsvp?.map((guest) => (
        <div className="flex gap-2">
          <p>{guest.name}</p>
          <p>{guest.food}</p>
          <p>{guest.allergies}</p>
        </div>
      ))}
    </div>
  }

  return (
    <div className="flex flex-col items-center h-full">
      <H1>RSVP</H1>
      <h2>Kommer ni?</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-[120px,1fr] gap-4 mb-6">
          <Label htmlFor="antal">Antal som kommer</Label>
          <Select id="antal" onChange={handleNumberOfGuestsChange}>
            <option disabled selected hidden>
              Välj antal
            </option>
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

        {numberOfGuests > 0 && <Button type="submit">Skicka</Button>}
      </form>
    </div>
  );
}
