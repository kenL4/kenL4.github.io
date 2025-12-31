import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Timeline />
            <Projects />
            <Contact />
            <Footer />
        </main>
    );
}
