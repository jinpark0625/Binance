import axiosClient from "./axiosClient";

export const getSymbols = async (limit: number = 20) => {
  const response = await axiosClient.get("/api/v3/ticker/price");

  const allSymbols = response.data;

  const limitedCoins = allSymbols.slice(0, limit);

  return limitedCoins;
};
