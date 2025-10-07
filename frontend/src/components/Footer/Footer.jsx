import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-blue-100 py-6 shadow-lg animate-fade-in">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        {/* Copyright */}
        <span className="text-blue-800 font-semibold mb-3 sm:mb-0">
          &copy; {new Date().getFullYear()} <span className="font-bold">Margdarshan</span>. All rights reserved.
        </span>
        {/* Necessary Links Section */}
        <div className="flex flex-wrap gap-6 text-blue-600 text-sm font-medium">
          <Link 
            to="/about" 
            className="hover:text-blue-900 hover:underline transition"
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-blue-900 hover:underline transition"
          >
            Contact
          </Link>
          <Link 
            to="/privacy" 
            className="hover:text-blue-900 hover:underline transition"
          >
            Privacy Policy
          </Link>
          <Link 
            to="/terms" 
            className="hover:text-blue-900 hover:underline transition"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}
