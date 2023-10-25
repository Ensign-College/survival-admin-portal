import React, { useCallback, useEffect, useState } from 'react';
import { setThemePreference, getThemePreference } from '../components/themes/theme';
import ToggleButton from '../components/themes/toggle_button';

function LandingPage() {
    const [userTheme, setUserTheme] = useState('');

    const applyTheme = useCallback((theme: any) => {
        document.documentElement.classList.remove('theme-light', 'theme-dark');
        document.documentElement.classList.add(`theme-${theme}`);
    }, []);

    useEffect(() => {
        const themeFromLocalStorage = getThemePreference();
        const defaultTheme = 'light'; // Set your default theme here

        // Use the theme from local storage if available, or set the default theme
        const initialTheme = themeFromLocalStorage || defaultTheme;

        setUserTheme(initialTheme);
        applyTheme(initialTheme);
    }, [applyTheme]);

    const toggleTheme = useCallback(() => {
        const newTheme = userTheme === 'light' ? 'dark' : 'light';
        applyTheme(newTheme);
        setThemePreference(newTheme);
        setUserTheme(newTheme);
    }, [userTheme, applyTheme]);

    useEffect(() => {
        const themeFromLocalStorage = getThemePreference();
        const defaultTheme = 'light';
    
        const initialTheme = themeFromLocalStorage || defaultTheme;
    
        applyTheme(initialTheme);
        setUserTheme(initialTheme);
    }, [applyTheme]);

    return ( 
        <div className="min-h-screen"> 
            {/*page header*/}
            <header className={`bg-emerald-900 text-stone-200 py-8 theme-${userTheme}`}>
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
                                <ToggleButton onChange={toggleTheme}/>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            {/*page body*/}
            <main className={`bg-${userTheme}-primary container mx-auto py-16`}>
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