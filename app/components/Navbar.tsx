export default function Navbar() {
    return (
        <nav className="shadow-sm sticky top-0 z-50 bg-white">
            <div className="h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto">
                <div className="flex justify-center items-center gap-2">
                    <h2 className="text-gray-800 text-3xl font-semibold">Weather</h2>
                </div>
            </div>
        </nav>
    )
}