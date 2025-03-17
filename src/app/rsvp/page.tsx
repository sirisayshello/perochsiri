import { Line } from "../components/Line";
import { GuestForm } from "./GuestForm";

export default function RSVP() {
  return (
    <div className="flex flex-col items-center h-full">
      <h1>OSA</h1>
      <Line />
      <GuestForm />
    </div>
  );
}
