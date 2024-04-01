const navResposive = document.getElementById("navResponsive");

function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    if (e.name === 'close') {
        navResposive.style.display = 'flex'
    } else if (e.name === 'menu') {
        navResposive.style.display = 'none'
    }
} 