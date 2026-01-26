import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactComponent from '@/components/Contact'; // Reusing the component
import PageHeader from '@/components/PageHeader';

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader 
        title="Get In Touch" 
        subtitle="Ready to start your next project? Let's discuss how we can help you succeed." 
      />
      <ContactComponent />
      <Footer />
    </main>
  );
}
