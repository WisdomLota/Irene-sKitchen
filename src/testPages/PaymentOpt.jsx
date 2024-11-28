import backArrow from "../assets/back.svg";
import IreneImg from "../assets/irene-img.png";
import CardImg from "../assets/card-img.png";
import BankImg from "../assets/bank-img.png";
const PaymentOpt = () => {
    const divStyle = {
        boxShadow: '8px 8px 0 0 #EAD2A3',
    }
    return (
        <>
        <div className="text-irene-400 bg-irene-100 px-4 py-4 lg:h-screen">

            <div className="flex">
                <img src={backArrow} alt="back arrow" className="w-20 h-16"/>
                <img src={IreneImg} alt="Irene's Img" className="w-44 mx-auto"/>
            </div>

            <div className="flex justify-center items-center mt-8">
                <h3 className="text-lg font-bold ml-20">Payment Options</h3>
            </div>

            <div className="grid grid-cols gap-4  items-center p-24 lg:flex justify-around ml-16">
                <div className="w-96 h-64 rounded-lg border border-black flex flex-col justify-center items-center space-y-16" style={divStyle}>
                    <img src={CardImg} alt="Card Image" className="text-center"/>
                    <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Pay With Card</p>
                </div>
                <div className="w-96 h-64 rounded-lg border border-black flex flex-col justify-center items-center space-y-16" style={divStyle}>
                    <img src={BankImg} alt=" Bank Image" className="text-center"/>
                    <p className="text-center border border-irene-400 rounded-full px-6 py-1 hover:bg-irene-200">Pay With Bank Transfer</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PaymentOpt;