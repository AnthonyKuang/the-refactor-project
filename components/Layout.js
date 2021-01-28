import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, page }) {
  return (
    <div>
      <Navbar page={page} />
      {children}
      <Footer />
    </div>
  );
}
