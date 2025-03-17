import { Line } from "../components/Line";
import { SparklingWine } from "../components/SparklingWine";

const ListItem = ({ time, info }: { time: string; info: string }) => {
  return (
    <li className="grid grid-cols-[65px,20px,1fr]">
      <span >{time}</span> <span>-</span>
      <span className="leading-[1]">
        {info}
      </span>
    </li>
  );
};

export default function Schedule() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex items-center flex-col">
        <h1>Dagens Schema</h1>
        <Line />
        <ul className="text-4xl flex flex-col mt-6 gap-4 max-w-[500px]">
          <ListItem time="15:00" info="Vigsel, Gathenheilmska Huset" />
          <ListItem time="" info="Bubbel, snacks och trädgårdsmingel" />
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
