import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="data:image/jpeg;base64,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"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow us</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="https://github.com/Harshraj210"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Github
                                    </a>
                                </li>
                                <li>
                                    <Link to="/" className="hover:underline">
                                        Discord
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Legal</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="#" className="hover:underline">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center">
                        © 2025 {""}
                        <a href="https://hiteshchoudhary.com/" className="hover:underline">
                             HARSH RAJ
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
                        <Link to="#" className="text-gray-500 hover:text-gray-900">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Discord community</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">GitHub account</span>
                        </Link>
                        <Link to="#" className="text-gray-500">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Dribbble account</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
