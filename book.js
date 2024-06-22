const navbarToggle = document.getElementById('navbar');
const mobileMenu = document.getElementById('mobile');

navbarToggle.addEventListener('click', () => {
  mobileMenu.style.display = 'flex'
});

const closeNav = document.getElementById('close');
const mobileMob = document.getElementById('mobile');

closeNav.addEventListener('click', () => {
  mobileMob.style.display = 'none'
});


const items = document.querySelectorAll('#ads')
const heading = document.querySelectorAll('#anim');

items.forEach(item => 
  item.addEventListener('click', () => {
    heading.forEach(heading => {
      heading.style.display = 'none'
    })
    const nextEle = item.nextElementSibling
    if(nextEle.style.display === 'none'){
      return nextEle.style.display = 'flex'
    }
    else{
      return nextEle.style.display = 'none'
    }
  })
) 
  









