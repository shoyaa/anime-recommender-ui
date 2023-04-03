import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { UserCircleIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
// The approach used in this component shows how to build a sign in and sign out
// component that works on pages which support both client and server side
// rendering, and avoids any flash incorrect content on initial page load.
export default function LoginButton() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <li className={`${!session && loading ? "hidden" : "block"}`}>
      {!session && (
        <div
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}
          className={`flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          <UserCircleIcon className="h-7 w-7 md:h-6 md:w-6 md:mr-1" />
          <span className="hidden md:block"> Login</span>
        </div>
      )}
      {session?.user && (
        <div
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
          className={`flex items-center hover:bg-gray-300 dark:hover:bg-gray-900  w-max py-2 md:pl-2 p-2 md:pr-6 rounded-full cursor-pointer`}
        >
          {session.user.image && (
            <Image
              width={28}
              height={28}
              src={session.user.image}
              alt="user image"
              className="rounded-full mr-1 object-cover"
            />
          )}
          <span className="hidden md:block">Logout</span>
        </div>
      )}
    </li>
  );
}
