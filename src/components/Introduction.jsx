import { motion } from 'framer-motion';

function Introduction() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            id="awal" className="flex flex-col h-[600px] bg-center bg-cover" style={{ "backgroundImage": "url(https://firebasestorage.googleapis.com/v0/b/uenakfrozenkuy-a82a8.appspot.com/o/background.jpeg?alt=media&token=a7189762-86b6-4695-9ce0-6ab17326fb9c)" }}>
            <motion.h1
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="ml-6 font-inter font-extrabold text-3xl text-yellow-400 text-left mt-[50%] sm:mt-[25%] md:mt-[12%]
            md:px-32 md:text-6xl">Kami Menyediakan <br></br> Makanan Beku Terbaik Untuk Anda</motion.h1>
            <motion.p
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="ml-6 mt-2 font-inter font-semibold text-lg text-yellow-400 text-left md:px-32
            md:text-xl md: py-4">Makanan beku merupakan makanan kemasan yang diolah dengan cepat dan praktis,<br></br>cocok bagi mereka yang memiliki kesibukan tinggi dan malas mengkonsumsi makanan berat atau ribet.</motion.p>
        </motion.div>
    )
}

export default Introduction;