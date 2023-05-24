const themeSlider = document.querySelector('.themeSlider');
themeSlider.addEventListener('input', changeTheme);

const themeStyleSheet = document.querySelector('#themeStyleSheet');

function changeTheme(){
    themeStyleSheet.setAttribute('href', `./src/css/theme${themeSlider.value}.css`)
    console.log(themeSlider.value); 
}