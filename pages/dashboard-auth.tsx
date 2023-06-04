import { getSession, signIn } from 'next-auth/react';
import { useEffect, useState } from 'react';

const DashboardAuth = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        signIn('github');
      } else {
        setLoading(false);
      }
    };
    securePage();
    return () => {};
  }, []);
  if (loading) {
    return <h2>Loading ...</h2>;
  }
  return <h1>Dashboard Auth Page</h1>;
};

export default DashboardAuth;
