import { Line } from "../components/Line";
import { GuestForm } from "./GuestForm";

const RSVP_ENABLED = false;

export default function RSVP() {
  return (
    <div className="flex flex-col items-center h-full">
      <h1>OSA</h1>
      <Line />
      {!RSVP_ENABLED && (
        <h2 className="text-5xl mt-4">Kommer jättejättesnart!</h2>
      )}
      {RSVP_ENABLED && <GuestForm />}
    </div>
  );
}
