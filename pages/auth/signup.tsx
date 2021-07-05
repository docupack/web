import { Auth } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useUserContext } from "../../features/auth/utils/user-context";
import { useRouter } from "next/router";
import Link from "next/link";
import { changeURLto } from "../../utils/changeURLto";

const RegisterPage = () => {
  const user = useUserContext();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.replace("/");
    }
  }, [user, router]);

  const initialFormState = {
    username: "",
    password: "",
    email: "",
  };
  const [formState, updateFormState] = useState(initialFormState);
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    updateFormState(() => ({
      ...formState,
      [event.target.name]: event.target.value,
    }));
  };
  const [error, setError] = useState<Error | null>(null);
  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      await signUp();
      console.log("success");
      location.reload();
      await changeURLto(router, "/");
    } catch (e) {
      console.log(e);
      setError(e);
    }
  };

  async function signUp() {
    const { username, password, email } = formState;
    await Auth.signUp({ username, password, attributes: { email } });
    updateFormState(() => ({
      ...formState,
    }));
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Sign up
            </h2>
            <p className="mt-2 text-sm text-gray-600 max-w">
              Do you have an account?{" "}
              <Link href="/auth/login">
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  Login
                </a>
              </Link>
            </p>
          </div>
          {error && (
            <div className="mt-6">
              <p>{error.message}</p>
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
                      placeholder="batman"
                      required
                      onChange={onChange}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="super@hero.com"
                      autoComplete="email"
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

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Sign up
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

export default RegisterPage;
