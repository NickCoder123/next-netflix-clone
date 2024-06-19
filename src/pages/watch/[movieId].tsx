import * as React from "react";
import { useRouter } from "next/router";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import useMovie from "~/hooks/useMovie";

const WatchPage = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { data } = useMovie(movieId as string);

  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70">
        <ArrowLeftIcon
          onClick={() => router.push("/")}
          className="text-white cursor-pointer h-[40px] w-[40px]"
        />
        <p className="text-white text-xl md:text-3xl font-bold">
          <span className="font-light">Watching:&nbsp;</span>
          {data?.title}
        </p>
      </nav>
      <video
        src={data?.videoUrl}
        autoPlay
        controls
        className="h-full w-full"
      ></video>
    </div>
  );
};

export default WatchPage;
