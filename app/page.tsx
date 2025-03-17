"use client";
import { useState } from "react";
import { FaUserMd, FaCalendarAlt, FaPlus, FaBell, FaCog, FaFileInvoiceDollar, FaStethoscope, FaSearch } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowDown, IoIosArrowForward, IoMdLogOut } from "react-icons/io";
import { FiMoreVertical } from "react-icons/fi";
import Image from "next/image";
import { BiArrowToBottom } from "react-icons/bi";

const patients = [
  { pid: "CCC.10", name: "Mr. Manish Kumar", dob: "20-Sep-2002", gender: "Male", mobile: "+91 00000 00000", email: "manish@gmail.com", lastAppointment: "10-March-2025" },
  { pid: "CCC.9", name: "Mrs. Rohini Kumar Mishra", dob: "20-Sep-2002", gender: "Female", mobile: "+91 00000 00000", email: "-", lastAppointment: "-" },
  { pid: "CCC.8", name: "Dummy Name", dob: "20-Sep-2002", gender: "Male", mobile: "+91 00000 00000", email: "-", lastAppointment: "10-March-2025" },
];

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-40 bg-white shadow-md p-5 flex flex-col items-center">
        <h1 className="text-2xl font-bold flex flex-wrap text-green-500 text-center">Clini <span className="text-black">Vention</span></h1>
        <nav className="mt-10 flex-1 w-full">
          <ul className="space-y-4 w-full">
            <li className="flex flex-col items-center p-2 hover:bg-green-100 text-black hover:text-green-600  rounded-md w-full">
              <FaUserMd className="mb-1" /> <span>Patient</span>
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-green-100 text-black hover:text-green-600 rounded-md w-full">
              <FaCalendarAlt className="mb-1" /> <span>Appointment</span>
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-green-100 text-black hover:text-green-600 rounded-md w-full">
              <FaFileInvoiceDollar className="mb-1" /> <span>Billing</span>
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-green-100 text-black hover:text-green-600 rounded-md w-full">
              <FaStethoscope className="mb-1" /> <span>Doctor</span>
            </li>
            <li className="flex flex-col items-center p-2 hover:bg-green-100 text-black hover:text-green-600 rounded-md w-full">
              <FaCog className="mb-1" /> <span>Setting</span>
            </li>
          </ul>
        </nav>
        <div className="mt-auto w-full">
          <button className="flex flex-col items-center w-full p-2 text-red-600 hover:bg-gray-200 rounded-md">
            <IoMdLogOut className="mb-1" /> <span>Log Out</span>
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="flex-1 px-2">
        {/* Header */}
        <div className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mb-4">
          <h2 className="text-lg font-semibold">Curevention Clinic Center</h2>
          <div className="flex items-center space-x-4">
            <FaBell className="text-gray-600" />
            <div className="flex items-center space-x-2">
              <Image src="/image.png" alt="User" width={32} height={32} className="rounded-full" />
              <span>Dr. Suchita Gupta</span>
            </div>
          </div>
        </div>
        
        {/* Table Section */}
        <div className="flex justify-between items-center">
          <div className="flex gap-1">
          <div className="flex items-center space-x-2 border rounded-md px-4 py-2 bg-gray-100">
            <FaSearch className="text-gray-500" />
            <input type="text" placeholder="Search" className="bg-transparent outline-none" />
          </div>
          <button className="flex items-center bg-gray-200 text-black px-4 py-2 rounded-md">
            Filter
          </button>
          </div>
          <div className="flex items-center gap-1">
          <div className="flex flex-row items-center bg-gray-200 px-4 py-2 rounded-md">
             <IoIosArrowBack className="" />
            </div>
            <div className="flex items-center bg-gray-200 px-4 py-2 rounded-md">
              <span className="mr-2">March 10, 2025</span>
            </div>
            <div className="flex flex-row items-center bg-gray-200 px-4 py-2 rounded-md">
              <span className="">Today</span>
            </div>
            <div className="flex flex-row items-center bg-gray-200 px-4 py-2 rounded-md">
            <IoIosArrowDown className="" />
            </div>
            <div className="flex flex-row items-center bg-gray-200 px-4 py-2 rounded-md">
            <IoIosArrowForward className="" />
            </div>
            
            <button className="flex items-center bg-gray-100 border border-green-800 text-green-800 px-4 py-2 rounded-md">
            <FaPlus className="mr-2" /> Add New Patient
          </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg mt-4 p-4">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="p-2">PID</th>
                <th className="p-2">Name</th>
                <th className="p-2">Date of Birth</th>
                <th className="p-2">Gender</th>
                <th className="p-2">Mobile</th>
                <th className="p-2">Email</th>
                <th className="p-2">Last Appointment</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((patient, index) => (
                <tr key={index} className="border-b">
                  <td className="p-2">{patient.pid}</td>
                  <td className="p-2">{patient.name}</td>
                  <td className="p-2">{patient.dob}</td>
                  <td className="p-2">{patient.gender}</td>
                  <td className="p-2">{patient.mobile}</td>
                  <td className="p-2">{patient.email}</td>
                  <td className="p-2">{patient.lastAppointment}</td>
                  <td className="p-2"><FiMoreVertical /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
