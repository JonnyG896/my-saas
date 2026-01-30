"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { User } from "@/types/user";

type Props = {
  user?: User;
};

export default function UserForm({ user }: Props) {
  const router = useRouter();

  const [name, setName] = useState(user?.name ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [role, setRole] = useState<User["role"]>(user?.role ?? "user");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();

    await fetch(
      user ? `/api/users/${user.id}` : "/api/users",
      {
        method: user ? "PUT" : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role }),
      }
    );

    router.push("/app/users");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="max-w-md space-y-4">
      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="w-full rounded-md border px-3 py-2"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <select
        className="w-full rounded-md border px-3 py-2"
        value={role}
        onChange={(e) => setRole(e.target.value as any)}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

      <button className="rounded-md bg-black px-4 py-2 text-white">
        Save
      </button>
      {user && (
  <button
    type="button"
    onClick={async () => {
      if (!confirm("Delete this user?")) return;

      await fetch(`/api/users/${user.id}`, { method: "DELETE" });
      router.push("/app/users");
      router.refresh();
    }}
    className="rounded-md border px-4 py-2 text-red-600"
  >
    Delete
  </button>
)}
    </form>
  );
}
