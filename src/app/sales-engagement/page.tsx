

"use client";

import {
Search,
Plus,
Bell,
Settings,
ChevronDown,
X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function SalesEngagementPage() {
  const router = useRouter();
return (
<main className="w-full min-h-screen bg-[#F6F7FB] font-sans text-[#1B1E2B] overflow-auto">

  {/* ================= HEADER ================= */}
  <header className="w-full bg-white">
    {/* ROW 1 */}
    <div className="h-[72px] flex items-center px-6 md:px-12">
      {/* LEFT */}
      <div className="w-[200px] flex items-center">
        <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer">
          <img
            src="logo.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* CENTER SEARCH */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[420px] h-[40px] rounded-full border border-[#D6DAE5] bg-white flex items-center px-3 gap-2">
          <Search size={14} className="text-[#9CA3AF]" />
          <input
            placeholder="Search..."
            className="text-[13px] w-full bg-transparent outline-none placeholder:text-[#9CA3AF]"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[200px] flex items-center justify-end gap-3">
        
        <div className="w-9 h-9 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
          <Plus size={16} />
        </div>
        <div className="w-9 h-9 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
          <Settings size={16} />
        </div>
        <div className="w-9 h-9 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
          <Bell size={16} />
        </div>
        <div className="w-9 h-9 rounded-full overflow-hidden cursor-pointer">
          <img
            src="/profileavatar.png"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    {/* ROW 2 */}
    <div className="h-[64px] flex items-center px-6 md:px-12">
      {/* LEFT */}
      <div className="w-[200px] flex items-center gap-2">
        <div className="w-7 h-7 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
          <div className="grid grid-cols-2 gap-[3px]">
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="w-[4px] h-[4px] bg-[#2B1C7A] rounded-full" />
            ))}
          </div>
        </div>
        <span className="text-[15px] font-medium text-[#2B1C7A]">
          Sales Engagement
        </span>
        
      </div>
      {/* DASHBOARD BUTTON BELOW ICONS */}
  <button
    onClick={() => router.push("/")}
    className="px-4 py-[6px] text-[13px] bg-[#2B1C7A] text-white rounded-full shadow-sm hover:bg-[#1F135A] transition cursor-pointer"
  >
    Dashboard
  </button>

      {/* CENTER */}
      <div className="flex-1 flex justify-center items-center gap-3">
        <span className="text-[13px] text-[#6B7280]">Work Queue</span>

        <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-[#F6F7FB] border border-[#D6DAE5] cursor-pointer">
          <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center">
            <img src="/profileavatar.png" className="w-5 h-5" />
          </div>

          <span className="text-[13px] font-medium text-[#2B1C7A]">Miguel Braswell</span>

          <ChevronDown size={12} className="text-[#6B7280]" />
          <X size={12} className="text-[#6B7280] cursor-pointer" />
        </div>
      </div>

      <div className="w-[200px]" />
    </div>
  </header>

  {/* ================= BODY ================= */}
  <section className="flex flex-col lg:flex-row w-full">

    {/* ================= SIDEBAR (NO SCROLL) ================= */}
    <aside className="w-full lg:w-[300px] bg-[#F7F8FD] px-5 py-6">

      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[14px] font-medium text-[#1E1B4B]">Work Queue</h3>

        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
            <img src="/magniglass.png" className="w-8 h-8" />
          </div>
          <div className="w-8 h-8 rounded-full border border-[#E6E8F0] flex items-center justify-center cursor-pointer">
            <img src="/sidebar_email.png" className="w-8 h-8" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 rounded-full bg-[#2B1C7A] text-white text-[12px] cursor-pointer">
          Cadences
        </button>
        <button className="px-4 py-2 rounded-full border border-[#E6E8F0] text-[12px] text-[#2B1C7A] cursor-pointer">
          My Feed
        </button>
        <button className="px-4 py-2 rounded-full border border-[#E6E8F0] text-[12px] text-[#2B1C7A] cursor-pointer">
          My List
        </button>
      </div>

      {/* Dropdown */}
      <div className="mb-4">
        <div className="flex items-center justify-between px-4 py-2 rounded-full border border-[#E6E8F0] bg-white text-[12px] text-[#2B1C7A] cursor-pointer">
          <span>Event Cadence (10)</span>
          <img src="/vector.png" className="w-3 h-3" />
        </div>
      </div>

      {/* CONTACT LIST */}
      <div className="space-y-3">
        {[
          {
            active: true,
            name: "Miguel Braswell",
            role: "Administrative Assistant",
            score: 69,
            scoreBg: "bg-[#5FB3F6]",
            avatar: "/contact.png",
          },
          {
            active: false,
            name: "Andrea Wilcott",
            role: "Chief Information Officer",
            score: 55,
            scoreBg: "bg-orange-400",
            avatar: "/ps1.png",
          },
          {
        active: false,
        name: "Adrian Newsom",
        role: "Head of Partnerships",
        score: 44,
        scoreBg: "bg-red-500",
        avatar: "/ps3.png",
      },
      {
        active: false,
        name: "Alisha Claude",
        role: "VP of Marketing",
        score: 41,
        scoreBg: "bg-orange-500",
        avatar: "/ps2.png",
      },
        ].map((u, i) => (
          <div
            key={i}
            className={`relative rounded-2xl p-4 cursor-pointer ${
              u.active ? "bg-[#1E3FA3] text-white" : "bg-white"
            }`}
          >
            {/* ICONS */}
            <div className="absolute right-3 top-3 flex flex-col gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  u.active ? "bg-white/20" : "border border-[#E6E8F0]"
                }`}
              >
                <img src="/sidebar_email.png" className="w-8 h-8" />
              </div>

              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center cursor-pointer ${
                  u.active ? "bg-white/20" : "border border-[#E6E8F0]"
                }`}
              >
                <img src="/sidebararrow.png" className="w-8 h-8" />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-start gap-2">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={u.avatar} className="w-full h-full object-cover" />
              </div>

              <div>
                <p
                  className={`text-[13px] font-medium ${
                    u.active ? "text-white" : "text-[#1E1B4B]"
                  }`}
                >
                  {u.name}
                </p>
                <p
                  className={`text-[11px] ${
                    u.active ? "opacity-80" : "text-gray-500"
                  }`}
                >
                  {u.role}
                </p>
              </div>

              <div className="flex items-center gap-2 mt-2">
                <span
                  className={`text-[10px] px-3 py-1 rounded-full ${
                    u.active ? "bg-white/20" : "bg-[#F2F3F7]"
                  }`}
                >
                  12 Hours Overdue
                </span>
                <span
                  className={`w-7 h-7 rounded-full text-white text-[11px] flex items-center justify-center ${u.scoreBg}`}
                >
                  {u.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </aside>

    {/* ================= MAIN CONTENT ================= */}
    <section className="flex-1 overflow-y-auto px-6 py-6 space-y-6">

      {/* CONTACT + COMPANY */}
      <div className="flex flex-wrap items-center gap-10">

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img src="/profileavatar.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-[11px] text-[#8A8FA3]">Contact</p>
            <p className="text-[14px] font-medium text-[#1E1B4B]">Miguel Braswell</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
            <img src="/company.png" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <p className="text-[11px] text-[#8A8FA3]">Company</p>
            <p className="text-[14px] font-medium text-[#1E1B4B]">Ominey Canada Ltd</p>
          </div>
        </div>

      </div>

      {/* PIPELINE */}
      <div className="relative flex justify-between px-4 md:px-10">

        <div className="absolute left-0 right-0 top-1/2 h-[6px] bg-gradient-to-r from-[#6DB9E8] via-[#CFEAF9] to-[#ECECF4] rounded-full -translate-y-1/2" />

        {[
          { label: "Lead", state: "active" },
          { label: "Working", state: "active" },
          { label: "Qualified", state: "inactive" },
          { label: "Converted", state: "inactive" },
        ].map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center cursor-pointer">

            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.state === "active"
                  ? "bg-white border-[3px] border-[#6DB9E8]"
                  : "bg-[#1E1B4B]"
              }`}
            >
              <img
                src={step.state === "active" ? "/lead.png" : "/dollar.png"}
                className="w-8 h-8"
              />
            </div>

            <span className="text-[12px] mt-2 text-[#1E1B4B] font-medium">
              {step.label}
            </span>

          </div>
        ))}

      </div>

      {/* LEAD INFO + CAMPAIGNS */}
      <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-6">

        {/* LEAD INFORMATION */}
        <div className="bg-white rounded-[24px] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/dollar.png" className="w-7 h-7" />
              <h3 className="text-[14px] font-semibold text-[#2B1C7A]">Lead Information</h3>
            </div>

            <div className="flex gap-2">
              <img src="/plus.png" className="w-8 h-8 rounded-full border cursor-pointer" />
              <img src="/pencil.png" className="w-8 h-8 rounded-full border cursor-pointer" />
            </div>
          </div>

          <div className="space-y-5 text-[13px]">
            <div className="flex gap-3">
              <img src="/bag.png" className="w-9 h-9 rounded-full bg-[#F4F5FB]" />
              <div>
                <p className="text-[11px] text-gray-400">Job Title</p>
                <p className="font-medium text-[#1E1B4B]">Administrative Assistant</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="/phone.png" className="w-9 h-9 rounded-full bg-[#F4F5FB]" />
              <div>
                <p className="text-[11px] text-gray-400">Phone</p>
                <p className="font-medium text-[#1E1B4B]">+11 705 555-1207</p>
              </div>
            </div>

            <div className="flex gap-3">
              <img src="/mail.png" className="w-9 h-9 rounded-full bg-[#F4F5FB]" />
              <div>
                <p className="text-[11px] text-gray-400">Email</p>
                <p className="font-medium text-[#1E1B4B]">mbraswell@ominex.com</p>
              </div>
            </div>

            <div>
              <p className="text-[11px] text-gray-400 mb-2">Source</p>
              <div className="flex gap-3">
                <img src="/s.png" className="w-9 h-9 rounded-full border cursor-pointer" />
                <img src="/T.png" className="w-9 h-9 rounded-full border cursor-pointer" />
                <img src="/L.png" className="w-9 h-9 rounded-full border cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        {/* CAMPAIGN HISTORY */}
        <div className="bg-white rounded-[24px] p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <img src="/dollar.png" className="w-7 h-7" />
              <h3 className="text-[14px] font-semibold text-[#2B1C7A]">Campaign History</h3>
            </div>

            <div className="flex gap-2">
              <img src="/plus.png" className="w-8 h-8 rounded-full border cursor-pointer" />
              <img src="/pencil.png" className="ww-8 h-8 rounded-full border cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* GOOGLE ADWORDS */}
            <div className="bg-[#F4F5FB] rounded-[20px] p-5 space-y-5 cursor-pointer">

              <div className="flex items-center gap-4">
                <img src="/googleadwords.png" className="w-12 h-12 rounded-xl bg-[#CFF0A4]" />

                <div className="flex-1">
                  <p className="font-medium text-[#1E1B4B]">Google Adwords</p>
                  <p className="text-[11px] text-gray-400">Status: Connected</p>
                </div>

                <img src="/dropdown.png" className="w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex justify-between text-[12px]">
                <div className="flex gap-2 items-start">
                  <img src="/type.png" className="w-6 h-6 rounded-full bg-white p-1" />
                  <div>
                    <p className="text-gray-400">Type</p>
                    <p className="font-medium text-[#1E1B4B]">Web Marketing</p>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <img src="/calendar.png" className="w-6 h-6 rounded-full bg-white p-1" />
                  <div>
                    <p className="text-gray-400">Start Date</p>
                    <p className="font-medium text-[#1E1B4B]">18.02.2025</p>
                  </div>
                </div>
              </div>

              <button className="w-full h-[40px] rounded-full bg-[#1E1B4B] text-white text-[13px] cursor-pointer">
                Send email
              </button>
            </div>

            {/* TWITTER */}
            <div className="bg-[#F4F5FB] rounded-[20px] p-5 space-y-5 cursor-pointer">

              <div className="flex items-center gap-4">
                <img src="/x.png" className="w-12 h-12 rounded-xl bg-[#1E1B4B]" />

                <div className="flex-1">
                  <p className="font-medium text-[#1E1B4B]">X-twitter Social Listening</p>
                  <p className="text-[11px] text-gray-400">Status: Engaged</p>
                </div>

                <img src="/dropdown.png" className="w-4 h-4 cursor-pointer" />
              </div>

              <div className="flex justify-between text-[12px]">
                <div className="flex gap-2 items-start">
                  <img src="/type.png" className="w-6 h-6 rounded-full bg-white p-1" />
                  <div>
                    <p className="text-gray-400">Type</p>
                    <p className="font-medium text-[#1E1B4B]">Social Media</p>
                  </div>
                </div>

                <div className="flex gap-2 items-start">
                  <img src="/calendar.png" className="w-6 h-6 rounded-full bg-white p-1" />
                  <div>
                    <p className="text-gray-400">Start Date</p>
                    <p className="font-medium text-[#1E1B4B]">06.03.2025</p>
                  </div>
                </div>
              </div>

              <button className="w-full h-[40px] rounded-full bg-[#1E1B4B] text-white text-[13px] cursor-pointer">
                Send email
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* EINSTEIN SCORING */}
      <section className="bg-white rounded-2xl p-6">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#1E1B4B] flex items-center justify-center">
              <img src="/dollar.png" className="w-9 h-9" />
            </div>
            <p className="text-[14px] font-medium text-[#1E1B4B]">Einstein Scoring</p>
          </div>

          <div className="w-9 h-9 rounded-full border flex items-center justify-center cursor-pointer">
            <img src="/sidebararrow.png" className="w-8 h-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="bg-[#F4F5FB] rounded-3xl p-8 flex flex-col md:flex-row gap-10 cursor-pointer">

            <div className="w-full md:w-[240px] h-[240px] flex items-center justify-center">
              <img src="/92.png" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-[14px] font-semibold text-[#1E1B4B] mb-5">Top Positives</p>

                <div className="space-y-4">

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/person.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Product Interest</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">Service</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/person.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Engagement Grade</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">85</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/email.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Lead Source</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">Cold Call</p>
                    </div>
                  </div>

                </div>
              </div>

              <button className="mt-6 px-8 py-2 rounded-full bg-[#1E1B4B] text-white text-[12px] font-medium w-fit cursor-pointer">
                Send email
              </button>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="bg-[#F4F5FB] rounded-3xl p-8 flex flex-col md:flex-row gap-10 cursor-pointer">

            <div className="w-full md:w-[240px] h-[240px] flex items-center justify-center">
              <img src="/55.png" className="w-full h-full object-contain" />
            </div>

            <div className="flex flex-col justify-between flex-1">
              <div>
                <p className="text-[14px] font-semibold text-[#1E1B4B] mb-5">Top Positives</p>

                <div className="space-y-4">

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/person.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Company is</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">Valid</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/person.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Engagement Grade</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">48</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center">
                      <img src="/email.png" className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-[12px] text-gray-500">Lead Source</p>
                      <p className="text-[13px] font-medium text-[#1E1B4B]">Specified</p>
                    </div>
                  </div>

                </div>
              </div>

              <button className="mt-6 px-8 py-2 rounded-full bg-[#1E1B4B] text-white text-[12px] font-medium w-fit cursor-pointer">
                Send email
              </button>
            </div>
          </div>

        </div>

      </section>

    </section>
  </section>

</main>


);
}