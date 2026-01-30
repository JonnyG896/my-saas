import { apiFetch } from "@/lib/api";
import UserForm from "@/components/UserForm";
import type { User } from "@/types/user";

export default async function EditUserPage({
  params,
}: {
  params: { id: string };
}) {
  const user = await apiFetch<User>(`/users/${params.id}`);

  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">Edit user</h1>
      <UserForm user={user} />
    </div>
  );
}
