import { motion } from 'framer-motion';

function Footer() {

    const getYear = () => {
        const year = new Date();
        return year.getFullYear();
    };

    return (
        <motion.div
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }} className="bg-zinc-800 h-28">
            <div className="lg:flex lg:flex-row flex flex-col">
                <div className="lg:absolute lg:right-0 lg:mr-12 lg:mt-10 mt-8 mb-4 ">
                    <a href="https://www.instagram.com/uenakfrozenkuy/"><i className="text-zinc-800 mr-2 rounded-full bg-yellow-600 p-2 fa fa-instagram fa-x" aria-hidden="true"></i> </a>
                    <a href="https://l.instagram.com/?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D6281233445562%26text%3DNama%2B%253A%250AAlamat%2B%253A%250ABarang%2BPesanan%253A&e=ATMNhCavyUvC3lxTsCwNj8bznYyU9IPWUTuY86HZMAEYVZqwRHlTu3GTxm8M5H_4eHkLrpWVd8qdhqPT8qIqYw&s=1"><i className="text-zinc-800 mr-2 rounded-full bg-yellow-600 p-2 fa fa-whatsapp fa-x" aria-hidden="true"></i> </a>
                    <a href="#awal"><i className="mr-2 p-2 text-zinc-800 rounded-full bg-yellow-600 fa fa-arrow-circle-up fa-x" aria-hidden="true"></i> </a>
                </div>
                <div className="lg:ml-28 flex justify-center px-12">
                    <p className="mb-4 lg:mt-12 font-inter font-semibold text-yellow-600">{`© Hak Cipta ${getYear()} UenakFrozenKuy. Seluruh hak cipta.`}</p>
                </div>
            </div>
        </motion.div >
    )
}

export default Footer;