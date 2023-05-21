import React, { useEffect } from 'react'
import "../styles/active.css"
import Link from 'next/link';
import { isEmpty } from '@/utils/isEmpty';

const Active = ({ todos, setTodos }) => {
    const clickHandler = function (id) {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, done: true };
            } else {
                return todo;
            }
        }));
    }


    const result = isEmpty(todos)

    return (
        <div className="active">
            <div className="active-todo__wrapper">
                {
                    !result && (<h1 className="active-todos__empty">
                        There is no todos! <span><Link href={"/create"}>Create todo</Link></span>
                    </h1>) || (
                        <>
                            {
                                todos.map(({ plane, id, done }) => (
                                    !done &&
                                    <div className="active-todo" key={id}>
                                        <li className="active-todo__item">{plane}</li>
                                        <button className='active-todo__button' onClick={() => clickHandler(id)}>Done</button>
                                    </div> || <></>
                                ))
                            }
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Active;