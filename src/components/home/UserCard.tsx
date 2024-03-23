"use client";

import { GithubUser } from "@/service/types";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Link from "next/link";
import Image from "next/image";

type Props = {
  data: GithubUser;
};

export default function UserCard({ data }: Props) {
  return (
    <Link href={`/user/${data.id}`}>
      <BackgroundGradient className="max-w-sm space-y-3 rounded-[22px] bg-zinc-900 p-4 sm:p-10">
        <Image
          className="block size-36 rounded-full object-contain p-1"
          src={data.avatar_url}
          alt="Avatar"
          width={144}
          height={144}
        />

        <p className="text-center text-base text-neutral-200 sm:text-xl">
          ID : {data.id}
        </p>
      </BackgroundGradient>
    </Link>
  );
}
