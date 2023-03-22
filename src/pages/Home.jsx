import React from "react";
import { useQueryClient, useQuery } from "@tanstack/react-query";

export default function Home() {
  const client = useQueryClient();
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

  return (
    <ul>
      {/* {videos.items.map((item) => (
        <li>
          <span>{item.snippet.title}</span>
        </li>
      ))} */}
    </ul>
  );
}
