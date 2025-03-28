import { Bottle } from "./components/bottle";
import { Line } from "./components/Line";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-40 justify-start h-full">
      <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        <Bottle rotation={40} dragRotation={110} />
        <h1>Siri & Per</h1>
        <Bottle rotation={-40} dragRotation={-110} />
      </div>
      <Line />
      <p className="font-foxrights text-5xl px-4 text-center mt-10">
        Välkomna på vårt bröllop den 7:e juni i Gbg
      </p>
    </div>
  );
}
