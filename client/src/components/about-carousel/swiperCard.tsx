type TswiperCard = {
  image: string;
  title: string;
  description: string;
  details: string;
  results: string;
};

const SwiperCard = ({
  image,
  title,
  description,
  details,
  results,
}: TswiperCard) => {
  return (
    <div className="flex justify-center flex-col md:flex-row gap-4 p-8">
      <div className="border-[2px] p-8 rounded-3xl glass-card text-black max-w-[400px] md:min-h-[450px]">
        <img src={image} className="w-full max-w-[400px]" alt={title} />
        <div className="text-left my-2 md:text-xl text-lg font-semibold">
          {title}
        </div>
        <div className="text-left my-2 text-sm text-gray-400">
          {description}
        </div>
      </div>
      <div className="md:flex-col gap-4 hidden md:flex">
        <div className="border-[2px] max-w-[300px] p-8 text-sm text-gray-400 rounded-3xl glass-card min-h-[220px]">
          <div className="text-left my-2 md:text-xl text-lg font-semibold text-black">
            Approach
          </div>
          {details}
        </div>
        <div className="border-[2px] max-w-[300px] p-8 text-sm text-gray-400 rounded-3xl glass-card min-h-[220px]">
          <div className="text-left my-2 md:text-xl text-lg font-semibold text-black">
            Results
          </div>
          {results}
        </div>
      </div>
    </div>
  );
};

export default SwiperCard;
