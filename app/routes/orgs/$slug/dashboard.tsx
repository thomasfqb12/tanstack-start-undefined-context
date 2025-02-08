import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/orgs/$slug/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  const context = Route.useRouteContext();

  return (
    <div>
      <h1>Organization's (id: {context.organization.id}) Dashboard</h1>
      <p>Refresh the page to trigger the error</p>
    </div>
  );
}
