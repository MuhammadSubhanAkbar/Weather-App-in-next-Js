import { MdWbSunny } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";
import Searchbar from "./Searchbar";

export default function Navbar() {
    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
            <div className="h-[80] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                {/* Left side */}
                <div className="flex items-center justify-between gap-2">
                    <h2 className="text-3xl mt-1 text-yellow-300">
                        Weather
                        <MdWbSunny className="text-3xl mt-1 text-yellow-300"/>
                    </h2>
                </div>

                {/*Icons*/}
                <section className="flex gap-2 items-center mr-[190px] mb-3">
                    <FaLocationCrosshairs className="text-2xl text-gray-950 hover:opacity-80 cursor-pointer"/>
                    <HiLocationMarker className="text-2xl text-gray-950 hover:opacity-80 cursor-pointer" />

                    {/*For Form later*/}
                    <p>India</p>
                    <div>
                    {/*    Search box     */}
                        <Searchbar/>
                    </div>
                </section>

            </div>
        </nav>
    )
}