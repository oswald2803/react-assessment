import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center items-center gap-8">
      <Image src="logos/auxo.svg" width={640} height={134} alt="Logo Auxo"/>
      <Link href="/itineraries" className="px-12 py-1 bg-[#DDF0F2] text-[#01C2D2] text-lg rounded-lg shadow hover:shadow-lg hover:-translate-y-1 transition-transform">Start</Link>  
    </div>
  )
}
