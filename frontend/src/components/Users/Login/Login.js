import React from 'react';
import '../../../index.css';
import { IoIosArrowBack } from 'react-icons/io';

const Login = () => {
	return (
		<div className="bg-blue-100 h-screen font-['poppins'] flex justify-center items-center">
			<div className="bg-white w-[980px] h-[600px] rounded-lg">
				<div className="flex justify-between place-items-center">
					<div className="w-1/2 ml-5">
						<div className="relative">
							<div className="text-center py-10 w-full">
								<h3 className="absolute h-full top-0  flex items-center">
									<a href="/#">
										<IoIosArrowBack className="text-4xl ml-5" />
									</a>
								</h3>
								<p className="font-bold">WellNest</p>
							</div>
						</div>
						<h1 className="text-3xl mb-4 font-bold text-center">
							Login Member Area
						</h1>
						<p className="text-center font-bold text-[13px] mb-10">
							Masukkan Email dan Password anda untuk masuk
						</p>
						<form className="text-center mx-16">
							<input
								className="p-1 px-3 w-full rounded border border-neutral-300 mb-5"
								type={'text'}
								placeholder="Email"></input>
							<input
								className="p-[3px] px-3 w-full rounded border border-neutral-300 mb-5"
								type={'text'}
								placeholder="Password"></input>

							<div className=" flex justify-between mb-7">
								<div className="flex items-center inline">
									<input type={'checkbox'} />
									<p className="text-sm ml-1">Ingat saya</p>
								</div>
								<p>
									<a href="/#" className="text-sm">
										Lupa password
									</a>
								</p>
							</div>
							<button
								type="submit"
								className="bg-blue-200 p-1 w-full rounded font-bold text-[20px]">
								Login
							</button>
						</form>
						<div className="text-center mt-14">
							<p className="mb-2">
								Belum punya akun?{' '}
								<a href="/#" className="font-bold">
									Daftar di sini
								</a>
							</p>
							<a href="/#" className="font-bold">
								Daftar sebagai dokter
							</a>
						</div>
					</div>
					<div className="w-5"></div>
					<div className="w-1/2 ">
						<div className="px-15 text-center">
							<img
								className="h-80 m-auto"
								src="7317079.jpg"
								alt="img doctor"
							/>
							<h1 className="font-bold text-3xl mb-3">WellNest Forum</h1>
							<p className="text-sm">
								Tempatnya mencari informasi, berdiskusi, dan berkontribusi
								tentang serba serbi kesehatan dan medis
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
