"use client";

import { FormEventHandler, useState } from "react";
import { useIsAdmin } from "../hooks/useIsAdmin";

const SUPER_SECRET_PASSWORD = "mummaochbo";

export default function Admin() {
  const [error, setError] = useState("");
  const isAdmin = useIsAdmin();

  const loginAdmin = () => {
    const now = new Date();
    const time = now.getTime();
    const expireTime = time + 1000 * 60 * 60 * 24 * 365; // one year
    now.setTime(expireTime);
    document.cookie = `admin=bomumma;path=/;expires=${now.toUTCString()}`;

    window.location.reload();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);

    const password = formData.get("password");

    if (password === SUPER_SECRET_PASSWORD) {
      loginAdmin();
      setError("");
    } else {
      setError("Fel lösenord");
    }
  };
  return (
    <div className="flex flex-col items-center pt-20 justify-center h-full">
      <form onSubmit={handleSubmit}>
        <h1 className="font-fave text-[clamp(4rem,2.404rem+5.106vw,7rem)]">
          Admin
        </h1>
        <div className="w-48 flex flex-col items-center">
          {error && <p className="text-red-500">{error}</p>}
          {!isAdmin ? (
            <div>
              <input
                className="rounded-full w-48 p-2 px-6 text-4xl"
                type="password"
                name="password"
                id="password"
              />
              <button
                type="submit"
                className="rounded-full bg-accent w-full text-white p-2 px-6 mt-4 text-4xl flex justify-center"
              >
                Log in
              </button>
            </div>
          ) : (
            <p className="text-4xl">Logged in</p>
          )}
        </div>
      </form>
    </div>
  );
}
