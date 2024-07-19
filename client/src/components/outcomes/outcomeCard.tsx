type ToutcomeCard = {
  outcomeText: string;
};

const OutComeCard = (props: ToutcomeCard) => {
  return (
    <div className="text-lg font-medium w-[75%] md:w-[65%] border-l-4   border-[#14a8e1] p-4">
      {props.outcomeText}
    </div>
  );
};

export default OutComeCard;
