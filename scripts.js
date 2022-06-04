const bodyTag = document.querySelector('body')

barba.use(barbaCss);

//initialize barba
barba.init({
	transitions: [
		{
			name: "fade",
			beforeEnter ({current, next, trigger}) {
				const headerLinks = document.querySelectorAll("header a");
				const href = next.url.path;



				for(links of headerLinks) {
					if(links.getAttribute('href') === href) {
						links.classList.add('selected');
					} else {
						links.classList.remove('selected')	
					}
				}


				window.scrollTo({
					top: 0,
					behavior: "smooth"
				})
			}
		}
	],
	views: [
		{
			namespace: "feed",
			beforeEnter() {
				bodyTag.classList.add('feed')
			},
			beforeLeave() {
				bodyTag.classList.remove('feed')
			}
		}
	]
})
