"use client";

import { useEffect } from "react";

import "@/styles/main.scss";

export default function GlobalError({
    error,
    retry,
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (

        <html lang="en">

            <body>

                <main className="row headerOffset">

                    <div className="container">

                        <div className="content" data-alignment="centered">

                            <h1>Something went wrong</h1>

                            <p>Please try again. If the problem continues, get in touch.</p>

                            <button type="button" className="btn primary" onClick={() => retry()}>

                                <span>Try again</span>

                            </button>

                        </div>

                    </div>

                </main>

            </body>

        </html>

    );

}
