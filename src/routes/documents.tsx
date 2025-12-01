import { createFileRoute } from '@tanstack/react-router';
import { DocumentList } from '@/components/documents/DocumentList';

export const Route = createFileRoute('/documents')({
  component: DocumentsPage,
});

function DocumentsPage() {
  return <DocumentList />;
}
