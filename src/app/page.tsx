import { Bottle } from "./components/bottle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="font-foxrights">foxrights</h1>
      <h1 className="font-fave">Fave</h1>
      <Bottle />
    </div>
  );
}
