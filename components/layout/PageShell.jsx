import Navbar from './Navbar';
import Footer from './Footer';

// Wrapper for standalone pages: fixed navigation on top, contact form footer at the bottom.
export default function PageShell({ children }) {
  return (
    <div className="bg-dark text-white min-h-screen relative selection:bg-beige selection:text-dark">
      <Navbar />
      <main className="pt-28 md:pt-32">{children}</main>
      <div id="footer-section" className="relative z-30"><Footer /></div>
    </div>
  );
}
