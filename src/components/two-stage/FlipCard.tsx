"use client";

import { BiInfoCircle, BiX } from "react-icons/bi";
import { useState } from "react";

export default function FlipCard({
  front,
  back,
}: {
  front: React.ReactNode;
  back: React.ReactNode;
}) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="perspective-1000 aspect-square w-full">
      <div
        className="relative h-full w-full transform transition-transform duration-500"
        style={{
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          transformStyle: "preserve-3d",
          transitionTimingFunction: "cubic-bezier(0.64, 0.57, 0.67, 1.53)",
        }}
      >
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFlipped(true);
          }}
          className={`absolute left-4 top-4 z-10 rounded-full text-black duration-500 ${flipped ? "invisible opacity-0" : "visible opacity-100"}`}
        >
          <BiInfoCircle size={32} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setFlipped(false);
          }}
          className={`absolute right-4 top-4 z-10 rounded-full text-black duration-500 ${!flipped ? "invisible opacity-0" : "visible opacity-100"}`}
        >
          <BiX size={32} />
        </button>
        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-lg bg-slate-200 shadow-lg"
          style={{
            transform: "rotateY(0deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {front}
        </div>

        <div
          className="absolute inset-0 h-full w-full overflow-hidden rounded-lg bg-slate-200 shadow-lg"
          style={{
            transform: "rotateY(180deg)",
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
