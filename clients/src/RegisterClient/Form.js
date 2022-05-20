import './form.css'

const Form = () => {
    return ( 
        <div className="form">
            <form action="">                
                    <h4>Restaurant Information</h4>
                    <input type="text" placeholder="Restaurant Name" />
                    <input type="text" placeholder="Restaurant Complete Name" />
                    <label htmlFor="restaurantContact">Contacts number @ Restaurant</label>
                    <input type="number" name="restaurantContact" id="" placeholder="+250  Mobile number" />                                
                    <h4>Restaurant's Owner's Details</h4>
                    <input type="number" name="ownerContact" id="" placeholder="+250  Mobile number" />
                    <div className="float">
                        <input type="text" placeholder="Owner's Name" id="left" />
                    </div>
                    <div className="float">
                        <input type="email" name="email" id="right" placeholder="Restaurant's Owner's Email" />
                    </div>                
            </form>
        </div>
     );
}
 
export default Form;