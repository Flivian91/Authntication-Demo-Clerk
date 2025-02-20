import React from "react";
import Image from "next/image";
import {
  SignInButton,
  UserButton,
  SignedIn,
  SignedOut,
  SignOutButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";

const Navigation = async () => {
  const { imageUrl } = await currentUser();
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 text-black">
      <div className="flex items-center">
        <Image
          src="/next.svg"
          alt="Logo"
          width={100}
          height={100}
          className="h-10"
        />
      </div>
      <div className="flex items-center gap-2">
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <Link role="button" href={"/user-profile"} className="h-10 w-10 flex items-center justify-center bg-gray-200 rounded-full">
            <img
              src={imageUrl}
              alt="User image"
              className="object-fill h-8 w-8 rounded-full"
            />
          </Link>
          <SignOutButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navigation;
