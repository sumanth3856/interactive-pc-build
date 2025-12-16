"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCcw } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-deep-charcoal p-4">
      <div className="bg-white/5 border border-white/10 p-8 rounded-2xl max-w-md w-full text-center shadow-2xl backdrop-blur-xl">
        <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2">Something went wrong!</h2>
        <p className="text-gray-400 mb-8 text-sm">
          We encountered an unexpected error. Don't worry, nothing is lost. Please try again.
        </p>

        <div className="bg-black/20 rounded-lg p-3 mb-6 text-left overflow-hidden">
            <p className="font-mono text-xs text-red-300 break-words">
                {error.message || "Unknown Application Error"}
            </p>
        </div>

        <button
          onClick={reset}
          className="w-full flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all"
        >
          <RefreshCcw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
}
