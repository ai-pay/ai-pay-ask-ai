import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AskAiModalButton, SearchBarModalButton } from 'ai-pay-ask-ai'
import 'ai-pay-ask-ai/dist/index.css'
import { setChatConfig } from 'ai-pay-ask-ai'

setChatConfig({
  colorMode: "dark",
  initialAssistantQuestion: undefined,
  defaultQuestions: undefined,
  questionBoxPlaceholder: undefined
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="dark">
      <div className="flex flex-col items-center justify-center gap-8 h-screen w-screen">
        <AskAiModalButton />

        <SearchBarModalButton />
      </div>
    </div>

    {/* For the animated background */}
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
  </React.StrictMode>,
)

