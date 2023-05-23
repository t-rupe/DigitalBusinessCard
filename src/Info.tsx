import Image from "./Image";
import LinkedIn from './assets/linkedin.svg'
import Profile from './assets/Profile.jpg'
function Info() {
  return (
    <div className="bg-gray-900 w-80 h-auto mt-11 mx-auto filter flex flex-col items-center">
      <Image src={Profile} className="w-full h-full rounded-t-lg" />
      <div className="w-full pt-5 text-white text-2xl font-bold flex justify-center items-center">
        Taylor Rupe
      </div>
      <div className="text-orange-300 pt-1 text-sm font-normal flex justify-center items-center">
        Frontend Developer
      </div>
      <div className="font-normal pt-2 text-white text-xs">
        taylor.rupe.com
      </div>
      <div className="flex justify-between w-full pt-4">
        <button className="bg-white border border-gray-300 shadow-sm rounded-md text-gray-700 font-sm font-normal w-28 h-8 py-2 px-5 ml-9 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 mr-2"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Email
        </button>
        <button className="bg-blue-500  text-white rounded-md font-sm font-normal w-28 h-8 py-2 px-4 mr-9 flex items-center">
            <Image src={LinkedIn} className="w-5 h-5 mr-2 " />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
