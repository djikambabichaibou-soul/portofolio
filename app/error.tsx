'use client';

import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-obsidian text-off-white p-8">
            <h2 className="font-display text-4xl font-bold mb-4 text-electric-lime uppercase">Something went wrong!</h2>
            <p className="font-mono text-sm text-white/40 mb-8 max-w-xl text-center">
                {error.message}
            </p>
            <button
                onClick={() => reset()}
                className="px-8 py-3 bg-white text-black font-bold tracking-widest hover:bg-electric-lime transition-colors"
            >
                TRY AGAIN
            </button>
        </div>
    );
}
