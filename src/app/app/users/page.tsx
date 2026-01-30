import { Page } from "@/components/layout/page";
import { PageHeader } from "@/components/layout/page-header";
import { Card } from "@/components/layout/card";
import { apiFetch } from "@/lib/api";
import type { User } from "@/types/user";
import Link from "next/link";

export default async function UsersPage() {
  const users = await apiFetch<User[]>("/users");

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Users</h1>

        <Link
          href="/app/users/new"
          className="rounded-md bg-black px-4 py-2 text-white"
        >
          New user
        </Link>
      </div>

      <div className="overflow-hidden rounded-lg border bg-white">
        <table className="w-full text-sm">
          <thead className="border-b bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b last:border-0">
                <td className="px-4 py-2">{u.name}</td>
                <td className="px-4 py-2">{u.email}</td>
                <td className="px-4 py-2 text-center">{u.role}</td>
                <td className="px-4 py-2 text-right">
                  <Link
                    href={`/app/users/${u.id}`}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
