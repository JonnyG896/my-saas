import { Page } from "@/components/layout/page";
import { PageHeader } from "@/components/layout/page-header";
import UserForm from "@/components/UserForm";

export default function NewUserPage() {
  return (
    <Page>
      <PageHeader
        title="New user"
        description="Invite someone to your application"
      />
      <UserForm />
    </Page>
  );
}
