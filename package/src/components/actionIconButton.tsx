
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
    aip-bg-slate-800/40 hover:aip-bg-slate-800/70 
    aip-text-gray-500 hover:aip-text-gray-100
    "
    onClick={onClick}
  >
    {children}
  </button>
}