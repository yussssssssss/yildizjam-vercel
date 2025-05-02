import React from 'react'
import gold from '../images/gold.webp';
import silver from '../images/silver.webp';
import bronze from '../images/bronze.webp';


const Prize = () => {
  return (
    <div className='flex items-center justify-center gap-6 mt-4 lg:mt-24 mb-24'>
        <div>
          <div className='mb-16 sm:mb-0 flex h-24 lg:h-40 gap-8'>
            <img src={gold} alt='gold' className='w-12 sm:w-16 md:w-20 lg:w-24' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                Birincilik Ödülü
              </h2>
              <h1 className='text-4xl lg:text-7xl font-bold'>30.000TL</h1>
            </div>
          </div>
          <div className='block sm:hidden'>
            <div className='flex h-24 lg:h-40 gap-8'>
              <img src={silver} alt='gold' className='w-12 sm:w-16 md:w-20  lg:w-24'/>
              <div>
                <h2 className='text-2xl lg:text-4xl font-extralight'>
                  İkincilik Ödülü
                </h2>
                <h1 className='text-4xl lg:text-7xl font-bold'>20.000TL</h1>
              </div>
            </div>
          </div>
          <div className='hidden sm:flex h-60'></div>
          <div className='mt-16 sm:mt-0 flex h-24 lg:h-40 gap-8'>
            <img src={bronze} alt='gold' className='w-12 sm:w-16 md:w-20  lg:w-24' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                Üçüncülük Ödülü
              </h2>
              <h1 className='text-4xl lg:text-7xl font-bold'>10.000TL</h1>
            </div>
          </div>
        </div>
        <div className='relative flex items-center justify-center'>
          
          <svg
            className='w-[0.6rem] lg:w-3 h-[32rem] lg:h-auto'
            xmlns='http://www.w3.org/2000/svg'
            height='792'
            viewBox='0 0 14 792'
            fill='none'
          >
            <path
              d='M6 6L8 785.029'
              stroke='url(#paint0_linear_31_12)'
              stroke-width='12'
              stroke-linecap='round'
            />
            <defs>
              <linearGradient
                id='paint0_linear_31_12'
                x1='2.99418'
                y1='-2.49996'
                x2='7.99241'
                y2='772.5'
                gradientUnits='userSpaceOnUse'
              >
                <stop stop-color='black' stop-opacity='0' />
                <stop
                  offset='0.06'
                  stop-color='black'
                  stop-opacity='0.260825'
                />
                <stop offset='0.485' stop-color='black' stop-opacity='0.575' />
                <stop
                  offset='0.93'
                  stop-color='black'
                  stop-opacity='0.396359'
                />
                <stop offset='1' stop-color='black' stop-opacity='0' />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className='hidden sm:block'>
          <div className='flex h-24 lg:h-40 gap-8'>
            <img src={silver} alt='gold' className='w-12 sm:w-16 md:w-20  lg:w-24' />
            <div>
              <h2 className='text-2xl lg:text-4xl font-extralight'>
                İkincilik Ödülü
              </h2>
              <h1 className='text-4xl lg:text-7xl font-bold'>20.000TL</h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Prize