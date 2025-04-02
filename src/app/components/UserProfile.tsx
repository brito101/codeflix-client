"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export const UserProfile = () => (
  <div className="relative">
    <div className="flex cursor-pointer items-center space-x-2">
      <Image
        width={30}
        height={30}
        src="/profile.png"
        alt="Profile"
        className="cursor-pointer rounded"
      />
      <ChevronDownIcon className="h-5 font-bold text-white" />
    </div>

    <div
      className="absolute right-0 top-10 mt-2 flex w-40 flex-col rounded border border-gray-800
         bg-black  text-gray-800 shadow-md"
    >
      <div className="flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white">
        <Image
          width={30}
          height={30}
          src="/profile.png"
          alt="Profile"
          className="rounded"
        />

        <div className="flex flex-col">
          <span className="text-xs text-white">Iron man</span>
          <span className="text-xs text-red-500">Lukas</span>
        </div>
      </div>
      <div className="flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white">
        <Image
          width={30}
          height={30}
          src="/kids_profile.png"
          alt="Kids"
          className="rounded"
        />

        <div className="flex flex-col">
          <span className="text-xs text-white">Baby Shark</span>
          <span className="text-xs text-red-500">Caspin</span>
        </div>
      </div>

      <div className="flex cursor-pointer items-center gap-x-4 px-4 py-2 hover:bg-gray-800 hover:text-white">
        <div className="flex flex-col">
          <span className="text-xs text-white">Logout</span>
        </div>
      </div>
    </div>
  </div>
);
