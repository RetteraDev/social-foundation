import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <main className="container mx-auto max-w-7xl px-4 sm:px-6 py-4 sm:py-8">
        {children}
      </main>
    </div>
  );
};
