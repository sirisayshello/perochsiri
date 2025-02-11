import { Bottle } from "./components/bottle";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-dvh w-screen p-8">
      <div className="flex gap-20 items-center">
        <Bottle rotation={40} />
        <h1 className="font-fave text-8xl">Siri & Per</h1>
        <Bottle rotation={-40} />
      </div>
      <p className="font-foxrights text-5xl">
        Välkomna till bröllop den 7:e juni i Gbg
      </p>
    </div>
  );
}
