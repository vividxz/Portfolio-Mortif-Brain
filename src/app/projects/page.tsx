import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectsComponent from '@/components/Projects'; // Reusing the component
import PageHeader from '@/components/PageHeader';

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Work" 
        subtitle="Case studies and success stories from our partnership with industry leaders." 
      />
      <ProjectsComponent />
      <Footer />
    </main>
  );
}
