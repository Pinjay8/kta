import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
            <div>
                <Link href="/"></Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-3xl">
                <ApplicationLogo />
                <h4 className="text-2xl  text-center font-extrabold py-1">
                    DPC PDI PERJUANGAN <br />
                    KOTA MAGELANG
                </h4>
                {children}
            </div>
        </div>
    );
}
