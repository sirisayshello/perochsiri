"use client";

import {
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  SelectChangeEvent,
} from "@mui/material";
import { FormEventHandler, useState } from "react";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { AttendingInfo } from "./AttendingInfo";
import { TextInput } from "./Input";
import { Select } from "./Select";
import { useRSVP } from "./useRSVP";

type GuestFormProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
};

export const GuestForm = () => {
  const { saveRSVP } = useRSVP();
  const [numberOfGuests, setNumberOfGuests] = useState<number | string>("");
  const [attending, setAttending] = useState<"yes" | "no" | "no response">(
    "no response"
  );
  const [loading, setLoading] = useState(false);
  const hasRsvp = localStorage.getItem("hasRsvp");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrorMessage("");
    setAttending(event.target.value as "yes" | "no");
  };

  const guestArray = numberOfGuests ? [...Array(numberOfGuests)] : [];

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    setLoading(true);
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    if (formData.get("attending") === "no") {
      if (!formData.get("name")) {
        setErrorMessage("Fyll i ditt namn tack :)");
        setLoading(false);
        return;
      }
      await saveRSVP([
        {
          name: formData.get("name") as string,
          attending: false,
          food: "",
          allergies: "",
        },
      ]);

      localStorage.setItem("hasRsvp", "no");
      setLoading(false);
      setErrorMessage("");
      return;
    }

    const guests = guestArray.map((_, index) => ({
      name: formData.get(`g-${index}-name`) as string,
      food: formData.get(`g-${index}-food`) as string,
      allergies: formData.get(`g-${index}-allergies`) as string,
      attending: true,
    }));

    if (guests.some((guest) => !guest.name)) {
      setErrorMessage("Fyll i namn på alla i sällskapet tack :)");
      return;
    }

    if (guests.some((guest) => !guest.food)) {
      setErrorMessage(
        "Nu har du missat att fylla i matpreferenser, det vill vi veta!"
      );
      return;
    }

    await saveRSVP(guests);
    localStorage.setItem("hasRsvp", "yes");
    setLoading(false);
    setErrorMessage("");
  };

  if (hasRsvp) {
    return (
      <div className="flex items-center flex-col mt-6">
        <h2 className="text-4xl">Tack!</h2>
        <p className="text-4xl max-w-[min(80vw,500px)]">
          {hasRsvp === "yes"
            ? "Vi ser fram emot att fira med er! Om du har några ändringar eller frågor, är det bara att höra av dig till oss."
            : "Vad tråkigt att du inte kan komma! Om du ändrar dig är det bara att höra av dig till oss."}
        </p>
      </div>
    );
  }
  return (
    <form
      className="flex flex-col gap-4 w-full max-w-[500px] mt-6"
      onSubmit={handleSubmit}
    >
      <FormControl sx={{ display: "flex", alignItems: "center" }}>
        <Label id="attending">Ses vi där?</Label>
        <RadioGroup
          row
          sx={{ justifyContent: "center", display: "flex" }}
          aria-labelledby="attending"
          name="attending"
          onChange={handleCheck}
        >
          <FormControlLabel
            value="yes"
            control={
              <Radio
                sx={{
                  color: "var(--accent)",
                  "&.Mui-checked": {
                    color: "var(--accent)",
                  },
                }}
              />
            }
            label="Ja!"
          />
          <FormControlLabel
            value="no"
            control={
              <Radio
                sx={{
                  color: "var(--accent)",
                  "&.Mui-checked": {
                    color: "var(--accent)",
                  },
                }}
              />
            }
            label="Nej, tyvärr."
          />
        </RadioGroup>
      </FormControl>
      {attending === "yes" && (
        <>
          <div className="flex items-center flex-col">
            <h2>Va kul! Hur många blir ni?</h2>
          </div>
          <FormControl>
            <InputLabel
              sx={{
                color: "var(--foreground)",
                "&.Mui-focused": { color: "var(--accent)" },
              }}
              id="attending-number-label"
            >
              Antal
            </InputLabel>
            <Select
              labelId="attending-number-label"
              id="attending-number"
              value={numberOfGuests}
              label="Antal"
              onChange={(e) =>
                handleNumberOfGuestsChange(e as SelectChangeEvent)
              }
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
            </Select>
          </FormControl>
        </>
      )}
      {attending === "no" && (
        <div className="flex items-center flex-col">
          <div className="flex gap-4">
            <Label htmlFor="">Namn</Label>
            <TextInput name="name" />
          </div>
        </div>
      )}

      {attending === "yes" &&
        typeof numberOfGuests === "number" &&
        numberOfGuests > 0 && (
          <>
            <h2>Underbart! Då behöver vi lite info om sällskapet.</h2>
            {guestArray.map((_, index) => (
              <AttendingInfo key={`guest-rsvp-${index}`} index={index} />
            ))}
          </>
        )}

      {errorMessage && (
        <p className="text-center font-roboto">{errorMessage}</p>
      )}

      {((attending === "yes" &&
        typeof numberOfGuests === "number" &&
        numberOfGuests > 0) ||
        attending === "no") && <Button type="submit">Skicka</Button>}
    </form>
  );
};
