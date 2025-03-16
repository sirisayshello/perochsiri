import Link from "next/link";
import { FlowerPot } from "../components/FlowerPot";
import { LocationInfo } from "./LocationInfo";

export default function Information() {
  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex flex-col items-center max-w-[500px]">
        <h1>Information</h1>
        <img src="/line.svg" alt="divider" className="w-24 mb-4" />
        <div className="flex flex-col gap-4 items-center">
          <div className="mt-6">
            <h2>Plats</h2>
            <p className="font-roboto">
              Vigseln kommer att hållas utomhus i Gathenhielmska husets
              trädgård. Vid dåligt väder håller vi cermonin inomhus. Middag och
              fest kommer att vara på Taverna Efessos i Majorna. Mellan vigsel
              och middag kommer man att ta sig till Efessos på egen hand,
              antingen till fots (en promenad på ca 800m) eller med spårvagn.
            </p>
            <LocationInfo />
          </div>

          <div className="mt-6 w-full">
            <h2>Klädsel</h2>
            <p className="font-roboto">Kom sommarfina!</p>
          </div>
          <div className="mt-6">
            <h2>Presenter</h2>
            <p className="font-roboto">
              Presenter är inte nödvändigt, men för dem som vill införskaffa
              något finner ni lite tips{" "}
              <Link className="underline" href="/onskelista">
                här
              </Link>
              .
            </p>
          </div>
          <div className="mt-6 w-full">
            <h2>Övrigt</h2>
            <p className="font-roboto">
              Undrar ni över något är det bara att höra av er till Siri
              0707124004 eller Per 0737412421.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end w-full">
        <FlowerPot className="w-40" />
      </div>
    </div>
  );
}
