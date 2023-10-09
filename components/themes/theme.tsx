export const setThemePreference = (theme: string) => {
    localStorage.setItem('theme', theme);
};

export const getThemePreference = (): string | null => {
    return localStorage.getItem('theme');
};
