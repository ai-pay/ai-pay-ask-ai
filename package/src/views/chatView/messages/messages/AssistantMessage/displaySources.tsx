import { KnowledgeBaseSource } from "ai-pay"

interface DisplayKnowledgeBaseSourcesProps {
  sources: KnowledgeBaseSource[] | undefined;
}

export function DisplayKnowledgeBaseSources({
  sources
}: DisplayKnowledgeBaseSourcesProps): React.JSX.Element | null {
  if (!sources || sources.length === 0) {
    return null
  }

  return <div className="aip-flex aip-flex-wrap aip-gap-2 aip-items-center aip-border-t-zinc-500/50 aip-border-t aip-pt-2">
    <p>Sources: </p> 
    {sources.map((source, index) => {
      return <a 
        key={index}
        href={source.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="
        aip-py-1 aip-px-2 aip-rounded-lg 
        aip-text-sm aip-text-black/50 hover:aip-text-black dark:aip-text-white/50 dark:hover:aip-text-white
        aip-bg-gray-50/75 hover:aip-bg-zinc-50 dark:aip-bg-zinc-700/25 dark:hover:aip-bg-zinc-800 
        aip-border aip-border-gray-500/50 hover:aip-border-gray-500 
        aip-transition-colors"
      >
        {source.title}
      </a>
    })}
  </div>
}