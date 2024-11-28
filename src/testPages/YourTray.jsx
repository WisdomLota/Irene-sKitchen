import backArrow from "../assets/back.svg";
import IreneImg from "../assets/irene-img.png";
const YourTray = () => {
    return (
        <>
        <div className="md:text-irene-400 bg-irene-100 h-screen">

            <div className="flex px-4 py-4">
                <img src={backArrow} alt="back arrow" className="w-20 h-16"/>
                <img src={IreneImg} alt="Irene's Img" className="w-44 mx-auto"/>
            </div>

            <div className="flex flex-col justify-center items-center ml-20">
                <p className="text-lg font-bold mt-8">Your Tray</p>
            </div>

            <div className="p-20">
                <div className="border border-irene-400 rounded-2xl px-4 py-8 space-y-2 lg:space-y-12">
                    <div>
                        <p className="text-center ml-20 font-bold">NGN 9200</p>
                    </div>
                    <div className="space-y-2 lg:grid grid-flow-col justify-stretch space-x-1">
                        <div className="flex border border-irene-400 rounded-full px-4 py-1 justify-center items-center space-x-4">
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200 w-1/2">Jollof Rice</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">+</p>
                        </div>
                        <div className="flex border border-irene-400 rounded-full px-4 py-1 justify-center items-center space-x-4">
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200 w-1/2">Chicken</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">+</p>
                        </div>
                        <div className="flex border border-irene-400 rounded-full px-4 py-1 justify-center items-center space-x-4">
                            <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200 w-1/2">Sponge Cake</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">+</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-2">
                        <div className="flex border border-irene-400 rounded-full justify-center items-center space-x-4 w-full lg:w-1/3 py-1 ">
                            <p className="text-center border border-irene-400 rounded-full px-8 py-1 hover:bg-irene-200 w-1/2">Coke</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">-</p>
                            <p className="py-1 text-center">1</p>
                            <p className="px-2 py-1 rounded-full border border-irene-400 h-8 w-8 text-center hover:bg-irene-200">+</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-irene-100 pb-8">
                <p className="text-center px-8 py-2 bg-irene-200 rounded-full font-bold hover:border border-irene-400 ml-20">Place Order</p>
            </div>

        </div>
        </>
    )
}

export default YourTray;