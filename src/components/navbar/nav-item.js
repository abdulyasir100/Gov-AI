import Link from 'next/link';

const NavItem = ({ href, isDisabled, children }) => {

    if (isDisabled) {
        return (
            <span className="block py-2 px-4 text-sm text-gray-400 cursor-not-allowed">
                {children}
            </span>
        );
    }

    return (
        <Link href={href} className="block py-2 px-4 text-sm text-white hover:bg-blue-800 transition duration-300">
            {children}
        </Link>
    );

};

export default NavItem;
