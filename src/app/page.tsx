import { Bottle } from "./components/bottle";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-full justify-center">
      <div className="flex gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
        <Bottle rotation={40} dragRotation={110} />
        <h1 className="font-fave text-[clamp(4rem,2.404rem+5.106vw,7rem)]">
          Siri & Per
        </h1>
        <Bottle rotation={-40} dragRotation={-110} />
      </div>
      <p className="font-foxrights text-5xl px-4 text-center mt-10">
        Välkomna på vårt bröllop den 7:e juni i Gbg
      </p>
    </div>
  );
}
