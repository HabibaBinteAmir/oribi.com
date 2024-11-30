import React from 'react'
import Container from "../Container"
import Flex from "../Flex"
import Images from "../Images"
import logo from "../../assets/logo.png"
import Menu from "../Menu"
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaUser,FaCaretDown,FaShoppingCart   } from "react-icons/fa";

import { FaSearch } from "react-icons/fa";
import Heading from '../Heading'


const Header = () => {
  return (
    <>
      
        
        <div className="py-[30px]  ">
        <Container>
           <Flex>
            <div className="w-[40%]">
                <Images src={logo} alt={logo}/>
            </div>
            <div className="w-[60%]">
                <Menu className={'flex text-sm text-menuColor '}>
                    <li className="hover:font-bold hover:text-hoverColor duration-300">Home</li>
                    <li className="hover:font-bold hover:text-hoverColor duration-300">Shop</li>
                    <li className="hover:font-bold hover:text-hoverColor duration-300">About</li>
                    <li className="hover:font-bold hover:text-hoverColor duration-300">Contacts</li>
                    <li className="hover:font-bold hover:text-hoverColor duration-300">Journal</li>
                </Menu>
            </div>
           
           </Flex>
        </Container>
        </div>
        <div className="py-[25px] bg-catagoriColor">
          <Container>
            <Flex className={'items-center justify-between'}>
              <div className="20%">
                <Flex className={'items-center gap-x-2'}>
                  <HiBars3BottomLeft/>
                  <Heading text={'Shop by Category'} as={'p'} className={'text-sm text-menuColor'}/>
                </Flex>
              </div>
              <div className="w-[50%]  relative">
                <input type="text" placeholder='Search Products' className='text-sm text-[#C4C4C4] p-4 rounded-md w-full relative' />
                <FaSearch  className={'absolute right-3 bottom-4'}/>

              </div>
              <div className="">
                <Flex className={'gap-x-7'}>
                 <div className="flex gap-1">
                 <FaUser/>
                 <FaCaretDown />
                 </div>
                 <div className="">
                  <FaShoppingCart />

                 </div>

                </Flex>

              </div>
            </Flex>
          </Container>
        </div>
        
       
  

    </>
  )
}

export default Header