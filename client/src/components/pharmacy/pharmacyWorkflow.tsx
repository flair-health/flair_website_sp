const PharmacyWorkflow = () => {
  return (
    <div id="features" className="container md:w-[82%] flex flex-col 2xl:items-center mt-10 md:mt-40 md:gap-2 gap-2">
      <div className="2xl:text-4xl w-full text-2xl 2xl:w-[70%] font-semibold md:text-center tracking-tight">
        How Flair Health's Platform Works
      </div>
      <div className="md:text-center font-normal text-gray-500 2xl:text-base">
        Flair's tech-enabled platform integrates all payments across payers, manufacturers, foundations, and patients to maximize successful payments.
      </div>

      <div className="container w-full max-w-[92%] mx-auto">
        <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../patient_accounts.png" alt="Patient Accounts" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Real-Time and Accurate Tracking of Patient Accounts and Payments</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> Flair’s platform provides real-time visibility and ensures accurate tracking of patient accounts and payments, keeping all data up-to-date and reliable for billing teams.
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
                <img src="../../denied_claim.png" alt="Claim Denials" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Automated Followups on Overdue and Denied Claims</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> Flair's proprietary AI tool identifies overdue or denied claims. Then, it automatically follows up with the payer or manufacturer assistance fund to recoup payments and close your books faster.
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
                <img src="../../assistance_claim_form.png" alt="Copay Assistance Form" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Simplified Applications to Manufacturer and Foundation Assistance Programs</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <span className="text-blue-500 mr-2"></span> Flair helps coordinators submit and track copay assistance applications, sending reminders to meet deadlines and avoid missed funds or write-offs on patient balances.
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center w-full my-8 py-6 rounded-lg border-[1px] bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] to-65% px-2 dark:from-[#4F54DC]">
          <div className="flex flex-col justify-center items-center text-center w-full p-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full mb-4 flex justify-center">
                <img src="../../claim_details.png" alt="Claim Details" className="w-full max-w-md h-auto rounded-lg" />
              </div>
              <div className="w-full max-w-lg">
                <p className="text-lg leading-normal sm:text-xl sm:font-medium">Reconcile Payments Through One Platform</p>
                <ul className="list-none space-y-2 mt-2 text-sm text-gray-500">
                  <li className="flex items-center">
                    <span className="text-blue-500 mr-2"></span> Flair's platform reconciles all payments from payers, manufacturers, foundations, and patients, allowing coordinators to avoid logging into multiple portals and chasing down individual checks for patients.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
  );
};

export default PharmacyWorkflow;