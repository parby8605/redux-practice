import Inside from './Inside'
import { useSelector } from 'react-redux'
import './asdf.css'

export default function Outside() {
  const { count } = useSelector((state) => state.Count)
  return (
    <>
      <div className='outside'>
        <div>부모 컴포넌트</div>
        <div>Redux로 정의한 count : {count}</div>
        <Inside />
        <div></div>
      </div>
    </>
  )
}
