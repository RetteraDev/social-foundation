import { createFileRoute } from '@tanstack/react-router';
import { ProjectsList } from '@/components/projects/ProjectsList';

export const Route = createFileRoute('/projects/')({
  component: () => <ProjectsList />,
});
