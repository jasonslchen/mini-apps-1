class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      page: 0,
      webpage: '',
      name: '',
      email: '',
      password: '',
      address1: '',
      address2: '',
      city: '',
      homestate: '',
      zipcode: '',
      phoneNumber: '',
      ccNumber: '',
      expDate: '',
      cvv: '',
      billZip: ''
    }

    this.inputFormChange = this.inputFormChange.bind(this);
   //  this.renderf1Page = this.renderf1Page.bind(this);
    this.submitInputFormData = this.submitInputFormData.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.onPurchase = this.onPurchase.bind(this);

  }
 
  /*
  ==========
  render pages
  ==========
  */

 nextPage() {
   // console.log(this.state.page);
   this.setState ((state) => {
     return {page: state.page + 1}
   });
 }

  inputFormChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submitInputFormData(event) {
    event.preventDefault();
  }
  
  onPurchase(event) {
    this.setState({
      page: 0
    })
    event.preventDefault();
  }

  render() {
    let webpageDOM;
    if (this.state.page === 0) {
      webpageDOM = <button onClick={this.nextPage} id="checkout">Checkout</button>
    } else if (this.state.page === 1) {
      webpageDOM = <div>
      <form>
        <label>
          Name: 
          <input type="text" id="name" onChange={this.inputFormChange} value={this.state.name}></input>
        </label><br></br>
        <label>
          Email:
          <input type="text" id="email" onChange={this.inputFormChange} value={this.state.email}></input>
        </label><br></br>
        <label>
          Password:
          <input type="text" id="password" onChange={this.inputFormChange} value={this.state.password}></input>
        </label><br></br>
        <input type="submit" onClick={this.submitInputFormData}></input>
       </form>
       <button onClick={this.nextPage}>Next</button>
     </div>;
    } 
    else if (this.state.page === 2) {
      webpageDOM = <div>
      <form>
        <label>
          Address Line 1 
          <input type="text" id="address1" onChange={this.inputFormChange} value={this.state.address1}></input>
        </label><br></br>
        <label>
          Address Line 2  
          <input type="text" id="address2" onChange={this.inputFormChange} value={this.state.address2}></input>
        </label><br></br>
        <label>
          City
          <input type="text" id="city" onChange={this.inputFormChange} value={this.state.city}></input>
        </label><br></br>
        <label>
          State
          <input type="text" id="homestate" onChange={this.inputFormChange} value={this.state.homestate}></input>
        </label><br></br>
        <label>
          Zip Code
          <input type="text" id="zipcode" onChange={this.inputFormChange} value={this.state.zipcode}></input>
        </label><br></br>
        <label>
          Phone Number
          <input type="text" id="phoneNumber" onChange={this.inputFormChange} value={this.state.phoneNumber}></input>
        </label><br></br>
        <input type="submit" onClick={this.submitInputFormData}></input>
      </form>
      <button onClick={this.nextPage}>Next</button>
    </div>;

    } else if (this.state.page === 3) {
      webpageDOM = <div>
      <form>
        <label>
          Credit Card Number: 
          <input type="text" id="ccNumber" onChange={this.inputFormChange} value={this.state.ccNumber}></input>
        </label><br></br>
        <label>
          Expiration Date:
          <input type="text" id="expDate" onChange={this.inputFormChange} value={this.state.expDate}></input>
        </label><br></br>
        <label>
          CVV:
          <input type="text" id="cvv" onChange={this.inputFormChange} value={this.state.cvv}></input>
        </label><br></br>
        <label>
          Billing Zip Code:
          <input type="text" id="billZip" onChange={this.inputFormChange} value={this.state.billZip}></input>
        </label><br></br>
        <input type="submit" onClick={this.submitInputFormData}></input>
      </form>
      <button onClick={this.nextPage}>Next</button>
    </div>;
    } else if (this.state.page === 4) {
      webpageDOM = <div>
        <h2>Payment Information</h2>
        <h3>Page 1 Information</h3>
        <div>Name: {this.state.name}</div>
        <div>Email: {this.state.email}</div>
        <div>Password: {this.state.password}</div>
        <h3>Page 2 Information</h3>
        <div>Address Line 1: {this.state.address1}</div>
        <div>Address Line 2: {this.state.address2}</div>
        <div>City: {this.state.city}</div>
        <div>State: {this.state.homestate}</div>
        <div>Zip Code: {this.state.zipcode}</div>
        <div>Phone Number: {this.state.phoneNumber}</div>
        <h3>Page 3 Information</h3>
        <div>Credit Card Number: {this.state.ccNumber}</div>
        <div>Credit Card Expiration Date: {this.state.expDate}</div>
        <div>Credit Card CVV Number: {this.state.cvv}</div>
        <div>Billing Zip Code: {this.state.billZip}</div>
        <button onClick={this.onPurchase}>Purchase</button>
      </div>
    }

    return <div>
      <header>The Complete Checkout Experience</header>
      {webpageDOM}
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));