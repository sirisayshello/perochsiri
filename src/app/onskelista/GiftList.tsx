'use client'

import { Spinner } from "../components/Spinner";
import { Gift } from "./Gift";
import { useGifts } from "./useGifts";

export const GiftList = () => {
    const { gifts, status } = useGifts();

    if (status === "loading") {
        return <Spinner />;
    }

    return <ul className="text-4xl flex flex-col mt-6 gap-4">
        {gifts.map((gift) => {
            return <Gift key={gift.name} {...gift} />;
        })}
    </ul>
}