"use client";

import { useParams } from "next/navigation";
import api from "../../../../api.json";
import Image from "next/image";
import {QuestionMark} from "@mui/icons-material";
import {Flight} from '@mui/icons-material';

export default function Page() {
  
    const { id } = useParams();

    const logo: { [key: string]: string } = {
        "Wizz Air": "../logos/wizzair.svg",
        "British Airways": "../logos/britishAirways.svg",
        "Lufthansa": "../logos/lufthansa.svg",
      };

    
      const itinerary = api.itineraries.find(it => it.id == id);
      const idLegs = itinerary!.legs;

  return (
    <div>

      {/* Title and profile */}
      <div className="flex justify-between">
        <div className="text-lg">{id}</div>
        <div className="flex gap-3">
          <Image src="/img/pepe.png" width={32} height={32} alt="Logo Auxo" />
          <div className="text-lg">Pepe Ladino</div>
          <button className="flex items-center justify-center bg-[#6C9DE81F] text-[#6C9DE8] rounded w-8 h-8">
            <QuestionMark fontSize="small"></QuestionMark>
          </button>
        </div>
      </div>

      {/* EMPIEZA */}
      
      { idLegs.map( (le) => {
    
        
    const it = api.legs.find( (l) => l.id == le);

return (
  <div key={it!.id} className="flex flex-col mt-24">
  {/* Card */}
  <div className="flex items-center justify-center">
    <div className="flex flex-col justify-center items-center w-[500px] gap-5 rounded-lg shadow-md">

      {/* Header */}
      <div className="bg-[#f0f0f0] w-full p-2 rounded-t-lg">
        <div className="flex flex-row justify-between my-2">
          <div className="flex items-center">
            <Image src={logo[it!.airline_name]} alt="Logo" width={24} height={24} className="mr-2" />
            <span>{itinerary?.agent}</span>
          </div>
          <div className="text-[#01C2D2]">
            {le}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full items-start ml-24 mb-6">
        <h1>AIRLINE ID: {it!.airline_id}</h1>
      </div>
      <div className="flex justify-around w-full items-center text-center">
        {/* Departure Info */}
        <div>
          <div>
            <h2 className="text-lg font-bold">{it!.departure_airport}</h2>
          </div>
          <div className="flex gap-7">
            <Flight className="rotate-90"></Flight>
            <p className="text-gray-600">{it!.departure_time}</p>
          </div>
        </div>

        {/* Arrival Info */}
        <div>
          <div>
            <h2 className="text-lg font-bold">{it!.arrival_airport}</h2>
          </div>
          <div className="flex gap-7">
            <Flight className="rotate-90"></Flight>
            <p className="text-gray-600">{it!.arrival_time}</p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className="flex w-full justify-around text-gray-600 text-sm my-5">
        <div className="flex">
          <p>Stops:</p>
          <p className="font-medium">{it!.stops}</p>
        </div>
        <div className="flex">
          <p>Duration Mins: </p>
          <p className="font-medium">{it!.duration_mins}</p>
        </div>
      </div>
    </div>
  </div>
</div>
)

})}
      {/* CIERRA */}
      
    </div>
  );
}
