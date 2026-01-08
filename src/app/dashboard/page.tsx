"use client";

import { 
  Search, SlidersHorizontal, Plus, Bell, 
  ArrowUpRight, Mail, Video, Calendar, 
  LayoutDashboard, Grid, MessageCircle,
  ChevronLeft,ChevronDown
} from 'lucide-react';

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-100 text-[#1A1A1A] font-sans">

      {/* --- SIDEBAR --- */}
<aside className="w-24 h-screen bg-gray-100 overflow-y-auto flex flex-col items-center py-8 pt-15 hidden md:flex">
        {/* TOP LOGO */}
        <div className="mb-20">
          <img src="/sidebarlogo.png" className="w-10 h-10 object-contain" />
        </div>

        {/* ARROW ICON */}
        <div className="mb-30">
          <div className="w-12 h-12 bg-white rounded-full shadow-sm flex items-center justify-center border border-gray-100 cursor-pointer">
            <img src="/sidearrow.png" className="w-12 h-12 object-contain" />
          </div>
        </div>

        {/* NAV ICONS */}
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

      {/* --- MAIN CONTENT --- */}
      {/* <main className="flex-1 p-8 overflow-x-hidden"> */}
<main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        {/* TOP HEADER */}
        {/* <header className="flex items-center justify-between mb-12 gap-6"> */}
        <header className="flex flex-wrap md:flex-nowrap items-center justify-between mb-12 gap-6">
          <div className="flex-1 flex items-center bg-black rounded-full h-[72px] relative overflow-hidden max-w-6xl">

            <div className="pl-8 pr-6 flex items-center gap-4 text-white border-r border-white/10 h-full">
              <span className="font-semibold text-lg">Your Schedule</span>
              <div className="flex items-center gap-2 bg-[#1A1A1A] px-4 py-2 rounded-full border border-gray-800 text-sm">
                <Calendar size={16} className="text-gray-500" />
                <span>28 March</span>
              </div>
            </div>

            <div className="flex-1 h-full bg-[#FF7A00] flex items-center px-6 relative">
              {/* <div className="flex items-center gap-3"> */}
              <div className="flex items-center gap-3 overflow-x-auto max-w-full">
                <div className="w-15 h-15 rounded-full border-2 border-white/20 overflow-hidden">
                  <img src="Headerprofile.png" className="w-full h-full object-cover" />
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
                  <img src="headercenter.png" className="w-full h-full object-cover" />
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <div className="bg-black text-[10px] text-white px-2 py-0.5 rounded-full mb-1">
                    2:15 pm
                  </div>
                  <div className="w-0.5 h-4 bg-white" />
                </div>
              </div>

              <div className="flex items-center gap-4 ml-auto">
                <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center text-white">
                  <Video size={20} />
                </div>

                <span className="text-white text-sm font-medium">2:15 pm</span>

                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-[#FF7A00] overflow-hidden">
                    <img src="headerprofileright.png" className="w-full h-full object-cover" />
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

          <div className="flex gap-16">
            <MetricItem counter="34" label="Deals" trend="up" val="3" color="green" />
            <MetricItem counter="20" label="won" trend="down" val="2" color="red" />
            <MetricItem counter="3" label="lost" trend="down" val="1" color="red" />
          </div>
        </section>

        {/* NEW LEADS SECTION */}
        <section className="mb-20 px-2">

<div className="flex items-center mb-8">

  <h2 className="text-3xl font-bold">New Leads</h2>

  <span className="text-gray-400 text-lg border-b-2 border-gray-800 pb-1 cursor-pointer ml-10">
    7 Leads
  </span>

  {/* FLEX SPACER – ensures equal spacing */}
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
{/* <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6 w-full"> */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
  {LEADS.map((lead, i) => (
    <div key={i} className="relative w-[330px] max-sm:w-full h-[260px] ">

      {/* Card Shape Background */}
      <img
        src="/Union11removebg1.png"
        className="absolute inset-0 w-full h-full object-contain pointer-events-none"
      />

      {/* Profile Image */}
      <img
        src={lead.profileImage}
        alt={lead.name}
        className="absolute top-[24px] left-[24px] w-[58px] h-[58px] rounded-full object-cover"
      />

      {/* Arrow Button (unchanged from your original logic) */}
      <div className="absolute top-[20px] right-[20px] w-[48px] h-[48px] bg-[#EEF1F6] rounded-full flex items-center justify-center">
        <img src="/leadarrow.png" className="w-[36px]" />
      </div>

      {/* Name */}
      <h3 className="absolute top-[95px] left-[24px] text-[28px] font-semibold text-[#1A1A1A] leading-none">
        {lead.name}
      </h3>

      {/* Role */}
      <p className="absolute top-[130px] left-[24px] text-[16px] text-[#7A8699] leading-none">
        {lead.role}
      </p>

      {/* Source Label */}
      <p className="absolute top-[170px] left-[24px] text-[13px] font-semibold text-[#7A8699] uppercase">
        Source
      </p>

      {/* Source Badges */}
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

      {/* Status Text */}
      <div className="absolute top-[170px] right-[36px] text-[14px] font-semibold text-[#7A8699] flex items-center gap-1">
        {lead.status === "Hot" && (
          <>
            <span>🔥</span>
            <span>Hot Client</span>
          </>
        )}
        {lead.status === "High" && "High interest"}
        {lead.status === "Medium" && "Medium interest"}
      </div>

      {/* Rating Dots */}
      <div className="absolute top-[198px] right-[26px] bg-white border border-[#D3D8E2] px-4 py-[7px] rounded-full flex gap-3">
        {[1, 2, 3, 4, 5].map((dot) => (
          <span
            key={dot}
            className={`w-4 h-4 rounded-full ${
              dot <= lead.rating
                ? dot === 1
                  ? "bg-[#FFA8A2]"   // soft red
                  : dot === 2
                  ? "bg-[#FFB86C]"   // orange
                  : dot === 3
                  ? "bg-[#F5E960]"   // yellow
                  : dot === 4
                  ? "bg-[#ADEE75]"   // green
                  : "bg-black"        // max rating
                : "bg-[#D3D8E2]"     // inactive dots
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

  {/* HEADER */}
  <div className="flex items-center gap-10 mb-10">

  <h2 className="text-3xl font-bold">Your Days Tasks</h2>

  <span className="text-gray-400 text-lg border-b-2 border-gray-800 pb-1 cursor-pointer">
    16 Leads
  </span>

  {/* FLEX SPACER — keeps spacing equal */}
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

  {/* FIXED SCROLL ROW FOR ALL CARDS */}
  {/* <div className="flex gap-6 overflow-x-hidden w-full pr-10"> */}
<div className="flex gap-6 w-full pr-10 overflow-x-auto md:overflow-x-hidden">

    {/* ================= ORANGE CARD (RESTORED IMAGES) ================= */}
    <div className="relative w-[360px] h-[300px] shrink-0">

      {/* Background image */}
      <img src="/Unionorange.png" className="absolute inset-0 w-full h-full object-contain" />

      {/* Profile avatar */}
      <img
        src="/profileavatar.png"
        className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full object-cover"
      />

      {/* Name + Role */}
      <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-white">
        Peter Thomas
      </h3>

      <p className="absolute top-[47px] left-[90px] text-[13px] text-white/80">
        CEO at Moderna Inc
      </p>

      {/* NOTIFICATION ICON */}
      <img
        src="/Notificationtask.png"
        className="absolute top-[22px] right-[70px] w-[38px] h-[38px]"
      />

      {/* ARROW ICON */}
      <img
        src="/leadarrow.png"
        className="absolute top-[22px] right-[25px] w-[38px] h-[38px]"
      />

      {/* TITLE */}
      <h3 className="absolute top-[95px] left-[25px] text-[26px] font-bold text-white">
        Google Meet Call
      </h3>

      {/* DATE ROW WITH ORIGINAL GROUP IMAGE */}
      <div className="absolute top-[150px] left-[25px] flex items-center gap-3 text-white">
        <img src="/Group 12.png" className="w-[26px] h-[26px]" />
        <span className="text-sm">28.03.2023</span>
        <span className="text-sm">at 2 pm</span>
      </div>

      {/* STATUS ROW */}
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

    {/* ================= WHITE CARDS (ICONS RESTORED & POSITIONED SAME) ================= */}
    {TASKS.map((task, i) => (
      <div key={i} className="relative w-[360px] h-[300px] shrink-0">

        {/* WHITE BACKGROUND */}
        <img src="/taskwhite.png" className="absolute inset-0 w-full h-full object-contain" />

        {/* Avatar */}
        <img
          src={task.profile}
          className="absolute top-[20px] left-[22px] w-[54px] h-[54px] rounded-full object-cover"
        />

        {/* Name + Role */}
        <h3 className="absolute top-[22px] left-[90px] text-[16px] font-semibold text-black">
          {task.user}
        </h3>

        <p className="absolute top-[47px] left-[90px] text-[13px] text-gray-500">
          {task.role}
        </p>

        {/* NOTIFICATION ICON */}
        <img
          src="/Notificationtask.png"
          className="absolute top-[22px] right-[70px] w-[38px] h-[38px]"
        />

        {/* ARROW ICON */}
        <img
          src="/leadarrow.png"
          className="absolute top-[22px] right-[25px] w-[38px] h-[38px]"
        />

        {/* TITLE */}
        <h3 className="absolute top-[95px] left-[25px] text-[22px] font-bold text-black">
          {task.title}
        </h3>

        {/* Amount */}
        <p className="absolute top-[135px] left-[25px] text-sm text-gray-500">
          Amount <span className="font-bold text-black">{task.subtext}</span>
        </p>

        {/* STATUS ROW (ICONS MATCH ORANGE CARD) */}
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

const BubbleButton = ({ label, active = false }) => (
  <button
    className={`
      px-6 py-2.5 rounded-full text-sm font-bold transition-all whitespace-nowrap
      border border-[#D3D8E2]
      ${active
        ? 'bg-white text-[#001B44] shadow-sm'
        : 'bg-[#F8FAFB] text-[#7A8699] hover:text-[#001B44] hover:bg-white hover:shadow-sm'
      }
    `}
  >
    {label}
  </button>
);

const BubbleIcon = ({ Icon }) => (
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



const LEADS = [
  {
    name: "Jan Doe",
    role: "Marketing Director",
    profileImage: "ps1.png",
    rating: 3,
    sources: [{ label: "LinkedIn"}],
  },
  {
    name: "Darlene Robertson",
    role: "Financial Manager ",
    profileImage: "ps2.png",
    rating: 4,
    sources: [{ label: "LinkedIn"}],
  },
  {
    name: "Janah Jude",
    role: "Web Developer ",
    profileImage: "ps3.png",
    rating: 3,
    sources: [{ label: "Typeform"}],
  },
  {
    name: "Wade Warren",
    role: "Operations Manager ",
    profileImage: "ps2.png",
    rating: 3,
    sources: [{ label: "Typeform"}],
  },
];

const TASKS = [
  {
    user: 'Peter Thomas',
    role: 'CEO Metamorphosis',
    title: 'Send Proposal',
    subtext: '$20,000',
    profile: '/profileavatar.png',
  },
  {
    user: 'John Wilson',
    role: 'Brand Manager ',
    title: 'Google Meet Call',
    subtext: '',
    profile: '/profileavatar.png',
  },
  {
    user: 'Peter Thomas',
    role: 'CEO Metamorphosis',
    title: 'Send Proposal',
    subtext: '$20,000',
    profile: '/profileavatar.png',
  },
];





