'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const AnnouncementBar = () => {
	return (
		<div className='w-full bg-black py-2'>
			<div className='container mx-auto flex items-center justify-center px-8'>
				<span className='text-center text-sm font-medium tracking-wide text-white'>
					FREE SHIPPING ON ORDERS OVER $15.00 • FREE RETURNS
				</span>
			</div>
		</div>
	)
}

const Header = () => {

	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [prevScrollY, setPrevScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const scrolledUp = currentScrollY < prevScrollY;

			if(scrolledUp) {
				setIsOpen(true);
			} else if(currentScrollY > 100) {
				setIsOpen(false);
			}

			setPrevScrollY(currentScrollY);
		}
			setPrevScrollY(window.scrollY);
			
			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			}
	}, [prevScrollY]);

	return (
		<header className='w-full sticky top-0 z-50'>
			<div className={`w-full transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
				<AnnouncementBar />

				<div className='w-full flex justify-between items-center py-3 sm:py-4 bg-white/60 shadow-sm border-b border-gray-100 backdrop-blur-sm'>
					<div className='flex justify-between items-center container mx-auto px-8'>
						<div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
							<button className='text-gray-700 hover:text-gray-900 md:hidden'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
								</svg>
							</button>
							
							<nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
								<Link href='#'>Shop</Link>
								<Link href='#'>New Arrivals</Link>
								<Link href='#'>Sale</Link>
							</nav>
						</div>
						
						<Link href='#'>link</Link>

						<div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
							<button className='text-gray-700 hover:text-gray-900 hidden sm:block'>
							<svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
							<path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
							</svg>
							</button>

							<Link href='/auth/sign-in'>Sign In</Link>
							<Link href='/auth/sign-up'>Sign Up</Link>

							<button className='text-gray-700 hover:text-gray-900 relative'>
							<svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 sm:h-6 sm:w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' />
              </svg>
							<span className='absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-cener justify-center'>
								0
							</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
