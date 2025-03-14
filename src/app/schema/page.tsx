import { SparklingWine } from "../components/SparklingWine";

export default function WishList() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center flex-col">
        <h1>Dagens Schema</h1>
        <img src="/line.svg" alt="divider" className="w-24 mb-4" />
        <ul className="text-4xl flex flex-col mt-6 gap-4">
          <li>14:30 - Trädgårdsmingel på Gathenheimska Huset</li>
          <li>15:00 - Vigsel</li>
          <li>- Bubbel och snacks och mer mingel -</li>
          <li>
            ca 16:30 - Dags att bege sig mot Taverna Efessos - en promenad på ca
            800m eller två hållplatser med spårvagnen.
          </li>
          <li>17:00 - Middag på Efessos</li>
          <li>00:00 - Efterfest på Efessos</li>
          <li>01:00 - Efessos stänger</li>
        </ul>
      </div>
      <div>
        <SparklingWine className="w-40" />
      </div>
    </div>
  );
}
