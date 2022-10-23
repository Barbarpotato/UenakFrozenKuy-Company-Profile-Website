import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"

function NavListDesktop() {
    return (
        <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="absolute right-20">
            <a className="hover:font-extrabold hover:before:content-['>>'] transition-all ease-in-out flex-none mx-2 text-yellow-400 font-inter font-medium" href="#tentang">Tentang</a>
            <a className="hover:font-extrabold hover:before:content-['>>'] hover:ml-4 transition-all ease-in-out duration-150 flex-none mx-2 text-yellow-400 font-inter font-medium" href="#produk">Produk</a>
            <a className="hover:font-extrabold hover:before:content-['>>'] hover:ml-4 transition-all ease-in-out duration-150 flex-none mx-2 text-yellow-400 font-inter font-medium" href="#beli">Beli</a>
            <a className="hover:font-extrabold hover:before:content-['>>'] hover:ml-4 transition-all ease-in-out duration-150 flex-none mx-2 text-yellow-400 font-inter font-medium" href="#ulasan">Ulasan</a>
            <a className="hover:font-extrabold hover:before:content-['>>'] hover:ml-4 transition-all ease-in-out duration-150 flex-none mx-2 text-yellow-400 font-inter font-medium" href="#lokasi">Lokasi</a>
            <a className="hover:font-extrabold hover:before:content-['>>'] hover:ml-4 transition-all ease-in-out duration-150 flex-none mx-2 text-yellow-400 font-inter font-medium" href="#outlet">Outlet Baru</a>
        </motion.div>
    );
}

function Navigation(props) {

    const [triggerNav, setTriggerNav] = useState(false);
    return (
        <div>
            <div className="navigation static flex items-center w-full h-14 bg-zinc-800">
                <div className="logo flex-none mx-3">
                    <img width="50px" height="auto" src="https://firebasestorage.googleapis.com/v0/b/uenakfrozenkuy-a82a8.appspot.com/o/uenakfrozenkuy.png?alt=media&token=52d5bd24-a0cc-4592-ba1a-d96a356c456f" alt="logo" />
                </div>
                <motion.div
                    initial={{ x: -200, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', bounce: 0.4, duration: 3 }}
                    className="company-name flex-none">
                    <motion.h5
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="font-inter mx-3 font-semiextrabold text-yellow-400 md:text-2xl">UenakFrozenKuy</motion.h5>
                </motion.div>

                {props.screen_width ? <NavListDesktop /> : <div className="hamburger-navigation absolute right-0 mx-4 sm:left-1/2"><button onClick={() => setTriggerNav(!triggerNav)
                }><i className="fa fa-bars bg-slate-300" aria-hidden="true"></i></button></div>}
            </div>

            <AnimatePresence>
                {triggerNav &&
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ type: "spring", bounce: 0.4 }}
                        className="absolute top-14 w-full flex flex-col items-start bg-zinc-800">
                        <div><h5 className="font-inter text-yellow-400 ml-2 mt-4 mb-10"><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href="#tentang">Tentang</a></h5></div>
                        <div><h5 className="font-inter text-yellow-400 ml-2 mb-10 "><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href="#produk">Produk</a></h5></div>
                        <div><h5 className="font-inter text-yellow-400 ml-2 mb-10"><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href='#beli'>Beli</a></h5></div>
                        <div><h5 className="font-inter text-yellow-400 ml-2 mb-10"><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href='#ulasan'>Ulasan</a></h5></div>
                        <div><h5 className="font-inter text-yellow-400 ml-2 mb-10"><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href='#lokasi'>Lokasi</a></h5></div>
                        <div><h5 className="font-inter text-yellow-400 ml-2 mb-10"><a className="hover:underline" onClick={() => setTriggerNav(!triggerNav)} href='#outlet'>Outlet Baru</a></h5></div>
                    </motion.div>

                }
            </AnimatePresence>


        </div>

    )
}

export default Navigation;