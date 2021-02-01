import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ page }) {
  return (
    <nav className='shadow-lg py-2 text-sm'>
      <div className='container-homepage mx-auto px-6 flex justify-between items-center'>
        <div className='flex-1'>
          <Link href='/'>
            <a>
              <Image
                src='/logo/the-refactor-project-48.png'
                alt='The Refactor Project logo'
                width='48'
                height='48'
                className='transition duration-500 ease-in-out transform hover:-rotate-90'
              />
            </a>
          </Link>
        </div>
        <ul className='flex flex-1 space-x-8 justify-center'>
          <li className='text-gray-600 font-medium'>Clients</li>
          <li className='text-gray-400 font-medium'>Volunteers</li>
        </ul>
        <div className='flex flex-1 space-x-6 justify-end items-center'>
          <a
            href='#LINK'
            role='button'
            className='block font-medium text-gray-400'
          >
            Login
          </a>
          <a
            href='#LINK'
            role='button'
            className='block text-center font-medium text-blue-400 border-2 border-blue-400 rounded-md w-20 py-2'
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
