import { Line } from "../components/Line";
import { GuestForm } from "./GuestForm";

const RSVP_ENABLED = true;

export default function RSVP() {
  return (
    <div className="flex flex-col items-center h-full pt-4">
      <h1>OSA</h1>
      <Line />
      {!RSVP_ENABLED && (
        <h2 className="text-5xl mt-4">Kommer jättejättesnart!</h2>
      )}
      {RSVP_ENABLED && <GuestForm />}
    </div>
  );
}
