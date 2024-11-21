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

//Script for submission of form to google sheet//

//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwDLVjJ63u0BozdYJFmfGKqzplBkIAyqNvxnxG59bkl7CbbFa9qMEdIXj9mR7NQFbFF/exec'
//   const form = document.forms['submit-to-google-sheet']

//   form.addEventListener('submit', e => {
//     e.preventDefault()
//     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//       .then(response => console.log('Success!', response))
//       .catch(error => console.error('Error!', error.message))
//   })