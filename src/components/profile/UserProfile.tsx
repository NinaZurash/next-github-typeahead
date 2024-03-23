"use client";

import { useGithubUser } from "@/providers/GithubProvider";
import { useUserParams } from "@/utils/useUserParams";
import UserInfo from "./UserInfo";

export default function UserProfile() {
  const id = useUserParams();
  const { users } = useGithubUser();

  const user = users?.find((user) => user.id === Number(id));

  if (!user) {
    return <div className="text-white">User Not Found</div>;
  }

  return <UserInfo user={user} />;
}
