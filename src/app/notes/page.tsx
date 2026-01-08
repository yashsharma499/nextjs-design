
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  FileText,
  LayoutGrid,
  SlidersHorizontal,MessageCircle,
} from "lucide-react";

export default function Notes() {
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    if (tab === "Task") {
      router.push("/projects");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FBF4EB] font-sans text-[#1B1E2B]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-[#E6E8F0]">
        
        <Image src="/diepalogo.png" alt="Logo" width={120} height={50} className="w-24 md:w-32 h-auto" />

        {/* Desktop Search */}
        <div className="hidden md:flex w-full max-w-sm h-10 rounded-full bg-white items-center px-4 shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search everything..."
            className="ml-2 w-full text-sm outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center gap-2">
          <Image src="/Notification_icon.png" alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
          <Image src="/profileavatar.png" alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10" />
        </div>
      </header>

      {/* NAVIGATION */}
<nav className="px-4 md:px-10 py-5 flex flex-wrap items-center gap-3 text-sm">

  {["Dashboard", "Time Tracker", "Projects", "Calendar", "Benefits", "Teams"].map((item) => (
    <button
      key={item}
      onClick={() => item === "Dashboard" && router.push("/")} // <-- ONLY DASHBOARD LINK
      className={`px-4 py-2 rounded-full border cursor-pointer text-[13px]
        ${item === "Projects"
          ? "bg-[#0C2D57] text-white border-[#0C2D57]"
          : "bg-white border-gray-300"
        }`}
    >
      {item}
    </button>
  ))}



        {/* RIGHT SIDE SELECTS */}
        <div className="flex flex-wrap gap-3 ml-auto">
          <select className="h-9 px-3 rounded-lg bg-white border text-sm cursor-pointer">
            <option>Department</option>
          </select>
          <select className="h-9 px-3 rounded-lg bg-white border text-sm cursor-pointer">
            <option>Role</option>
          </select>
          <button className="h-9 px-6 rounded-lg bg-orange-500 text-white font-medium cursor-pointer">
            Apply
          </button>
        </div>

      </nav>

      {/* BREADCRUMB */}
      <section className="px-4 md:px-10 pt-6">
        <h1 className="text-lg md:text-xl font-semibold">Projects</h1>
        <p className="text-xs md:text-sm text-[#6B7280] mt-1">See through your projects and the progress</p>

        <p className="text-xs text-[#6B7280] mt-2">
          <span className="text-[#4F46E5] cursor-pointer">App</span>
          <span className="mx-1">›</span>
          <span className="cursor-pointer">Projects</span>
        </p>
      </section>

      {/* TABS + ACTIONS */}
      <div className="px-4 md:px-10 mt-6 flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* TABS */}
        <div className="flex flex-wrap gap-3">
          {["Overview", "Details", "Task", "Milestones", "Notes"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 py-2 rounded-full text-[13px] font-medium cursor-pointer border
                ${tab === "Notes"
                  ? "bg-[#0C2D57] text-white border-[#0C2D57]"
                  : "bg-white border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* RIGHT SIDE SEARCH + ICONS */}
        <div className="flex flex-col items-end gap-4 w-full md:w-auto">

          <div className="flex items-center gap-3">
            <Image src="/phoneproject.png" alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
            <Image src="/mailproject.png" alt="" width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 cursor-pointer" />
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center bg-white border rounded-lg px-3 w-full md:w-64 h-10">
              <Search size={14} className="text-[#6B7280]" />
              <input
                placeholder="Search"
                className="ml-2 w-full text-xs md:text-sm outline-none bg-transparent"
              />
            </div>

            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center border cursor-pointer">
              <FileText size={15} />
            </div>
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center border cursor-pointer">
              <LayoutGrid size={15} />
            </div>
            <div className="w-9 h-9 rounded-lg bg-white flex items-center justify-center border cursor-pointer">
              <SlidersHorizontal size={15} />
            </div>
          </div>

        </div>
      </div>

      {/* MAIN NOTES SECTION */}
<section className="px-4 md:px-10 mt-8">

  {/* SINGLE WHITE CONTAINER */}
  <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#E7E9EE]">

    {/* INNER GRID: LEFT + RIGHT */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* LEFT: WRITE BOX */}
      <div className="bg-[#FCEFD9] rounded-2xl p-4 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          <Image src="/profileavatar.png" width={40} height={40} className="w-10 h-10 rounded-full" alt="profile" />
        </div>

        <textarea
          placeholder="Write"
          className="w-full h-32 md:h-36 rounded-xl border border-[#D8D8D8] p-3 text-sm resize-none outline-none bg-white"
        />

        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-orange-500 text-white rounded-lg text-sm cursor-pointer">
            Submit
          </button>
        </div>
      </div>

      {/* RIGHT: NOTES LIST */}
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-[20px] border border-[#E7E9EE] p-6 shadow-md relative"
          >
            <div className="flex items-start justify-between">
              <h4 className="text-lg font-semibold">Digital Marketing</h4>
              <span className="text-sm text-gray-600 font-semibold">Mesh Square</span>
            </div>

            <div className="flex items-center mt-3 gap-3">
              <Image
                src="/profileavatar.png"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                alt="profile"
              />
              <div className="leading-tight">
                <p className="text-sm font-semibold">John Clever</p>
                <p className="text-xs text-[#6B7280]">Project Manager</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mt-5">
              <strong className="font-semibold">Dear,</strong><br /><br />
              Any purchases necessary for the website, such as plugins, themes,
              third-party tools, or other paid services, will be charged separately.
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between mt-6">

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <div className="w-6 h-6 rounded-full bg-white border border-gray-300 flex items-center justify-center">
                    <MessageCircle size={14} className="text-[#6B7280]" />
                  </div>
                  <span>8</span>
                </div>

                <button className="cursor-pointer">
                  <Image
                    src="/Frame 2085661760.png"
                    width={100}
                    height={32}
                    alt="Add Response"
                    className="h-8 w-auto"
                  />
                </button>
              </div>

              <a href="#">
                <Image
                  src="/Group 1171275618 (1).png"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                  alt="avatar group"
                />
              </a>

            </div>

          </div>
        ))}
      </div>

    </div>

  </div>

</section>
    </main>
  );
}
