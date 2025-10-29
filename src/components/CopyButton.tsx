import { useState } from "react";
import CopyIcon from "@/components/icons/CopyIcon";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex-shrink-0 hover:opacity-70 transition-opacity"
      aria-label="Копировать"
    >
      <CopyIcon width={20} height={22} color={copied ? "#14a0ff" : "#000000"} />
    </button>
  );
}