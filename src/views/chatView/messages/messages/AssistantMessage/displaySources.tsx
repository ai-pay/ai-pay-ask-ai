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

  return <div className="flex flex-wrap gap-2 items-center border-t-gray-500/50 border-t pt-2">
    <p>Sources: </p> 
    {sources.map((source, index) => {
      return <a 
        key={index}
        href={source.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="py-1 px-2 rounded-lg bg-slate-800/60 border border-slate-500/50 hover:border-slate-500"
      >
        {source.title}
      </a>
    })}
  </div>
}