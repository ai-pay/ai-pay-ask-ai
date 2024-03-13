import ChevronDownIcon from '@heroicons/react/24/solid/ChevronDownIcon';
import { useRef } from 'react';
import { useScrollToBottom, useSticky } from 'react-scroll-to-bottom';

interface Props {
  isShowing: boolean;
}

export function ScrollToBottomBtn({
  isShowing,
}: Props): React.JSX.Element | null {
  const scrollToBottom = useScrollToBottom();
  const [sticky] = useSticky();

  const ref = useRef<HTMLButtonElement>(null);

  if (!isShowing || sticky) {
    return null
  }
  return <button
    ref={ref}
    onClick={() => scrollToBottom()}
    className="aip-absolute aip-z-50 aip-bottom-[64px] aip-right-3 aip-h-6 aip-w-6 aip-rounded-full aip-p-[2px] aip-border aip-bg-white aip-transition-all hover:aip-bg-gray-100 dark:aip-border-gray-700 dark:aip-bg-gray-800 dark:hover:aip-bg-gray-700 "
  >
    <ChevronDownIcon className="aip-mt-[2px]" />
  </button>
}