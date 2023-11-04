import React from 'react';
import iconSearch from '../../assets/icons/Search.svg';
import iconViews from '../../assets/icons/arrowViews.svg';
import iconDot from '../../assets/icons/dot.svg';
import Carousel from 'react-elastic-carousel'

const HomePage = () => {
  return <div className='mt-5  pt-5 px-44 bg-[#D8E7FF] h-full'>
    <h2 className='font-bold text-xl'>Kategori</h2>
    <div className='flex items-center gap-5'>
      <div className='flex items-center mt-2 bg-white rounded-lg shadow-md h-16 px-5 gap-2 w-full'>
        <Carousel itemsToShow={5} pagination={false}>
        <span className='bg-[#D0F1FF] py-1 px-7 rounded-md font-bold cursor-pointer'>Hot Topics</span>
        <span className='bg-[#F6FCFF] py-1 px-7 rounded-md cursor-pointer'>Penyakit Dalam</span>
        <span className='bg-[#F6FCFF] py-1 px-7 rounded-md cursor-pointer'>Gaya Hidup</span>
        <span className='bg-[#F6FCFF] py-1 px-7 rounded-md cursor-pointer'>Penyakit Luar</span>
        <span className='bg-[#F6FCFF] py-1 px-7 rounded-md cursor-pointer'>Obat-Obatan</span>
        <span className='bg-[#F6FCFF] py-1 px-7 rounded-md cursor-pointer'>Penyakit jantung</span>
        </Carousel>
      </div>
      <div className='bg-white shadow-md mt-2 h-16 flex items-center py-1 px-4 rounded-md cursor-pointer'>
        <img src={iconSearch} alt="iconsearch" />
      </div>
    </div>
    <div className='mt-9 h-52 bg-white shadow-md rounded-2xl flex justify-center items-center px-2'>
      <Carousel itemsToShow={1} pagination={false}>
        <div className='flex justify-center items-center flex-col gap-3  py-4'>
        <h2 className='font-bold text-4xl'>WellNest Forum</h2>
        <p className='font-medium text-xl'>Tempatnya mencari informasi, berdiskusi, dan berkontribusi
            tentang serba serbi kesehatan dan medis</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-3  py-4'>
        <h2 className='font-bold text-4xl'>WellNest Forum</h2>
        <p className='font-medium text-xl'>Tempatnya mencari informasi, berdiskusi, dan berkontribusi
            tentang serba serbi kesehatan dan medis</p>
        </div>
        <div className='flex justify-center items-center flex-col gap-3  py-4'>
        <h2 className='font-bold text-4xl'>WellNest Forum</h2>
        <p className='font-medium text-xl'>Tempatnya mencari informasi, berdiskusi, dan berkontribusi
            tentang serba serbi kesehatan dan medis</p>
        </div>
      </Carousel>
    </div>

    <div className='mt-9 h-full bg-white shadow-md py-7 px-7 flex flex-col rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>Hot Topics</h2>
        <div className='flex gap-3 items-center'>
          <h2 className='font-medium'>Urutkan berdasarkan:</h2>
          <span className='bg-[#E3EEFF] px-2 py-1 rounded-md font-bold flex gap-2'>Views  <img src={iconViews} alt="arrowviews" /></span>
        </div>
      </div>
      <div className='mt-5 flex flex-col gap-4'>
        <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <p>9 September 2023</p>
            <p className='text-2xl font-semibold'>Tips Untuk Terhidar dari ISPA</p>
            <p className='font-medium text-xs'>Oleh : user01</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <img src={iconDot} alt="icondot" className='w-8 ml-auto'/>
            <p>10.6K Views</p>
            <p>5.3K Suka</p>
          </div>
        </div>
        <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <p>9 September 2023</p>
            <p className='text-2xl font-semibold'>Tips Untuk Terhidar dari ISPA</p>
            <p className='font-medium text-xs'>Oleh : user01</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <img src={iconDot} alt="icondot" className='w-8 ml-auto'/>
            <p>10.6K Views</p>
            <p>5.3K Suka</p>
          </div>
        </div>
        <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <p>9 September 2023</p>
            <p className='text-2xl font-semibold'>Tips Untuk Terhidar dari ISPA</p>
            <p className='font-medium text-xs'>Oleh : user01</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <img src={iconDot} alt="icondot" className='w-8 ml-auto'/>
            <p>10.6K Views</p>
            <p>5.3K Suka</p>
          </div>
        </div>
        <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <p>9 September 2023</p>
            <p className='text-2xl font-semibold'>Tips Untuk Terhidar dari ISPA</p>
            <p className='font-medium text-xs'>Oleh : user01</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <img src={iconDot} alt="icondot" className='w-8 ml-auto'/>
            <p>10.6K Views</p>
            <p>5.3K Suka</p>
          </div>
        </div>
        <div className='flex justify-between bg-[#D8E7FF] rounded-lg w-full p-5'>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <p>9 September 2023</p>
            <p className='text-2xl font-semibold'>Tips Untuk Terhidar dari ISPA</p>
            <p className='font-medium text-xs'>Oleh : user01</p>
          </div>
          <div className='flex flex-col gap-2 items-start justify-center'>
            <img src={iconDot} alt="icondot" className='w-8 ml-auto'/>
            <p>10.6K Views</p>
            <p>5.3K Suka</p>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default HomePage;
