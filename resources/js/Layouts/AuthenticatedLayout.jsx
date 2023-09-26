import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RiFileEditLine } from "react-icons/ri";
import { RiSurveyLine } from "react-icons/ri";
import { BsDot } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "@inertiajs/react";
import Dropdown from "@/Components/Dropdown";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Authenticated({ user, header, children }) {

    const menus = [
        ...(user.role === "superadmin"
            ? [
                  // Additional menu items for superadmin role
                  {
                      name: "Dashboard Super Admin",
                      link: route("superAdminDashboard"),
                      icon: RiFileEditLine,
                  }
                  // Add more additional menu items for superadmin role if needed
              ]
            : [
                {
                    name: "Dashboard admin",
                    link: "adminDashboard",
                    icon: RiFileEditLine,
                }
            ]),
        { name: "Menu utama", link: "#", icon: BsDot, margin: true },
        {
            name: "Data Anggota",
            link: route("anggota"),
            icon: RiFileEditLine,
        },
        {
            name: "Kegiatan",
            link: route("kegiatan"),
            icon: RiFileEditLine,
        },
        { name: "Formulir", link: "#", icon: BsDot, margin: true },
        {
            name: "Formulir Pengajuan KTA",
            link: route("pengajuan"),
            icon: AiOutlineUser,
        },
        { name: "Akun", link: "#", icon: BsDot, margin: true },
        {
            name: "Profil Anda",
            link: route("profile.edit"),
            icon: AiOutlineUser,
        },
        {
            name: "Keluar",
            link: route("logout"),
            icon: RiLogoutCircleRLine,
            method: "post",
            as: "button",
        },
        
    ];
    const [open, setOpen] = useState(window.innerWidth >= 768);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
            const isMobileScreen = window.innerWidth < 768;
            setIsMobile(isMobileScreen);
            setOpen(!isMobileScreen);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <section className="flex flex-row">
            <div
                className={`bg-[#a70000] min-h-screen overflow-y-auto ${
                    open ? "w-72" : "w-16"
                } duration-500 text-gray-100 px-4`}
            >
                <div className="py-3 flex justify-end">
                    <HiMenuAlt3
                        size={26}
                        className="cursor-pointer"
                        onClick={() => setOpen(!open)}
                    />
                </div>

                <div className={`pb-6 ${open && "flex items-center"}`}>
                    <ApplicationLogo className="m-3" />

                    <h2
                        style={{
                            transitionDelay: `300ms`,
                        }}
                        className={`ml-3 whitespace-pre duration-500 font-poppins font-black ${
                            !open && "hidden"
                        }`}
                    >
                        PDIP Magelang Tengah
                    </h2>
                </div>

                <div className="mt-4 flex flex-col gap-4 relative">
                    {menus?.map((menu, i) => (
                        <Link
                            href={menu?.link}
                            key={i}
                            method={menu?.method}
                            as={menu?.as}
                            className={` ${
                                menu?.margin &&
                                "mt-5 -mb-2 font-black pointer-events-none text-lg "
                            } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#391212b0] rounded-md`}
                        >
                            <div>
                                {React.createElement(menu?.icon, {
                                    size: "20",
                                })}
                            </div>
                            <h2
                                style={{
                                    transitionDelay: `${i + 3}00ms`,
                                }}
                                className={`whitespace-pre duration-500 ${
                                    !open &&
                                    "opacity-0 translate-x-28 overflow-hidden"
                                }`}
                            >
                                {menu?.name}
                            </h2>
                            <h2
                                className={`${
                                    open && "hidden"
                                } absolute left-48 bg-white font-semibold whitespace-pre text-red-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
                            >
                                {menu?.name}
                            </h2>
                        </Link>
                    ))}
                </div>
            </div>

            <div className=" bg-gray-200 flex-1 flex flex-col min-w-0">
                <div className="flex-grow h-screen bg-white overflow-y-auto">
                    <div className="">
                        <div className="flex justify-between bg-white">
                            <header>
                                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    {header}
                                </div>
                            </header>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                                <div className="ml-6 relative right-5">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ml-2 -mr-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>
                        </div>
                        {isMobile && open ? null : children}
                    </div>
                </div>
            </div>
        </section>
    );
}
