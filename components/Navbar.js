import Image from 'next/image';
import Link from 'next/link';

export default function Navbar({ page }) {
  return (
    <nav className='shadow-lg text-sm font-medium sticky top-0 z-10 blur'>
      <div className='container-homepage flex justify-between items-center'>
        <div className='flex-1 flex items-center'>
          <Link href='/'>
            <a className='h-12'>
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
        <ul className='flex flex-1 justify-center'>
          <li className='text-gray-500 show-menu'>
            <Link href='/clients'>
              <a className='transition duration-200 hover:text-gray-700 flex py-6 pr-4'>
                <p>Clients</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5 ml-0.5'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </Link>
            <div className='menu'>
              <ul className='container-homepage'>
                <li>one</li>
                <li>two</li>
                <li>three</li>
              </ul>
            </div>
          </li>
          <li className='text-gray-500 show-menu'>
            <Link href='/volunteers'>
              <a className='transition duration-200 hover:text-gray-700 flex py-6 pl-4'>
                <p>Volunteers</p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  className='h-5 w-5 ml-0.5'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </Link>
            <div className='menu'>
              <ul className='container-homepage'>
                <li>four</li>
                <li>five</li>
                <li>six</li>
              </ul>
            </div>
          </li>
        </ul>
        <div className='flex flex-1 space-x-6 justify-end items-center'>
          <Link href='/login'>
            <a
              href='#LINK'
              role='button'
              className='block text-gray-500 transition duration-200 hover:text-gray-700'
            >
              Login
            </a>
          </Link>
          <Link href='/signup'>
            <a href='#LINK' role='button' className='btn-secondary'>
              Sign up
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
