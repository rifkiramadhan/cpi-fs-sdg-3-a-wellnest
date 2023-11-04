import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Register = () => {
	return (
		<div className="bg-blue-100 h-screen font-['poppins']">
			<div className="h-10"></div>
			<div className="bg-white w-1/3 min-w-[500px] text-center  rounded-lg m-auto pb-16">
				<div className="relative">
					<div className="text-center py-8 w-full">
						<h3 className="absolute h-full top-0  flex items-center">
							<a href="/#">
								<IoIosArrowBack className="text-4xl ml-5" />
							</a>
						</h3>
						<p className="font-bold">WellNest</p>
					</div>
				</div>
				<h1 className="font-bold text-3xl mb-3">Buat Akun</h1>
				<p className="font-bold text-sm mb-7 ">Isi data anda untuk mendaftar</p>

				<form className="w-2/3 mx-auto">
					<input
						placeholder="Username"
						type={'text'}
						name="username"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<input
						placeholder="Nama Lengkap"
						type={'text'}
						name="namaLengkap"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<input
						placeholder="Email"
						type={'text'}
						name="email"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<input
						placeholder="Nomor Telpon"
						type={'tel'}
						name="nomorTelpon"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<input
						placeholder="Password"
						type={'password'}
						name="password"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<input
						placeholder="Konfirmasi Password"
						type={'password'}
						name="konfirmasiPassword"
						className="w-full p-1 w-full border-b border-black mb-4"></input>
					<button
						type="submit"
						className="w-full bg-blue-200 p-1 rounded-md font-bold text-lg text-14 my-7">
						Daftar
					</button>
				</form>
        <p className='mb-2 text-sm'>Sudah punya akun? <a href='/login' className='font-bold'>Masuk di sini</a></p>
        <p className='text-sm'>Mendaftar Sebagai Tenaga Medis? <a href='/#' className='font-bold'>Daftar di sini</a></p>
			</div>
		</div>
	);
};

export default Register;
