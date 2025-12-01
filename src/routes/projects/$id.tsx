import { createFileRoute } from '@tanstack/react-router';
import { ProjectsDetail } from '@/components/projects/ProjectsDetail';
import { projectsData } from '@/lib/data';

export const Route = createFileRoute('/projects/$id')({
  component: ProjectsDetailPage,
  loader: ({ params }) => {
    console.log(params.id)
    const projects = projectsData.find(item => item.id === params.id);
    if (!projects) {
      throw new Error('Проект не найден');
    }
    return projects;
  },
});

function ProjectsDetailPage() {
  const projects = Route.useLoaderData();
  return <ProjectsDetail projects={projects} />;
}
