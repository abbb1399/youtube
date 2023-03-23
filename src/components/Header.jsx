import React from "react";

export default function Header() {
  return (
    <header className="p-8 flex">
      <span>Youtube</span>
      <input type="text" placeholder="Search" />
      <button className="rounded bg-sky-500">버튼</button>
    </header>
  );
}
