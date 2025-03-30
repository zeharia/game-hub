import apiClient from "@/components/services/api-client";
import { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Genres{
    id:number;
    name:string;
}
interface FetchGenresResponse{
    count:number;
    results:Genres[];
}
const useGenres=()=>{
    const [genres, setGenres] = useState<Genres[]>([]);
      const [error, setError] = useState("");
      const [isLoading, setisLoading] = useState(false);
      useEffect(() => {
        const controller = new AbortController();
        setisLoading(true);
        apiClient
          .get<FetchGenresResponse>("/genres", { signal: controller.signal })
          .then((res) => {
            setGenres(res.data.results);
            setisLoading(false);
          })
          .catch((err) => {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setisLoading(false);
          });
        return () => controller.abort();
      }, []);
    
      return { genres, error,isLoading };
}
export default useGenres;