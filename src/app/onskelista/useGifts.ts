const giftApiUrl = process.env.NEXT_PUBLIC_GIFT_API_URL ?? "";

type Gift = {
  name: string;
  taken: boolean;
  description?: string;
  guestId?: string;
  link?: string;
};

export const useGifts = async (): Promise<Gift[]> => {
  const data = await fetch(giftApiUrl);
  const res = await data.json();

  return res.gifts ?? [];
};
