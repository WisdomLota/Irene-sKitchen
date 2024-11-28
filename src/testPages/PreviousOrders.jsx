import IreneImg from "../assets/irene-img.png";
import Previous from "../assets/previous-orders.svg";
import Logout from "../assets/log-out.svg";
const PreviousOrders = () => {
    return (
        <>
        <div className="bg-irene-100 text-irene-400 overflow-x-hidden lg:h-screen">

            <div className="flex justify-between px-4 py-4">
                <img src={Previous} alt="Previous-orders" className="w-40 h-32"/>
                <img src={IreneImg} alt="Irene's Img" className="w-44 h-32"/>
                <img src={Logout} alt="Log-out" className="w-40 h-32"/>
            </div>

            <div className="flex justify-center items-center">
                <p className="font-bold text-lg">Dashboard</p>
            </div>

            <div className="flex justify-around px-16 py-4 mb-4">
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Pending</p>
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Preparing</p>
                <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Transit</p>
                <p className="text-center bg-irene-200 rounded-full px-6 py-1 hover:border border-irene-400">Delivered</p>
            </div>

            <div className="flex justify-center items-center">
                <p className="font-bold text-lg mb-4">Previous Orders</p>
            </div>

            <div className="flex justify-start px-24">
                <p className="font-bold text-lg">2nd Week of February</p>
            </div>

            <div className="px-24 py-8">
                <div className="space-y-4 border border-irene-400 rounded-2xl p-4">
                    <div className="flex space-x-2 justify-between">
                        <p>A15bZywx</p>
                        <p>15/2/24 at 12.45pm</p>
                    </div>
                    <div className="md:flex justify-between">
                        <p>Ali Tanko</p>
                        <p>alitanko@gmail.com</p>
                        <p>08077733345</p>
                        <p>+2348077733345</p>
                    </div>
                    <div className="flex space-x-2 justify-between">
                        <p>No 45 moon star street cocunut estate guarimpa kastina</p>
                        <p>4200</p>
                    </div>
                    <div className="flex space-x-2">
                        <p>Order Items: Jollof rice [1], Chicken [1], Sponge Cake [1], Coke[1]</p>
                    </div>
                    <div className="flex justify-end px-16 py-4">
                        <p className="text-center border border-irene-400 rounded-full px-8 py-1 hover:bg-irene-200">Deliver</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PreviousOrders;