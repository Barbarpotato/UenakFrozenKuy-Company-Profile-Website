import Lokasi from '../images/lokasi1.png';
import { motion } from 'framer-motion';

function Location() {
    return (
        <div className="mx-8 md:mx-20 lg:mx-28 xl:mx-60" id='lokasi'>
            <div className="flex lg:flex-row flex-col">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                    className="flex flex-col group">
                    <h1 className='hover:text-yellow-400 lg:mr-10 mt-20 mb-12 text-left text-yellow-400 text-4xl font-inter font-extrabold' > Anda bisa langsung membeli makanan beku di lokasi kami</h1>

                    <button className="transition-all ease-out hover:scale-125 hover:translate-x-10 lg:w-[60%] w-[270px] mb-8 p-2 flex justify-start text-center bg-yellow-400 opacity-80 text-zinc-800 rounded-md text-2xl font-extrabold font-inter"
                    ><a href='https://goo.gl/maps/Azpx9FN7PfF3ZZEk9'>Lihat Cabang Baru!</a></button>

                    <div className='rounded-2xl hover:bg-yellow-400 group p-4'>
                        <p className='text-justify text-yellow-300 font-inter text-sm md:text-xl opacity-80
                        first-letter:text-8xl first-letter:font-bold first-letter:float-left hover:text-zinc-800
                    selection:bg-zinc-800'>
                            Anda bisa membeli secara langsung makanan beku melalui lokasi yang kami berikan, dengan membeli langsung pada tempatnya tentunya harga
                            diberikan jauh lebih murah dibandingkan platform penjualan pihak ketiga seperti Go-Food, Grab-Food atau melalui Tokopedia UenakFrozenkuy.
                            Waktu pelayanan pembeli secara langsung mulai dari pukul 10.00 WITA hingga 17.00 WITA.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ y: 200, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', bounce: 0.6, duration: 3 }}
                    className='mt-12 lg:ml-12'>
                    <a href='https://goo.gl/maps/7gkBA3V5Kd9399ybA' >
                        <img className='rounded-lg lg:relative lg:bottom-20' width={'4000px'} height={'500px'} src={`${Lokasi}`}
                            alt='location'></img></a>
                </motion.div>
            </div>
        </div >
    )
}

export default Location;