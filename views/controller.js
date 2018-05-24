
//Actuall menu-box		
let menu_modal = document.getElementById('menu');
let menu_mobile = document.getElementById('menu-mobile');
let close_mobile = document.getElementById('close_mobile').addEventListener('click', closeMobile);
let menu_wrapper = document.getElementsByClassName('menu-wrapper')[0];
let menu_hamb = document.getElementById('menu-hamb').addEventListener('click', menuMobile);
let process_button = document.getElementById('process').addEventListener('click', process);

let button_trigger = document.getElementById('menu-button');
	button_trigger.addEventListener('click', firstTrigger);

	function firstTrigger() {
		setTimeout(function() {
			button_trigger.style.transition = '.3s';	
			button_trigger.style.right = '-242px';
			openMenu();
		},200);
	}

	function openMenu() {
		menu_modal.style.display = "block";
		setTimeout(function() {
			button_trigger.style.display = 'none';
			menu_modal.style.transition = ".5s";
			menu_modal.style.width = "644px";
			setTimeout(function() {
				menu_modal.style.transition = ".4s";
				menu_modal.style.height = "1065px";
			}, 500);
		},500);
	}

let close_trigger = document.getElementsByClassName('close-mark')[0];
	close_trigger.addEventListener('click', closeMenu);

	function closeMenu() {
		button_trigger.style.display = "block";
		setTimeout(function() {
			menu_modal.style.transition = ".4s";
			menu_modal.style.height = "96px";
			setTimeout(function() {
				menu_modal.style.transition = ".4s";
				menu_modal.style.width = "0px";
				setTimeout(function() {
					button_trigger.style.transition = ".4s";
					button_trigger.style.right = "0px";						
					menu_modal.style.display = "none";
				},300);
			},300);
		},200);

	}

	function menuMobile() {
		menu_mobile.style.transition = ".4s";
		menu_mobile.style.left = "0px";

	}

	function closeMobile() {
		menu_mobile.style.transition = ".4s";
		menu_mobile.style.left = "-100%";		
	}

	this.project1 = document.getElementsByClassName('proj-box')[0].addEventListener('click', proj_exe);
	this.project2 = document.getElementsByClassName('proj-box')[1].addEventListener('click', proj_exe);
	function proj_exe() { 
		closeMenu();
		setTimeout(function(){
			document.location = "projects.html"
		},1400);
	}	

	this.about = document.getElementById('about-exe').addEventListener('click', about_exe);
	function about_exe() {
		closeMenu();
		setTimeout(function() {
			document.location = "about.html";
		},1400)
	}


	this.proc = document.getElementById("proc-box").addEventListener('click', proc_exe);
	function proc_exe() {
		closeMobile();
		setTimeout(function(){
			document.location = "process.html";
		},400)
	}

	this.proj_dir = document.getElementById("proj-dir").addEventListener('click', function() {
		document.location = "projects.html";
	});

	function process() {
		document.location = "process.html";
	}

	let procc_box = document.getElementsByClassName('procc-box')[0];
		procc_box.addEventListener('click', procc_exe);

		function procc_exe() {
			closeMenu();
			setTimeout(function(){
			document.location = "process.html"
			},1400);
		}