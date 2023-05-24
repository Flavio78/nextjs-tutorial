import { Dashboard } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/*
    check with these links of avoid abort
    https://domtech.hashnode.dev/how-to-avoid-memory-leaks-in-react
    https://wanago.io/2022/04/11/abort-controller-race-conditions-react/
*/

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);
  useEffect(() => {
    const abortController = new AbortController();
    setIsLoading(true);
    fetch('http://localhost:4000/dashboard', { signal: abortController.signal })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then((data: Dashboard) => {
        setDashboardData(data);
      })
      .catch((err: Error) => {
        if (abortController.signal.aborted) {
          console.log('The user aborted the request');
        } else {
          console.error('The request failed');
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
    return () => {
      // cancel the request before component unmounts
      abortController.abort();
    };
  }, []);

  return (
    <div>
      <Link href="/">Back to home</Link>
      <h2>Dashboard Page</h2>
      {isLoading || !dashboardData ? (
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

export default Dashboard;
