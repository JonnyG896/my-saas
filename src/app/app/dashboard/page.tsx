import { Page } from "@/components/layout/Page";
import { PageHeader } from "@/components/layout/PageHeader";
import { Card } from "@/components/layout/Card";

export default function DashboardPage() {
  return (
    <Page>
      <PageHeader
        title="Dashboard"
        description="Overview of your application"
      />

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <div className="text-sm text-gray-500">Users</div>
          <div className="mt-1 text-2xl font-semibold">12</div>
        </Card>

        <Card>
          <div className="text-sm text-gray-500">Active projects</div>
          <div className="mt-1 text-2xl font-semibold">4</div>
        </Card>

        <Card>
          <div className="text-sm text-gray-500">Errors (24h)</div>
          <div className="mt-1 text-2xl font-semibold">0</div>
        </Card>
      </div>

      <Card>
        <div className="font-medium">Recent activity</div>
        <div className="mt-2 text-sm text-gray-600">
          Activity feed placeholder
        </div>
      </Card>
    </Page>
  );
}
