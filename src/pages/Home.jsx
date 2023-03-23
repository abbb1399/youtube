import React from "react";
import { useQuery } from "@tanstack/react-query";
import { format, register } from "timeago.js";
import koLocale from "timeago.js/lib/lang/ko";
register("ko", koLocale);

export default function Home() {
  // const client = useQueryClient();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos"], async () => {
    return fetch(`data/videos.json`).then((res) => res.json());
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  console.log(videos);
  const { items } = videos;

  return (
    <ul className="flex flex-wrap">
      {items.map((item) => (
        <li className="basis-1/4" key={item.id.videoId + "key"}>
          <img src={item.snippet.thumbnails.default.url} alt="이미지" />
          <p>{item.snippet.title}</p>
          <p className="truncate ...">{item.snippet.channelTitle}</p>
          <p>{format(item.snippet.publishTime, "ko")}</p>
        </li>
      ))}
    </ul>
  );
}
