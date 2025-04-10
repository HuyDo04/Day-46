import React, { useEffect, useRef, useState } from "react";
const defaultFn = () => {};

function Tabs({ defaultIndex = 0, children, onChange = defaultFn }) {
  // chuyển tabs thành mảng khi nó chỉ có 1 phần tử
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const tabs = React.Children.toArray(children);
  const prevIndex = useRef(defaultIndex);
  useEffect(() => {
    if (prevIndex.current !== currentIndex) {
      onChange(currentIndex);
    }
    prevIndex.current = currentIndex;
  }, [currentIndex]);

  return (
    <div>
      <div className="tabs-list">
        {tabs.map((item, i) => {
          const active = currentIndex === i;
          // i -> 0,1,2,3,4
          // Khi gặp currentIndex thì i === true

          return (
            <button
              key={i}
              style={{ color: active ? "red" : "black" }}
              onClick={() => {
                setCurrentIndex(i);
              }}
            >
              {item.props.title}
            </button>
          );
        })}
      </div>
      {/* tabs[currentIndex] chỉ cần lấy ra index còn content sẽ lấy ra từ Tab */}
      <div className="tabs-content">{tabs[currentIndex]}</div>
    </div>
  );
}

export default Tabs;
