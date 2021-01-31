import Image from 'next/image';

export default function Navbar({ page }) {
  const navbarContainer = page === 'home' ? 'container-homepage' : 'container';

  return (
    <nav className='shadow-lg mb-16 px-4 py-2'>
      <div
        className={`${navbarContainer} mx-auto flex justify-between items-center`}
      >
        <div className='flex-1'>
          <Image
            src='/logo/the-refactor-project-logo.png'
            alt='The Refactor Project logo'
            width='60'
            height='60'
          />
        </div>
        <ul className='flex flex-1 space-x-8 justify-center'>
          <li className='text-gray-600'>Clients</li>
          <li className='text-gray-400'>Volunteers</li>
        </ul>
        <div className='flex flex-1 space-x-6 justify-end'>
          <a
            href='#LINK'
            role='button'
            className='block font-medium text-gray-400 py-1.5'
          >
            Login
          </a>
          <a
            href='#LINK'
            role='button'
            className='block text-center font-medium text-white bg-blue-500 rounded-md w-20 py-1.5'
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
