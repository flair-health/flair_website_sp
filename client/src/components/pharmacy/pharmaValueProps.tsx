import ValuePropCard from "./valuePropCard";

const ValueProps = () => {
  return (
    <>
      <div className="container 2xl:text-4xl text-2xl md:w-[82%] pt-8 md:pt-15 md:mb-8 mb-4 md:m-auto 
        md:marker:w-[70%] font-semibold md:text-center tracking-tight" id="functionality" >
        Flair's platform is built for the specific challenges of specialty pharmacy leaders and patient advocates.
      </div>
      <div className="container flex justify-center ">
        <div className="flex md:max-w-[80%] xl:flex-row flex-col gap-8 m-auto mb-8 align-middle">
          <ValuePropCard valueHeading="Chief Financial Officers" valueText="Maximize revenue recovery and improve cash flow by leveraging AI to proactively recover denied claims and identify alternative payment sources." />
          <ValuePropCard valueHeading="Chief Pharmacy Officers" valueText="Improve pharmacy efficiency and patient outcomes by reducing administrative burdens, enabling your team to focus more on patient care and less on paperwork."/>
          <ValuePropCard valueHeading="Patient Assistance Coordinators" valueText="Reduce time and effort spent tracking down payments with inefficient spreadsheets and long phone calls, so patients can get their medications quickly and affordably."/>
        </div>
      </div>
    </>
  );
};

export default ValueProps;