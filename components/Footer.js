import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='mt-24 border-t-4 border-gray-100'>
      <section className='container-homepage flex justify-between items-center py-16'>
        <div>
          <h2 className='heading-text'>Convinced?</h2>
          <p className='mt-2 showcase-text'>
            Our team will guide you through every step of the process.
          </p>
        </div>
        <div>
          <a href='#LINK' className='btn-primary'>
            Request a website
          </a>
        </div>
      </section>

      <section className='bg-gray-50 border-t border-gray-200'>
        <div className='container-homepage flex justify-between pt-16 text-gray-500'>
          <ul className='space-y-3'>
            <li className='font-medium text-gray-700 mb-6'>Clients</li>
            <li>Home</li>
            <li>Request a Website</li>
            <li>Website Status</li>
            <li>Make a Donation</li>
            <li></li>
          </ul>
          <ul className='space-y-3'>
            <li className='font-medium text-gray-700 mb-6'>Volunteers</li>
            <li>Join the Team</li>
            <li>Documentation</li>
            <li>Full Website Builds</li>
            <li>Slack Server</li>
          </ul>
          <ul className='space-y-3'>
            <li className='font-medium text-gray-700 mb-6'>Company</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Mailing List</li>
          </ul>
          <ul className='space-y-3'>
            <li className='font-medium text-gray-700 mb-6'>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>501c3</li>
          </ul>
        </div>
        <div className='mt-16 py-8 container-homepage flex justify-between border-t-2 border-gray-200'>
          <div className='flex items-center gap-2'>
            <Image
              src='/logo/the-refactor-project-48.png'
              width='36'
              height='36'
            />
            <p className='text-xs gradient-text'>The Refactor Project &copy;</p>
          </div>
          <div>socials</div>
        </div>
      </section>
    </footer>
  );
}
