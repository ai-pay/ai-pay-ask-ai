import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AskAiModalButton, SearchBarModalButton } from 'ai-pay-ask-ai'
import 'ai-pay-ask-ai/dist/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col items-center justify-center gap-8 h-screen w-screen">
      <AskAiModalButton chatConfig={{
        initialAssistantQuestion: undefined,
        defaultQuestions: undefined,
        questionBoxPlaceholder: undefined
      }} />

      <SearchBarModalButton chatConfig={{
        initialAssistantQuestion: undefined,
        defaultQuestions: undefined,
        questionBoxPlaceholder: undefined
      }} />
    </div>
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
  </React.StrictMode>,
)

