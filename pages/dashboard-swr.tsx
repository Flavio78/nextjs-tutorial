import { Dashboard } from '@/types';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import useSWR from 'swr';

const fetcher = async (
  url: string,
  signal: AbortSignal
): Promise<Dashboard | undefined> => {
  try {
    const res = await fetch(url, { signal });
    if (!res.ok) throw new Error('An error occurred while fetching the data.');
    return res.json();
  } catch (error: any) {
    if (error.name !== 'AbortError') {
      throw new Error(error);
    }
  }
};

const DashboardSWRPage = () => {
  const controller = useMemo(() => new AbortController(), []);
  const [isMounted, setIsMounted] = useState(false);
  const {
    data: dashboardData,
    error,
    isLoading,
  } = useSWR<Dashboard | undefined>('http://localhost:4000/dashboard', (url) =>
    fetcher(url, controller.signal)
  );
  useEffect(() => {
    setIsMounted(true);
    return () => {
      if (isLoading && isMounted) {
        controller.abort();
        setIsMounted(false);
      }
    };
  }, [controller, isLoading, isMounted]);
  if (error) console.error(error);
  return (
    <div>
      <Link href="/">Back to home</Link>
      <h2>Dashboard Page with SWR</h2>
      {error ? (
        <h2>An error occurred</h2>
      ) : isLoading || !dashboardData ? (
        <h2>Loading ...</h2>
      ) : (
        <div>
          <h2>Posts - {dashboardData!.posts}</h2>
          <h2>Likes - {dashboardData!.likes}</h2>
          <h2>Followers - {dashboardData!.followers}</h2>
          <h2>Following - {dashboardData!.following}</h2>
        </div>
      )}
    </div>
  );
};

export default DashboardSWRPage;
