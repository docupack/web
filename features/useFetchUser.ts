import React, { Dispatch, useEffect, useState } from "react";
import { Auth } from "aws-amplify";

export interface AuthUser {
  username: string;
  attributes: {
    email: string;
  };
}

export const useFetchUser = (): [
  AuthUser,
  Dispatch<React.SetStateAction<AuthUser>>,
  { error: Error | null; loading: boolean }
] => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const asyncEffect = async () => {
      try {
        const u = await Auth.currentAuthenticatedUser();
        setUser(u);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    };
    asyncEffect();
  }, []);

  return [user, setUser, { loading, error }];
};
