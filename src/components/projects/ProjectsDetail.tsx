import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from '@tanstack/react-router';
import { ArrowLeft } from 'lucide-react';
import { type ProjectsItem } from '@/lib/data';

interface ProjectsDetailProps {
  projects: ProjectsItem;
}

export const ProjectsDetail = ({ projects }: ProjectsDetailProps) => {
  return (
    <div className="space-y-6">
      <Button asChild variant="outline" className="gap-2 w-full sm:w-auto">
        <Link to="/projects">
          <ArrowLeft className="h-4 w-4" />
          Назад к проектам
        </Link>
      </Button>
      
      <Card>
        <CardHeader className="p-4 sm:p-6">
          <CardTitle className="text-xl sm:text-3xl break-words">
            {projects.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 sm:p-6 space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-sm">
            <div className="bg-muted/50 p-3 rounded-lg">
              <strong className="block text-xs sm:text-sm">Дата начала:</strong>
              <span className="text-sm sm:text-base">{projects.startDate}</span>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <strong className="block text-xs sm:text-sm">Дата окончания:</strong>
              <span className="text-sm sm:text-base">{projects.endDate}</span>
            </div>
            <div className="bg-muted/50 p-3 rounded-lg">
              <strong className="block text-xs sm:text-sm">Сумма поддержки:</strong>
              <span className="text-sm sm:text-base">{projects.supportAmount}</span>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-lg sm:text-xl">Основные результаты проекта:</h3>
            <p className="text-justify leading-relaxed text-sm sm:text-base">
              {projects.results}
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-2 text-lg sm:text-xl">Ссылки на публикации:</h3>
            <div className="space-y-2">
              {projects.urls.map((url, index) => (
                <div key={index}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 break-all text-sm sm:text-base"
                  >
                    {url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
