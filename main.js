import './styles/style.scss'

const menuBtn = document.querySelector('.button-menu')
const menu = document.querySelector('.header__menu')

menuBtn.addEventListener('click', () => {
	menuBtn.classList.toggle('button-menu--active')
	menu.classList.toggle('header__menu--active')
})

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiper = new Swiper('.swiper', {
	modules: [Pagination, Navigation],
	slidesPerView: 1,
	loop: true,
	spaceBetween: 12,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper__next.swiper-button-next',
		prevEl: '.swiper__prev.swiper-button-prev',
		enabled: false,
	},

	breakpoints: {
		1024: {
			slidesPerView: 1,
			navigation: {
				enabled: true,
			},
		},

		1440: {
			slidesPerView: 2,
			slidesPerGroup: 2,
			navigation: {
				enabled: true,
			},
		},
	},
})
