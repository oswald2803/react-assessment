"use client";

import * as React from "react";
import api from "../../../api.json";
import Image from "next/image";
import Button from "@mui/material/Button";
import { CurrencyPound, QuestionMark, SentimentSatisfiedAlt, StarBorder } from "@mui/icons-material";
import { Search } from "@mui/icons-material";
import { FilterAltOutlined } from "@mui/icons-material";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";


export default function Page() {

    const logo: { [key: string]: string } = {
        "Wizzair.com": "logos/wizzair.svg",
        "British Airways": "logos/britishAirways.svg",
        "Lufthansa": "logos/lufthansa.svg",
        "Trip.com": "logos/tripco.svg",
        "Kiwi.com": "logos/kiwico.svg",
        "CheapFligths": "logos/cheapfly.svg",
      };

      const [searchTerm, setSearchTerm] = React.useState<string>("");

  const filteredItineraries = api.itineraries.filter((it) =>
    it.agent.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <FilterAltOutlined />
          </Button>
          </div> 
          <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem className="flex gap-3" onClick={handleClose}>
            <SentimentSatisfiedAlt></SentimentSatisfiedAlt>Most Popular
          </MenuItem>
          <MenuItem className="flex gap-3" onClick={handleClose}>
            <CurrencyPound></CurrencyPound>Price, Low to High
          </MenuItem>
          <MenuItem className="flex gap-3" onClick={handleClose}>
            <StarBorder></StarBorder>Rate, High to Low
          </MenuItem>
        </Menu>
      </div>
      <div className="flex mt-7">
        <p>Select the itinerary from the list below</p>
      </div>
      <div className=""></div>
      <div className="mt-10 mr-10">
        <div className="text-center ">
          <div className="grid grid-cols-4 gap-4">
            <div className="px-2 py-2">Id Itinerarie</div>
            <div className="px-2 py-2">Price</div>
            <div className="px-2 py-2">Agent</div>
            <div className="px-2 py-2">Agent rating</div>
          </div>
          {filteredItineraries.map((it) => (
            <Link
              href={`/itineraries/${it.id}`}
              key={it.id}
              className="grid grid-cols-4 gap-4 border-2 border-[#c5c5c5] hover:bg-[#ccffe7] hover:border-[#8aaf9e] mb-4 rounded-lg"
            >
              <div className="px-4 py-3">{it.id}</div>
              <div className="px-4 py-3">{it.price}</div>
              <div className="flex gap-2 justify-center px-4 py-3">
                <Image src={logo[it.agent]} alt="Logo" width={18} height={22} />
                {it.agent}
              </div>
              <div className="px-4 py-3">{it.agent_rating}</div>
            </Link>
          ))}
        </div>
      </div>       
    </div>
  );
}
