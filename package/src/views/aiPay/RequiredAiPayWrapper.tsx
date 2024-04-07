
import { FreeTrialInformation, getFreeTrialInformation } from "ai-pay";
import { useIsBrowserExtensionInstalled } from "ai-pay-react-hooks"
import { useEffect, useState } from "react";

export const NotActiveSessionWrapperClasses = "aip-flex-grow aip-flex aip-flex-col aip-px-5 aip-items-start aip-justify-center aip-gap-3 aip-py-5 aip-text-zinc-800 dark:aip-text-zinc-200"

export const HeaderClasses = "aip-text-xl aip-font-bold aip-tracking-tighter sm:aip-text-3xl md:aip-text-4xl lg:aip-text-5xl/none"

interface RequiredAiPayWrapperProps {
  children: React.ReactNode;
}

function useAiPayFreeTrialInformation() {
  const [freeTrialInformation, setFreeTrialInformation] = useState<FreeTrialInformation | null>(null);

  useEffect(() => {
    (async () => {
      setFreeTrialInformation(await getFreeTrialInformation());
    })();
  }, []);

  return freeTrialInformation
}

export function RequiredAiPayWrapper({
  children,
}: RequiredAiPayWrapperProps): React.ReactNode {
  const isBrowserExtensionInstalled = useIsBrowserExtensionInstalled();

  const freeTrialInfo = useAiPayFreeTrialInformation();

  if (!isBrowserExtensionInstalled) {
    return <div className={NotActiveSessionWrapperClasses}>
      <h2 className={HeaderClasses}>
        Requires AI Pay
      </h2>

      <div className="aip-text-lg">
        <span className="aip-font-extrabold aip-text-black dark:aip-text-white">AI Pay</span> is a 3rd party platform to facilitate Al services (like this one). AI Pay allows developers to write the logic and code for an AI feature and users pay for their individual usage. Using AI Pay is similar to a user giving the website their API key, but without all the security concerns of API key theft.
        {" "}<a href="https://www.joinaipay.com" target="_blank" rel="noreferrer" className="aip-text-blue-500 dark:aip-text-blue-400 hover:aip-underline">Learn more</a>.
      </div>
      
      <div className="aip-flex aip-w-full aip-justify-center">
        <a 
          href="https://chromewebstore.google.com/detail/ai-pay/igghgdjfklipjmgldcdfnpppgaijmhfg" 
          target="_blank" 
          rel="noreferrer" 
          className="aip-py-2 aip-px-6 aip-rounded-lg aip-text-lg aip-font-bold !aip-bg-opacity-80 aip-bg-zinc-500 hover:aip-bg-zinc-400 aip-text-white dark:aip-text-zinc-100 aip-transition-all"
        >
          Download AI Pay - Free Trial {freeTrialInfo ? `${freeTrialInfo.numberCredits} credits` : null }
        </a>
      </div>

      <div className="aip-text-md">
        <span className="aip-font-extrabold aip-text-black dark:aip-text-white">Note:</span> You may need to reload the page after downloading the browser extension.
      </div>
    </div>
  }

  return children;
}