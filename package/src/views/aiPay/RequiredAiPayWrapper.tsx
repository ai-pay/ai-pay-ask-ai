
import { useIsBrowserExtensionInstalled } from "ai-pay-react-hooks"

export const NotActiveSessionWrapperClasses = "aip-flex-grow aip-flex aip-flex-col aip-px-5 aip-items-start aip-justify-center aip-gap-3 aip-py-5 aip-text-zinc-800 dark:aip-text-zinc-200"

export const HeaderClasses = "aip-text-xl aip-font-bold aip-tracking-tighter sm:aip-text-3xl md:aip-text-4xl lg:aip-text-5xl/none"

interface RequiredAiPayWrapperProps {
  children: React.ReactNode;
}

export function RequiredAiPayWrapper({
  children,
}: RequiredAiPayWrapperProps): React.ReactNode {
  const isBrowserExtensionInstalled = useIsBrowserExtensionInstalled();

  if (!isBrowserExtensionInstalled) {
    return <div className={NotActiveSessionWrapperClasses}>
      <h2 className={HeaderClasses}>
        Requires AI Pay
      </h2>

      <div className="aip-text-lg">
        <span className="aip-font-extrabold aip-text-black dark:aip-text-white">AI Pay</span> is a 3rd party payment platform to facilitate Al services (like this one). AI Pay is designed for safe, one time, micro-transactions. AI Pay allows developers to write the logic and code for an AI feature and users pay for their individual usage. 
        {" "}<a href="https://www.joinaipay.com" target="_blank" rel="noreferrer" className="aip-text-blue-500 dark:aip-text-blue-400 hover:aip-underline">Learn more</a>.
      </div>
      
      <div className="aip-flex aip-w-full aip-justify-center">
        <a 
          href="https://chromewebstore.google.com/detail/ai-pay/igghgdjfklipjmgldcdfnpppgaijmhfg" 
          target="_blank" 
          rel="noreferrer" 
          className="aip-py-2 aip-px-6 aip-rounded-lg aip-text-lg aip-font-bold !aip-bg-opacity-80 dark:aip-bg-gray-500 dark:hover:aip-bg-gray-400 aip-text-white dark:aip-text-gray-100 aip-transition-all"
        >
          Download AI Pay - Free $5 Credit
        </a>
      </div>

      <div className="aip-text-md">
        <span className="aip-font-extrabold aip-text-black dark:aip-text-white">Note:</span> You may need to reload the page after downloading the browser extension.
      </div>
    </div>
  }

  return children;
}