/**
 * Display year on the DOM
 * @param {HTMLElement} element 
 */
export const getYear = (element) =>{
    const date = new Date(Date.now());
    element.innerHTML = date.getFullYear();
}