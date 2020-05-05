import React , {Component} from 'react';
import './style.css';

class Form extends Component{
constructor(props){
    super(props);

        this.state = { fullnm: this.handlechangeforall,
                    email: this.handlechangeforall,
                    phno: this.handlechangeforall,
                    message: this.handlechangeforall  }

                }
                handlechangeforall = (event) => {
                    this.setState({[ event.target.name ] : event.target.value})
                }
                handlefullnm = (event) =>{
                    this.setState({handlefullnm : event.target.value})
                }
                handlesubmit = (event) => {
                 
                     alert(`
                       my name is ${this.state.fullnm}
                       my email is ${this.state.email}
                        my phone no is ${this.state.phno}
                        message is ${this.state.message} `);
                     
                        alert( JSON.stringify(this.state));
                     event.preventDefault();
                }
    render(){
    return(
        <div>
    <form class="main-form" onSubmit={this.handlesubmit}>
    <h1>Enquiry form</h1>
    <label>Name</label>
    <input type="text" name="fullnm" value={this.state.fullnm} onChange={this.handlechangeforall} />
    <label>Email</label>
    <input type="email" name="email" value={this.state.email} onChange={this.handlechangeforall}/>
    <label>phno</label>
    <input type="number" name="phno" value={this.state.phno} onChange={this.handlechangeforall}/>
    <label>Message</label>
    <textarea name="message" value={this.state.message} onChange={this.handlechangeforall}/>
    <input type="submit" value="submit" />
</form>
</div>
    )
}
}
export default Form;
