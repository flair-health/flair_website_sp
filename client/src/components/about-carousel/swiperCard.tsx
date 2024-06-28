const SwiperCard = () => {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-2 p-8">
      <div className="border-[2px]  p-8  rounded-3xl glass-card text-black max-w-[400px]">
        <img src="/consultation.jpg" className="w-full max-w-[400px]" />
        <div className="text-left my-2 md:text-xl text-lg font-semibold">
          Evaluation
        </div>
        <div className="text-left my-2 text-sm text-gray-400">
          Generate robust evidence and insights by partnering with Flatiron's
          expert team of clinicians, scientists, and health data analysts. Sed
          ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
        </div>
      </div>
      <div className=" md:flex-col gap-2 hidden md:flex">
        <div className="border-[2px] max-w-[300px] p-8 text-sm text-gray-400 rounded-3xl glass-card ">
          <div className="text-left my-2 md:text-xl text-lg font-semibold text-black">
            Evaluation
          </div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </div>
        <div className="border-[2px] max-w-[300px] p-8 text-sm text-gray-400 rounded-3xl glass-card">
          <div className="text-left my-2 md:text-xl text-lg font-semibold text-black">
            Results
          </div>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo
        </div>
      </div>
    </div>
  );
};
export default SwiperCard;
