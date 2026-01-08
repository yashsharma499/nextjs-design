"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  SlidersHorizontal,
  Plus,
  Bell,
  ArrowUpRight,
  Mail,
  Video,
  Calendar,
  LayoutDashboard,
  Grid,
  MessageCircle,
  ChevronLeft,
  ChevronDown,
} from "lucide-react";
import React from "react";

export default function CombinedPage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  return (
    <div className="w-full min-h-screen">
      {/* THEME TOGGLE BUTTON */}
      <div className="absolute top-10 right-40 z-50">
  <button
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center shadow-md cursor-pointer"
  >
    {theme === "light" ? "🌙" : "☀️"}
  </button>
</div>

      {/* CONDITIONAL RENDERING */}
      {theme === "light" ? <LightPage /> : <DarkPage />}
    </div>
  );
}



function LightPage() {
  const router = useRouter();
  return (
    <div className="flex min-h-screen bg-gray-100 text-[#1A1A1A] font-sans">

      {/* SIDEBAR */}
      <aside className="w-24 h-screen bg-gray-100 overflow-y-auto flex flex-col items-center py-8 pt-15 hidden md:flex">

        {/* TOP LOGO */}
        <div className="mb-20">
          <img src="/sidebarlogo.png" className="w-10 h-10 object-contain" />
        </div>

        {/* ARROW BUTTON */}
        <div className="mb-30">
          <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 cursor-pointer">
            <img src="/sidearrow.png" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {/* NAVIGATION ICONS */}
        <nav className="flex flex-col gap-6">
          <div className="w-14 h-14 bg-[#001B44] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
            <img src="/1sidebar.png" className="w-14 h-14 object-contain" />
          </div>

          <div className="w-14 h-14 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/2sidebar.png" className="w-14 h-14 object-contain opacity-60" />
          </div>

          <div className="w-14 h-14 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/3sidebar.png" className="w-14 h-14 object-contain opacity-60" />
          </div>

          <div className="w-14 h-14 bg-white rounded-full border border-gray-100 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/4sidebar.png" className="w-14 h-14 object-contain opacity-60" />
          </div>
        </nav>

      </aside>

      {/* MAIN CONTENT START */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">

        {/* HEADER SECTION */}
        <header className="flex flex-wrap md:flex-nowrap items-center justify-between mb-12 gap-6">

          {/* BLACK BAR */}
          <div className="flex-1 flex items-center bg-black rounded-full h-[72px] relative overflow-hidden max-w-6xl">

            <div className="pl-8 pr-6 flex items-center gap-4 text-white border-r border-white/10 h-full">
              <span className="font-semibold text-lg">Your Schedule</span>

              <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-gray-800 text-sm">
                <Calendar size={16} className="text-gray-500" />
                <span>28 March</span>
              </div>
            </div>

            {/* ORANGE BAR */}
            <div className="flex-1 h-full bg-[#FF7A00] flex items-center px-6 relative">

              <div className="flex items-center gap-3 overflow-x-auto max-w-full">
                <div className="w-15 h-15 rounded-full border-2 border-white/20 overflow-hidden">
                  <img src="/Headerprofile.png" className="w-full h-full object-cover" />
                </div>

                <span className="text-[11px] font-bold text-white uppercase tracking-wider">
                  36mm
                </span>

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              <div className="mx-auto text-white text-sm font-medium">2:15 pm</div>

              <div className="absolute left-[52%] bg-white h-12 px-2 rounded-full flex items-center gap-1 shadow-lg">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/headercenter.png" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-white">
                  <Video size={20} />
                </div>

                <span className="text-white text-sm font-medium">2:15 pm</span>

                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FF7A00] overflow-hidden">
                    <img src="/headerprofileright.png" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-[72px] h-full flex items-center justify-center border-l border-white/10">
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-500">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>

          {/* RIGHT ICONS */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 relative">
              <Bell size={22} className="text-gray-700" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </div>

            <div className="w-12 h-12 rounded-full border-2 border-white shadow-sm overflow-hidden">
              <img src="profileavatar.png" className="w-full h-full object-cover" />
            </div>
          </div>

        </header>

        
        {/* WORKSPACE & METRICS */}
<section className="flex items-center mb-16 px-2 max-w-full">
  <div className="flex items-center gap-6 mr-12">
    <div className="h-[64px] flex items-center">
      <img src="/workspace.png" className="h-full object-contain" />
    </div>

    <div className="h-[52px] flex items-center ml-4 cursor-pointer">
      <img src="/newtaskbtn.png" className="h-full object-contain" />
    </div>
  </div>

  {/* METRIC ITEMS */}
  <div className="flex gap-16">
    <MetricItem counter="34" label="Deals" trend="up" val="3" color="green" />
    <MetricItem counter="20" label="won" trend="down" val="2" color="red" />
    <MetricItem counter="3" label="lost" trend="down" val="1" color="red" />
  </div>

  {/* NEW PAGE NAV BUTTONS — ADDED HERE */}
  <div className="flex gap-6 ml-12">

    {/* BUTTON 1 */}
    <button
      onClick={() => router.push("/sales-engagement")}
      className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium shadow-md flex items-center gap-2 hover:bg-[#222] cursor-pointer"
    >

      Sales Engagement
    </button>

    {/* BUTTON 2 */}
    <button
      onClick={() => router.push("/projects")}
      className="px-6 py-3 rounded-full bg-black text-white text-sm font-medium shadow-md flex items-center gap-2 hover:bg-[#222] cursor-pointer"
    >
      Projects
    </button>

  </div>
</section>

        {/* NEW LEADS SECTION */}
        <section className="mb-20 px-2">

          <div className="flex items-center mb-8">

            <h2 className="text-3xl font-bold">New Leads</h2>

            <span className="text-gray-400 text-lg border-b-2 border-gray-800 pb-1 cursor-pointer ml-10">
              7 Leads
            </span>

            <div className="w-20"></div>

            <div className="flex items-center gap-3">
              <BubbleIcon Icon={Search} />
              <BubbleIcon Icon={SlidersHorizontal} />
              <BubbleButton label="All" active />
              <BubbleButton label="🔥 Hot Client" />
              <BubbleButton label="Great interest" />
              <BubbleButton label="Medium" />
              <BubbleButton label="Low" />
              <BubbleButton label="None" />
            </div>

          </div>

          {/* Leads Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">

            {LEADS.map((lead, i) => (
              <div key={i} className="relative w-[330px] max-sm:w-full h-[260px] ">

                <img
                  src="/Union11removebg1.png"
                  className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                />

                <img
                  src={lead.profileImage}
                  alt={lead.name}
                  className="absolute top-[24px] left-[24px] w-[58px] h-[58px] rounded-full object-cover"
                />

                <div className="absolute top-[20px] right-[20px] w-[48px] h-[48px] bg-[#EEF1F6] rounded-full flex items-center justify-center">
                  <img src="/leadarrow.png" className="w-[36px]" />
                </div>

                <h3 className="absolute top-[95px] left-[24px] text-[28px] font-semibold text-[#1A1A1A] leading-none">
                  {lead.name}
                </h3>

                <p className="absolute top-[130px] left-[24px] text-[16px] text-[#7A8699] leading-none">
                  {lead.role}
                </p>

                <p className="absolute top-[170px] left-[24px] text-[13px] font-semibold text-[#7A8699] uppercase">
                  Source
                </p>

                <div className="absolute top-[198px] left-[20px] flex gap-3">
                  {lead.sources.map((src, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-[#E9EDF3] rounded-full px-4 py-[6px]"
                    >
                      <span className="text-[14px] text-[#7A8699] font-medium">{src.label}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-[170px] right-[36px] text-[14px] font-semibold text-[#7A8699] flex items-center gap-1">
                  {lead.status === "Hot" && <>
                    <span>🔥</span>
                    <span>Hot Client</span>
                  </>}
                  {lead.status === "High" && "High interest"}
                  {lead.status === "Medium" && "Medium interest"}
                </div>

                <div className="absolute top-[198px] right-[26px] bg-white border border-[#D3D8E2] px-4 py-[7px] rounded-full flex gap-3">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-4 h-4 rounded-full ${
                        dot <= lead.rating
                          ? dot === 1
                            ? "bg-[#FFA8A2]"
                            : dot === 2
                            ? "bg-[#FFB86C]"
                            : dot === 3
                            ? "bg-[#F5E960]"
                            : dot === 4
                            ? "bg-[#ADEE75]"
                            : "bg-black"
                          : "bg-[#D3D8E2]"
                      }`}
                    />
                  ))}
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* YOUR DAYS TASKS */}
        <section className="mb-24 px-2">

          <div className="flex items-center gap-10 mb-10">

            <h2 className="text-3xl font-bold">Your Days Tasks</h2>

            <span className="text-gray-400 text-lg border-b-2 border-gray-800 pb-1 cursor-pointer">
              16 Leads
            </span>

            <div className="w-1"></div>

            <div className="flex items-center gap-3">
              <BubbleIcon Icon={Search} />
              <BubbleIcon Icon={SlidersHorizontal} />
              <BubbleButton label="All" active />
              <BubbleButton label="🔥 Hot" />
              <BubbleButton label="Due Today" />
              <BubbleButton label="Over due" />
              <BubbleButton label="Completed" />
            </div>

          </div>

          <div className="flex gap-6 w-full pr-10 overflow-x-auto md:overflow-x-hidden">

            {/* ORANGE CARD */}
            <div className="relative w-[360px] h-[300px] shrink-0">

              <img src="/Unionorange.png" className="absolute inset-0 w-full h-full object-contain" />

              <img
                src="/profileavatar.png"
                className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full object-cover"
              />

              <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-white">
                Peter Thomas
              </h3>

              <p className="absolute top-[47px] left-[90px] text-[13px] text-white/80">
                CEO at Moderna Inc
              </p>

              <img
                src="/Notificationtask.png"
                className="absolute top-[22px] right-[70px] w-[38px] h-[38px]"
              />

              <img
                src="/leadarrow.png"
                className="absolute top-[22px] right-[25px] w-[38px] h-[38px]"
              />

              <h3 className="absolute top-[95px] left-[25px] text-[26px] font-bold text-white">
                Google Meet Call
              </h3>

              <div className="absolute top-[150px] left-[25px] flex items-center gap-3 text-white">
                <img src="/Group 12.png" className="w-[26px] h-[26px]" />
                <span className="text-sm">28.03.2023</span>
                <span className="text-sm">at 2 pm</span>
              </div>

              <div className="absolute bottom-[22px] left-[25px] w-[85%] bg-white/25 backdrop-blur-md rounded-full px-5 py-2 flex items-center justify-between">

                <div className="flex items-center gap-2">
                  <img src="/profileavatar.png" className="w-[26px] h-[26px] rounded-full" />
                  <span className="text-white text-sm">Call scheduled</span>
                </div>

                <div className="flex items-center gap-3">
                  <img src="/Group 39.png" className="w-[36px] h-[36px]" />
                  <img src="/Group 38.png" className="w-[36px] h-[36px]" />
                </div>
              </div>
            </div>

            {/* WHITE CARDS */}
            {TASKS.map((task, i) => (
              <div key={i} className="relative w-[360px] h-[300px] shrink-0">

                <img src="/taskwhite.png" className="absolute inset-0 w-full h-full object-contain" />

                <img
                  src={task.profile}
                  className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full object-cover"
                />

                <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-black">
                  {task.user}
                </h3>

                <p className="absolute top-[47px] left-[90px] text-[13px] text-gray-500">
                  {task.role}
                </p>

                <img
                  src="/Notificationtask.png"
                  className="absolute top-[22px] right-[70px] w-[38px] h-[38px]"
                />

                <img
                  src="/leadarrow.png"
                  className="absolute top-[22px] right-[25px] w-[38px] h-[38px]"
                />

                <h3 className="absolute top-[95px] left-[25px] text-[22px] font-bold text-black">
                  {task.title}
                </h3>

                <p className="absolute top-[135px] left-[25px] text-sm text-gray-500">
                  Amount <span className="font-bold text-black">{task.subtext}</span>
                </p>

                <div className="absolute bottom-[22px] left-[25px] w-[85%] bg-white rounded-full border border-gray-200 px-5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/profileavatar.png" className="w-[26px] h-[26px] rounded-full" />
                    <span className="text-[14px] text-gray-600">Call scheduled</span>
                  </div>

                  <img src="/Group392.png" className="w-[36px] h-[36px]" />
                </div>

              </div>
            ))}

          </div>

        </section>

      </main>
    </div>
  );
}

/* SUPPORT COMPONENTS FOR LIGHT THEME */
interface MetricItemProps {
  counter: number | string;
  label: string;
  trend: "up" | "down";
  val: number | string;
  color: "green" | "red";
}

const MetricItem = ({ counter, label, trend, val, color }: MetricItemProps) => (
  <div className="flex flex-col">
    <div className="flex items-start gap-2">
      <span className="text-[52px] font-semibold tracking-tight">{counter}</span>

      <span
        className={`${
          color === "green"
            ? "bg-[#E7F9ED] text-[#28C76F]"
            : "bg-[#FFEDEA] text-[#FF4D4D]"
        } px-2 py-0.5 rounded-md text-[11px] font-bold mt-3`}
      >
        {trend === "up" ? "↑" : "↓"}
        {val}
      </span>
    </div>

    <span className="text-[#7A8699] text-2xl font-medium -mt-2 uppercase tracking-tighter">
      {label}
    </span>
  </div>
);

interface BubbleButtonProps {
  label: string;
  active?: boolean;
}

const BubbleButton = ({ label, active = false }: BubbleButtonProps) => (
  <button
    className={`
      px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
      border border-[#D3D8E2]
      ${
        active
          ? "bg-white text-[#001B44] shadow-sm"
          : "bg-[#F8FAFB] text-[#7A8699] hover:text-[#001B44] hover:bg-white hover:shadow-sm"
      }
    `}
  >
    {label}
  </button>
);

interface BubbleIconProps {
  Icon: React.ComponentType<{ size?: number }>;
}

const BubbleIcon = ({ Icon }: BubbleIconProps) => (
  <div
    className="
      w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
      bg-[#F8FAFB] text-[#001B44]
      border border-[#D3D8E2]
      hover:bg-white hover:shadow-sm
      transition-all
    "
  >
    <Icon size={22} />
  </div>
);

/* LIGHT PAGE DATA ARRAYS */
const LEADS = [
  {
    name: "Jan Doe",
    role: "Marketing Director",
    profileImage: "ps1.png",
    rating: 3,
    sources: [{ label: "LinkedIn" }],
    status: "Hot"
  },
  {
    name: "Darlene Robertson",
    role: "Financial Manager ",
    profileImage: "ps2.png",
    rating: 4,
    sources: [{ label: "LinkedIn" }],
    status: "Hot"
  },
  {
    name: "Janah Jude",
    role: "Web Developer ",
    profileImage: "ps3.png",
    rating: 3,
    sources: [{ label: "Typeform" }],
    status: "Hot"
  },
  {
    name: "Wade Warren",
    role: "Operations Manager ",
    profileImage: "ps2.png",
    rating: 3,
    sources: [{ label: "Typeform" }],
    status: "Hot"
  },
];

const TASKS = [
  {
    user: "Peter Thomas",
    role: "CEO Metamorphosis",
    title: "Send Proposal",
    subtext: "$20,000",
    profile: "/profileavatar.png",
  },
  {
    user: "John Wilson",
    role: "Brand Manager ",
    title: "Google Meet Call",
    subtext: "",
    profile: "/profileavatar.png",
  },
  {
    user: "Peter Thomas",
    role: "CEO Metamorphosis",
    title: "Send Proposal",
    subtext: "$20,000",
    profile: "/profileavatar.png",
  },
];
////////////////////////////////////////////////////////////////
// -------------------- DARK THEME PAGE ---------------------- //
////////////////////////////////////////////////////////////////

function DarkPage() {
const router = useRouter();
  return (
    <div className="flex min-h-screen bg-[#0D0F14] text-white font-sans">

      {/* SIDEBAR */}
      <aside className="w-24 h-screen bg-[#0D0F14] overflow-y-auto flex flex-col items-center py-8 pt-15 hidden md:flex">

        {/* TOP LOGO */}
        <div className="mb-20">
          <img src="/dark/Logodark.png" className="w-10 h-10 object-contain" />
        </div>

        {/* ARROW ICON */}
        <div className="mb-30">
          <div className="w-12 h-12 bg-[#1A1A1A] rounded-full shadow-sm flex items-center justify-center border border-gray-700 cursor-pointer">
            <img src="/dark/arrow-icondark.png" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {/* NAV ICONS */}
        <nav className="flex flex-col gap-6">
          <div className="w-14 h-14 bg-[#FF6A00] rounded-full shadow-lg flex items-center justify-center cursor-pointer">
            <img src="/dark/search-icon (5).png" className="w-14 h-14 object-contain" />
          </div>

          <div className="w-14 h-14 bg-[#1A1C22] rounded-full border border-gray-700 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/dark/search-icon (6).png" className="w-14 h-14 object-contain opacity-60" />
          </div>

          <div className="w-14 h-14 bg-[#1A1C22] rounded-full border border-gray-700 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/dark/search-icon (7).png" className="w-14 h-14 object-contain opacity-60" />
          </div>

          <div className="w-14 h-14 bg-[#1A1C22] rounded-full border border-gray-700 shadow-sm flex items-center justify-center cursor-pointer">
            <img src="/dark/search-icon (8).png" className="w-14 h-14 object-contain opacity-60" />
          </div>
        </nav>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">

        {/* HEADER */}
        <header className="flex flex-wrap md:flex-nowrap items-center justify-between mb-12 gap-6">

          {/* BLACK BAR */}
          <div className="flex-1 flex items-center bg-black rounded-full h-[72px] relative overflow-hidden max-w-6xl">

            {/* LEFT PART */}
            <div className="pl-8 pr-6 flex items-center gap-4 text-white border-r border-white/10 h-full">
              <span className="font-semibold text-lg">Your Schedule</span>

              <div className="flex items-center gap-2 bg-[#1A1C22] px-4 py-2 rounded-full border border-[#333] text-sm">
                <Calendar size={16} className="text-gray-400" />
                <span>28 March</span>
              </div>
            </div>

            {/* ORANGE AREA */}
            <div className="flex-1 h-full bg-gradient-to-r from-[#F59B00] to-[#FF6A00] flex items-center px-6 relative">

              <div className="flex items-center gap-3 overflow-x-auto max-w-full">
                <div className="w-15 h-15 rounded-full border-2 border-white/20 overflow-hidden">
                  <img src="/dark/Mask group (5).png" className="w-full h-full object-cover" />
                </div>

                <span className="text-[11px] font-bold text-white uppercase tracking-wider">36mm</span>

                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                  <ArrowUpRight size={14} className="text-white" />
                </div>
              </div>

              <div className="mx-auto text-white text-sm font-medium">2:15 pm</div>

              <div className="absolute left-[52%] bg-white h-12 px-2 rounded-full flex items-center gap-1 shadow-lg">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src="/dark/Group 9 (1).png" className="w-full h-full object-cover" />
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center text-white">
                  <Video size={20} />
                </div>

                <span className="text-white text-sm font-medium">2:15 pm</span>

                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FF7A00] overflow-hidden">
                    <img src="/dark/Mask group (6).png" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

            </div>

            <div className="w-[72px] h-full flex items-center justify-center border-l border-white/10">
              <div className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400">
                <ArrowUpRight size={22} />
              </div>
            </div>
          </div>

          {/* RIGHT HEADER ICONS */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[#1A1C22] rounded-full flex items-center justify-center shadow-sm border border-[#333] relative">
              <Bell size={22} className="text-gray-300" />
              <span className="absolute top-3 right-3 w-2 h-2 bg-red-500 rounded-full border-2 border-[#1A1C22]" />
            </div>

            <div className="w-12 h-12 rounded-full border-2 border-[#1A1C22] shadow-sm overflow-hidden">
              <img src="/dark/Profile Picture (1).png" className="w-full h-full object-cover" />
            </div>
          </div>

        </header>

        {/* WORKSPACE & METRICS */}
        <section className="flex items-center mb-16 px-2 max-w-full">

          <div className="flex items-center gap-6 mr-12">
            <div className="h-[64px] flex items-center">
              <img src="/dark/Group 13 (1).png" className="h-full object-contain" />
            </div>

            <div className="h-[52px] flex items-center ml-4 cursor-pointer">
              <img src="/dark/Group 16 (1).png" className="h-full object-contain" />
            </div>
          </div>

          <div className="flex gap-16">
            <DarkMetric counter="34" label="Deals" trend="up" val="3" color="green"/>
            <DarkMetric counter="20" label="won"trend="down" val="2" color="red"/>
            <DarkMetric counter="3" label="lost" trend="down" val="1" color="red"/>
          </div>
          {/* NEW PAGE NAV BUTTONS — ADDED HERE */}
  <div className="flex gap-6 ml-12">

    {/* BUTTON 1 */}
    <button
      onClick={() => router.push("/sales-engagement")}
      className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium shadow-md flex items-center gap-2  cursor-pointer"
    >

      Sales Engagement
    </button>

    {/* BUTTON 2 */}
    <button
      onClick={() => router.push("/projects")}
      className="px-6 py-3 rounded-full bg-white text-black text-sm font-medium shadow-md flex items-center gap-2  cursor-pointer"
    >
      Projects
    </button>

  </div>

        </section>

        {/* NEW LEADS SECTION */}
        <section className="mb-20 px-2">

          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">New Leads</h2>

            <span className="text-gray-400 text-lg border-b-2 border-gray-600 pb-1 cursor-pointer ml-10">
              7 Leads
            </span>

            <div className="w-20"></div>

            <div className="flex items-center gap-3">
              <DarkBubbleIcon Icon={Search} />
              <DarkBubbleIcon Icon={SlidersHorizontal} />
              <DarkBubbleButton label="All" active />
              <DarkBubbleButton label="🔥 Hot Client" />
              <DarkBubbleButton label="Great interest" />
              <DarkBubbleButton label="Medium" />
              <DarkBubbleButton label="Low" />
              <DarkBubbleButton label="None" />
            </div>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {LEADSDARK.map((lead, i) => (
              <div key={i} className="relative w-[330px] max-sm:w-full h-[260px]">

                <img src="/dark/Union (18).png" className="absolute inset-0 w-full h-full object-contain" />

                <img
                  src={`/dark/${lead.profileImage}`}
                  alt={lead.name}
                  className="absolute top-[24px] left-[24px] w-[58px] h-[58px] rounded-full object-cover"
                />

                <div className="absolute top-[20px] right-[20px] w-[48px] h-[48px] bg-[#1A1C22] rounded-full flex items-center justify-center">
                  <img src="/dark/search-icon (9).png" className="w-[36px]" />
                </div>

                <h3 className="absolute top-[95px] left-[24px] text-[28px] font-semibold text-white">
                  {lead.name}
                </h3>

                <p className="absolute top-[130px] left-[24px] text-[16px] text-gray-400">
                  {lead.role}
                </p>

                <p className="absolute top-[170px] left-[24px] text-[13px] font-semibold text-gray-500 uppercase">
                  Source
                </p>

                <div className="absolute top-[198px] left-[20px] flex gap-3">
                  {lead.sources.map((src, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-[#1A1C22] rounded-full px-4 py-[6px]"
                    >
                      <span className="text-[14px] text-gray-300 font-medium">{src.label}</span>
                    </div>
                  ))}
                </div>

                <div className="absolute top-[198px] right-[26px] bg-[#1A1C22] border border-gray-700 px-4 py-[7px] rounded-full flex gap-3">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      className={`w-4 h-4 rounded-full ${
                        dot <= lead.rating
                          ? dot === 1
                            ? "bg-red-400"
                            : dot === 2
                            ? "bg-orange-400"
                            : dot === 3
                            ? "bg-yellow-400"
                            : dot === 4
                            ? "bg-green-400"
                            : "bg-white"
                          : "bg-gray-600"
                      }`}
                    />
                  ))}
                </div>

              </div>
            ))}

          </div>
        </section>

        {/* TASK SECTION */}
        <section className="mb-24 px-2">

          <div className="flex items-center gap-10 mb-10">
            <h2 className="text-3xl font-bold">Your Days Tasks</h2>

            <span className="text-gray-400 text-lg border-b-2 border-gray-600 pb-1 cursor-pointer">
              16 Leads
            </span>

            <div className="flex items-center gap-3">
              <DarkBubbleIcon Icon={Search} />
              <DarkBubbleIcon Icon={SlidersHorizontal} />
              <DarkBubbleButton label="All" active />
              <DarkBubbleButton label="🔥 Hot" />
              <DarkBubbleButton label="Due Today" />
              <DarkBubbleButton label="Over due" />
              <DarkBubbleButton label="Completed" />
            </div>
          </div>

          <div className="flex gap-6 w-full pr-10 overflow-x-auto md:overflow-x-hidden">

            <div className="relative w-[360px] h-[300px] shrink-0">
              <img src="/dark/Unionorange.png" className="absolute inset-0 w-full h-full object-contain" />

              <img src="/dark/profileavatar.png" className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full" />

              <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-white">
                Peter Thomas
              </h3>

              <p className="absolute top-[47px] left-[90px] text-[13px] text-white/80">
                CEO at Moderna Inc
              </p>

              <img src="/dark/Notification icon (6).png" className="absolute top-[22px] right-[70px] w-[38px]" />
              <img src="/dark/Notification icon (7).png" className="absolute top-[22px] right-[25px] w-[38px]" />

              <h3 className="absolute top-[95px] left-[25px] text-[26px] font-bold text-white">
                Google Meet Call
              </h3>

              <div className="absolute top-[150px] left-[25px] flex items-center gap-3 text-white">
                <img src="/dark/Group 12 (2).png" className="w-[26px] h-[26px]" />
                <span className="text-sm">28.03.2023</span>
                <span className="text-sm">at 2 pm</span>
              </div>

              <div className="absolute bottom-[22px] left-[25px] w-[85%] bg-white/20 backdrop-blur-md rounded-full px-5 py-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src="/dark/profileavatar.png" className="w-[26px] h-[26px] rounded-full" />
                  <span className="text-white text-sm">Call scheduled</span>
                </div>

                <div className="flex items-center gap-3">
                  <img src="/dark/Group 39 (3).png" className="w-[36px]" />
                  <img src="/dark/Group 38 (1).png" className="w-[36px]" />
                </div>
              </div>
            </div>

            {TASKSDARK.map((task, i) => (
              <div key={i} className="relative w-[360px] h-[300px] shrink-0">

                <img src="/dark/Union (16) (1).png" className="absolute inset-0 w-full h-full object-contain" />

                <img src="/dark/profileavatar.png" className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full" />

                <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-white">{task.user}</h3>

                <p className="absolute top-[47px] left-[90px] text-[13px] text-gray-400">{task.role}</p>

                <img src="/dark/Notification icon (6).png" className="absolute top-[22px] right-[70px] w-[38px]" />

                <img src="/dark/Notification icon (7).png" className="absolute top-[22px] right-[25px] w-[38px]" />

                <h3 className="absolute top-[95px] left-[25px] text-[22px] font-bold text-white">{task.title}</h3>

                <p className="absolute top-[135px] left-[25px] text-sm text-gray-400">
                  Amount <span className="font-bold text-white">{task.subtext}</span>
                </p>

                <div className="absolute bottom-[22px] left-[25px] w-[85%] bg-[#1A1C22] rounded-full border border-gray-700 px-5 py-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src="/dark/profileavatar.png" className="w-[26px] h-[26px] rounded-full" />
                    <span className="text-[14px] text-gray-300">Call scheduled</span>
                  </div>

                  <img src="/dark/Group 38 (1).png" className="w-[36px]" />
                </div>

              </div>
            ))}

          </div>
        </section>

      </main>
    </div>
  );
}

/* SUPPORT COMPONENTS FOR LIGHT THEME */
interface DarkMetricProps {
  counter: number | string;
  label: string;
  trend: "up" | "down";
  val: number | string;
  color: "green" | "red";
}

const DarkMetric = ({ counter, label, trend, val, color }: DarkMetricProps) => (
  <div className="flex flex-col">
    <div className="flex items-start gap-2">
      <span className="text-[52px] font-semibold tracking-tight">{counter}</span>

      <span
        className={`${
          color === "green"
            ? "bg-[#E7F9ED] text-[#28C76F]"
            : "bg-[#FFEDEA] text-[#FF4D4D]"
        } px-2 py-0.5 rounded-md text-[11px] font-bold mt-3`}
      >
        {trend === "up" ? "↑" : "↓"}
        {val}
      </span>
    </div>

    <span className="text-[#7A8699] text-2xl font-medium -mt-2 uppercase tracking-tighter">
      {label}
    </span>
  </div>
);

/* DARK BUBBLE BUTTON */
interface DarkBubbleButtonProps {
  label: string;
  active?: boolean;
}

const DarkBubbleButton = ({ label, active = false }: DarkBubbleButtonProps) => (
  <button
    className={`
      px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
      border border-gray-700
      ${active ? "bg-white text-black shadow-sm" : "bg-[#1A1C22] text-gray-300 hover:bg-[#222] hover:shadow-sm"}
    `}
  >
    {label}
  </button>
);

/* DARK ICON BUTTON */
interface DarkBubbleIconProps {
  Icon: React.ComponentType<{ size?: number }>;
}

const DarkBubbleIcon = ({ Icon }: DarkBubbleIconProps) => (
  <div
    className="
      w-12 h-12 rounded-full flex items-center justify-center cursor-pointer
      bg-[#1A1C22] text-gray-300 border border-gray-700
      hover:bg-[#222] hover:shadow-sm transition-all
    "
  >
    <Icon size={22} />
  </div>
);

/* DARK LEADS */
const LEADSDARK = [
  {
    name: "Jan Doe",
    role: "Marketing Director",
    profileImage: "profileavatar.png",
    rating: 3,
    sources: [{ label: "LinkedIn" }],
    status: "Hot",
  },
  {
    name: "Darlene Robertson",
    role: "Financial Manager ",
    profileImage: "profileavatar.png",
    rating: 4,
    sources: [{ label: "LinkedIn" }],
    status: "High",
  },
  {
    name: "Janah Jude",
    role: "Web Developer ",
    profileImage: "profileavatar.png",
    rating: 3,
    sources: [{ label: "Typeform" }],
    status: "Medium",
  },
  {
    name: "Wade Warren",
    role: "Operations Manager ",
    profileImage: "profileavatar.png",
    rating: 3,
    sources: [{ label: "Typeform" }],
    status: "Medium",
  },
];

/* DARK TASKS */
const TASKSDARK = [
  {
    user: "Peter Thomas",
    role: "CEO Metamorphosis",
    title: "Send Proposal",
    subtext: "$20,000",
  },
  {
    user: "John Wilson",
    role: "Brand Manager ",
    title: "Google Meet Call",
    subtext: "",
  },
  {
    user: "Peter Thomas",
    role: "CEO Metamorphosis",
    title: "Send Proposal",
    subtext: "$20,000",
  },
];
