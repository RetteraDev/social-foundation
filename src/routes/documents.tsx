// src/routes/documents.tsx
import { createFileRoute } from '@tanstack/react-router';
import { DocumentSection } from '@/components/documents/DocumentSection';
import { foundationDocuments } from '@/lib/data';

export const Route = createFileRoute('/documents')({
  component: DocumentsPage,
});

function DocumentsPage() {
  return (
    <div className="space-y-6">
      <DocumentSection
        documents={foundationDocuments}
        title="Документы фонда"
        description="Официальные документы, регламентирующие деятельность Фонда «Серебряное поколение»"
      />
      <p className="text-xs sm:text-sm text-muted-foreground text-center leading-relaxed">
        Все представленные документы являются официальными и действующими. 
        Фонд «Серебряное поколение» осуществляет свою деятельность в соответствии 
        с законодательством Российской Федерации.
      </p>
    </div>
  );
}