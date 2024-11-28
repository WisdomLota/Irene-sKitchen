// import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Welcome from "./testPages/Welcome";
import PaymentOpt from "./testPages/PaymentOpt";
import PatronOrder from "./testPages/PatronOrder";
import MainDishes from "./testPages/MainDishes";
import Proteins from "./testPages/Proteins";
import Munchables from "./testPages/Munchables";
import Liquids from "./testPages/Liquids";
import YourTray from "./testPages/YourTray";
import OrderOverview from "./testPages/OrderOverview";
import CancelOrder from "./testPages/CancelOrder";
import Login from "./testPages/Login";
import PendingOrders from "./testPages/PendingOrders";
import PreparingOrders from "./testPages/PreparingOrders";
import TransitOrders from "./testPages/TransitOrders";
import DeliveredOrders from "./testPages/DeliveredOrders";
import PreviousOrders from "./testPages/PreviousOrders";
import PatronInfo from "./testPages/PatronInfo";
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/payment" element={<PaymentOpt />} />
        <Route path="/patron-order" element={<PatronOrder />}/>
        <Route path="/main-dishes" element={<MainDishes/>}/>
        <Route path="/proteins" element={<Proteins/>}/>
        <Route path="/munchables" element={<Munchables/>}/>
        <Route path="/liquids" element={<Liquids />}/>
        <Route path="/your-tray" element={<YourTray />}/>
        <Route path="/order-overview" element={<OrderOverview />}/>
        <Route path="/cancel-order" element={<CancelOrder/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pending-orders" element={<PendingOrders/>}/>
        <Route path="/preparing-orders" element={<PreparingOrders />}/>
        <Route path="/transit-orders" element={<TransitOrders/>}/>
        <Route path="/delivered-orders" element={<DeliveredOrders/>}/>
        <Route path="/previous-orders" element={<PreviousOrders/>}/>
        <Route path="/patron-info" element={<PatronInfo/>}/>
      </Routes>
    </Router>
  )
}

export default App;
