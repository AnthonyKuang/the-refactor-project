import Image from 'next/image';

export default function Navbar({ page }) {
  return (
    <nav className='shadow-lg py-2'>
      <div className='container-homepage mx-auto px-4 flex justify-between items-center'>
        <div className='flex-1'>
          <Image
            src='/logo/the-refactor-project-logo.png'
            alt='The Refactor Project logo'
            width='60'
            height='60'
          />
        </div>
        <ul className='flex flex-1 space-x-8 justify-center'>
          <li className='text-gray-600 font-medium'>Clients</li>
          <li className='text-gray-400 font-medium'>Volunteers</li>
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
            className='block text-center font-medium text-white bg-blue-400 rounded-md w-20 py-1.5'
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
