import { useState, useEffect } from 'react';

const useFetchData = (url: string) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const responseData = await response.json();
        console.log('responseData----', responseData);
        setData(responseData);
        setLoading(false);
      } catch (error) {
        // eslint-disable-next-line prettier/prettier
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};

export default useFetchData;
