import { FlowerPot } from "../components/FlowerPot";

export default function WishList() {
  return (
    <div className="flex flex-col items-center h-full justify-between">
      <div className="flex gap-4 md:gap-8 lg:gap-20 items-center">
        <h1>Information</h1>
      </div>
      <div className="flex justify-end w-full">
        <FlowerPot className="w-40" />
      </div>
    </div>
  );
}
