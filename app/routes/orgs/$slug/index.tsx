import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/orgs/$slug/')({
  beforeLoad: () => {
    throw redirect({ to: '/orgs/$slug/dashboard', params: true });
  },
});
