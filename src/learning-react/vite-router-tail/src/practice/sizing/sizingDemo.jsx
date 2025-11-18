import "./styles/sizing-index.css";
import { useState, useRef } from "react";
import FigureCationDemo from "./sizing-examples/figureCaption";
import TitleDemo from "./sizing-examples/titlesShowcase";

function MinContentDemo() {
  return (
    <div>
      <h1 className="title">Min Content</h1>
      <p className="sub-title">Normal Width</p>
      <h2 className="content">A title for an awesome article.</h2>
      <p className="sub-title">Intrinsic Width(min content)</p>
      <h2 className="content w-min">A title for an awesome article.</h2>
    </div>
  );
}

function MaxContentDemo() {
  return (
    <div>
      <h1 className="title">Max Content</h1>
      <p className="sub-title">Normal Width</p>
      <h2 className="content">A title for an awesome article.</h2>
      <p className="sub-title">Intrinsic Width(max content)</p>
      <h2 className="content w-max">A title for an awesome article.</h2>
    </div>
  );
}

function FitContentDemo() {
  return (
    <div className="m-auto w-max">
      <h1 className="title mb-2">Fit Content</h1>
      <ResizableBox>
        <h2 className="bg-red-300 m-4 w-fit">
          A title for an awesome article.
        </h2>
      </ResizableBox>
    </div>
  );
}

function SizingContainer() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-screen">
      <div className="child-container">
        <MinContentDemo></MinContentDemo>
      </div>
      <div className="child-container">
        <MaxContentDemo></MaxContentDemo>
      </div>
      <div className="child-container">
        <FitContentDemo></FitContentDemo>
      </div>
      <div className="child-container"></div>
    </div>
  );
}

function ResizableBox({ children }) {
  const defaultResizingInfo = {
    isResizing: false,
    horizontal: false,
    vertical: false,
    startX: 0,
    startY: 0,
    width: 0,
    height: 0,
  };

  const defaultCursorStyle = "cursor-default";
  const parentRef = useRef(null);
  const containerRef = useRef(null);
  const resizingInfoRef = useRef(defaultResizingInfo);

  // const [resizingInfo, setResizingInfo] = useState(defaultResizingInfo);

  const [size, setSize] = useState({ width: 200, height: 150 });

  const [cursorStyle, setCursorStyle] = useState(defaultCursorStyle);

  const edgeThreshold = 8;

  const detectResizeZone = (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const rect = containerRef.current.getBoundingClientRect();
    const isNearRight = x >= rect.right - edgeThreshold && x <= rect.right;
    const isNearBottom = y >= rect.bottom - edgeThreshold && y <= rect.bottom;
    return { horizontal: isNearRight, vertical: isNearBottom };
  };

  const handleMouseMoveOverBox = (event) => {
    if (resizingInfoRef.current.isResizing) return;
    const { horizontal, vertical } = detectResizeZone(event);
    let cursorStyle = defaultCursorStyle;
    if (horizontal && vertical) {
      cursorStyle = "cursor-nwse-resize";
    } else if (horizontal) {
      cursorStyle = "cursor-ew-resize";
    } else if (vertical) {
      cursorStyle = "cursor-ns-resize";
    }

    setCursorStyle(cursorStyle);
  };

  const handleMouseDown = (event) => {
    const zones = detectResizeZone(event);
    if (!(zones.horizontal || zones.vertical)) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    resizingInfoRef.current = {
      ...zones,
      isResizing: true,
      width: containerRect.width,
      height: containerRect.height,
      startX: event.clientX,
      startY: event.clientY,
    };
    event.preventDefault();
  };

  const handleMouseMove = (mouseEvent) => {
    const resizingInfo = resizingInfoRef.current;
    if (!resizingInfo.isResizing || !parentRef.current) return;
    const parentRect = parentRef.current.getBoundingClientRect();
    const MIN_WIDTH = 50;
    const MIN_HEIGHT = 50;
    setSize((prev) => {
      let newWidth = prev.width;
      let newHeight = prev.height;

      if (resizingInfo.horizontal) {
        const deltaX = mouseEvent.clientX - resizingInfo.startX;
        newWidth = resizingInfo.width + deltaX;
        newWidth = Math.min(parentRect.width, Math.max(MIN_WIDTH, newWidth));
      }

      if (resizingInfo.vertical) {
        const deltaY = mouseEvent.clientY - resizingInfo.startY;
        newHeight = resizingInfo.height + deltaY;
        newHeight = Math.min(parentRect.width, Math.max(MIN_HEIGHT, newHeight));
      }
      return { width: newWidth, height: newHeight };
    });
  };

  const handleMouseUp = () => {
    const currentResizingInfo = resizingInfoRef.current;
    const updatedResizingInfo = {
      ...currentResizingInfo,
      isResizing: false,
      horizontal: false,
      vertical: false,
      startX: 0,
      startY: 0,
    };
    resizingInfoRef.current = updatedResizingInfo;
  };

  const roundSize = (size) => Math.round(size);
  const containerStyle = {
    width: `${size.width}px`,
    height: `${size.height}px`,
  };

  const boxStyleList = ["bg-blue-400 rounded-md select-none"];
  boxStyleList.push(cursorStyle);
  const boxStyles = boxStyleList.join(" ");

  return (
    <div
      ref={parentRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative flex items-center justify-center bg-gray-200 h-[400px] w-[600px] rounded-xl overflow-hidden"
    >
      <div
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMoveOverBox}
        className={boxStyles}
        style={containerStyle}
      >
        {children}
      </div>

      <div className="absolute top-2 right-3 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
        <p>The width is {roundSize(size.width)} px.</p>
        <p>The height is {roundSize(size.height)} px.</p>
      </div>
    </div>
  );
}

export default function SizingDemoApp() {
  return (
    <div className="h-screen">
      <TitleDemo></TitleDemo>
    </div>
  );
}
