import Link from 'next/link';

function MainNavigation() {
    return (
        <nav className="justify-left py-6 px-10 bg-customNavigation">
            <ul className="flex gap-2">
                <li>
                    <Link href="/" className="no-underline text-zinc-300 text-2xl">Flashcards App</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;