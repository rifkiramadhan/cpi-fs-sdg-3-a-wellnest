import React from 'react';
import iconArrowLeft from '../../assets/icons/arrowLeft.svg';
import { useNavigate } from 'react-router-dom';
const CategoryList = () => {
  const navigate  = useNavigate();
  return <div className='mt-5 pt-5 px-44 bg-[#D8E7FF]'>
  <span className='font-bold text-xl flex gap-4 items-center'><img src={iconArrowLeft} alt="arrowleft" className='w-2 cursor-pointer' onClick={()=>{
    navigate('/');
  }}/> Manage Kategori</span>
  <div className='mt-9 h-screen bg-white shadow-md py-7 px-7 flex flex-col rounded-2xl'>
    <div className='flex justify-between items-center'>
      <h2 className='font-bold text-2xl'>List Kategori </h2>
      <div className='flex gap-3 items-center'>
        <span className='bg-[#E3EEFF] px-2 py-1 rounded-md font-bold flex gap-2'>Tambah Kategori</span>
      </div>
    </div>
    <div className='mt-5 flex flex-col gap-4'>
      <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
        <div className='flex gap-8 items-center justify-center'>
          <h1 className='font-bold text-5xl'>1</h1>
          <span className='font-bold w-1 h-full bg-black'></span>
          <div>
            <p>Dibuat: oleh 9 September 2023</p>
            <p className='text-2xl font-semibold'>Penyakit Dalam</p>
            <p className='font-medium text-xs'>Author : user01</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start justify-center'>
          <p className='font-semibold'>32 Item Diskusi</p>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Edit</button>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Hapus</button>
        </div>
      </div>
      <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
        <div className='flex gap-8 items-center justify-center'>
          <h1 className='font-bold text-5xl'>2</h1>
          <span className='font-bold w-1 h-full bg-black'></span>
          <div>
            <p>Dibuat: oleh 9 September 2023</p>
            <p className='text-2xl font-semibold'>Gaya Hidup</p>
            <p className='font-medium text-xs'>Author : user01</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start justify-center'>
          <p className='font-semibold'>32 Item Diskusi</p>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Edit</button>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Hapus</button>
        </div>
      </div>
      <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
        <div className='flex gap-8 items-center justify-center'>
          <h1 className='font-bold text-5xl'>3</h1>
          <span className='font-bold w-1 h-full bg-black'></span>
          <div>
            <p>Dibuat: oleh 9 September 2023</p>
            <p className='text-2xl font-semibold'>Penyakit Luar</p>
            <p className='font-medium text-xs'>Author : user01</p>
          </div>
        </div>
        <div className='flex flex-col gap-2 items-start justify-center'>
          <p className='font-semibold'>32 Item Diskusi</p>
        </div>
        <div className='flex gap-2 justify-center items-center'>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Edit</button>
          <button className='py-1 px-7 rounded-full bg-white font-medium'>Hapus</button>
        </div>
      </div>

    </div>
  </div>
</div>;
};

export default CategoryList;
