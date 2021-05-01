import { useState } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";

export function Panel({ title, icon, time, fixed = true, children }) {
  const [isMaximized, setIsMaximized] = useState(false);

  const onMaximize = function () {
    if (!fixed) {
      setIsMaximized(!isMaximized);
    }
  };

  return (
    <div className={`Panel ${isMaximized ? "max" : ""}`}>
      <div className="Panel--header">
        {icon ? <span className="Panel--header-icon">{icon}</span> : null}
        <span className="Panel--header-text">{title}</span>
        {time ? (
          <span className="Panel--header-time">
            {new Date().toLocaleDateString()}
          </span>
        ) : null}
        {!fixed ? (
          <button
            onClick={onMaximize}
            className="Panel--header-resize"
            title="resize"
          >
            <BsArrowsFullscreen />
          </button>
        ) : null}
      </div>
      <div className="Panel--body">{children}</div>
    </div>
  );
}
