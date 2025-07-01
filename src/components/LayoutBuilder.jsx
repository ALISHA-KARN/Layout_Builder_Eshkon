import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBlock,
  deleteBlock,
  moveBlock,
  saveLayout,
  setLayout,
} from "../redux/layoutSlice";
import { blocks } from "./blocks";
import Preview from "./Preview";
import "./LayoutBuilder.css";
import update from "immutability-helper";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import debounce from "lodash.debounce";

function LayoutBuilder() {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.layout);

  useEffect(() => {
    debouncedSave(layout);
  }, [layout]);

  const debouncedSave = debounce((layout) => {
    dispatch(saveLayout());
  }, 1000);

  const handleAddBlock = (type) => {
    dispatch(addBlock(type));
  };

  const handleMoveBlock = (fromIndex, toIndex) => {
    dispatch(moveBlock({ fromIndex, toIndex }));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="builder">
        <div className="block-picker">
          {blocks.map((block) => (
            <button key={block.type} onClick={() => handleAddBlock(block.type)}>
              Add {block.label}
            </button>
          ))}
        </div>
        <Preview
          layout={layout}
          onDelete={(i) => dispatch(deleteBlock(i))}
          onMove={handleMoveBlock}
        />
      </div>
    </DndProvider>
  );
}

export default LayoutBuilder;
