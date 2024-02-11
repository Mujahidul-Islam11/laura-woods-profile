import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
        setProfile(res.data.results[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, []);

  return (
    <div className="p-8 shadow-lg max-w-[350px] font-sans rounded-xl space-y-4 my-10 flex flex-col justify-center items-center mx-auto bg-white">
      <div className="relative group">
          <img className="w-[110px] h-[110px] bg-slate-500 object-cover rounded-full" src={profile?.picture?.large} alt="" />
          <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 border-[3px] border-white"></span>
          <span className="h-5 w-5 bg-green-500 absolute rounded-full bottom-3 right-0 animate-ping"></span>
      </div>
      <div className="text-center space-y-1">
          <h1 className="text-2xl text-gray-700">{`${profile?.name?.first} ${profile?.name?.last}`}</h1>
          <p className="text-gray-400 text-sm">{`${profile?.email}`}</p>
      </div>
      <div className="flex justify-between w-full py-2">
          <div className="text-center space-y-1">
              <p className="text-gray-500">Posts</p>
              <p className="text-xl font-mono text-gray-700">11</p>
          </div>
          <div className="text-center space-y-1">
              <p className="text-gray-500">Following</p>
              <p className="text-xl font-mono text-gray-700">250</p>
          </div>
          <div className="text-center space-y-1 ">
              <p className="text-gray-500">Followers</p>
              <p className="text-xl font-mono text-gray-700">11</p>
          </div>
      </div>
      <div className="flex gap-6">
      <p className="text-sm text-gray-600">City: {profile?.location?.city}</p>
      <p className="text-sm text-gray-600">Country: {profile?.location?.country}</p>
      </div>
      <p className="text-center text-sm text-gray-500 pb-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore error ipsum officiis debitis quo odio?</p>

      <button className="hover:bg-[#0095FF] hover:scale-95 font-medium hover:text-white w-[80%] py-2 rounded-full hover:shadow-xl   text-gray-400 shadow-[0px_0px_10px_#E2DADA] t duration-500">View Profile</button>
    </div>
  )
}

export default App
