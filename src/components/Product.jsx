import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion"
import item1 from '../images/cedeabasoikan.png';
import item2 from '../images/champsosisayam.png';
import item3 from '../images/rotiburgerbernardi.png';
import item4 from '../images/soeconagetayam.png';

function ListItem(props) {

    const itemImg = [
        item1,
        item2,
        item3,
        item4
    ];

    const itemDesc = [
        'Cedea Bakso Ikan',
        'Sosis Champ Ayam 1Kg',
        'Roti Burger Bernardi',
        'So Eco Naget Ayam 1Kg'
    ];

    return (

        <AnimatePresence>
            {props.triggerBtn ?
                <div>
                    <motion.img
                        width='250px' height='250px'
                        key={itemImg[props.selectedItem]}
                        src={itemImg[props.selectedItem]}
                        alt={itemImg[props.selectedItem]}
                        initial={{ x: -400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                    ></motion.img>
                    <p className='pt-4 font-inter text-yellow-400 font-bold opacity-80'>{itemDesc[props.selectedItem]}</p>
                </div>
                :
                <div>
                    <motion.img
                        width='250px' height='250px'
                        key={itemImg[props.selectedItem]}
                        src={itemImg[props.selectedItem]}
                        alt={itemImg[props.selectedItem]}
                        initial={{ x: 400, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ type: 'spring', bounce: 0.6 }}
                    >
                    </motion.img>
                    <p className='pt-4 font-inter text-yellow-400 font-bold opacity-80'>{itemDesc[props.selectedItem]}</p>
                </div>
            }
        </AnimatePresence>
    )
};

function Product() {

    // variable that hold which item will be displayed.
    const [item, setItem] = useState(0);

    // differ the left animation and right animation from image slider framer motion.
    const [left, setLeft] = useState(false);

    return (
        <div className="mx-8 md:mx-20 lg:mx-28 xl:mx-60" id='produk'>

            <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 3 }}
                className='lg:mr-10 mt-20 mb-12 lg:text-right text-left text-yellow-400 text-4xl font-inter font-extrabold' > Produk</motion.h1>

            <div className='flex flex-col md:flex-row'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                    className='carousel flex md:w-1/2 justify-center md:items-center'>
                    <button className='h-12 w-12 rounded-lg hover:bg-yellow-400 my-auto'
                        onClick={() => {
                            if (item === 0) {
                                setItem(3);
                                setLeft(true);
                            } else {
                                setItem(item - 1);
                                setLeft(true);
                            }
                        }}><i className="fa fa-caret-left fa-3x" aria-hidden="true"></i></button>

                    <ListItem selectedItem={item} triggerBtn={left} />

                    <button className='h-12 w-12 rounded-lg hover:bg-yellow-400 my-auto' onClick={() => {
                        if (item === 3) {
                            setItem(0)
                            setLeft(false);
                        } else {
                            setItem(item + 1)
                            setLeft(false);
                        }
                    }}><i className="fa fa-caret-right fa-3x" aria-hidden="true"></i></button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 3 }}
                    className='my-4 bg-zinc-800 rounded-2xl p-2 md:p-8 hover:bg-yellow-400 transition-colors group
                md:w-1/2 md:ml-4'>
                    <p className='text-justify text-yellow-300 font-inter text-sm md:text-xl opacity-80
                    group-hover:text-zinc-800
                        first-letter:text-8xl first-letter:font-bold first-letter:float-left
                    selection:bg-zinc-800'>
                        Makanan frozen sangat populer di Indonesia. Produk frozen food juga bermacam-macam, dan masing-masing dikemas dengan menarik dan unik untuk mendapatkan perhatian pembeli. Berikut merupakan produk frozen food yang digemari oleh banyak pembeli di UenakFrozenKuy
                    </p>
                </motion.div>
            </div>

        </div >
    );
}

export default Product;