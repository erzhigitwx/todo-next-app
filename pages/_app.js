import Link from "next/link";
import "../styles/globals.css"
import { useState } from "react";

export default function MyApp({ Component, pageProps }) {
    const [todos, setTodos] = useState([])
    return (
        <main className="main">
            <header className="header">
                <Link href={"/create"} className="header-link">
                    create todo
                </Link>
                <Link href={"/active"} className="header-link">
                    active todos
                </Link>
                <Link href={"/done"} className="header-link">
                    done todos
                </Link>
                <Link href={"/"} className="header-link">
                    home
                </Link>
            </header>
            <Component {...pageProps} todos={todos} setTodos={setTodos} />
        </main>
    );
}