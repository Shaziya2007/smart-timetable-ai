import { Bell, Search, UserCircle } from "lucide-react";

function Navbar() {

    return (

        <header className="bg-white shadow-sm flex justify-between items-center px-8 py-4">

            <h2 className="font-bold text-2xl">

                Dashboard

            </h2>

            <div className="flex items-center gap-4">

                <div className="flex items-center border rounded-lg px-3">

                    <Search size={18} />

                    <input

                        type="text"

                        placeholder="Search..."

                        className="outline-none px-2 py-2"

                    />

                </div>

                <Bell className="cursor-pointer" />

                <UserCircle size={34} />

            </div>

        </header>

    );

}

export default Navbar;