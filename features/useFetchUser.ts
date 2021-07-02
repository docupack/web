import { useEffect, useState } from "react";
import { Auth } from "aws-amplify";
import { AuthUser } from "./auth/utils/user-context";

export const fetchUser = async (auth: typeof Auth) => {
  return await auth.currentAuthenticatedUser();
};

export const useFetchUser = (): [
  AuthUser,
  { error: Error | null; loading: boolean }
] => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const asyncEffect = async () => {
    setLoading(true);
    try {
      const u = await fetchUser(Auth);
      setUser(u);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  useEffect(() => {
    asyncEffect();
  }, []);

  return [user, { loading, error }];
};
