import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function TambahKegiatan({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Super Admin Dashboard
                </h2>
            }
        >
            <Head title="Super Admin Dashboard" />

            <div className="max-w-7xl px-5 mx-auto sm:px-0 lg:px-0">
                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div className="min-h-screen bg-white text-gray-900">
                        <main className=" sm:px-6 lg:px-8 pt-4">
                            <div className="p-6 text-gray-900">
                                You're logged in as super admin!
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
