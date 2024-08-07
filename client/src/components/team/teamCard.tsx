import "./teamCard.css";

type TteamCard = {
  img: string;
  name: string;
  title: string;
  desc?: string;
  bios?: string;
};

const TeamCard = (props: TteamCard) => {
  return (
    <div className="2xl:max-w-xs rounded-2xl overflow-hidden my-4 team-card">
      <div className="p-2 m-auto md:h-74 h-80 overflow-hidden">
        <img
          src={props.img}
          className="md:object-cover object-cover p-2 w-full h-full rounded-2xl"
          alt="Team"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-0  align-middle">
          {props.name}{" "}
          <p className="inline-flex font-semibold text-base my-auto">
            {" "}
            {props.bios}
          </p>
        </div>
        <div className=" text-base text-[#14a8e1]">{props.title}</div>
        <p className="text-gray-700 text-base mt-2 text-left">{props.desc}</p>
      </div>
    </div>
  );
};

export default TeamCard;
