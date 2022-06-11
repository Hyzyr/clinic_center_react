import React, { useEffect, useRef, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { upload } from "./SVG";

export default function CustomFile({ inline = false }) {
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [dragState, setDragState] = useState("idle");
  const dropZone = useRef(null);
  const fileInput = useRef(null);

  useEffect(() => {
    dropZone.current.ondragover = function (e) {
      e.preventDefault();
      setDragState("dragover");
    };
    dropZone.current.ondragleave = function (e) {
      e.preventDefault();
      setDragState("idle");
    };
    dropZone.current.ondrop = function (e) {
      e.preventDefault();
      setDragState("idle");
      setFile(e.dataTransfer.files);
    };
  }, [dropZone]);
  useEffect(() => {}, [dropZone]);
  const fileClick = () => {
    fileInput.current.click();
  };
  return (
    <div
      className={`customFile ${dragState === "idle" ? "" : "active"}  ${
        inline ? "customFile--inline" : ""
      }`}
      ref={dropZone}
    >
      <input type="file" accept={fileTypes.toString()} ref={fileInput} />
      <div className="customFile__ico">{upload}</div>
      <div className="customFile__para">
        {dragState === "idle" ? "Drag & Drop of your files" : "Drop here"}
      </div>
      <button className="button button--main" onClick={fileClick}>
        Browse Files
      </button>
    </div>
  );
}
