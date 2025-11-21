import { IoSearch } from "react-icons/io5";
import { ChangeEventHandler, FormEventHandler } from "react";

type Props = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    onSubmit: FormEventHandler<HTMLFormElement> | undefined;
}

export default function Searchbar(props: Props) {
    return (
        <div>
            <form
                onSubmit={props.onSubmit}
                className="flex relative items-center justify-center h-10"
            >
                <input
                    type="text"
                    placeholder="Search"
                    value={props.value}
                    className="px-4 py-4 w-[230px] border border-gray-300 rounded-l-md focus:outline-none
                    focus:border-blue-500 h-full"
                    onChange={props.onChange}
                />
                {/*Creating button for search*/}
                <button className="px-4 py-5 bg-blue-500 text-white rounded-r-md focus:border-blue-500
                    focus:outline-none hover:bg-blue-600 h-full">
                    <IoSearch />
                </button>
            </form>
        </div>
    );
};