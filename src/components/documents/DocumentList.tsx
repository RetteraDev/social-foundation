import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Image, ExternalLink } from 'lucide-react';

const documents = [
  {
    id: 1,
    title: 'Устав фонда',
    file: 'docs/foundationChapter.pdf',
    type: 'pdf',
    description: 'Основной документ, определяющий цели, задачи и порядок деятельности фонда',
  },
  {
    id: 2,
    title: 'Свидетельство ОГРН',
    file: 'docs/ogrn.jpg',
    type: 'image',
    description: 'Свидетельство о государственной регистрации некоммерческой организации',
  },
  {
    id: 3,
    title: 'Уведомление Минюста РФ о признании Фонда «Серебряное поколение» СОНКО исполнителем общественно полезных услуг',
    file: 'docs/minUst.pdf',
    type: 'pdf',
  },
  {
    id: 4,
    title: 'Справка об итогах реализации проектов',
    file: 'docs/realisation.pdf',
    type: 'pdf',
    description: 'Отчет о реализации проектов, поддержанных Фондом президентских грантов',
  }
];

const fileIcons = {
  pdf: FileText,
  image: Image,
};

const getFileIcon = (type: string) => {
  const IconComponent = fileIcons[type as keyof typeof fileIcons] || FileText;
  return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />;
};

export const DocumentList = () => {
  const handleDownload = (file: string, title: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (file: string) => {
    window.open(file, '_blank');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl sm:text-3xl font-bold">Документы фонда</CardTitle>
          <p className="text-muted-foreground text-sm sm:text-base">
            Официальные документы, регламентирующие деятельность Фонда «Серебряное поколение»
          </p>
        </CardHeader>
        <CardContent className="space-y-4 sm:space-y-6">
          {documents.map((doc) => (
            <Card key={doc.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    {getFileIcon(doc.type)}
                  </div>
                  <div className="flex-1 min-w-0 space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold break-words">
                      {doc.title}
                    </h3>
                    {doc.description && (
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                        {doc.description}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2 flex-shrink-0 justify-end sm:justify-start">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handlePreview(doc.file)}
                      title="Предпросмотр"
                      className="w-9 h-9 sm:w-auto sm:h-auto"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="sr-only sm:not-sr-only sm:ml-2">Просмотр</span>
                    </Button>
                    <Button
                      size="sm"
                      onClick={() => handleDownload(doc.file, doc.title)}
                      className="flex-1 sm:flex-none"
                    >
                      <Download className="w-4 h-4 mr-0 sm:mr-2" />
                      <span className="hidden sm:inline">Скачать</span>
                      <span className="sm:hidden">Скачать</span>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-4 sm:p-6">
          <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
            Все представленные документы являются официальными и действующими. 
            Фонд «Серебряное поколение» осуществляет свою деятельность в соответствии 
            с законодательством Российской Федерации.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
