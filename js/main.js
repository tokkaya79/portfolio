const darkBtn = document.querySelector('.dark-btn')

// 1. Проверка темной темы в системных настройках

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    darkBtn.classList.add('dark-btn--active')
    document.body.classList.add('dark')
}


// 2.Проверка темной темы в Local Storage

if (localStorage.getItem('darkMode') === 'dark') {
    darkBtn.classList.add('dark-btn--active')
    document.body.classList.add('dark')
} else if (localStorage.getItem('darkMode') === 'light') {
    darkBtn.classList.remove('dark-btn--active')
    document.body.classList.remove('dark')
}

// Если меняем системные настройки меняется тема

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
    const newColorScheme = event.matches ? 'dark' : 'light'

    alert('Chenge!!!')

    if (newColorScheme === 'dark') {
        darkBtn.classList.add('dark-btn--active')
        document.body.classList.add('dark')
        localStorage.setItem('darkMode', 'dark')
    } else {
        darkBtn.classList.remove('dark-btn--active')
        document.body.classList.remove('dark')
        localStorage.setItem('darkMode', 'light')
    }
})

//Включение темной темы

darkBtn.onclick = function () {
    console.log('hi');
    darkBtn.classList.toggle('dark-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
    } else {
        localStorage.setItem('darkMode', 'light')
    }
}