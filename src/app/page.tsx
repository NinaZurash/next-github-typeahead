import { FancySearch } from "@/components/FancySearch";
import UserSearchResult from "@/components/home/UserSearchResult";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="flex min-h-screen w-full flex-1 flex-col items-center gap-20 rounded-md bg-neutral-950 ">
      <FancySearch />
      {/* <GithubUsers /> */}
      <UserSearchResult />
      {/* <BackgroundBeams />  */}
    </div>
  );
}
