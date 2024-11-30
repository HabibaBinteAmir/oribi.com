import React from 'react'
import Product from '../Product'
import Container from '../Container'
import Flex from '../Flex'
import Heading from '../Heading'

const ProductsPart = () => {
  return (
    
    <div className="py-6">
        <Container>
            <div className=" py-5"> 
                <Heading text={"New Arrivals"} as={'p'} className={'text-hoverColor  font-bold text-[39px]'}/>
            </div>
        <Flex className={'justify-between mb-5 flex flex-wrap'}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>


       
        </Flex>
        </Container>
    </div>
  )
}

export default ProductsPart