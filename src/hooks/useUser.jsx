import { useState, useEffect } from 'react';
import { apiService } from '../services/api';

export const useUser = (userId = 1) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const userData = await apiService.fetchUser(userId);
      setUser(userData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, refetch: fetchUser };
};