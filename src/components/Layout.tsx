
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import AmbientBackground from './AmbientBackground';
import FloatingElements from './FloatingElements';
import GridOverlay from './GridOverlay';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <GridOverlay />
      <AmbientBackground />
      <FloatingElements />
      <Navigation />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
