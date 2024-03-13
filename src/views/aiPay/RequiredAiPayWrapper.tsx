
import { useIsBrowserExtensionInstalled } from "ai-pay-react-hooks"

export const NotActiveSessionWrapperClasses = "flex-grow flex flex-col px-5 items-start justify-center gap-3 py-5 text-zinc-800 dark:text-zinc-200"

export const HeaderClasses = "text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none"

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

      <div className="text-lg">
        <span className="font-extrabold text-black dark:text-white">AI Pay</span> is a 3rd party payment platform to facilitate Al services (like this one). AI Pay is designed for safe, one time, micro-transactions. AI Pay allows developers to write the logic and code for an AI feature and users pay for their individual usage. 
        {" "}<a href="https://www.joinaipay.com" target="_blank" rel="noreferrer" className="text-blue-500 dark:text-blue-400 hover:underline">Learn more</a>.
      </div>
      
      <div className="flex w-full justify-center">
        <a 
          href="https://chromewebstore.google.com/detail/ai-pay/igghgdjfklipjmgldcdfnpppgaijmhfg" 
          target="_blank" 
          rel="noreferrer" 
          className="py-2 px-6 rounded-lg text-lg font-bold !bg-opacity-80 dark:bg-gray-500 dark:hover:bg-gray-400 text-white dark:text-gray-100 transition-all"
        >
          Download AI Pay - Free $5 Credit
        </a>
      </div>

      <div className="text-md">
        <span className="font-extrabold text-black dark:text-white">Note:</span> You may need to reload the page after downloading the browser extension.
      </div>
    </div>
  }

  return children;
}