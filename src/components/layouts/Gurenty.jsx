import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruck } from "react-icons/fa6";
import { FaUndo } from "react-icons/fa";
import Flex from '../Flex';
import Header from './Header';

const Gurenty = () => {
  return (
   <div className="border-b-4 border-borderColor py-[30px]">
    <Container>
        <Flex className={'justify-between'}>
            <div className="flex items-center gap-2">
            <PiNumberTwoBold/>
            <Heading text={'Two years warranty'} as={"p"} className={'text-[16px] text-gColor'}/>
            </div>
            <div className="flex items-center gap-2">
            <FaTruck/>
            <Heading text={'Free shipping'} as={"p"} className={'text-[16px] text-gColor'}/>
            </div>
            <div className="flex items-center gap-2">
            <FaUndo/>
            <Heading text={'Return policy in 30 days'} as={"p"}  className={'text-[16px] text-gColor'}/>
            </div>
        </Flex>
    </Container>
   </div>
  )
}

export default Gurenty