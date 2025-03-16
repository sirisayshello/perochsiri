const giftApiUrl = "https://baltzar-wedding.web.val.run";

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
