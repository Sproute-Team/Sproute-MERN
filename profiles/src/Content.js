import bar from './bar.svg'
import quarterCircle from './quarterCircle.svg'
import './content.css';
import Form from './Form';

const Content = () => {
    return ( 
        <div className="content">
            <div className="row">      
            <div className="circle" id="circle1"></div>   
                            
            <div className="circle" id="circle2"></div>          
                <div className="smallRectangle">                
                   <div className="auto">
                    <h3>1.Create your<br/>restaurant profile</h3>                         
                            <div className="flex">
                                <div className="rows">
                                    <span className="smallCircle"></span>
                                </div>
                                <div className="rows">
                                    <p><strong className="strong" >Restaurant Information</strong></p>
                                    <p>Restaurant name, adress</p>
                                    <p>Owner's details</p>
                                </div>
                            </div>          
                                                                    
                            <div className="flex">
                                <div className="rows">
                                    <span className="smallCircle"></span>
                                </div>
                                <div className="rows">
                                    <p><strong className="strong" >Restaurant Type & Timings</strong></p>
                                    <p>Establishment & cuisine types</p>
                                    <p>Opening hours</p>
                                </div>
                            </div>                           

                            <div className="flex">
                                <div className="rows">
                                    <span className="smallCircle"></span>
                                </div>
                                <div className="rows">
                                    <p><strong className="strong" >Create your menu</strong></p>
                                    <p>Menu restaurant food images</p>
                                </div>
                            </div>                           
                            
                            <div className="flex">
                                <div className="rows"></div>
                            </div>
                            <span className="smallCircle"></span>
                   </div>
                </div>
            </div>


            <div className="row">                
                <div className="bigRectangle">              
                    <Form/>
                </div>
                <div className="quarterCircle">
                    <img id="quarterCircle" src={quarterCircle} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default Content;