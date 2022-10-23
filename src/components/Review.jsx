import ulasan from '../images/ulasan.png'
import { motion } from 'framer-motion';

function Review() {
    return (
        <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className='bg-cover brightness-75 mt-24 lg:mt-12' style={{ "backgroundImage": `url(${ulasan})` }}>
            <div className="mx-8 md:mx-20 lg:mx-28" id='ulasan'>

                <div className="flex flex-col lg:flex-row-reverse pt-8 pb-8">


                    <div className="flex flex-col">
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <h5 className="text-4xl font-inter text-yellow-400 lg:text-base">4.6 <i className="fa fa-star text-yellow-300" aria-hidden="true"></i></h5>
                            <p className="my-2 font-inter font-semibold  text-yellow-400 text-xl
                        lg:text-xs">Penilaian di aplikasi Gojek</p>
                            <p className="my-2 font-inter font-semibold text-yellow-400 text-xl
                        lg:text-sm">80+ Penilaian</p>
                            <hr className="my-4 bg-yellow-400 opacity-10"></hr>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <h5 className="text-4xl font-inter text-yellow-400  lg:text-base">4.7 <i className="fa fa-star text-yellow-300" aria-hidden="true"></i></h5>
                            <p className="my-2 font-inter font-semibold text-yellow-400 text-xl
                        lg:text-xs">Penilaian di aplikasi Grab</p>
                            <p className="my-2 font-inter font-semibold text-yellow-400 text-xl
                        lg:text-sm">10+ Penilaian</p>
                            <hr className="my-4 bg-yellow-400 opacity-10"></hr>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                            <h5 className="text-4xl font-inter text-yellow-400  lg:text-base">5.0 <i className="fa fa-star text-yellow-300" aria-hidden="true"></i></h5>
                            <p className="my-2 font-inter font-semibold  text-yellow-400 text-xl
                        lg:text-xs">Penilaian aplikasi pada Tokopedia</p>
                            <p className="my-2 font-inter font-semibold  text-yellow-400 text-xl
                        lg:text-sm">50+ Penilaian</p>
                            <hr className="my-4 bg-yellow-400 opacity-10"></hr>
                        </motion.div>
                    </div>


                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex flex-col mt-8 sm:justify-center ">
                        <h4 className="lg:p-8 lg:text-5xl sm:text-3xl text-yellow-400 font-inter font-extrabold italic leading-8
                    lg:text- text-3xl">
                            <i className="fa fa-quote-left  text-yellow-400 opacity-80 " aria-hidden="true"></i>
                            Kami berusaha untuk<br></br> memberikan harga yang terjangkau kepada konsumen di Kota Makassar
                            <i className="fa fa-quote-right opacity-80 text-yellow-400" aria-hidden="true"></i>
                        </h4>
                        <p className=" opacity-80 mt-4 font-inter font-extrabold text-base text-yellow-400">Clara Rani</p>
                        <p className=" opacity-80 mt-2 font-inter font-light text-base text-yellow-400">Pemilik UMKM UenakFrozenKuy</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>

    );
}

export default Review;