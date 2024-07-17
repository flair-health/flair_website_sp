type Tcard = {
  head: string;
  url: string;
  desc: string;
};

const Card = (props: Tcard) => {
  return (
    <div className="p-4 flex flex-col gap-2 border-[0.5px] border-gray-200 md:max-w-[450px] glass-card text-center rounded-3xl min-h-[200px] max-h-[400px]">
      <div className="m-auto">
        <img
          src={props.url}
          className="w-20 m-auto"
          alt="about card images"
        ></img>
      </div>
      <div>{props.head}</div>
      <div className="text-sm w-[80%] m-auto text-gray-500">{props.desc}</div>
    </div>
  );
};
export default Card;
