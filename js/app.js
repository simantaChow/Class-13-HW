
let rootElement= document.documentElement;


document.querySelector('#navbar .dark').addEventListener('click', function(){
    if (rootElement.classList.contains('dark')) {
        rootElement.classList.remove('dark');
        document.body.style.background='White';
        document.querySelector('#navbar .dark').innerHTML=('<i class="fa-solid fa-moon"></i>');
        localStorage.removeItem('mode');
        
        
    } else {
        rootElement.classList.add('dark');
        document.body.style.background='Black';
        document.querySelector('#navbar .dark').innerHTML=('<i class="fa-solid fa-sun"></i>');
        localStorage.setItem('mode','dark');
    }
});

if (localStorage.getItem('mode')==('dark')) {
    rootElement.classList.add('dark');
    document.body.style.background='Black';
    document.querySelector('#navbar .dark').innerHTML=('<i class="fa-solid fa-sun"></i>');
}