import { useParams } from "next/navigation";

export const useUserParams = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error("id should exist in URL");
  }

  return id;
};
