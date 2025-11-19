import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">AquaBrain</div>
          </Link>

          <nav className="flex space-x-4">
            <Link
              href="/"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              דף הבית
            </Link>
            <Link
              href="/demo"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              דמו
            </Link>
            <Link
              href="/about"
              className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              אודות
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
