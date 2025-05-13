import Link from "next/link";
import { FlowerPot } from "../components/FlowerPot";
import { LocationInfo } from "./LocationInfo";
import { Line } from "../components/Line";

export default function Information() {
  return (
    <div className="flex flex-col items-center h-full justify-between pt-4">
      <div className="flex flex-col items-center max-w-[500px]">
        <h1>Information</h1>
        <Line />
        <div className="flex flex-col gap-4 items-center">
          <div className="mt-6">
            <h2>Plats</h2>
            <p className="font-roboto">
              Vigseln kommer att hållas utomhus i Gathenhielmska husets
              trädgård. Vid dåligt väder håller vi istället cermonin inomhus.
              Middag och fest kommer att vara på Taverna Efessos i Majorna.
              Mellan vigsel och middag tar man sig på egen hand till Efessos,
              antingen till fots (en promenad på ca 800m) eller med spårvagn.
            </p>
            <LocationInfo />
          </div>

          <div className="mt-6 w-full">
            <h2>Klädsel</h2>
            <p className="font-roboto">Kom sommarfina!</p>
          </div>
          <div className="mt-6 w-full">
            <h2>Toastmaster</h2>
            <p className="font-roboto">
              Som toastmaster för kvällen står vår fantastiska vän Teo. Han
              kommer ha koll på dagens schema, vart vi ska och när vi ska. Vill
              ni hålla tal eller annat kul är det honom ni kontaktar, anmäl
              gärna ert tal senast 31/5. För att vi ska hinna med allt ätande
              och skålande under dagen bör ett tal vara max 3 minuter långt.
            </p>
            <p className="font-roboto mt-6 mb-2">Kontakta Teo på</p>
            <a
              className="underline font-roboto uppercase text-sm"
              href="tel:0702240757"
            >
              0702240757
            </a>
            <br />
            <a
              className="underline font-roboto uppercase text-sm"
              href="mailto:teo.kristjansson@gmail.com"
            >
              teo.kristjansson@gmail.com
            </a>
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
              0707124004, Per 0737412421 eller toastmaster Teo 0702240757.
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
