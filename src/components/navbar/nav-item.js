import Link from 'next/link';

const NavItem = ({ href, children }) => (
    <Link href={href} className="block py-2 px-4 text-sm text-white hover:bg-blue-800 transition duration-300">
    {children}
  </Link>
);

export default NavItem;
