import Link from 'next/link';

function MainNavigation() {
    return (
        <nav className="flex justify-center py-12 px-0 bg-indigo-950">
            <ul className="flex gap-8 ">
                <li>
                    <Link href="/" className="no-underline text-zinc-300">Flashcards App</Link>
                </li>
                <li>
                    <Link href="/log-in" className="no-underline text-zinc-300">Log In</Link>
                </li>
            </ul>
        </nav>
    );
}

export default MainNavigation;