import { createFileRoute } from '@tanstack/react-router';
import { Banner } from '@/components/home/Banner';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="space-y-8">
      <Banner />
    </div>
  );
}
