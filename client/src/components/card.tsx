type Tcard = {
  head: string;
  url: string;
  desc: string;
};

const Card = (props: Tcard) => {
  return (
    <div className="p-4 flex flex-col gap-2 border-[0.5px] text-center rounded-md">
      <div className="m-auto">
        <img src={props.url} className="w-6 m-auto"></img>
      </div>
      <div>{props.head}</div>
      <div className="text-sm w-[80%] m-auto text-gray-500">{props.desc}</div>
    </div>
  );
};
export default Card;
