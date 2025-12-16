"use client";

import { useEffect } from "react";
import { AlertOctagon } from "lucide-react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body className="bg-black text-white flex items-center justify-center min-h-screen p-4">
        <div className="text-center max-w-lg">
           <div className="w-20 h-20 bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertOctagon className="w-10 h-10 text-red-500" />
           </div>
          <h2 className="text-3xl font-bold mb-4">Critical Error</h2>
          <p className="text-gray-400 mb-8">
            A critical error occurred in the application layout.
          </p>
          <button
            onClick={() => reset()}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-bold transition-all"
          >
            Reload Application
          </button>
        </div>
      </body>
    </html>
  );
}
