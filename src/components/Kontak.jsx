import { motion } from 'framer-motion';

function Kontak() {

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            id="outlet"
            className="flex items-center lg:rounded-tr-full rounded-t-3xl bg-gradient-to-r from-yellow-400 via-yellow-700 to-zinc-800 mt-12">
            <div className="lg:ml-[200px] md:ml-[170px] pb-12 pt-12 items-center pr-12 lg:flex lg:flex-row">

                <motion.div
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                    <h1 className="mt-24 lg:flex text-zinc-800 font-bold text-4xl lg:text-6xl font-inter
                text-center opacity-80 lg:items-center">
                        Jelajahi produk<br></br> kami lebih lanjut <br></br>di cabang baru
                    </h1>
                </motion.div>

                <div className="lg:flex lg:flex-col">

                    <p className="hover:scale-110 transition-transform ease-out mb-8 pt-12 pl-12 pr-12 font-inter opacity-80
                    text-2xl font-extrabold"><a
                            className="bg-red-600 rounded-md p-2 text-white" href="https://gofood.link/a/EY4ucfm">Gofood</a>
                    </p>

                    <p className="hover:scale-110 transition-transform ease-out mb-8 pl-12 pr-12 font-inter opacity-80
                    text-2xl font-semibold"><a className="bg-white rounded-md p-2 text-green-500" href="https://grab.onelink.me/2695613898?pid=EDM&c=SG19INTONBOARDING&is_retargeting=true&af_web_dp=https%3A%2F%2Fwww.grab.com%2Fsg%2F&af_ios_url=https%3A%2F%2Fwww.grab.com%2Fsg%2F&af_force_deeplink=true&af_dp=grab%3A%2F%2Fopen%3FscreenType%3DGRABFOOD%26groupID%3D4b0ae1699d10487ca92f9275bd80b398%26groupInfo%3DeyJtZXJjaGFudE5hbWUiOiJVZW5ha0Zyb3plbkt1eTMxIC0gVGFuanVuZyBNZXJkZWthIiwiZGVsaXZlcnlBZGRyZXNzIjoiTm8uMTcgUGVydW1haGFuIEdyYW5kIE9yY2hhcmQiLCJjcmVhdG9yTmFtZSI6ImNsYXJhIHJhbmkifQ%3D%3D">GrabFood</a></p>

                    <p className="hover:scale-110 transition-transform ease-out mb-8 pl-12 pr-12 font-inter opacity-80
                    text-2xl font-semibold"><a className="bg-green-500 text-white rounded-md p-2" href="https://tokopedia.link/y152GfpvZsb">Tokopedia</a></p>

                    <p className="text-zinc-800"><i className="fa fa-map-marker fa-4x" aria-hidden="true"></i></p>

                    <motion.div
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                        <p className="mb-12 pl-12 pr-12 font-inter opacity-80
                    text-xl font-bold italic text-zinc-800">Jl. Eboni No.31<br></br> RW.01, Tj.Merdeka
                            , Kec.Tamalate, Kota Makassar, <br></br>Sulawesi Selatan 90225</p>
                    </motion.div>
                </div>
            </div>


        </motion.div >
    )
}

export default Kontak;