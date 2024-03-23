"use client";

import { SearchX } from "lucide-react";

import { GithubUser } from "@/service/types";
import UserCard from "./UserCard";
import { useGithubUser } from "@/providers/GithubProvider";
import Spinner from "../shared/Spinner";

export default function UserSearchResult() {
  const { users, usersLimit, isPending } = useGithubUser();

  let content;
  if (users == undefined) return <></>;
  if (users.length > 0) {
    content = users
      .slice(0, parseInt(usersLimit))
      .map((item: GithubUser) => <UserCard key={item.id} data={item} />);
  } else {
    content = (
      <div className="flex gap-2">
        <h1>No results found... </h1>
        <SearchX />
      </div>
    );
  }

  return (
    <>
      {isPending ? (
        <Spinner />
      ) : (
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-400">
          {content}
        </div>
      )}
    </>
  );
}
