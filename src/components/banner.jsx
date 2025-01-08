import banner1 from '../assets/Banner.jpg'

import { Carousel } from "flowbite-react";

export default function Banner() {

    return (
        <>
            <main className='p-5 md:p-3'>
                <section>
                    <div className="h-56 md:h-[70vh] md:w-[70%] m-auto">
                        <Carousel>
                            <img src={banner1} alt="..." className='rounded'/>
                            <img src={banner1} alt="..." className='rounded'/>
                            <img src={banner1} alt="..." className='rounded'/>
                            <img src={banner1} alt="..." className='rounded'/>
                            <img src={banner1} alt="..." className='rounded'/>
                        </Carousel>
                    </div>
                </section>
            </main>
        </>
    )
}