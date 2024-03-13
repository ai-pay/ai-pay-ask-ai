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
    className="absolute z-50 bottom-[64px] right-3 h-6 w-6 rounded-full p-[2px] border bg-white transition-all hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
  >
    <ChevronDownIcon className="mt-[2px]" />
  </button>
}