
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Search,
  MoreHorizontal,
  FileText,
  LayoutGrid,
  SlidersHorizontal,
} from "lucide-react";

export default function ProjectsPage() {
  const router = useRouter();

  const handleTabClick = (tab: string) => {
    if (tab === "Notes") {
      router.push("/notes");
    }
  };

  return (
    <main className="w-full min-h-screen bg-[#FBF4EB] font-sans text-[#1B1E2B]">

      {/* HEADER */}
      <header className="flex items-center justify-between px-4 md:px-10 py-4 border-b border-[#E6E8F0]">

        {/* Logo */}
        <Image
          src="/diepalogo.png"
          alt="Logo"
          width={120}
          height={60}
          className="w-24 md:w-32 h-auto"
        />

        {/* Desktop Search */}
        <div className="hidden md:flex w-full max-w-sm h-10 rounded-full bg-white items-center px-4 shadow-sm">
          <Search size={16} className="text-gray-400" />
          <input
            placeholder="Search everything..."
            className="ml-2 w-full text-sm outline-none bg-transparent"
          />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-3">
          <Image
            src="/notification_icon.png"
            alt="Notification"
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9"
          />
          <Image
            src="/profileavatar.png"
            alt="Profile"
            width={36}
            height={36}
            className="w-8 h-8 md:w-9 md:h-9"
          />
        </div>
      </header>

     {/* NAVIGATION */}
<nav className="px-4 md:px-10 py-4 flex flex-wrap items-center gap-3 text-sm">
  {[
    { label: "Dashboard", path: "/" },
    { label: "Time Tracker", path: "/time-tracker" },
    { label: "Projects", path: "/projects" },
    { label: "Calendar", path: "/calendar" },
    { label: "Benefits", path: "/benefits" },
    { label: "Teams", path: "/teams" },
  ].map((nav) => (
    <button
      key={nav.label}
      onClick={() => router.push(nav.path)}  // <-- WORKS NOW
      className={`px-4 py-2 rounded-full border cursor-pointer 
        ${
          nav.label === "Projects"
            ? "bg-[#0C2D57] text-white border-[#0C2D57]"
            : "bg-white border-gray-300"
        }`}
    >
      {nav.label}
    </button>
  ))}


        {/* Filters */}
        <div className="ml-auto flex flex-wrap gap-3">
          <select className="h-9 px-3 rounded-lg bg-white border text-sm">
            <option>Department</option>
          </select>
          <select className="h-9 px-3 rounded-lg bg-white border text-sm">
            <option>Role</option>
          </select>
          <button className="h-9 px-6 rounded-lg bg-orange-500 text-white font-medium cursor-pointer">
            Apply
          </button>
        </div>
      </nav>

      {/* PAGE HEADING */}
      <section className="px-4 md:px-10 mt-4">
        <h1 className="text-lg md:text-xl font-semibold">Projects</h1>
        <p className="text-xs md:text-sm text-gray-600 mt-1">
          See through your projects and the progress
        </p>

        <p className="text-xs text-gray-600 mt-2">
          <span className="text-[#4F46E5] cursor-pointer">App</span> › Projects
        </p>
      </section>

      {/* TABS + TOOLS */}
      <div className="px-4 md:px-10 mt-6 flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">

        {/* Tabs */}
        <div className="flex flex-wrap gap-3">
          {["Overview", "Details", "Task", "Milestones", "Notes"].map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabClick(tab)}
              className={`px-5 py-2 rounded-full border text-sm cursor-pointer font-medium
                ${
                  tab === "Task"
                    ? "bg-[#0C2D57] text-white border-[#0C2D57]"
                    : "bg-white border-gray-300"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right Action Buttons */}
        <div className="flex flex-col md:items-end gap-4 w-full md:w-auto">

          {/* Phone + Mail */}
          <div className="flex items-center gap-3">
            <Image
              src="/phoneproject.png"
              alt="Phone"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <Image
              src="/mailproject.png"
              alt="Mail"
              width={40}
              height={40}
              className="w-9 h-9 md:w-10 md:h-10"
            />
          </div>

          {/* Search Row */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="flex items-center bg-white border rounded-lg px-3 w-full md:w-72 h-10">
              <Search size={14} className="text-gray-500" />
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

      {/* KANBAN BOARD SECTION */}
      <section className="px-4 md:px-10 mt-8">
        <div className="bg-white rounded-2xl p-4 md:p-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "New", underline: "bg-[#DADDE6]", badge: "bg-[#EEF0F5] text-gray-600" },
              { title: "InProgress", underline: "bg-[#DADDE6]", badge: "bg-[#EEF0F5] text-gray-600" },
              { title: "Awaiting feedback", underline: "bg-[#FF8A3D]", badge: "bg-[#FFE9DC] text-[#FF8A3D]" },
              { title: "Completed", underline: "bg-[#22C55E]", badge: "bg-[#DCFCE7] text-[#22C55E]" },
            ].map((col) => (
              <div key={col.title} className="space-y-4">

                {/* Column Header */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">{col.title}</span>
                    <span className={`text-[11px] px-2 py-[2px] rounded-full ${col.badge}`}>
                      4
                    </span>
                  </div>
                  <div className={`h-[2px] w-full rounded-full ${col.underline}`} />
                </div>

                {/* Task Cards */}
                {[1, 2, 3].map((task) => (
                  <div
                    key={task}
                    className="bg-white rounded-xl border border-[#EEF0F5] p-4 space-y-3 shadow-sm"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium">Get project</h4>
                      <MoreHorizontal size={16} className="text-gray-500" />
                    </div>

                    <p className="text-xs text-gray-500 leading-tight">
                      Web Development and Digital Marketing
                    </p>

                    <div className="text-xs text-gray-500 space-y-[2px]">
                      <p>Created: 11.05.2024</p>
                      <p>Due: 11.08.2024</p>
                      <p>Assigned To: Kalim Hussain</p>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-xs px-3 py-[3px] rounded-full bg-[#FFE9DC] text-[#FF8A3D]">
                        High
                      </span>

                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-gray-300" />
                        <div className="w-6 h-6 rounded-full bg-gray-300" />
                        <div className="w-6 h-6 rounded-full bg-gray-300" />
                      </div>
                    </div>

                    <div className="flex justify-between items-center border-t pt-2 text-xs text-gray-500">
                      <span>💬 8 • 🔗 3</span>
                      <span>Client: John Company</span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </section>
    </main>
  );
}
