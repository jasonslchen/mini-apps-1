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

    /*
    ==========
    f1
    ==========
    */

    this.f1 = <div>
                <form>
                  <label>
                    Name: 
                    <input type="text" id="name" onChange={this.inputFormChange} value={this.name}></input>
                  </label><br></br>
                  <label>
                    Email:
                    <input type="text" id="email" onChange={this.inputFormChange} value={this.email}></input>
                  </label><br></br>
                  <label>
                    Password:
                    <input type="text" id="password" onChange={this.inputFormChange} value={this.password}></input>
                  </label><br></br>
                  <input type="submit" onClick={this.submitInputFormData}></input>
                 </form>
                 <button onClick={this.nextPage}>Next</button>
               </div>;
    
    this.f2 = <div>
                <form>
                  <label>
                    Address Line 1 
                    <input type="text" id="address1" onChange={this.inputFormChange} value={this.address1}></input>
                  </label><br></br>
                  <label>
                    Address Line 2  
                    <input type="text" id="address2" onChange={this.inputFormChange} value={this.address2}></input>
                  </label><br></br>
                  <label>
                    City
                    <input type="text" id="city" onChange={this.inputFormChange} value={this.city}></input>
                  </label><br></br>
                  <label>
                    State
                    <input type="text" id="homestate" onChange={this.inputFormChange} value={this.homestate}></input>
                  </label><br></br>
                  <label>
                    Zip Code
                    <input type="text" id="zipcode" onChange={this.inputFormChange} value={this.zipcode}></input>
                  </label><br></br>
                  <label>
                    Phone Number
                    <input type="text" id="phoneNumber" onChange={this.inputFormChange} value={this.phoneNumber}></input>
                  </label><br></br>
                  <input type="submit" onClick={this.submitInputFormData}></input>
                </form>
                <button onClick={this.nextPage}>Next</button>
              </div>;

    this.f3 = <div>
                <form>
                  <label>
                    Credit Card Number: 
                    <input type="text" id="ccNumber" onChange={this.inputFormChange} value={this.ccNumber}></input>
                  </label><br></br>
                  <label>
                    Expiration Date:
                    <input type="text" id="expDate" onChange={this.inputFormChange} value={this.expDate}></input>
                  </label><br></br>
                  <label>
                    CVV:
                    <input type="text" id="cvv" onChange={this.inputFormChange} value={this.cvv}></input>
                  </label><br></br>
                  <label>
                    Billing Zip Code:
                    <input type="text" id="billZip" onChange={this.inputFormChange} value={this.billZip}></input>
                  </label><br></br>
                  <input type="submit" onClick={this.submitInputFormData}></input>
                </form>
                <button onClick={this.nextPage}>Next</button>
              </div>;

  /*
  ==========
  handler function binds
  ==========
  */


  }
  
  componentDidMount() {
    this.homePage();
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

  /*
  ==========
  home page
  ==========
  */

  homePage() {
    this.setState ({
      webpage: <button onClick={this.nextPage} id="checkout">Checkout</button>
    })
  }

  // renderf1Page() {
  //   this.setState({
  //     webpage: this.f1
  //   })
  // }
  /*
  ==========
  f1 page
  ==========
  */

  inputFormChange(event) {
    event.persist();
    console.log(this.state[event.target.id])
    this.setState((state) => {
      return {[event.target.id]: event.target.value}
    })
  }

  submitInputFormData(event) {
    event.preventDefault();
  }
  







  render() {
    let webpageDOM;
    if (this.state.page === 0) {
      webpageDOM = <button onClick={this.nextPage} id="checkout">Checkout</button>
    } else if (this.state.page === 1) {
      webpageDOM = this.f1;
    } 
    else if (this.state.page === 2) {
      webpageDOM = this.f2;
    } else if (this.state.page === 3) {
      webpageDOM = this.f3;
    }

    return <div>
      <header>The Complete Checkout Experience</header>
      {webpageDOM}
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById("app"));