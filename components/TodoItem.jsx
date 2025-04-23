import React from 'react'
import {EditTwoTone, DeleteTwoTone} from '@ant-design/icons'
export default function TodoItem() {
  return (
    <li className="flex items-center justify-between border border-gray-300 px-3 py-2 rounded">
            <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="line-through">Hello</span>
            </label>
           <div className='flex gap-2'>
           <EditTwoTone/>
           <DeleteTwoTone/>
           </div>
        </li>
  )
}
