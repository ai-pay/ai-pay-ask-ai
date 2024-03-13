
interface ActionIconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function ActionIconButton({
  children,
  onClick,
}: ActionIconButtonProps): React.JSX.Element {
  return <button
    className="aip-p-1 aip-bg-slate-500/50 hover:aip-bg-slate-500 aip-text-black dark:aip-text-slate-300 dark:hover:aip-text-slate-100 aip-rounded"
    onClick={onClick}
  >
    {children}
  </button>
}