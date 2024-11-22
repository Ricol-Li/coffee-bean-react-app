import { useState } from 'react'

const HomePage = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>I am Home</div>
      <MyButton count={count} onClick={() => setCount(count + 1)} />
      <MyButton count={count} onClick={() => setCount(count + 1)} />
    </>
  )
}

interface MyButtonProps {
  count: number
  onClick: () => void
}
function MyButton({ count, onClick }: MyButtonProps) {
  return <button onClick={onClick}>Click Me {count}</button>
}

export default HomePage
