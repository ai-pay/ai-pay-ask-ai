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
    return <div className="flex flex-col gap-2 py-5 items-center">
      <input
        type="text"
        autoFocus
        className="w-full appearance-none p-3 bg-slate-800/50 rounded-lg border-transparent focus:border-white border-2 whitespace-break-spaces text-wrap break-words text-gray-800 dark:text-gray-200"
        value={editingText}
        onChange={(e) => {
          setEditingText(e.target.value);
        }}
      />
      <div className="flex gap-2">
        <button
          className="py-1 px-3 bg-slate-800/50 hover:bg-slate-800 text-black dark:text-slate-300 dark:hover:text-slate-100 rounded-lg"
          onClick={() => {
            changeQuestion(questionId, editingText)
            setIsEditing(false)
          }}
        >
          Submit
        </button>
        <button
          className="py-1 px-3 bg-slate-800/50 hover:bg-slate-800 text-black dark:text-slate-300 dark:hover:text-slate-100 rounded-lg"
          onClick={() => setIsEditing(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  }

  return <div className="group flex p-5 items-center">
    <p className="w-full appearance-none whitespace-break-spaces text-wrap break-words text-gray-800 dark:text-gray-200">
      {content}
    </p>
    <div className="hidden group-hover:block">
      <ActionIconButton
        onClick={() => {
          setEditingText(content)
          setIsEditing(true)
        }}
      > 
        <PencilIcon className="h-3.5 w-3.5" />
      </ActionIconButton>
    </div>
  </div>
}