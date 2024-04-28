
import './App.css'
import CheckoutStepper from './components/CheckoutStepper'


const CHECKOUT_STEPS = [
  {  
  name:'customer Info',
  component: () => <div>Provide your contact details</div>
},
{
name: 'shipping Info',
component: ()=> <div>Enter Your Shipping Details</div>
},
 {
  name:'payment',
  component: ()=> <div>Complete Payment For Your Order</div>
}, 
{
  name:'Delivered',
  component: () => <div>Your Order has been delivered</div>
}
  
]

function App() {

  return (
    <>
      <div>
      <h2>Checkout</h2>
      <CheckoutStepper stepsConfig={CHECKOUT_STEPS  }/>
      
      </div>
    </>    
    
  )
}

export default App
