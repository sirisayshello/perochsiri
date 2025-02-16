export default function WishList() {
  return (
    <div className="flex items-center flex-col">
      <h1 className="font-fave text-[clamp(4rem,2.404rem+5.106vw,7rem)]">
        Dagens Schema
      </h1>
      <ul className="text-4xl flex flex-col mt-8 gap-4">
        <li>14:00 - Trädgårdsmingel på Gathenheimska Villan</li>
        <li>15:00 - Vigsel</li>
        <li>17:00 - Middag på Efessos, Chapmans Torg</li>
        <li>00:00 - Efterfest på Efessos</li>
        <li>01:00 - Efessos stänger</li>
      </ul>
    </div>
  );
}
