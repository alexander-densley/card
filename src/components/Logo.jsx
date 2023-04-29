import { useId } from 'react'
import cap from '@/images/cap.png'

export function Logo(props) {
  let id = useId()

  return (
    <div>
      <image src={cap}/>
      {/* <p className='text-7xl/tight'>Versity</p> */}
    </div>
  )
}
