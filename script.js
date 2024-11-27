function activarMenu(element){
const items=document.querySelectorAll('.menu-item');
items.forEach(item => item.classList.remove('active'));
element.classList.add('active');					  	
}