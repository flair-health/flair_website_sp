"use client";

const Navbar = () => {
  // const [user, setUser] = useState<string | null>(null);

  return (
    <div className=" sticky top-0 z-50 h-20 w-full items-center backdrop-blur shadow-sm px-2 flex justify-between bg-opacity-30">
      <div className="container w-[95%]  md:p-0   m-auto  flex  items-center justify-between">
        <a href="/">
          <img src="flair_logo.svg" width="120px" />
        </a>
        <div className=" gap-20 font-medium hidden md:flex">
          <div>About</div>
          <div>For Patients</div>
          <div>For Clinics</div>
        </div>
        <div className="bg-blue-400 text-white p-1 rounded-2xl px-4">
          Get Started
        </div>
      </div>
    </div>
  );
};

export default Navbar;
