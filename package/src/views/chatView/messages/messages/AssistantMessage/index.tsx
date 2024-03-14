/* eslint-disable react/prop-types */
import Markdown from "react-markdown";

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
    className="aip-absolute aip-flex aip-flex-row aip-top-0 aip-right-0 aip-p-2">
    <span className='aip-m-1 aip-pb-1 aip-basis-3/4 aip-text-xs'>{language}</span>
    <CopyToClipboard 
      text={code}
      onCopy={copy}
    >
      {copied ? 
        <ClipboardDocumentCheckIcon className="aip-text-lg aip-overflow-visible aip-m-1 aip-w-4 aip-h-4 aip-text-green-500" />
        :   
        <ClipboardIcon className="aip-text-lg aip-overflow-visible aip-m-1 aip-w-4 aip-h-4 hover:aip-text-white" />
      }
    </CopyToClipboard>
  </div>;
}

import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/prism/a11y-dark";
import { DotPulse } from "../../../../../components/utils/DotPulse";
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
  return <div className="aip-relative">
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
    className="aip-relative aip-group aip-flex aip-flex-col aip-gap-3 aip-min-h-[calc(2rem+theme(spacing[3.5])*2)] aip-min-w-[60px] aip-break-words aip-rounded-2xl aip-border aip-border-gray-100 aip-bg-gradient-to-br aip-from-gray-50 aip-px-5 aip-py-3.5 aip-text-gray-600 prose-pre:aip-my-2 dark:aip-border-gray-500/50 dark:aip-from-slate-800/50 dark:aip-text-gray-300"
  >

    {progressPrompt && content === "" && <h3>{progressPrompt}</h3>}

    {loading && content === "" && <DotPulse />}

    <Markdown 
      className="aip-w-full aip-rounded-r-xl aip-rounded-tl-xl aip-mr-auto aip-prose aip-text-gray-800 dark:aip-text-gray-200 aip-max-w-none max-sm:aip-prose-sm dark:aip-prose-invert prose-headings:aip-font-semibold prose-h1:aip-text-lg prose-h2:aip-text-base prose-h3:aip-text-base prose-pre:aip-bg-gray-800 dark:prose-pre:aip-bg-gray-900 [&>pre]:aip-p-0 [&>pre]:aip-bg-transparent dark:[&>pre]:aip-bg-transparent"
      remarkPlugins={[]}
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