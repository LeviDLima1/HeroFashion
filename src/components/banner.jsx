import banner1 from '../assets/Banner.jpg'

import { Carousel } from "flowbite-react";

export default function Banner() {

    return (
        <>
            <main className='p-5 md:p-3'>
                <section className='flex items-center justify-center'>
                    <div className="h-60 md:h-[70vh] md:w-[70%]">
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