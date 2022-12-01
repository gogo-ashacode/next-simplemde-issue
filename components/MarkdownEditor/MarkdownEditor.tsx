import dynamic from "next/dynamic";
import React, { useMemo } from "react";
import "easymde/dist/easymde.min.css";

interface MarkdownEditorProps {
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const MarkdownEditor = ({
  id,
  value,
  onChange,
}: MarkdownEditorProps) => {
  const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
    ssr: false,
  });

  const simpleMDEOptions = useMemo(() => {
    return {
      spellChecker: false,
      sideBySideFullscreen: false,
    };
  }, []);

  return (
    <SimpleMDE
      id={id}
      value={value}
      onChange={(value) => onChange(value)}
      options={simpleMDEOptions}
    />
  );
};
