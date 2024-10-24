import { useState, useCallback } from 'react';

export const useUserRole = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleRole = useCallback(() => {
    setIsAdmin((prev) => !prev);
  }, []);

  return {
    isAdmin,
    toggleRole,
  };
};
