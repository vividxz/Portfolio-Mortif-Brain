import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesComponent from '@/components/Services'; // Reusing the component
import PageHeader from '@/components/PageHeader';

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Our Expertise" 
        subtitle="We deliver end-to-end software solutions tailored to your unique business needs." 
      />
      <ServicesComponent />
      <Footer />
    </main>
  );
}
