"use client";

import Link from "next/link";

export default function StatusMessage({
    title,
    description,
    actionLabel,
    actionHref,
    onAction,
}) {

    return (

        <div className="row headerOffset">

            <div className="container">

                <div className="content" data-alignment="centered">

                    <h1>{title}</h1>

                    <p>{description}</p>

                    {actionHref && (

                        <Link href={actionHref} className="btn primary">

                            <span>{actionLabel}</span>

                        </Link>

                    )}

                    {onAction && (

                        <button type="button" className="btn primary" onClick={onAction}>

                            <span>{actionLabel}</span>

                        </button>

                    )}

                </div>

            </div>

        </div>

    );

}
