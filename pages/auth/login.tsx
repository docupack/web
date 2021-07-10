import { Auth } from "aws-amplify";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useUserContext } from "../../features/auth/utils/user-context";

const LoginPage = (): JSX.Element => {
  const [formState, updateFormState] = useState({ username: "", password: "" });
  const [error, setError] = useState<Error | null>(null);
  const router = useRouter();
  const user = useUserContext();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [router]);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    updateFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await signIn();
      location.href = "/";
    } catch (e) {
      setError(e);
    }
  };

  const signIn = async () => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({
      ...formState,
    }));
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Log in
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              Do not you have an account?{" "}
              <Link href="/auth/signup">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Sign up
                </a>
              </Link>
            </p>
          </div>
          {error && (
            <div className="mt-6">
              <p>{error}</p>
            </div>
          )}

          <div className="mt-8">
            <div className="mt-6">
              <form onSubmit={onFormSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      type="text"
                      autoComplete="text"
                      placeholder="iron-man"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      placeholder="super-secret-password"
                      type="password"
                      autoComplete="current-password"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Log in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default LoginPage;
