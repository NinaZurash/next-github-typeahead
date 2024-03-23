"use client";

import { useGithubUser } from "@/providers/GithubProvider";
import Image from "next/image";

export default function GithubUsers() {
  const { users, isPending } = useGithubUser();

  return (
    <div>
      <h1>Product</h1>
      {isPending ? (
        <div>Loading...</div>
      ) : (
        <div>
          {users?.map((user) => (
            <div key={user.id}>
              <Image src={user.avatar_url} alt={user.login} />
              <a href={user.html_url}>{user.login}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
