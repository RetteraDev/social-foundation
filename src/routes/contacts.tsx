import { createFileRoute } from '@tanstack/react-router';
import { ContactInfo } from '@/components/contacts/ContactInfo';
import { DirectorInfo } from '@/components/contacts/DirectorInfo';

export const Route = createFileRoute('/contacts')({
  component: ContactsPage,
});

function ContactsPage() {
  return <div className="space-y-6">
    <DirectorInfo />
    <ContactInfo />
  </div>
}
