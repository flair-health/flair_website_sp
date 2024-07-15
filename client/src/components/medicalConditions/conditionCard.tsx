type Tmedical = {
  name: string;
  image: string;
};

const ConditionCard = (props: Tmedical) => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-12 p-10 relative">
      <div className="rounded-full h-[160px] w-[160px] bg-[#14a8e1] absolute top-4 bg-opacity-20"></div>
      <img
        src={props.image}
        alt={props.name}
        className="w-[100px] relative z-10"
      />
      <div className="md:text-2xl font-semibold relative z-10">
        {props.name}
      </div>
    </div>
  );
};

export default ConditionCard;
