import React,{Component} from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Carousel from 'react-bootstrap/Carousel';

class Home extends Component {  
        render() {  
                return (  
                        <div>  
                         <div className='container-fluid' >  
                          <div className="row title w-100  mr-auto ml-auto" style={{ marginBottom: "20px" }} >  
                          <div className="col-sm-12 btn btn-warning">  
                           Bootstrap Carousel In ReactJS  
                         </div>  
                         </div>  
                         </div>  
                         <div className='container-fluid' >  
                         <Carousel>   
                         <Carousel.Item style={{'height':"80vh",paddingBottom:'20px'}} >  
                         <img style={{'height':"80vh"}}  
                         className="d-block w-100 p-2"  
                        src={'img/11.jpg'}  />  
                           <Carousel.Caption>  
                             <h3>First Demo </h3>  
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"80vh"}}>  
                                 <img style={{'height':"80vh"}}  
                                   className="d-block w-100 p-2"  
                                    src={'img/123.jpg'}    />  
                                       <Carousel.Caption>  
                                   <h3>Second Demo</h3>  
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"80vh"}}>  
                                       <img style={{'height':"80vh"}}  
                                        className="d-block w-100 p-2"  
                                         src={'img/1234.jpg'}   />  
                                        <Carousel.Caption>  
                                          <h3>Third Demo</h3>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                );  
        

}
}
export default  Home;