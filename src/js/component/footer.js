import React, { Component } from "react";

export const Footer = () => (
	<footer className="bg-black mt-auto py-2 text-center absolute inset-x-0 ">
		<div className="grid grid-cols-5 gap-2 text-white p-6">
			<div className="space-y-3 text-left">
				<h3 className="text-2xl font-bold">Abstract</h3>
				<ul className="list-none">
					<li className="no-underline hover:underline">Start Trial</li>
					<li className="no-underline hover:underline">Pricing</li>
					<li className="no-underline hover:underline">Download</li>
				</ul>
			</div>
			<div className="space-y-3 text-left">
				<h3 className="text-2xl font-bold">Resources</h3>
				<ul className="list-none">
					<li className="no-underline hover:underline">Blog</li>
					<li className="no-underline hover:underline">Help Center</li>
					<li className="no-underline hover:underline">Releases Notes</li>
					<li className="no-underline hover:underline">Status</li>
				</ul>
			</div>
			<div className="space-y-3 text-left">
				<h3 className="text-2xl font-bold">Community</h3>
				<ul className="list-none">
					<li className="no-underline hover:underline">Twitter</li>
					<li className="no-underline hover:underline">LinkedIn</li>
					<li className="no-underline hover:underline">Facebook</li>
					<li className="no-underline hover:underline">Dribbble</li>
					<li className="no-underline hover:underline">Podcast</li>
				</ul>
			</div>
			<div className="space-y-3 text-left">
				<h3 className="text-2xl font-bold">Company</h3>
				<ul className="list-none">
					<li className="no-underline hover:underline">About Us</li>
					<li className="no-underline hover:underline">Careers</li>
					<li className="no-underline hover:underline">Legal</li>
				</ul>
				<div className="text-left">
					<h3 className="text-2xl font-bold mt-8">Contact Us</h3>
					<p className="no-underline hover:underline">info@abstract.com</p>
				</div>
			</div>
			<div className="text-left absolute bottom-0 right-0">
				<div className="p-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 text-white">
						<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
					</svg>
					<p>© Copyright 2023</p>
					<p>Abstract Studio Design, Inc.</p>
					<p>All rights reserved</p>
				</div>
			</div>
		</div>
	</footer>
);
