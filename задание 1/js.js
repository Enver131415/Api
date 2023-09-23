const btn = document.querySelector('.btn');
const icons = document.getElementsByTagName ('svg');
const arr = [...icons];
arr[0].style.display = 'block';
arr[1].style.display = 'none';
btn.addEventListener('click', () => {
   arr.forEach(element => {
    if (element.style.display === 'none') {
        element.style.display = 'block'
    } else {
        element.style.display ='none'
    }
   });
})


