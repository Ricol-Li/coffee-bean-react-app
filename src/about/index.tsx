import { useEffect, useRef, useState } from 'react'

export default function About() {
  const [val, setVal] = useState('')
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)

    setVal(e.target.value)
  }

  useEffect(() => {
    console.log('Compnent did update or mounted')
  }, [val])

  const inputRef = useRef<HTMLInputElement>(null)
  const handleOnChange2 = () => {
    console.log('input2', inputRef.current?.value)
  }

  return (
    <div>
      <div>受控组件：</div>
      <input type="text" value={val} onChange={handleOnChange} />
      <div>非受控组件</div>
      <input type="text" ref={inputRef} onChange={handleOnChange2} />
    </div>
  )
}
