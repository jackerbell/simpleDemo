let list = document.querySelector('.nav li');
const active = () => {
  list.forEach((i)=>
    i.classList.remove('active'));
  this.classList.add('active');
}

list.forEach((i)=>
  i.classList.remove('active'));
i.addEventListener(('click',active));