import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Menu from '../Menu'
import { FaFacebookF,FaLinkedinIn,FaInstagram  } from "react-icons/fa";
import Heading from '../Heading';
import Images from '../Images';
import logo2 from "../../assets/logo2.png"

const Footer = () => {
  return (
    <div className="py-[70px] bg-catagoriColor">
        <Container>
            <Flex  className={'justify-between'}>
                <div className="w-[46%] flex justify-between">
                    <div className="">
                        <Menu className={'text-menuColor text-sx '}>

                            <li className='font-bold text-[18px] text-hoverColor mb-7'>MENU</li>
                            <li className='mb-3'>Home</li>
                            <li className='mb-3'>Shop</li>
                            <li className='mb-3'>About</li>
                            <li className='mb-3'>Contact</li>
                            <li className='mb-3'>Journal</li>
                        </Menu>
                        <div className="pt-[30px]">
                            <Flex className={'gap-x-6'}>
                                <FaFacebookF/>
                                <FaLinkedinIn />
                                <FaInstagram />

                            </Flex>

                        </div>
                        
                    </div>
                    <div className="">
                        <Menu className={'text-menuColor text-sx '}>

                            <li className='font-bold text-[18px] text-hoverColor mb-7'>SHOP</li>
                            <li className='mb-3'>Category 1</li>
                            <li className='mb-3'>Category 2</li>
                            <li className='mb-3'>Category 3</li>
                            <li className='mb-3'>Category 4</li>
                            <li className='mb-3'>Category 5</li>
                        </Menu>
                        
                        
                    </div>
                    <div className="">
                        <Menu className={'text-menuColor text-sx '}>

                            <li className='font-bold text-[18px] text-hoverColor mb-7'>HELP</li>
                            <li className='mb-3'>Privacy Policy</li>
                            <li className='mb-3'>Terms & Conditions</li>
                            <li className='mb-3'>Special E-shop</li>
                            <li className='mb-3'>Shipping</li>
                            <li className='mb-3'>Secure Payments</li>
                            
                        </Menu>
                    </div>
                </div>
                <div className="w-[47%]">
                    <Flex className={'gap-x-24'}>
                        <div className="w-[%]">
                        <Heading text={'(052) 611-5711'} as={'h6'} className={'font-bold text-[16px] text-hoverColor ' }/>
                        <Heading text={'company@domain.com'} as={'h6'} className={'font-bold text-[16px] text-hoverColor pb-10 pt-3'}/>
                        <Heading text={'575 Crescent Ave. Quakertown, PA 18951'} as={'p'} className={'text-[14px] text-gColor'}/>
                        </div>
                        <div className="w-[%]">
                            <Images src={logo2} alt={logo2} className={''}/>
                        </div>
                        
                    </Flex>
                </div>
                
            </Flex>
            <div className="text-right">
            <Heading text={'2020 Orebi Minimal eCommerce Figma Template by Adveits'} as={'h6'} className={' text-[14px] text-gColor ' }/>

            </div>
        </Container>

    </div>
  )
}

export default Footer