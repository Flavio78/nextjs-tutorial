import { Dashboard } from '@/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';

/*
    check with these links of avoid abort
    https://domtech.hashnode.dev/how-to-avoid-memory-leaks-in-react
    https://wanago.io/2022/04/11/abort-controller-race-conditions-react/
*/

const DashboardPage = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [dashboardData, setDashboardData] = useState<Dashboard | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch('http://localhost:4000/dashboard');
      const data = (await response.json()) as Dashboard;
      setDashboardData(data);
      setIsLoading(false);
    };

    fetchDashboardData();
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

export default DashboardPage;
