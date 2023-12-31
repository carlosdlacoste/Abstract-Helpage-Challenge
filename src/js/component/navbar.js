import React, { Fragment }  from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

	const navigation = [
		{ name: 'Dashboard', href: '#', current: false },
		{ name: 'Team', href: '#', current: false },
		{ name: 'Projects', href: '#', current: false },
		{ name: 'Calendar', href: '#', current: false },
	]

	function classNames(...classes) {
	return classes.filter(Boolean).join(' ')
	}

	export const Navbar = () => {
		return (
			<Disclosure as="nav" className="bg-black">
			{({ open }) => (
				<>
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start space-x-3">
							<div className="flex flex-shrink-0 items-center">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white">
									<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
								</svg>

							</div>
							<div className=" flex items-center text-white">
								<p>Abstract | Help Center</p>
							</div>
							
						</div>
						<div className="space-x-2 flex justify-end">
							<button className="bg-zinc-700 hover:bg-zinc-900 py-1 px-3 border-solid border-2 text-white rounded">Submit a Request</button>
							<button className="bg-indigo-500 hover:bg-white hover:text-black py-1 px-3 text-white rounded">Sign In</button>
						</div>

					</div>
				</div>

				</>
			)}
			</Disclosure>
		);
		};
