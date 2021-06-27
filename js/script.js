const menu = document.querySelector('.burger_menu');
menu.addEventListener('click', appear);

const menu_cont = document.querySelector('.menu_list');

count = 0

function appear(){
	if(!(count % 2)){
		menu_cont.className = 'menu_list_active';
	} else{
		menu_cont.className = 'menu_list';
	}
	++count
}