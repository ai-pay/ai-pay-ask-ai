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
    <Dialog as="div" className="relative z-50" onClose={onClose}>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </Transition.Child>
  
      <div className="fixed inset-0 z-50 w-screen h-full overflow-y-auto mx-auto py-[5vh]">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >

          <Dialog.Panel className="transform overflow-auto max-h-[90vh] w-fit mx-auto">
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition.Root>;
}