// components/SignUpButton.js
import Link from 'next/link';

const SignUpButton = () => (
  <Link href="/sign-up" className="bg-cyan-500 text-white-900 px-4 py-2 rounded-md font-medium hover:bg-cyan-600 transition duration-300">
    Sign Up
  </Link>
);

export default SignUpButton;
