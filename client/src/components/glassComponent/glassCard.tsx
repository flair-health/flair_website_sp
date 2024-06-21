import "./glasscard.css";
const GlassCard = () => {
  return (
    <div className="border-[2px] md:w-1/2 p-8 my-8 rounded-md glass-card text-black">
      <div className="md:text-xl text-lg font-semibold bg w-full md:w-[95%]">
        Flair Health is a virtual extension for medical practices treating
        patients with inflammatory conditions. Our solutions elevate the
        understanding and care experience for those affected by autoimmune
        diseases.
      </div>
      <div className="text-lg">
        <div className="flex mb-2 py-2 items-center justify-between border-b-[1px] border-gray-300 hover:translate-x-1 cursor-pointer hover:animate-in ease-in">
          <div className="opacity-60 hover:opacity-100">
            Nutrition and lifestyle management platform for patients{" "}
          </div>
          <div className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right w-8"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>
        <div className="flex mb-2 py-2 items-center justify-between border-b-[1px] border-gray-300 hover:translate-x-1 cursor-pointer hover:animate-in ease-in">
          <div className="opacity-60 hover:opacity-100">
            Medication navigation and support service{" "}
          </div>
          <div className="opacity-60 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right w-8 "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>
        <div className="flex mb-2 py-2 items-center justify-between border-b-[1px] border-gray-300 hover:translate-x-1 cursor-pointer hover:animate-in ease-in">
          <div className="opacity-60 hover:opacity-100">
            Close the gap between care and research{" "}
          </div>
          <div className="opacity-60">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-arrow-narrow-right w-8"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};
export default GlassCard;
