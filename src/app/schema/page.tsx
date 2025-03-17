import { SparklingWine } from "../components/SparklingWine";

const ListItem = ({ time, info }: { time: string; info: string }) => {
  return (
    <li className="grid grid-cols-2">
      <span className="">{time}</span> - {info}
    </li>
  );
};

export default function WishList() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center flex-col">
        <h1>Dagens Schema</h1>
        <img src="/line.svg" alt="divider" className="w-24 mb-4" />
        <ul className="text-4xl flex flex-col mt-6 gap-4">
          <ListItem
            time="14:30"
            info="Trädgårdsmingel på Gathenheimska Huset"
          />
          <ListItem time="15:00" info="Vigsel" />
          <ListItem time="" info="Bubbel och snacks och mer mingel" />
          <ListItem
            time="ca 16:30"
            info="Dags att bege sig mot Taverna Efessos - en promenad på ca 800m eller två hållplatser med spårvagnen."
          />
          <ListItem time="17:00" info="Middag på Taverna Efessos" />
          <ListItem time="00:00" info="Efterfest på Efessos" />
          <ListItem time="01:00" info="Efesson stänger" />
        </ul>
      </div>
      <div>
        <SparklingWine className="w-40" />
      </div>
    </div>
  );
}
