import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TeamComponent from '@/components/Team'; // Reusing the component
import PageHeader from '@/components/PageHeader';

export default function TeamPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Meet The Minds" 
        subtitle="A diverse team of innovators, engineers, and designers building the future." 
      />
      <TeamComponent />
      <Footer />
    </main>
  );
}
