const PharmacyWorkflow = () => {
  return (
    <div className="container md:w-[82%] flex flex-col 2xl:items-center mt-10 md:mt-40 md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold md:text-center tracking-tight">
        How It Works
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base">
        Flair's platform is built with C-Suite (CFOs, COOs, CPOs) leaders and financial coordinators in mind.
      </div>

      <div className="container w-full max-w-[92%] mx-auto">
        <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../patient_dashboard.png" alt="Patient Dashboard" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Identify Unresolved Accounts</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> We proactively identify patient accounts with unresolved balances - whether from payers or co-pay assistance programs - in one view.
                  </li> 
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../patient_profile.png" alt="Patient Profile" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Alerts Notifications on Action Items</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> We notify you of action items, such as payor denials and copay assistance filing deadlines, to help you effectively follow up on accounts.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../prescription_start.png" alt="Prescription Start" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Reconcile Payments Through One Platform</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> Whether filing copay assistance or alternate funding programs, ditch multiple log-ins and use one platform to recoup all your payments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

       {/* <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../patient_journey.png" alt="Patient Journey" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Real-Time and Comprehensive Visibility about Patient Journeys</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> Provide your pharmacists and staff with information about the end-to-end patient journey, with all relevant information captured in a single platform. 
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> Access detailed notes and document attachments for each step of the patient journey, including intake, prior authorization status, order scheduling, and patient adherence/followup.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}

        {/*<div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../pharmacy_analytics.png" alt="Pharmacy Analytics" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Advanced and Actionable Analytics</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> Track filled prescriptions, average time to fill, prior authorization approval rates, patient satisfaction, and new patient enrollments.
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> Identify macro trends towards improving patient experience and pharmacy operations/performance.
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2">✔️</span> Demonstrate performance to biopharma to benchmark against market competitors and close partnerships.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
  </div>
  );
};

export default PharmacyWorkflow;