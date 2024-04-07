import { PencilIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useChangeQuestion } from "../../../../services/useChangeQuestion";
import { ActionIconButton } from "../../../../components/actionIconButton";

interface UserQuestionProps {
  questionId: string;
  content: string;
}

export function UserQuestion({
  questionId,
  content,
}: UserQuestionProps): React.JSX.Element {
  const [isEditing, setIsEditing] = useState(false);
  const [editingText, setEditingText] = useState(content);
  const {changeQuestion} = useChangeQuestion();

  if (isEditing) {
    return <div className="aip-flex aip-flex-col aip-gap-2 aip-py-5 aip-items-center">
      <input
        type="text"
        autoFocus
        className="aip-w-full aip-appearance-none aip-p-3 aip-bg-gray-800/50 aip-rounded-lg aip-border-transparent focus:aip-border-white aip-border-2 aip-whitespace-break-spaces aip-text-wrap aip-break-words aip-text-zinc-800 dark:aip-text-zinc-200"
        value={editingText}
        onChange={(e) => {
          setEditingText(e.target.value);
        }}
      />
      <div className="aip-flex aip-gap-2">
        <button
          className="aip-py-1 aip-px-3 aip-bg-gray-800/50 hover:aip-bg-gray-800 aip-text-black dark:aip-text-gray-300 dark:hover:aip-text-gray-100 aip-rounded-lg"
          onClick={() => {
            changeQuestion(questionId, editingText)
            setIsEditing(false)
          }}
        >
          Submit
        </button>
        <button
          className="aip-py-1 aip-px-3 aip-bg-gray-800/50 hover:aip-bg-gray-800 aip-text-black dark:aip-text-gray-300 dark:hover:aip-text-gray-100 aip-rounded-lg"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  }

  return <div className="aip-group aip-flex aip-p-5 aip-items-center">
    <p className="aip-w-full aip-appearance-none aip-whitespace-break-spaces aip-text-wrap aip-break-words aip-text-zinc-800 dark:aip-text-zinc-200">
      {content}
    </p>
    <div className="aip-hidden group-hover:aip-block">
      <ActionIconButton
        onClick={() => {
          setEditingText(content)
          setIsEditing(true)
        }}
      > 
        <PencilIcon className="aip-h-3.5 aip-w-3.5" />
      </ActionIconButton>
    </div>
  </div>
}