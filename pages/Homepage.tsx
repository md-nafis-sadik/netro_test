"use client";
import Link from "next/link";
import { FaArrowRight, FaLightbulb, FaRegCheckCircle } from "react-icons/fa";
import { IoMdThumbsUp, IoMdSettings } from "react-icons/io";
import { FaHeadphones } from "react-icons/fa6";

export default function Homepage() {
    return (
        <main className="">
            <div className="relative w-full h-[600px] lg:h-[800px] bg-center ">
                <div className="absolute inset-0 mx-2 lg:mx-8 rounded-lg bg-[#FDFFED] bg-opacity-30"></div>
                <div className="absolute px-8 sm:px-12 md:px-16 lg:px-20 xl:px-32 inset-0 flex flex-col items-center mt-[50px] text-center text-gray-950">
                    <h1 className="text-[34px] w-full lg:w-[900px] md:text-4xl lg:text-[56px] xl:text-[65px] leading-[55px] lg:leading-[70px] font-semibold mb-3">
                        Empower Your Workforce with NovaManager
                    </h1>
                    <p className="mt-2 text-gray-600 w-full lg:w-[500px]">
                        Streamline Employee Management and Boost Productivity with Our Innovative HR Solutions
                    </p>
                    <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <Link
                            href="/start-project"
                            className="px-8 py-4 text-sm lg:text-normal rounded-[60px] bg-[#F0FF72] text-gray-800 font-semibold transition transform hover:scale-105 hover:shadow-lg"
                        >
                            Start your 30 day free trial
                        </Link>
                    </div>
                </div>
                <div className="absolute w-full flex justify-center top-[400px] lg:top-[370px]">
                    <div className="relative max-w-[1200px] flex justify-center">
                        <img
                            className="relative shadow-[0_0_15px_12px_rgba(0,0,0,0.1)] rounded-lg w-[90%] lg:w-[70%]"
                            src="/de90169d720056dfaaf1f8dda14e5556.png"
                        />
                        <img
                            className="absolute shadow-[0_0_15px_12px_rgba(0,0,0,0.1)] rounded-lg w-[200px] lg:w-[350px] right-[40px] top-[60%] lg:top-[40%] translate-y-[-50%]"
                            src="/77fe3e2b95a5516c6eda09683dc250d1.png"
                        />
                        <img
                            className="absolute shadow-[0_0_15px_12px_rgba(0,0,0,0.1)] rounded-lg w-[220px] lg:w-[370px] left-[50px] lg:left-[240px] top-[70%] lg:top-[60%] translate-y-[-50%]"
                            src="/1abcbf71ba435a231569e5543107fdc3.png"
                        />
                    </div>
                </div>

            </div>
            <div className="absolute z-20 w-full bg-[#D1EFEF] border-t-[10px] lg:border-t-[30px] border-white ">
                <div className="w-full max-w-[1200px] h-[420px] md:flex mx-auto">
                    <div className="w-full py-8 px-4 flex items-center">
                        <h2 className="text-[34px] w-full text-center lg:text-start lg:text-5xl font-semibold leading-tight">
                            Your Gateway to <br /> Seamless Employee <br /> Management
                        </h2>
                    </div>

                    <div className="flex flex-col justify-center w-full">
                        <div className="text-gray-500 text-[17px] px-2 text-center lg:text-start mb-6">
                            Simplified Scheduling, Streamlined Performance <br />
                            Management, and More. NovaManager Empowers <br />
                            Your Workforce for Success.
                        </div>

                        <div className="flex justify-center lg:justify-normal space-x-10 lg:space-x-20">
                            <div className="text-center">
                                <p className="text-4xl font-bold">16k<span className="text-[#E0FF72]">+</span></p>
                                <p className="text-gray-500 text-sm">Total users</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">25k<span className="text-[#E0FF72]">+</span></p>
                                <p className="text-gray-500 text-sm">Employee</p>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">20k<span className="text-[#E0FF72]">+</span></p>
                                <p className="text-gray-500 text-sm">Happy users</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-[400px] bg-[#F8F8F8] z-20 w-full  border-t-[30px] border-white ">
                <div className="w-full max-w-[1200px] py-20 mx-auto">
                    <h2 className="text-[34px] lg:text-[56px] font-semibold leading-tight text-center mb-4 lg:mb-12">
                        Empowering Businesses Through Innovative Workforce Solutions
                    </h2>
                    <div className="md:flex md:justify-between lg:mt-4 ">
                        <div className="flex mb-8 flex-col lg:flex-row justify-between ">
                            <div>
                                <div className="mt-4 w-full lg:w-[500px] text-[18px] lg:text-[23px] text-center lg:text-start leading-[35px] font-extralight text-gray-500">
                                    Founded on the principle of empowering businesses to unlock their full potential, NovaManager is dedicated to providing innovative solutions that streamline employee management processes and drive productivity.
                                </div>
                                <div className="lg:w-full flex justify-center lg:justify-normal">
                                    <div

                                        className="px-8 py-4 flex justify-center items-center mt-4 lg:mt-12 text-xl w-[200px] rounded-[60px] bg-[#F0FF72] text-gray-800 font-medium transition transform hover:scale-105 hover:shadow-lg"
                                    >
                                        <span className="font-semibold text-sm lg:text-normal">Read More</span> <FaArrowRight className="ml-3" />
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="flex w-full justify-center lg:justify-end">
                            <img className="rounded-xl w-[500px] h-[295px]" src="/64963d7435ef84ecab64074b1073ec15.jpg" />
                        </div>
                    </div>
                </div>
            </div>



            <div className="w-full bg-white px-4 py-12">
                <div className="max-w-[1200px] mx-auto text-center">
                    <h2 className="text-[34px] lg:text-[56px] font-semibold leading-tight text-center mb-12">What We Offer</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        <div className="bg-[#FDFFED] px-6 py-6 rounded-2xl">
                            <div className="flex justify-center">
                                <div className="w-24   h-24 mb-5 flex items-center justify-center bg-[#F0FF72] rounded-full">
                                    <span className="text-3xl"><IoMdThumbsUp /></span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Intuitive User Experience</h3>
                            <p className="text-gray-600 mt-2">Effortlessly Navigate Our User-Friendly Interface.</p>
                        </div>

                        <div className="bg-[#FDFFED] px-6 py-6 rounded-2xl">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 mb-5 flex items-center justify-center bg-[#F0FF72] rounded-full">
                                    <span className="text-3xl"><IoMdSettings /></span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Customizable Solutions</h3>
                            <p className="text-gray-600 mt-2">Empower Your Workforce with Customizable Features.</p>
                        </div>

                        <div className="bg-[#FDFFED] px-6 py-6 rounded-2xl">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 mb-5 flex items-center justify-center bg-[#F0FF72] rounded-full">
                                    <span className="text-3xl"><FaHeadphones /></span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Customer <br />Support</h3>
                            <p className="text-gray-600 mt-2">Our Team is Here, Every Step of the Way.</p>
                        </div>

                        <div className="bg-[#FDFFED] px-6 py-6 rounded-2xl">
                            <div className="flex justify-center">
                                <div className="w-24 h-24 mb-5 flex items-center justify-center bg-[#F0FF72] rounded-full">
                                    <span className="text-3xl"><FaLightbulb /></span>
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mt-4">Continuous Innovation</h3>
                            <p className="text-gray-600 mt-2">Stay Ahead with Our Continuous Improvements.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="w-full bg-gray-50 py-12">
                <div className="max-w-[1200px] mx-auto px-6">
                    <h2 className="text-[34px] lg:text-[56px] font-semibold leading-tight text-center mb-12">
                        Discover How NovaManager Empowers Your Team
                    </h2>
                    <div className=" flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative w-full md:w-[500px] h-[355px] md:h-[375px] rounded-xl bg-[#C5E3E3]"></div>
                            <img
                                src="/b09ab54e453c8f8c518b98f3b82c40ff.png"
                                alt="Task Management Preview"

                                className="absolute top-6 md:w-[450px] md:top-10 w-[90%] mx-auto  h-[335px] md:mx-0 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 text-left">

                            <p className="text-gray-500 text-sm mt-3 text-[17px] lg:text-[20px]">Advance task monitoring</p>
                            <h3 className="text-2xl lg:text-4xl font-medium mt-3">
                                Simplify Workflow with Advanced Task Management
                            </h3>
                            <p className="text-gray-500 mt-5 text-[17px] lg:text-[20px]">
                                Stay ahead of the game. Monitor your marketing campaigns in real-time
                                with our intuitive tools, and make data-driven decisions for optimal results.
                            </p>

                            <ul className="mt-5 space-y-2">
                                <li className="flex items-center gap-2 font-medium  text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Effortless Organization
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Collaborative Workflow
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Insightful Tracking
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
                        <div className="w-full lg:w-1/2 text-left">

                            <p className="text-gray-500 text-sm mt-3 text-[17px] lg:text-[20px]">Advance task monitoring</p>
                            <h3 className="text-2xl lg:text-4xl font-medium mt-3">
                                Simplify Workflow with Advanced Task Management
                            </h3>
                            <p className="text-gray-500 mt-5 text-[17px] lg:text-[20px]">
                                Stay ahead of the game. Monitor your marketing campaigns in real-time
                                with our intuitive tools, and make data-driven decisions for optimal results.
                            </p>

                            <ul className="mt-5 space-y-2">
                                <li className="flex items-center gap-2 font-medium  text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Effortless Organization
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Collaborative Workflow
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Insightful Tracking
                                </li>
                            </ul>
                        </div>
                        <div className="w-full flex justify-end md:w-1/2 relative">
                            <div className="relative w-full md:w-[500px] h-[355px] md:h-[375px] rounded-xl bg-[#C5E3E3]"></div>
                            <img
                                src="/1abcbf71ba435a231569e5543107fdc3.png"
                                alt="Task Management Preview"

                                className="absolute top-6 md:w-[450px] md:top-10 w-[90%] mx-auto  h-[335px] md:mx-0 right-0 rounded-lg shadow-lg"
                            />
                        </div>


                    </div>

                    <div className=" flex flex-col lg:flex-row items-center gap-10">
                        <div className="w-full md:w-1/2 relative">
                            <div className="relative w-full md:w-[500px] h-[355px] md:h-[375px] rounded-xl bg-[#C5E3E3]"></div>
                            <img
                                src="/de90169d720056dfaaf1f8dda14e5556.png"
                                alt="Task Management Preview"

                                className="absolute top-6 md:w-[450px] md:top-10 w-[90%] mx-auto  h-[335px] md:mx-0 rounded-lg shadow-lg"
                            />
                        </div>

                        <div className="w-full lg:w-1/2 text-left">

                            <p className="text-gray-500 text-sm mt-3 text-[17px] lg:text-[20px]">Advance task monitoring</p>
                            <h3 className="text-2xl lg:text-4xl font-medium mt-3">
                                Simplify Workflow with Advanced Task Management
                            </h3>
                            <p className="text-gray-500 mt-5 text-[17px] lg:text-[20px]">
                                Stay ahead of the game. Monitor your marketing campaigns in real-time
                                with our intuitive tools, and make data-driven decisions for optimal results.
                            </p>

                            <ul className="mt-5 space-y-2">
                                <li className="flex items-center gap-2 font-medium  text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Effortless Organization
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Collaborative Workflow
                                </li>
                                <li className="flex items-center gap-2 font-medium text-lg">
                                    <FaRegCheckCircle className="text-green-600" /> Insightful Tracking
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


        </main>
    );
}
