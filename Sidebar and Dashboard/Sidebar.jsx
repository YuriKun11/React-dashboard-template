import {
    MoreVertical,
    ChevronLast,
    ChevronFirst,
    Home,
    BarChart2,
    Users,
    Package,
    ShoppingCart,
    CreditCard,
    Settings,
    HelpCircle,
  } from "lucide-react";
  import { useContext, createContext, useState } from "react";
  
  const SidebarContext = createContext();
  
  export default function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true);
  
    return (
      <aside
        className={`h-screen transition-all ${
          expanded ? "w-72" : "w-16"
        }`}
      >
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          <div className="p-4 pb-2 flex justify-between items-center">
            <img
              src="https://media.discordapp.net/attachments/1044532871534223360/1310191399672479835/Untitled-1-removebg-preview.png?ex=67445253&is=674300d3&hm=52458eb3dd59a36e7d53035b0a8fe88ee389e7bc65bcd2b2926fceb23e31fd08&=&format=webp&quality=lossless"
              className={`overflow-hidden transition-all ${
                expanded ? "w-32" : "w-0"
              }`}
              alt=""
            />
            <button
              onClick={() => setExpanded((curr) => !curr)}
              className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
            >
              {expanded ? <ChevronFirst /> : <ChevronLast />}
            </button>
          </div>
  
          <SidebarContext.Provider value={{ expanded }}>
            <ul className="flex-1 px-3 space-y-1">
              <SidebarItem icon={<Home size={20} />} text="Dashboard" active />
              <SidebarItem icon={<BarChart2 size={20} />} text="Statistics" />
              <SidebarItem icon={<Users size={20} />} text="Users" />
              <SidebarItem icon={<Package size={20} />} text="Inventory" />
              <SidebarItem icon={<ShoppingCart size={20} />} text="Orders" />
              <SidebarItem icon={<CreditCard size={20} />} text="Billings" />
              <SidebarItem icon={<Settings size={20} />} text="Settings" />
              <SidebarItem icon={<HelpCircle size={20} />} text="Help" />
            </ul>
          </SidebarContext.Provider>
  
          <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?name=YR&background=c7d2fe&color=3730a3&bold=true"
            alt="YR"
            className="w-10 h-10 rounded-md"
            />

            <div
              className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-72 ml-3" : "w-0"}
            `}
            >
              <div className="leading-4">
                <h4 className="font-semibold">Yuri Reyes</h4>
                <span className="text-xs text-gray-600">jyreyes1111@gmail.com</span>
              </div>
              <MoreVertical size={20} />
            </div>
          </div>
        </nav>
      </aside>
    );
  }
  
  export function SidebarItem({ icon, text, active, alert }) {
    const { expanded } = useContext(SidebarContext);
  
    return (
        <li
          className={` 
            relative flex items-center py-2 px-3 
            font-medium rounded-md cursor-pointer
            transition-colors group 
            ${
              active
                ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                : "hover:bg-indigo-50 text-gray-600"
            }
          `}
        >
          <div className="flex-shrink-0">{icon}</div>
      
          <span
            className={`overflow-hidden transition-all ml-3 ${
              expanded ? "w-auto" : "w-0"
            }`}
            style={{ textAlign: "left" }}
          >
            {text}
          </span>
      
          {alert && (
            <div
              className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
                expanded ? "" : "top-2"
              }`}
            />
          )}
      
          {!expanded && (
            <div
              className={`
              absolute left-full rounded-md px-2 py-1 ml-6
              bg-indigo-100 text-indigo-800 text-sm
              invisible opacity-20 -translate-x-3 transition-all
              group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            `}
            >
              {text}
            </div>
          )}
        </li>
      );
      
  }
  