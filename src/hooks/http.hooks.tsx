import { useCallback, useState } from "react";

/*export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = useCallback(
    async (url: RequestInfo, method = "GET", body = "", headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
        }

        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "что то пошло не так ");
        }
        setLoading(false);

        return data;
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = () => setError(null);

  return { loading, request, error, clearError };
};
*/
