import type { ReactNode } from "react";
import Link from "next/link";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white">
        <div className="border-b px-6 py-4 font-semibold">
          My SaaS
        </div>

        <nav className="px-4 py-4 text-sm">
          <ul className="space-y-1">
            <li>
              <Link
                href="/app/dashboard"
                className="block rounded-md px-3 py-2 hover:bg-gray-100"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/app/users"
                className="block rounded-md px-3 py-2 hover:bg-gray-100"
              >
                Users
              </Link>
            </li>
            <li>
              <Link
                href="/app/settings"
                className="block rounded-md px-3 py-2 hover:bg-gray-100"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        {/* Top bar */}
        <header className="flex items-center justify-between border-b bg-white px-6 py-4">
          <div className="text-sm text-gray-600">
            Admin
          </div>

          <form action="/api/auth/logout" method="post">
            <button
              type="submit"
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
            >
              Log out
            </button>
          </form>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}