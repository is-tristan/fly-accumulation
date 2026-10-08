"use client";

import { useEffect } from "react";

import StatusMessage from "@/components/screens/status/status-message";

export default function Error({
    error,
    retry,
}) {

    useEffect(() => {
        console.error(error);
    }, [error]);

    return (

        <StatusMessage
            title="Something went wrong"
            description="Please try again. If the problem continues, get in touch."
            actionLabel="Try again"
            onAction={() => retry()}
        />

    );

}
