import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModalDisplayProps {
  isShowing: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
  
export function ModalDisplay({
  isShowing,
  onClose,
  children,
}: ModalDisplayProps): React.JSX.Element {
  return <Transition.Root show={isShowing} as={Fragment}>
    <Dialog as="div" className="aip-relative aip-z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="aip-ease-out aip-duration-300"
        enterFrom="aip-opacity-0"
        enterTo="aip-opacity-100"
        leave="aip-ease-in aip-duration-200"
        leaveFrom="aip-opacity-100"
        leaveTo="aip-opacity-0"
      >
        <div className="aip-fixed aip-inset-0 aip-bg-gray-500 aip-bg-opacity-75 aip-transition-opacity" />
      </Transition.Child>
  
      <div className="aip-fixed aip-inset-0 aip-z-50 aip-w-screen aip-h-full aip-overflow-y-auto aip-mx-auto aip-py-[5vh]">
        <Transition.Child
          as={Fragment}
          enter="aip-ease-out aip-duration-300"
          enterFrom="aip-opacity-0 aip-translate-y-4 sm:aip-translate-y-0 sm:aip-scale-95"
          enterTo="aip-opacity-100 aip-translate-y-0 sm:aip-scale-100"
          leave="aip-ease-in aip-duration-200"
          leaveFrom="aip-opacity-100 aip-translate-y-0 sm:aip-scale-100"
          leaveTo="aip-opacity-0 aip-translate-y-4 sm:aip-translate-y-0 sm:aip-scale-95"
        >

          <Dialog.Panel className="aip-transform aip-overflow-auto aip-max-h-[90vh] aip-w-fit aip-mx-auto">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>;
}