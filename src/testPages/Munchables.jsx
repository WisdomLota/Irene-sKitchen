import nextArrow from "../assets/next.svg";
import IreneImg from "../assets/irene-img.png";
import backArrow from "../assets/back.svg";
import { useNavigate } from "react-router-dom";
const Munchables = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="text-irene-400 bg-irene-100 h-screen">

            <div className="flex justify-between px-4 py-8">
                <img src={backArrow} alt="back arrow" className="w-20 h-16"/>
                <img src={IreneImg} alt="Irene's Img" className="w-44"/>
                <img src={nextArrow} alt="next arrow" className="w-20 h-16"/>
            </div>

            <div className="flex justify-around px-16 py-4">
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200" onClick={()=> navigate('/main-dishes')}>Main Dishes</p>
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200" onClick={()=> navigate('/proteins')}>Proteins</p>
                <p className="text-center bg-irene-200 rounded-full px-6 py-1 hover:border border-irene-400" onClick={()=> navigate('/munchables')}>Munchables</p>
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200" onClick={()=> navigate('/liquids')}>Liquids</p>
            </div>

            <div className="grid grid-flow-col justify-stretch px-20 py-4 space-x-4 lg:space-x-40">

                <div className="mb-8">
                    <div className="flex flex-col mb-6">
                        <p className="font-bold text-lg">Menu Item</p>
                        <hr className="w-2/5 border border-irene-400 my-2"/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between">
                            <p>Cookies</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Preview</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Donuts</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Preview</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Cheese Cake</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Preview</p>
                        </div>
                        <div className="flex justify-between">
                            <p>Sponge Cake</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Preview</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col mb-6">
                        <p className="font-bold text-lg">Item Price</p>
                        <hr className="w-2/5 border border-irene-400 my-2"/>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex justify-between">
                            <p>NGN 1500</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Add to Tray</p>
                        </div>
                        <div className="flex justify-between">
                            <p>NGN 1500</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Add to Tray</p>
                        </div>
                        <div className="flex justify-between">
                            <p>NGN 2500</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Add to Tray</p>
                        </div>
                        <div className="flex justify-between">
                            <p>NGN 2000</p>
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Add to Tray</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="bg-irene-200 px-24 py-6 space-y-2">
                <div>
                    <p className="text-center font-bold text-lg">Tray Price: 8500</p>
                </div>
                <div className="flex justify-between space-x-4">
                    <div className="space-y-2 lg:flex space-x-8">
                        <div className="flex justify-center items-center">
                            <p className="font-bold">Your Tray:</p>
                        </div>
                        <div className="flex space-x-6 border border-irene-400 rounded-full px-4 py-1 justify-center items-center">
                            <p className="px-6 py-1 rounded-full bg-irene-300">Sponge Cake</p>
                            <p className="px-2 py-1 rounded-full bg-irene-300 h-8 w-8 text-center">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full bg-irene-300 h-8 w-8 text-center">+</p>
                        </div>
                        <div className="flex space-x-6 border border-irene-400 rounded-full px-4 py-1 justify-center items-center">
                            <p className="px-6 py-1 rounded-full bg-irene-300">Chicken</p>
                            <p className="px-2 py-1 rounded-full bg-irene-300 h-8 w-8 text-center">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full bg-irene-300 h-8 w-8 text-center">+</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-300">View Full Tray</p>
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Munchables;