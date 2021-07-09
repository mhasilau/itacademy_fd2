export const showFormErrorMessage = () => {
    const inputErrorTag = document.querySelector('.input-error');
    inputErrorTag.style.display = 'block';
}

export const hideFormErrorMessage = () => {
    const inputErrorTag = document.querySelector('.input-error');
    inputErrorTag.style.display = 'none';
}