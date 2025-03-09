import { H1 } from "../components/H1";
import { SparklingWine } from "../components/SparklingWine";

export default function WishList() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center flex-col">
        <H1>Dagens Schema</H1>
        <ul className="text-4xl flex flex-col mt-8 gap-4">
          <li>14:00 - Trädgårdsmingel på Gathenheimska Villan</li>
          <li>15:00 - Vigsel</li>
          <li>17:00 - Middag på Efessos, Chapmans Torg</li>
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
