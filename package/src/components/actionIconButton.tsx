
interface ActionIconButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

export function ActionIconButton({
  children,
  onClick,
}: ActionIconButtonProps): React.JSX.Element {
  return <button
    className="p-1 bg-slate-500/50 hover:bg-slate-500 text-black dark:text-slate-300 dark:hover:text-slate-100 rounded"
    onClick={onClick}
  >
    {children}
  </button>
}