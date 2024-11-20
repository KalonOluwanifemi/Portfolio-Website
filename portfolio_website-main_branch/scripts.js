let tablinks = document.getElementsByClassName('tab-links');
let tabcontents = document.getElementsByClassName('tab-contents');

const opentab = (tabname) =>{
    for (tablink of tablinks){
        tablink.classList.remove('active-link')
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove('active-tab')
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab')
}

document.addEventListener('DOMContentLoaded', () => {
    const sidemenu = document.getElementById('sidemenu');
    
    // Define functions globally so they can be accessed from HTML
    window.openmenu = () => {
        if (sidemenu) {
            sidemenu.style.right = '0';
        }
    };
    window.closemenu = () => {
        if (sidemenu) {
            sidemenu.style.right = '-200px'; // Consistent property for "right"
        }
    };
});


