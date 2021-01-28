export default function Navbar({ page }) {
  const navbarContainer = page === 'home' ? 'container-homepage' : 'container';

  return (
    <nav className='shadow-lg'>
      <div className={`mx-auto ${navbarContainer}`}>This is some content</div>
    </nav>
  );
}
