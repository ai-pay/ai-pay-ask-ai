/* eslint-disable react/prop-types */
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { useCallback, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ClipboardIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

interface CopyToClipboardProps {
  code: string;
  language: string;
}

export function CopyCodeToClipboard({
  code,
  language
}: CopyToClipboardProps): React.JSX.Element {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(() => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }, []);

  return <div
    className="absolute flex flex-row top-0 right-0 p-2">
    <span className='m-1 pb-1 basis-3/4 text-xs'>{language}</span>
    <CopyToClipboard 
      text={code}
      onCopy={copy}
    >
      {copied ? 
        <ClipboardDocumentCheckIcon className="text-lg overflow-visible m-1 w-4 h-4 text-green-500" />
        :   
        <ClipboardIcon className="text-lg overflow-visible m-1 w-4 h-4 hover:text-white" />
      }
    </CopyToClipboard>
  </div>;
}

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { DotPulse } from "../../../../../components/chat/DotPulse";
import { KnowledgeBaseSource } from "ai-pay/models";
import { DisplayKnowledgeBaseSources } from "./displaySources";
import { AssistantMessageActionButtons } from "./actionButtons";

interface ChatBubbleCodeBlockProps {
  code: string;
  language: string;
}

export function ChatBubbleCodeBlock({
  code,
  language  
}: ChatBubbleCodeBlockProps): React.JSX.Element {
  return <div className="relative">
    <CopyCodeToClipboard code={code} language={language} />

    <SyntaxHighlighter
      customStyle={{
        fontSize: "0.8em",
        borderRadius: "0.5em",
      }}
      PreTag="div"
      language={language}
      style={a11yDark}
    >
      {code}
    </SyntaxHighlighter>
  </div>;
}

interface AssistantMessageProps {
  content: string;
  answerId: string | undefined;
  progressPrompt?: string;
  loading?: boolean;
  sources: KnowledgeBaseSource[] | undefined;
}

export function AssistantMessage({
  content,
  answerId,
  progressPrompt,
  loading = false,
  sources,
}: AssistantMessageProps): React.JSX.Element {
  return <div 
    className="relative group flex flex-col gap-3 min-h-[calc(2rem+theme(spacing[3.5])*2)] min-w-[60px] break-words rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 px-5 py-3.5 text-gray-600 prose-pre:my-2 dark:border-gray-500/50 dark:from-slate-800/50 dark:text-gray-300"
  >

    {progressPrompt && content === "" && <h3>{progressPrompt}</h3>}

    {loading && content === "" && <DotPulse />}

    <Markdown 
      className="w-full rounded-r-xl rounded-tl-xl mr-auto prose text-gray-800 dark:text-gray-200 max-w-none max-sm:prose-sm dark:prose-invert prose-headings:font-semibold prose-h1:text-lg prose-h2:text-base prose-h3:text-base prose-pre:bg-gray-800 dark:prose-pre:bg-gray-900 [&>pre]:p-0 [&>pre]:bg-transparent"
      remarkPlugins={[remarkGfm]}
      components={{
        code(props) {
          const {children, className} = props;
          const match = /language-(\w+)/.exec(className || "");

          return <ChatBubbleCodeBlock
            language={match?.[1] ?? ""}
            code={String(children).replace(/\n$/, "")}
          />;
        }
      }}
    >
      {content}
    </Markdown>

    <DisplayKnowledgeBaseSources sources={sources} />

    {answerId && <AssistantMessageActionButtons 
      content={content}
      answerId={answerId}
    />}
  </div>
}