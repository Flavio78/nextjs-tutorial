import { Dashboard } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setIsLoading(true);
    fetch('http://localhost:4000/dashboard', { signal: signal })
      .then((response) => response.json())
      .then((data) => {
        setDashboardData(data);
        setIsLoading(false);
      })
      .catch((err: Error) => {
        if (err.name === 'AbortError') {
          console.log('successfully aborted');
        } else {
          // handle error
        }
      });
    return () => {
      // cancel the request before component unmounts
      controller.abort();
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
