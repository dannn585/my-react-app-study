// src/Header.tsx
export const Header = () => {
    return(
        <header className = "z-50 bg-white shadow-sm sticky top-0">
            <div className = "max-w-6xl mx-auto p-4 flex justify-between items-center">
                <h1 className = "text-xl font-bold text-blue-600">My App</h1>
                <nav>
                    <ul className = "flex gap-6 text-gray-600 font-medium">
                        <li className = "hover:text-blue-600 cursor-pointer">
                            Home
                        </li>
                        <li className = "hover:text-blue-600 cursor-pointer">
                            Users
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};