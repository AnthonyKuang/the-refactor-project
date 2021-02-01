import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ page }) {
  return (
    <nav className='shadow-lg py-2 text-sm font-semibold sticky top-0 z-10 blur'>
      <div className='container-homepage mx-auto px-6 flex justify-between items-center'>
        <div className='flex-1'>
          <Link href='/'>
            <a className='w-12 h-12'>
              <Image
                src='/logo/the-refactor-project-48.png'
                alt='The Refactor Project logo'
                width='48px'
                height='48px'
                className='transition duration-500 ease-in-out transform hover:-rotate-90'
              />
            </a>
          </Link>
        </div>
        <ul className='flex flex-1 space-x-8 justify-center'>
          <li className='text-gray-600'>
            <Link href='/clients'>
              <a className='transition duration-200 hover:text-gray-600'>
                Clients
              </a>
            </Link>
          </li>
          <li className='text-gray-400'>
            <Link href='/volunteers'>
              <a className='transition duration-200 hover:text-gray-600'>
                Volunteers
              </a>
            </Link>
          </li>
        </ul>
        <div className='flex flex-1 space-x-6 justify-end items-center'>
          <Link href='/login'>
            <a
              href='#LINK'
              role='button'
              className='block text-gray-400 transition duration-200 hover:text-gray-600'
            >
              Login
            </a>
          </Link>
          <Link href='/signup'>
            <a
              href='#LINK'
              role='button'
              className='block text-center text-blue-400 border-2 border-blue-400 rounded-md w-20 py-2 transition duration-200 hover:bg-blue-400 hover:text-white'
            >
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
