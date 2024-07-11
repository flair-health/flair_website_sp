type Tmedical = {
  name: string;
  image: string;
};
const ConditionCard = (props: Tmedical) => {
  return (
    <div className="text-center flex flex-col gap-8  p-10 rounded-3xl">
      <img src={props.image} className="w-[100px] m-auto"></img>
      <div className="text-2xl font-semibold ">{props.name}</div>
    </div>
  );
};

export default ConditionCard;
