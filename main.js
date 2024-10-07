import './styles/style.scss'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

document.addEventListener('DOMContentLoaded', () => {
	const menuBtn = document.querySelector('.button-menu')
	const menu = document.querySelector('.header__menu')

	menuBtn.addEventListener('click', () => {
		menuBtn.classList.toggle('button-menu--active')
		menu.classList.toggle('header__menu--active')
	})

	const swiper = new Swiper('.swiper', {
		modules: [Pagination, Navigation],
		slidesPerView: 1,
		loop: true,
		spaceBetween: 12,
		grabCursor: true,

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

	const tabsBtns = document.querySelectorAll('.final-info__tab-btn')
	const tabsBlocks = document.querySelectorAll('.final-info__tab-info')

	const handleTab = e => {
		tabsBtns.forEach((el, i) => {
			if (e.target === el) {
				el.classList.add('active')
				tabsBlocks[i].classList.add('active')
			} else {
				el.classList.remove('active')
				tabsBlocks[i].classList.remove('active')
			}
		})
	}

	tabsBtns.forEach(el => el.addEventListener('click', handleTab))
})
