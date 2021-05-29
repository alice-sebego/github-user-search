/**
 * Display year on the DOM
 * @param {HTMLElement} element 
 */
export const getYear = (element) => {
    const date = new Date(Date.now());
    element.innerHTML = date.getFullYear();
}

/**
 * Switch mode's theme between dark and light
 * @param {Object} window 
 * @param {Object} localStorage 
 * @param {HTMLBodyElement} body 
 * @param {HTMLButtonElement} btn 
 */
export const handleMode = (window, localStorage, body, btn) => {

    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

        const currentTheme = localStorage.getItem("theme");
        if (currentTheme == "dark") {
        body.classList.toggle("dark-theme");
        } else if (currentTheme == "light") {
        body.classList.toggle("light-theme");
        }

        btn.addEventListener("click", () => {
            let theme;
            if (prefersDarkScheme.matches) {
            body.classList.toggle("light-theme");
            theme = body.classList.contains("light-theme")
            ? "light"
            : "dark";
        } else {
            body.classList.toggle("dark-theme");
            theme = body.classList.contains("dark-theme")
            ? "dark"
            : "light";
        }

        localStorage.setItem("theme", theme);
        });

}