
interface ActionIconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function ActionIconButton({
  children,
  onClick,
}: ActionIconButtonProps): React.JSX.Element {
  return <button
    className="
    aip-p-1 aip-rounded
    aip-bg-gray-300/40 hover:aip-bg-gray-300/90 dark:aip-bg-gray-700/40 dark:hover:aip-bg-gray-700/70 
    aip-text-zinc-500 hover:aip-text-zinc-800 dark:hover:aip-text-zinc-100
    aip-transition-colors"
    onClick={onClick}
  >
    {children}
  </button>
}