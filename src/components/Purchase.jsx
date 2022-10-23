import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"
import Item1 from '../images/go_food.png';
import Item2 from '../images/grabfood.png';
import Item3 from '../images/tokopedia.png';

let prevItem = -1;

function ItemList(props) {

    const itemList = [
        Item1,
        Item2,
        Item3,
    ];

    const url = [
        'https://gofood.link/a/zEZKkZW',
        'https://grab.onelink.me/2695613898?pid=EDM&c=SG19INTONBOARDING&is_retargeting=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fsg%2F&af_ios_url=https%3A%2F%2Fwww.grab.com%2Fsg%2F&af_force_deeplink=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26groupID%3D324bba4a4b854baf88acf4e181185981%26groupInfo%3DeyJtZXJjaGFudE5hbWUiOiJVZW5ha2Zyb3plbmt1eSAtIGFuanVuZyBNZXJkZWthIiwiZGVsaXZlcnlBZGRyZXNzIjoiTm8uMTcgUGVydW1haGFuIEdyYW5kIE9yY2hhcmQiLCJjcmVhdG9yTmFtZSI6ImNsYXJhIHJhbmkifQ%3D%3D',
        'https://tokopedia.link/y152GfpvZsb'
    ];

    if (prevItem < props.Item) {
        prevItem = props.Item;
        return (
            <AnimatePresence>

                <div className="flex items-center mx-auto">
                    <a href={`${url[props.Item]}`}>
                        <motion.img
                            width='350px' height='200px'
                            key={itemList[props.Item]}
                            src={itemList[props.Item]}
                            alt={itemList[props.Item]}
                            initial={{ y: -600, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', bounce: 0.6 }}>
                        </motion.img>
                    </a>
                </div>

            </AnimatePresence>
        )
    }
    else {
        prevItem = props.Item;
        return (
            <AnimatePresence>
                <div className="flex items-center mx-auto">
                    <a href={`${url[props.Item]}`}>
                        <motion.img
                            width='350px' height='200px'
                            key={itemList[props.Item]}
                            src={itemList[props.Item]}
                            alt={itemList[props.Item]}
                            initial={{ y: 600, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ type: 'spring', bounce: 0.6 }}>
                        </motion.img>
                    </a>
                </div>
            </AnimatePresence>
        );
    }
}

function Purchase() {

    const [item, setItem] = useState(0);

    return (
        <div className="mx-8 md:mx-20 lg:mx-28 xl:mx-60" id='beli'>
            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className='mt-20 mb-12 text-left text-yellow-400 text-4xl font-inter font-extrabold'>Beli</motion.h1>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className='flex flex-col sm:flex-row '>
                <div className='my-4 bg-zinc-800 rounded-2xl p-2 sm:p-8
                sm:w-1/2 sm:ml-4'>
                    <div className="group hover:rounded-2xl hover:bg-yellow-400 p-4">
                        <p className='group-hover:text-zinc-800 text-justify text-yellow-300 font-inter text-sm md:text-xl opacity-80
                        first-letter:text-8xl first-letter:font-bold first-letter:float-left'>
                            Anda bisa membeli makanan beku melalui platform penjualan pihak ketiga seperti
                            Go-Food, Grab-Food, dan juga melalui Tokopedia UenakFrozenKuy. Dengan melakukan pembelian melalui
                            platform pihak ketiga ini, konsumen tidak perlu sulit untuk pergi mencari bahan makanan di luar rumah,
                            cukup memesan melalui aplikasi yang telah disebutkan diatas, konsumen tinggal menunggu kurir untuk mengantarkan
                            makanan beku ini ke rumah anda.
                        </p>
                    </div>
                    <button className={item === 0 ?
                        "mt-4 p-2 flex justify-start text-left bg-red-600 rounded-md text-white text-2xl font-extrabold font-inter"
                        :
                        "mt-4 p-2 flex justify-start text-left focus:bg-red-900 focus:rounded-md focus:text-slate-900 text-yellow-400 text-2xl font-extrabold font-inter"}
                        onClick={() => setItem(0)}>Go Food</button>

                    <button className="mt-4 p-2 flex justify-start text-left focus:bg-white focus:rounded-md focus:text-green-500 text-yellow-400 text-2xl font-extrabold font-inter"
                        onClick={() => setItem(1)}>Grab Food</button>

                    <button className="mt-4 p-2 flex justify-start text-left focus:bg-green-500 focus:rounded-md focus:text-white text-yellow-400 text-2xl font-extrabold font-inter"
                        onClick={() => setItem(2)}>Tokopedia</button>
                </div>

                <ItemList Item={item} />

            </motion.div>
        </div >
    )
}

export default Purchase;