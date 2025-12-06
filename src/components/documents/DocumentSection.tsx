import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Image, ExternalLink, File, FileSpreadsheet } from 'lucide-react';
import { type DocumentItem } from '@/lib/data';

// Расширяем иконки для разных типов файлов
const fileIcons = {
  pdf: FileText,
  image: Image,
  docx: File,
  xlsx: FileSpreadsheet,
};

const getFileIcon = (type: DocumentItem['type']) => {
  const IconComponent = fileIcons[type] || FileText;
  return <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />;
};

interface DocumentSectionProps {
  documents: DocumentItem[];
  showTitle?: boolean;
  showCard?: boolean;
  title?: string;
  description?: string;
  className?: string;
}

export const DocumentSection = ({
  documents,
  showTitle = true,
  showCard = true,
  title = 'Документы',
  description = 'Официальные документы',
  className = '',
}: DocumentSectionProps) => {
  const handleDownload = (file: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = file;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (file: string) => {
    window.open(file, '_blank');
  };

  // Контент секции с документами
  const documentsContent = (
    <div className="space-y-4 sm:space-y-6">
      {documents.map((doc) => (
        <Card key={doc.id} className="hover:shadow-md transition-shadow">
          <CardContent className="p-4 sm:p-5">
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
    </div>
  );

  const titleContent = showTitle && (
    <div className="mb-4 sm:mb-6">
      <h1 className="text-xl sm:text-3xl font-bold text-center pb-1">{title}</h1>
      {description && (
        <p className="text-muted-foreground text-sm sm:text-base text-center mt-1">
          {description}
        </p>
      )}
    </div>
  );

  if (showCard) {
    return (
      <Card className={className}>
        <CardContent>
          {titleContent}
          {documentsContent}
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      {titleContent}
      {documentsContent}
    </div>
  );
};
