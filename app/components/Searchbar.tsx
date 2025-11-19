import { IoSearch } from "react-icons/io5";

type Props = {
    value: string;
    onchange: (value: string) => void;
}

export default function Searchbar() {
    return (
        <div>
            <form className="flex relative items-center justify-center h-10">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-4 w-[230] border border-gray-300 round-l-md focus:outline-none
                    focus:border-blue-500 h-full"
                />
                {/*Creating button for search*/}
                <button className="px-4 py-5 bg-blue-500 text-white rounded-r-md focus:border-blue-500
                    focus:outline-none hover-blue-600 h-full">
                    <IoSearch  />
                </button>
            </form>
        </div>
    );
};
