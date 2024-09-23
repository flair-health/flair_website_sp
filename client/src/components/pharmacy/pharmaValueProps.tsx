import ValuePropCard from "./valuePropCard";

const ValueProps = () => {
  return (
    <>
      <div className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-15 md:mb-8 mb-4 md:m-auto 
        md:marker:w-[70%] font-semibold md:text-center tracking-tight" id="functionality" >
        Flair's platform is built with C-Suite (CFOs, COOs, CPOs) leaders and financial coordinators in mind.
      </div>
      <div className="container flex justify-center ">
        <div className="flex md:max-w-[80%] xl:flex-row flex-col gap-8 m-auto mb-8 align-middle">
          <ValuePropCard valueHeading="Chief Financial Officers/Chief Pharmacy Officers" valueText="Smooth the close-out and recoupment process without spending weeks going through cumbersome platforms." />
          <ValuePropCard valueHeading="Chief Pharmacy Officers" valueText="Equip your billing coordinators with tools that enable FTEs to focus on work that matters - not labor-intensive or backlogged tasks."/>
          <ValuePropCard valueHeading="Billing annd Financial Coordinators" valueText="Reduce time spent pouring through multiple portals to ensure your teams get paid on time."/>
        </div>
      </div>
    </>
  );
};

export default ValueProps;