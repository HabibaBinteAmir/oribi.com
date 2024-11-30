import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Images from '../Images'
import ad1 from "../../assets/ad1.png"
import ad2 from "../../assets/ad2.png"
import ad3 from "../../assets/ad3.png"

const Promotion = () => {
  return (
    <>
    <div className="pt-[170px] pb-[150px]">
        <Container>
            <Flex className={"justify-between"}>
                <div className="w-[48%]">
                    <Images src={ad1} alt={ad1} className={'w-full'}/>

                </div>
                <div className="w-[48%]">
                <Images src={ad2} alt={ad2} className={'w-full mb-8'}/>
                <Images src={ad3} alt={ad3} className={'w-full'}/>

                </div>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default Promotion