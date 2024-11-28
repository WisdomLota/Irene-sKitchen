import OrderReceived from "../assets/received-order.png";
import IreneImg from "../assets/irene-img.png";
const PatronOrder = () => {
    return (
        <>
        <div className="text-irene-400 bg-irene-100 grid grid-col justify-center items-center h-screen p-12">
            <img src={IreneImg} alt="Irene's Img" className="w-44 ml-8"/>
            <p className="text-center font-bold text-2xl">Patron's Order</p>
            <hr className="border border-irene-400 mt-16"/>
            <img src={OrderReceived} alt="Order Received" className="mx-auto"/>
            <p className="text-center text-lg">Your Order has been Received</p>
            <hr className="border border-irene-400 mb-16"/>
            <p className="text-center text-lg border border-irene-400 rounded-full px-0 py-1 hover:bg-irene-200">Order Overview</p>
        </div>
        </>
    )
}

export default PatronOrder;