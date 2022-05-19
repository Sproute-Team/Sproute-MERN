import Navbar from "./Navbar";
import Content from './Content'
import Footer from "./Footer";

function RenderAll() {
    return (
        <div className="Render">
          <Navbar />
          <Content className="content"/>
          <Footer />
        </div>
      );
    }
    
    export default RenderAll;
    