type Tmedical = {
  name: string;
  image: string;
  about: string;
};
const ConditionCard = (props: Tmedical) => {
  return (
    <div className="text-center flex flex-col gap-2  p-10 rounded-3xl">
      <img src={props.image} className="w-[100px] m-auto"></img>
      <div className="text-2xl font-semibold ">{props.name}</div>
      <div className="text-sm text-gray-500">{props.about}</div>
    </div>
  );
};

export default ConditionCard;
