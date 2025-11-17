import { MdWbSunny } from "react-icons/md";
import { FaLocationCrosshairs } from "react-icons/fa6";

export default function Navbar() {
    return (
        // Nav bar it has small shadow it is stick to the top z-index it 50 and background color is white 
        <nav className="shadow-sm sticky top-0 z-50 bg-white">
            {/*
            The height of the nav is 80px it width is full, it's display type if flex
            the items are justified in center and items are also center max with is 7xl padding at x is 3
            margin at is auto
            */}
            <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-gray-800 text-3xl font-semibold ">
                        Weather
                        < MdWbSunny className="text-3xl mt-1  text-yellow-300"/>
                    </h2>
                </div>
            </div>
            
        {/*Search Bar*/}
            <section className="flex gap-2 items-center">
                <FaLocationCrosshairs className="text-3xl text-gray-300 hover:opacity-20  " />
            </section>
        </nav>
    )
}