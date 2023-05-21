import React from 'react'
import "../styles/done.css"
import { isEmpty } from '@/utils/isEmpty'
import Link from 'next/link'

const Done = ({ todos }) => {

    const result = isEmpty(todos)

    console.log(!result);

    return (
        <div className="done">
            <div className="done-todos">
                {
                    !result && (
                        todos.map(({ plane, done, id }) => (
                            done && (<li className='done-todos__item' key={id}>
                                {plane}
                            </li>) || <></>
                        ))
                    ) || (
                        <h1 className="done-todos__empty">There is no done todos!<span><Link href={"/active"}>Done todos</Link></span></h1>
                    )
                }
            </div>
        </div>
    )
}

export default Done