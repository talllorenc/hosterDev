"use client";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/UserContext/UserContext";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

const EntryPoint = ({ children }) => {
  const { setUserInfo } = useContext(UserContext);

  const fetchUserInfo = async (token) => {
    if (token) {
      try {
        const response = await fetch("http://localhost:8080/api/get_info_me", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUserInfo(userData);
        } else {
          console.error("Token verification failed");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    fetchUserInfo(token);
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </head>
      <body className={`${montserrat.className}`}>
        <Navbar />
        <div className="main_container">{children}</div>
      </body>
    </html>
  );
};

export default EntryPoint;
