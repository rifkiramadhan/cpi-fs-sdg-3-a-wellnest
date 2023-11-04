import React from 'react';
import './../../index.css';

const Navbar = () => {
	return (
		<div className="bg-white font-['Poppins'] sticky top-0">
			<nav className="mx-[15%] h-16 flex items-center">
				<div className="flex items-center">
					<h1 className="text-2xl text-center px-4 font-black">WellNest</h1>
				</div>
				<div className="flex justify-between w-full ml-5 font-medium">
					<div className="">
						<ul className="">
							<li className="inline mr-5">Forum</li>
							<li className="inline mr-5">About Us</li>
							<li className="inline">Contact</li>
						</ul>
					</div>
					{!window.localStorage.token ? <div className="">
						<ul className="">
							<li className="inline mr-8">
								<a href='/register'>Daftar</a>
							</li>
							<li className="inline">
								<button className="bg-blue-100 px-4 py rounded-full py-[2px]">
									<a href="/login">Masuk</a>
								</button>
							</li>
						</ul>
					</div> : 
					<div className="">
					<ul className="">
						<li className="inline mr-8">
							<a href=''></a>
						</li>
						<li className="inline">
							<button className="bg-blue-100 px-4 py rounded-full py-[2px]">
								<a href="/logout">Keluar</a>
							</button>
						</li>
					</ul>
				</div>
					}
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
