type TvaluePropCard = {
  valueHeading: string;
  valueText: string;
};

const ValuePropCard = (props: TvaluePropCard) => {
  return (
    <div className="text-lg font-medium w-[75%] md:w-[65%] border-l-4 border-[#14a8e1] p-4">
      {props.valueHeading}
      <div className="text-base font-normal">
      {props.valueText}
      </div>
    </div>
  );
};

export default ValuePropCard;