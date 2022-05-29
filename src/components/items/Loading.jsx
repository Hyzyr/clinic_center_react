import React from "react";

export default function Loading() {
  return (
    <div className="loading__outer">
      <div className="loading">
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="45" />
        </svg>
      </div>
    </div>
  );
}
