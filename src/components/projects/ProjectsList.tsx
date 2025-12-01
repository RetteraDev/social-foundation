import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { projectsData } from '@/lib/data';

export const ProjectsList = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold">Наши проекты</CardTitle>
          <p className="text-muted-foreground text-sm sm:text-base">
            Проекты, поддержанные Фондом президентских грантов
          </p>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="hover:shadow-md transition-shadow gap-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl break-words">
                  {project.title}
                </CardTitle>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {project.startDate} - {project.endDate}
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0 space-y-3 sm:space-y-4">
                <p className="text-justify text-sm sm:text-base leading-relaxed">
                  {project.results.substring(0, window.innerWidth < 640 ? 150 : 300)}...
                </p>
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                  <Button asChild size="sm" className="w-full sm:w-auto">
                    <Link to="/projects/$id" params={{ id: project.id }}>
                      Подробнее о проекте
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
