import React from "react";
import { motion } from "framer-motion";
import { Menu, Calendar, MoreVertical } from "lucide-react";

export default function DashboardLayout() {
  // Sample stats
  const stats = [
    { title: "To Pay", value: 129 },
    { title: "Ready Pick UP", value: 1325 },
    { title: "In Transit", value: 50 },
    { title: "Ready to Deliver", value: 50 },
    { title: "Delivered", value: 50 },
  ];

  return (
    <div className="container mx-auto min-h-screen flex bg-[#F5F6F5] overflow-hidden">
      <aside className="hidden md:flex w-64 bg-white border-r border-gray-200 flex-col p-5">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-10">
          <motion.div
            className="w-9 h-9 rounded-md bg-lime-400"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          />
          <p className="text-xl font-bold">ZapShift</p>
        </div>

        {/* Sidebar Menu */}
        <div className="text-sm font-medium text-gray-700">
          <p className="text-[12px] text-gray-500 mb-2">MENU</p>

          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-2 bg-lime-300/60 px-4 py-2 rounded-md font-semibold">
              📊 Dashboard
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              🚚 Deliveries
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              🧾 Invoices
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              🏬 Stores
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              💳 Pricing Plan
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              📍 Coverage Area
            </button>
          </div>

          <p className="text-[12px] text-gray-500 mt-6 mb-2">GENERAL</p>
          <div className="flex flex-col gap-2">
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              ⚙️ Settings
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              🔐 Change Password
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md">
              ❓ Help
            </button>
            <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-500 rounded-md">
              🚪 Logout
            </button>
          </div>
        </div>
      </aside>

      {/* ------------------------------------------------------------- */}
      {/* RIGHT MAIN SECTION */}
      {/* ------------------------------------------------------------- */}
      <main className="flex-1 flex flex-col overflow-y-auto">
        {/* -------------------- TOP HEADER -------------------- */}
        <header className="w-full bg-[#EBEEEC] border-b border-gray-300 px-5 md:px-10 py-6 flex justify-between items-center">
          {/* Mobile Sidebar Toggle */}
          <button className="md:hidden">
            <Menu size={22} />
          </button>

          <div>
            <h1 className="text-2xl font-semibold text-gray-800">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 text-sm">
              You can access all your data and information from anywhere.
            </p>
          </div>

          {/* Right side avatar */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border flex items-center justify-center">
              🔔
            </div>

            <div className="text-right hidden sm:block">
              <p className="font-semibold text-gray-700">Zahid Hossain</p>
              <p className="text-xs text-gray-500">Admin</p>
            </div>

            <div className="w-11 h-11 rounded-full bg-gray-300" />
          </div>
        </header>

        {/* -------------------- ADD PARCEL BUTTON -------------------- */}
        <div className="px-5 md:px-10 mt-6 flex justify-end">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className="bg-lime-400 px-6 py-3 rounded-lg font-semibold shadow-sm hover:bg-lime-500 transition"
          >
            + Add Parcel
          </motion.button>
        </div>

        {/* -------------------- STATS CARDS -------------------- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 px-5 md:px-10 mt-6">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl border shadow-sm hover:shadow-md transition cursor-pointer"
            >
              <div className="flex flex-col items-start gap-3">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                  🛵
                </div>
                <p className="text-gray-500 text-sm">{item.title}</p>
                <p className="text-3xl font-bold text-gray-800">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </section>

        {/* -------------------- OVERALL STATISTICS -------------------- */}
        <section className="px-5 md:px-10 mt-10 mb-20">



        </section>
      </main>
    </div>
  );
}
