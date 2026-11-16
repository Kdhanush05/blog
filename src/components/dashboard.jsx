
import React from "react";
import Navbar from "./navbar";


const Dashboard = () => {
    return (
        <div className="min-h-screen bg-slate-950 text-white">

            <Navbar />

            <main className="max-w-7xl mx-auto px-6 py-12">

                {/* Welcome Section */}
                <div className="mb-10">
                    <p className="text-sm font-medium text-indigo-400 mb-2">
                        OVERVIEW
                    </p>

                    <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Welcome to the Dashboard
                    </h1>

                    <p className="text-slate-400 mt-3">
                        Manage your account and explore everything from one place.
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Account Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition duration-300">
                        <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 text-2xl mb-5">
                            👤
                        </div>

                        <h2 className="text-lg font-semibold">
                            My Account
                        </h2>

                        <p className="text-sm text-slate-400 mt-2">
                            View and manage your account information.
                        </p>
                    </div>

                    {/* Security Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition duration-300">
                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 text-2xl mb-5">
                            🔒
                        </div>

                        <h2 className="text-lg font-semibold">
                            Security
                        </h2>

                        <p className="text-sm text-slate-400 mt-2">
                            Your account authentication is secured by Firebase.
                        </p>
                    </div>

                    {/* Dashboard Card */}
                    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-indigo-500/50 transition duration-300">
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-400 text-2xl mb-5">
                            📊
                        </div>

                        <h2 className="text-lg font-semibold">
                            Dashboard
                        </h2>

                        <p className="text-sm text-slate-400 mt-2">
                            Your personal dashboard is ready to use.
                        </p>
                    </div>

                </div>

                {/* Bottom Welcome Panel */}
                <div className="mt-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-indigo-950 to-slate-900 p-8 md:p-10">

                    <h2 className="text-2xl font-bold">
                        Everything in one place.
                    </h2>

                    <p className="text-slate-400 mt-3 max-w-xl">
                        Welcome to your workspace. You can manage your account
                        and access your application features from here.
                    </p>

                    <div className="mt-6">
                        <span className="inline-flex items-center gap-2 text-sm text-emerald-400 font-medium">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            Dashboard Active
                        </span>
                    </div>

                </div>

            </main>

        </div>
    );
};

export default Dashboard;
 