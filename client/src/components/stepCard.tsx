type Tcard = {
  head: string;
  desc: string;
};

const StepCard = (props: Tcard) => {
  return (
    <div className="p-4 flex flex-col gap-2 border-[0.5px] border-gray-200 md:max-w-[300px] glass-card text-center rounded-3xl md:min-h-[180px] max-h-[400px]">
      <div className="md:text-2xl text-xl pt-2 text-left md:text-center font-semibold">
        {props.head}
      </div>
      <div className="text-sm w-[90%] md:m-auto text-left text-gray-500 md:text-center">
        {props.desc}
      </div>
    </div>
  );
};
export default StepCard;
