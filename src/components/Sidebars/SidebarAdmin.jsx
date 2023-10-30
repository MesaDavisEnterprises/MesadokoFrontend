import React from 'react'

import { Link } from 'react-router-dom';

import { useState } from "react";

import topicIcon from "../../assets/icons/topicIcon.svg";
import lessonIcon from "../../assets/icons/lessonIcon.svg";
import levelIcon from "../../assets/icons/levelIcon.svg";
import wordIcon from "../../assets/icons/wordIcon.svg";
import settingIcon from "../../assets/icons/settingIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";

import menuIcon from "../../assets/icons/menuIcon.svg";

import useAuth from '../../hooks/useAuth';

import '../../assets/styless.css';



const Sidebar = () => {

  const {logout} = useAuth();


  const menus = [
    {
      nombre: "Topics",
      link: "topics",
      icono: topicIcon,
    },
    {
      nombre: "Lessons",
      link: "lessons",
      icono: lessonIcon,
    },
    {
      nombre: "Levels",
      link: "levels",
      icono: levelIcon,
    },
    {
      nombre: "Words",
      link: "words",
      icono: wordIcon,
    },
    {
      "nombre": "Quizzes",
      "link": "quizzes",
      "icono": levelIcon
    },
    {
      "nombre": "Tickets",
      "link": "tickets",
      "icono": levelIcon
    },
    {
      nombre: "Settings",
      link: "",
      icono: settingIcon,
      margin: true,
    },
    {
      nombre: "Log Out",
      link: "logout",
      icono: logoutIcon,
    },
    
  ];

  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`bg-blue-500 min-h-screen ${open ? "w-72":'w-[64px]'} duration-500 w-60 px-4 dark:bg-gray-800`}
        
       >
        <div className="py-3 flex justify-end">
          <img
            src={menuIcon}
            alt="menu"
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              
              onClick={menu?.nombre === "Log Out" ? logout : null}
              to={menu?.link}
              key={i}
              className= {`${
                menu?.margin && "mt-5"
              } group hover:bg-orange-600 selection:bg-orange-600 flex items-center text-sm gap-3.5 p-2 rounded-md hover:transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100 `}
            >
              <img src={menu?.icono} alt={menu?.nombre} />

              <p
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } block mb-2 text-sm font-medium text-white dark:text-white`}
                style={{
                  transitionDelay:`${i+2}00ms`
                }}
                
              >
                {menu?.nombre}
              </p>

              <p className={`${open && 'hidden'} absolute left-48 bg-white dark:bg-gray-800 font-semibold whitespace-pre text-gray-900 dark:text-white rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:overflow-visible group-hover:w-fit`}>
                 {menu?.nombre}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

