import ValuePropCard from "./valuePropCard";

const ValueProps = () => {
  return (
    <>
      <div className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-15 md:mb-8 mb-4 md:m-auto 
        md:marker:w-[70%] font-semibold md:text-center tracking-tight" id="functionality" >
        Our Outcomes
      </div>
      <div className="container flex justify-center ">
        <div className="flex md:max-w-[80%] xl:flex-row flex-col gap-8 m-auto mb-8 align-middle">
          <ValuePropCard valueHeading="Improved Efficiency" valueText="Reduce time spent calling payers and prescribers, and decrease time-to-start across patients. ✨" />
          <ValuePropCard valueHeading="Increase Retention" valueText="proactively identify patients at risk of discontuation to increase patient adherence and fill more Rxs. ⭐️"/>
          <ValuePropCard valueHeading="Higher Satisfaction" valueText="engage new and existing patients, reduce burden on prescribers, and provide high-quality care. 🎉"/>
        </div>
      </div>
    </>
  );
};

export default ValueProps;