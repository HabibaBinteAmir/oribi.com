import React from 'react'
import Badge from './Badge'
import Container from './Container'
import Images from './Images'
import product1 from "../assets/product1.png"
import Heading from './Heading'
import Flex from './Flex'
import { FaHeart } from "react-icons/fa";
import { TiArrowSync } from "react-icons/ti";
import { FaCartShopping } from "react-icons/fa6";

const Product = () => {
  return (
   
    
      <div className="w-[23%] relative mb-[100px] mt-5  group">
      <Images src={product1} alt={product1} className={''}/>
      <Badge badgetext={'New'} className={'absolute top-5 left-5'}/>
      <div className="py-[20px] flex justify-between">
        <Heading text={'Basic Crew Neck Tee'} as={'p'} className={'text-[20px] font-bold text-hoverColor '}/>
        <Heading text={'$44.00'} as={'p'} className={'text-[16px] text-menuColor '}/>
        
      </div>
      <div className="p-[28px] bg-white  absolute left-o bottom-[64px] w-full hidden group-hover:block ">
        <div className=''>
            <div className="flex gap-4 justify-end text-[16px] items-center">
                <span className=' text-menuColor hover:font-bold      hover:text-hoverColor'>Add to Wish List</span><FaHeart/>
            </div>
            <div className="flex gap-4  justify-end  text-[16px] items-center">
                <span className=' text-menuColor  hover:font-bold hover:text-hoverColor'>Compare</span><TiArrowSync/>
            </div>
            <div className="flex gap-4  justify-end  text-[16px] items-center">
                <span className=' text-menuColor  hover:font-bold hover:text-hoverColor'>Add to Cart</span><FaCartShopping/>
            </div>
        </div>
      </div>
      </div>
    

    
    
  
   

  )
}

export default Product