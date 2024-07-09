import { useDispatch, useSelector } from 'react-redux'
import { Increase, Decrease, OddIncrease, CustomIncrease } from '../redux/slices/CountSlice'
import { useState } from 'react'
import './asdf.css'

export default function DeepSide() {
  const [customNumb, setCustomNumb] = useState(0)
  const dispatch = useDispatch()
  return (
    <>
      <div className='deepside'>
        <div>자식의 자식 컴포넌트</div>
        <button onClick={() => dispatch(Increase())}>증가</button>
        <button onClick={() => dispatch(Decrease())}>감소</button>
        <button onClick={() => dispatch(OddIncrease())}>홀수일때만증가</button>
        <div>
          <input
            onChange={(e) => setCustomNumb(e.target.value)}
            type='number'
            defaultValue={customNumb}
          />
          <button onClick={() => dispatch(CustomIncrease(customNumb))}>원하는숫자로설정</button>
        </div>
      </div>
    </>
  )
}
