"use client";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="container mx-auto p-4 flex flex-col min-h-screen">
            <div className="flex items-center space-x-2">
                <div className="bg-gray-300 font-bold flex items-center p-3 text-xl me-4 rounded-tl rounded-tr">
                    <img src="/assets/images/flags/japan.png" alt="Button Image" className="w-12 h-12 mr-2" />
                    Ekspor Japan
                </div>

                <a 
                    href="/dashboard/add"
                    className="bg-gray-400 font-bold flex items-center p-3 text-xl me-4 rounded"
                >
                    <FaPlus className="inline mr-1" />
                    Add
                </a>
            </div>

            <div className="bg-gray-300 p-6 rounded-b-lg flex-grow rounded-tr">
                <p className="h-full">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Quisque eleifend scelerisque rhoncus. Vestibulum molestie dictum mauris vel consequat. 
                    Sed luctus tellus libero. Vestibulum ac laoreet augue. Donec at hendrerit libero. 
                    Etiam pellentesque laoreet ligula, nec sodales nisi fringilla sit amet. In in orci odio. 
                    Nulla facilisi. Vestibulum suscipit sem non aliquet mollis. 
                    Donec est dolor, molestie id tristique eget, hendrerit quis tortor. 
                    Donec quis velit eget ante vestibulum vulputate quis at orci.
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
