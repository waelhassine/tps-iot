import {
  HomeIcon
} from "@heroicons/react/outline";
const Dashboard = () =>{
    return (
      <>
       <div className="h-full backaaa">
   <div className="min-h-full">
  <nav className="bg-white border-b shadow-lg   border-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
          <h1 className="text-3xl font-extrabold textcolor">SEA CLOUD</h1>
          </div>
        
        </div>
        <div className="hidden md:block">
            <div className=" flex items-baseline space-x-4">
             
              <a href="#" className=" text-blue-700 px-3 py-2 text-lg" aria-current="page">Dashboard</a>

              <a href="#" className="  px-3 py-2  text-lg ">Team</a>

              <a href="#" className="  px-3 py-2  text-lg">Projects</a>

              <a href="#" className="  px-3 py-2 text-lg">Calendar</a>

              <a href="#" className="  px-3 py-2 text-lg">Reports</a>
            </div>
          </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            <button type="button" className="bg-gray-50 p-2 rounded-full text-gray-900  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
           
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>

          
           
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
         
          <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
          
            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
           
            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

   
  
  </nav>

  <main className="lg:px-32 py-8 ">
  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-row items-center bg-white ">
    <HomeIcon className="h-7 w-7" aria-hidden="true" />
      <h1 className="text-3xl font-medium pl-4 text-gray-900">Dashboard</h1>
    </div>
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white">
   
      <div className="px-4 py-6 sm:px-0">
        <div className="border-4 border-dashed border-gray-500 rounded-lg h-96"></div>
      </div>

    </div>
  </main>
</div>
        </div>
      </>
       
     
    );
}
export default Dashboard;