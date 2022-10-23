import React from 'react';
import { motion } from 'framer-motion';

function About() {

    return (
        <div className="mx-8 md:mx-20 lg:mx-28 xl:mx-60" id='tentang'>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className='mt-20 mb-12 text-left text-yellow-400 text-4xl font-inter font-extrabold'>Tentang</motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className="bg-zinc-800 rounded-2xl p-2 md:p-8 hover:bg-yellow-400 transition-colors group">
                <p className='text-justify text-yellow-300 font-inter text-sm md:text-xl opacity-80
                group-hover:text-zinc-800
                first-letter:text-8xl first-letter:font-bold first-letter:float-left
                selection:bg-zinc-800'>
                    UenakFrozenKuy merupakan UMKM (Usaha Mikro Kecil dan Menengah) yang menjual makanan kemasan yang diolah
                    dengan cepat dan praktis sehingga banya yang tertarik untuk mengkonsumsinya sejak tahun 2019.
                    Berada di Kota Makassar tepatnya di daerah Tanjung Bunga Makassar. Permintaan Banyak orang
                    terhadap makanan ini terus meningkat, apalagi bagi mereka yang memiliki kesibukan tinggi dan malas mengkonsumsi makanan berat atau ribet.
                    Makanan beku memiliki kandungan nutrisi sesuai dengan jenis makanannya. Kemasan atau pembekuan tidak akan mempengaruhi
                    jumlah serat, kalori, gula, protein dan mineral dalam produk tersebut.
                </p>
            </motion.div>
        </div>
    );
}

export default About;