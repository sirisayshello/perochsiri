import { GuestForm } from "./GuestForm";

export default function RSVP() {
  return (
    <div className="flex flex-col items-center h-full">
      <h1>OSA</h1>
      <img src="/line.svg" alt="divider" className="w-24 mb-4" />
      <GuestForm />
    </div>
  );
}
