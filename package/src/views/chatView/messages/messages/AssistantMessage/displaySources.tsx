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

  return <div className="aip-flex aip-flex-wrap aip-gap-2 aip-items-center aip-border-t-gray-500/50 aip-border-t aip-pt-2">
    <p>Sources: </p> 
    {sources.map((source, index) => {
      return <a 
        key={index}
        href={source.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="aip-py-1 aip-px-2 aip-rounded-lg aip-bg-slate-50/75 hover:aip-bg-white dark:aip-bg-slate-800/60 dark:hover:aip-bg-slate-800/65 aip-border aip-border-slate-500/50 hover:aip-border-slate-500 aip-transition-colors"
      >
        {source.title}
      </a>
    })}
  </div>
}