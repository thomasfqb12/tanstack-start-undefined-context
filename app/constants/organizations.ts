import { Organization } from '~/types/organization';

const generateOrganizations = (count: number): Organization[] => {
  return Array.from({ length: count }, (_, i) => {
    const id = (i + 1).toString();
    return {
      id,
      name: `organization ${id}`,
      slug: `organization-${id}`,
    };
  });
};

export const ORGANIZATIONS = generateOrganizations(5);
