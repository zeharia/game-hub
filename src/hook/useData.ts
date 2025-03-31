import apiClient from "@/components/services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { useEffect, useState } from "react";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData =<T>(endPoint:string,requestConfig?:AxiosRequestConfig,deps?:any[]) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setisLoading(true);
    apiClient
      .get<FetchResponse<T>>(endPoint, { signal: controller.signal,...requestConfig })
      .then((res) => {
        setData(res.data.results);
        setisLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setisLoading(false);
      });
    return () => controller.abort();
  }, deps ? [...deps]:[]);

  return { data, error,isLoading };
};
export default useData;
