import { ReactNode } from "react";

export function Page({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl space-y-6">
      {children}
    </div>
  );
}
