import { useState, useEffect } from 'react';

interface ApiResponse {
  count: number;
  items: any[]; // Replace 'any' with the specific type of your items
  limit: number;
  offset: number;
  total: number;
}

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer secret_RPeYiUw1Lw1HsHQVRFghF6hcA3W7SHWF',
  },
};

const useFetchApiData = (
  url: string
): { data: ApiResponse, loading: boolean, error: string | null } => {
  const [data, setData] = useState<ApiResponse>({
    count: 0,
    items: [],
    limit: 0,
    offset: 0,
    total: 0,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        setData(responseData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('An error occurred while fetching data.');
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchApiData;
