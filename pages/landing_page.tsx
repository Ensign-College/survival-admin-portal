import React, { useEffect, useState } from 'react';
import { setThemePreference, getThemePreference } from '../components/themes/theme';

function LandingPage() {
    const [userTheme, setUserTheme] = useState('');

    useEffect(() => {
        const themeFromLocalStorage = getThemePreference();
        if (themeFromLocalStorage) {
            setUserTheme(themeFromLocalStorage);
            document.documentElement.classList.add(`theme-${themeFromLocalStorage}`);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = userTheme === 'light' ? 'dark' : 'light';

        document.documentElement.classList.remove('theme-light')
        document.documentElement.classList.remove('theme-dark');
        document.documentElement.classList.add(`theme-${newTheme}`);

        setThemePreference(newTheme);
        setUserTheme(newTheme);
    };

    return ( 
        <div className={`bg-${userTheme}-primary min-h-screen`}> 
            {/*page header*/}
            <header className="bg-emerald-900 `text-${userTheme}-primary`  py-8">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-4xl font-bold">Admin Portal</h1>
                        <p className="mt-2 text-lg">Manage all your admin tasks in a single place.</p>
                    </div>
                    <nav>
                        <ul className="flex space-x-6">
                            <li>
                                <a href="./HomePage">Cards Home</a>
                            </li>
                            <li>
                                <a href="./EditModal">Edit</a>
                            </li>
                            <li>
                                <button onClick={toggleTheme} className={`text-${userTheme}-primary`}>
                                    Toggle Theme
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/*page body*/}
            <main className={`bg-${userTheme}-primary min-h-screen`}>
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Get Started</h2>
                    <p className="mt-4 text-gray-600">Sign in to access your admin dashboard.</p>
                </div>

                {/*sign in button*/}
                <div className="mt-8 flex justify-center">
                    <a
                        href="./AuthForm" 
                        className="bg-emerald-900 hover:bg-emerald-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
                    >Sign In</a>
                </div>
            </main>
        </div>
    )
}

export default LandingPage;