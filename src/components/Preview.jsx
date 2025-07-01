import React from "react";
import { renderBlock } from "./blocks";
import { useDrop } from "react-dnd";
import BlockItem from "./BlockItem";
import "./Preview.css";

function Preview({ layout, onDelete, onMove }) {
  const [, drop] = useDrop(() => ({ accept: "block" }));

  return (
    <div ref={drop} className="preview">
      {layout.map((block, index) => (
        <BlockItem
          key={index}
          index={index}
          block={block}
          onDelete={() => onDelete(index)}
          onMove={onMove}
        />
      ))}
    </div>
  );
}

export default Preview;
