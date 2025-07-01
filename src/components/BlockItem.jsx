import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { renderBlock } from "./blocks";

function BlockItem({ block, index, onDelete, onMove }) {
  const [, drag] = useDrag({
    type: "block",
    item: { index },
  });

  const [, drop] = useDrop({
    accept: "block",
    hover: (item) => {
      if (item.index !== index) {
        onMove(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} className="block">
      {renderBlock(block)}
      <div className="controls">
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default BlockItem;
