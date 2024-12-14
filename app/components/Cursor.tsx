import React, { useEffect, useRef, useState } from "react";
import styles from "./cursor.module.css";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorChildRef = useRef<HTMLDivElement | null>(null);
  const [cursorSize, setCursorSize] = useState(14);

  const animateCursor = ({ x, y }: { x: number; y: number }) => {
    const cursorChildTag = cursorChildRef.current;
    if (cursorChildTag) {
      cursorChildTag.style.left = `${x}px`;
      cursorChildTag.style.top = `${y}px`;
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    requestAnimationFrame(() =>
      animateCursor({ x: event.clientX, y: event.clientY })
    );
  };

  /* to handle mouseover and mouseleave styles during links hover */
  const handleMouseHover = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.tagName === "A") {
      if (event.type === "mouseover") {
        setCursorSize(30);
      } else if (event.type === "mouseleave") {
        setCursorSize(14);
      }
    }
  };

  useEffect(() => {
    // Attach event listeners for mouse movement and hover
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseHover, true);
    document.addEventListener("mouseleave", handleMouseHover, true);
    // Cleanup on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseHover, true);
      document.removeEventListener("mouseleave", handleMouseHover, true);
    };
  }, []);

  return (
    <div
      className={styles.cursor}
      ref={cursorRef}
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
      }}
    >
      <div
        ref={cursorChildRef}
        style={{
          position: "absolute",
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
        }}
      ></div>
    </div>
  );
};

export default Cursor;
