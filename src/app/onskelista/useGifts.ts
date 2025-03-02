const giftApiUrl = process.env.GIFT_API_URL ?? "";

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
