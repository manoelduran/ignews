import { useState, useEffect } from "react";

export function Async() {
  const [isButtonInvisible, setIsButtonInvisible] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setIsButtonInvisible(true)
    }, 1000) // 1 segundo
  })
  return (
    <div>
      <div>Hello World</div>
      {!isButtonInvisible && <button>Button</button>}
    </div>
  );
}