import { createFileRoute, redirect, Outlet } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/start';
import { ORGANIZATIONS } from '~/constants/organizations';
import { Organization } from '~/types/organization';

const getOrganizationBySlug = createServerFn({ method: 'GET' })
  .validator((data: unknown) => data as { slug: string })
  .handler(async ({ data: { slug } }) => {
    const organization = await new Promise<Organization | undefined>(
      (resolve) => {
        setTimeout(() => {
          const organization = ORGANIZATIONS.find((org) => org.slug === slug);
          resolve(organization);
        }, 2000);
      }
    );

    return { organization };
  });

export const Route = createFileRoute('/orgs/$slug')({
  beforeLoad: async ({ params: { slug } }) => {
    console.log({ slug });
    const { organization } = await getOrganizationBySlug({ data: { slug } });
    console.log({ organization });
    if (!organization) {
      throw redirect({ to: '/orgs' });
    }
    return { organization };
  },
  component: Outlet,
});
