import React from "react";

export default function Footer() {
  return (
    <footer className=" flex flex-row justify-between items-center p-2 bg-blue-300 dark:bg-blue-800 sticky bottom-0">
      <div className="flex flex-row gap-2">
        <h4>Useful Links:</h4>
        <div className="flex flex-row gap-2">
          {["Certificates", "Skills", "Projects", "Timeline"].map((v) => (
            <a key={v} href={`#${v}`}>
              {v}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
