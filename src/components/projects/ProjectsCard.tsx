import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { type ProjectsItem } from '@/lib/data';

interface ProjectsCardProps {
  projects: ProjectsItem;
}

export const ProjectsCard = ({ projects }: ProjectsCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
      <CardHeader>
        <CardTitle className="text-lg line-clamp-3">{projects.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-sm text-muted-foreground">
          {projects.startDate} - {projects.endDate}
        </div>
        <p className="text-sm line-clamp-3">
          {projects.results.substring(0, 200)}...
        </p>
        <Button asChild className="w-full">
          <Link to="/projects/$id" params={{ id: projects.id }}>
            Подробнее
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};
