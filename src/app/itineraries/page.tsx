"use client";

import * as React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import { QuestionMark } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { FilterAltOutlined } from "@mui/icons-material";


export default function Page() {


  return (
    <div>
      {/* Welcome & profile */}
      <div className="flex justify-between">
        <div className="text-lg">Welcome</div>
        <div className="flex gap-3">
          <Image src="/img/pepe.png" width={32} height={32} alt="Logo Auxo" />
          <div className="text-lg">Pepe Ladino</div>
          <button className="flex items-center justify-center bg-[#6C9DE81F] text-[#6C9DE8] rounded w-8 h-8">
            <QuestionMark fontSize="small"></QuestionMark>
          </button>
        </div>
      </div>


      <div className="mt-14">
        {/* Container for search bar and filter button */}
        <div className="flex items-center space-x-2">
          {/* search bar */}
          <div className="flex bg-gray-100 rounded-md px-4 py-2 w-full max-w-xs">
            <Search className="text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full bg-transparent outline-none text-gray-600 placeholder-gray-400"
            />
          </div>
          {/* filter button */}
          <Button
            id="basic-button"
            sx={{
              backgroundColor: "#F2F2F2",
              color: "#01C2D2",
              borderRadius: "8px",
              width: "40px",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "&:hover": {
                backgroundColor: "#E0E0E0",
              },
            }}
          >
            <FilterAltOutlined />
          </Button>
          </div> 
          </div>         
    </div>
  );
}
