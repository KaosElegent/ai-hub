import React, { useState, useEffect, createContext, useContext, ReactElement, ReactNode } from "react";
import {
  ChevronFirst,
  ChevronLast,
  User,
  MoreVertical,
  Brain,
} from "lucide-react";
import "../globals.css";

const SidebarContext = createContext({});

export default function Sidebar({ children }: any) {
  // since 'window' is client-side and using it for tailwind with templates
  // was executing the code server-side. Hence by using states we ensure it doesn't
  // cause server-side errors
  const [route, setRoute] = useState("");
  const [expanded, setExpanded] = useState(true);

  useEffect(() => {
    setRoute(window.location.pathname);
  }, []);

  return (
    <aside className="h-full bg-[#292e31]">
      <nav className="h-full flex flex-col border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <div className={`${expanded ? "w-32" : "invisible w-0"}`}>
            <Brain color="white" />
          </div>

          <button
            onClick={() => setExpanded((curr) => !curr)}
            className={`${expanded ? "pr-0" : "pr-2"}`}
          >
            {expanded ? (
              <ChevronFirst color="white" />
            ) : (
              <ChevronLast color="white" />
            )}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-2 ">
          <div className="p-2 ml-3">
            <User color="white" />
          </div>

          <div
            className={`flex justify-between items-center overflow-hidden transition-all ${
              expanded ? "w-52 ml-3" : "w-0"
            }`}
          >
            <div className="leading-3">
              <h6 className="font-semibold text-white">John Doe</h6>
              <span className="text-xs text-gray-400">johndoe@myseneca.ca</span>
            </div>
          </div>
          <div className={` overflow-hidden transition-all ${
              expanded ? "pt-2" : "invisible w-0"
            }`}>
            <MoreVertical color="white" size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  icon: ReactElement;
  text: string;
  link: string;
}

export function SidebarItem({ icon, text, link }: SidebarItemProps) {
  const expanded = useContext(SidebarContext);
  const [route, setRoute] = useState("");

  useEffect(() => {
    setRoute(window.location.pathname);
  }, []);

  const handleClick = () => {
    window.location.pathname = link;
  };

  return (
    <li
      onClick={handleClick}
      className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer 
      transition-colors group 
      ${
        route == link
          ? "bg-[#373d42] text-white"
          : "hover:bg-[#31363a] text-gray-600"
      }`}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        } text-white`}
      >
        {text}
      </span>

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-[#000000] text-[#ffffff] text-sm
          invisible opacity-20 -translate-x-1 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-3
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}

{
  /* <div className="h-full w-64 bg-[#2F4050]">
<ul className="h-auto p-0 w-full">
  {SidebarData.map((row, key) => {
    return (
      <li
        key={key}
        onClick={() => {
          window.location.pathname = row.link;
      }}
      className={`w-full h-16 m-0 flex flex-row justify-center items-center text-slate-300 hover:cursor-pointer hover:bg-[#293846] ${route == row.link ? "bg-[#293846]" : ""}`}
      >
        <div className="flex-[30%] grid place-items-center">{row.icon}</div>
        <div className="flex-[70%]">{row.title}</div>
      </li>
    );
  })}
</ul>
</div> */
}
