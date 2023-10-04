import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useFetch = (url) => {
  const { data, error, isLoading } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    refreshInterval: 1000 * 60 * 60,
  });
  return {
    data,
    error,
    isLoading,
  };
};
