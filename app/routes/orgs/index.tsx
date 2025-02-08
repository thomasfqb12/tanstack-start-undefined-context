import { createFileRoute, Link } from '@tanstack/react-router';
import { ORGANIZATIONS } from '~/constants/organizations';

export const Route = createFileRoute('/orgs/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1>Select an organization to continue</h1>
      <ul>
        {ORGANIZATIONS.map((org) => (
          <li key={org.id}>
            <Link to="/orgs/$slug" params={{ slug: org.slug }} className="py-4">
              {'->'} {org.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
