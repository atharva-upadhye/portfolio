import React from "react";

interface SocialHandlesProps {
  handles: { title: string; link: string; hoverText?: string }[];
}
function SocialHandles(props: SocialHandlesProps) {
  return (
    <div className=" my-4">
      Social handles
      <div className="flex flex-row gap-2 ml-2">
        {props.handles.map((h, i) => (
          <div className="group flex relative">
            <a
              target="_blank"
              key={i}
              className="text-blue-500 hover:text-blue-800"
              href={h.link}
            >
              {h.title}
            </a>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute translate-y-full opacity-0 m-1 mx-auto text-nowrap p-1 whitespace-nowrap">
              {h.hoverText}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SocialHandles;
