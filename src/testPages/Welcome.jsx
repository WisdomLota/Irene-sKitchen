import IreneImg from "../assets/irene-img.png";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="text-irene-400 bg-irene-100 flex flex-col items-center justify-center h-screen space-y-8">

            <h1 className="text-5xl md:text-6xl font-bold">WELCOME TO</h1>
            <img src={IreneImg} alt="Irene's Img" />
            <p className="bg-irene-200 rounded-full px-4 py-2 font-bold hover:border border-irene-400" onClick={()=> navigate('/main-dishes')}>I want to order</p>

        </div>
        </>
    )
}

export default Welcome;