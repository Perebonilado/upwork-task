import { ImageInfoResponse } from "../types/ImagesInfo";

export const formatCardDate = (
  date: string
): { date: string; month: string } => {
  const stringArr = date.split("-");
  return { date: stringArr[0], month: stringArr[1] };
};

export const generateRandomInteger = ({
  start,
  stop,
}: {
  start: number;
  stop: number;
}): number => {
  const result = Math.floor(Math.random() * stop + (start + 1));
  return result;
};

export const getUniqueAccMgtLead = (
  data: ImageInfoResponse[]
): { title: string; isActive: boolean }[] => {
  const mgtLeadArr = data.map((item) => {
    return item["Account Management Lead"];
  });

  const uniqueSet = new Set(mgtLeadArr);
  const formattedArr = Array.from(uniqueSet).map((item) => {
    return { title: item, isActive: false };
  });

  return [{ title: "All", isActive: true }, ...formattedArr]
};
