"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Gift } from "./Gift";

const giftApiUrl = "https://baltzar-wedding.web.val.run";

export type Gift = {
  name: string;
  taken: boolean;
  description?: string;
  guestId?: string;
  link?: string;
  canBeMany?: boolean;
};

export const getGifts = async () => {
  const data = await fetch(giftApiUrl);
  const res = await data.json();

  const gifts: Gift[] = res.gifts ?? [];

  return gifts;
};

type GiftFetchingStatus = "ready" | "loading" | "success" | "error";
type GiftContextType = {
  gifts: Gift[];
  updateGifts: (gifts: Gift[]) => void;
  status: GiftFetchingStatus;
};

const GiftContext = createContext<GiftContextType>({
  gifts: [],
  updateGifts: () => {},
  status: "ready",
});

export const GiftProvider = ({ children }: { children: ReactNode }) => {
  const [gifts, setGifts] = useState<Gift[]>([]);
  const [status, setStatus] = useState<GiftFetchingStatus>("ready");

  useEffect(() => {
    const fetchStuff = async () => {
      setStatus("loading");
      const gifts = await getGifts();

      updateGifts(gifts);
      setStatus("success");
    };

    if (gifts.length === 0 && status === "ready") {
      fetchStuff();
    }
  }, [status, gifts]);

  const updateGifts = async (updatedGifts: Gift[]) => {
    setGifts([...updatedGifts]);
  };

  return (
    <GiftContext.Provider value={{ gifts, updateGifts, status }}>
      {children}
    </GiftContext.Provider>
  );
};

export const useGifts = () => {
  const ctx = useContext(GiftContext);
  if (!ctx) {
    throw new Error("useGifts must be used within a GiftProvider");
  }
  return ctx;
};
