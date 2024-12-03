import { getSymbols } from "@/api/binance";
import { useQuery } from "@tanstack/react-query";

const useBinance = () => {
  const useGetSymbols = (limit: number = 20) => {
    const symbolQuery = useQuery({
      queryKey: ["symbols"],
      queryFn: () => getSymbols(limit),
    });

    return [symbolQuery.data, symbolQuery.isLoading, symbolQuery.isError];
  };

  return { useGetSymbols };
};

export default useBinance;
