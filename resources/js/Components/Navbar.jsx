import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function Navbar({ user }) {
    return (
        // <div className="navbar bg-base-100">
        //     <div className="flex-1">
        //         <a className="btn btn-ghost normal-case text-xl">React News</a>
        //     </div>
        //     <div className="flex-none gap-2">
        //         <div className="form-control">
        //             <input
        //                 type="text"
        //                 placeholder="Search"
        //                 className="input input-bordered"
        //             />
        //         </div>

        //     </div>
        // </div>
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                    >
                        <li>
                            <a href="/">Homepage</a>
                        </li>
                        <li>
                            <a
                                href="https://kisnak21.github.io/Personal-Portfolio"
                                target="_blank"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost normal-case text-xl">React Blog</a>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-ghost btn-circle avatar"
                    >
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                    >
                        {!user ? (
                            <>
                                <li>
                                    <Link href={route("login")} as="button">
                                        Login
                                    </Link>
                                </li>
                                <li>
                                    <Link href={route("register")} as="button">
                                        Register
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        as="button"
                                        className="justify-between"
                                    >
                                        Dashboard
                                        <span className="badge">New</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link>Settings</Link>
                                </li>
                                <li>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Logout
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
