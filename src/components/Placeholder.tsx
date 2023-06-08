import { CSSProperties } from "react";

interface PlaceholderProps {
  style?: CSSProperties;
}

export default function Placeholder(props: PlaceholderProps) {
  return (
    <div
      style={props.style}
      className="overflow-hidden animate-move-bg bg-gradient-to-r from-slate-800 via-slate-600 to-slate-800 bg-[length:400%_100%]"
    ></div>
  );
}
