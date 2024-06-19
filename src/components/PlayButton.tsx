import * as React from "react";
import { useRouter } from "next/router";
import { PlayIcon } from "@radix-ui/react-icons";

export function PlayButton({ movieId }: { movieId: string }) {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push(`/watch/${movieId}`)}
      className="bg-white rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-neutral-300 transition cursor-pointer"
    >
      <PlayIcon className="mr-1 h-[25px] w-[25px]" />
      Play
    </button>
  );
}
