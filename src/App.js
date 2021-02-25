import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Container, Row, Col, Card, Modal, Input, Label, ModalFooter, ModalBody, Form, Alert } from "reactstrap";
import Countdown from 'react-countdown';
import Preethi from './assets/img/Preethi.png';
import Sri from './assets/img/Sri.png';

const printTime = (number) => {
  if(number < 10) {
    return "0"+number;
  } else {
    return number;
  }
}

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <div> Watch Live :) </div>;
  } else {
    // Render a countdown
    return <div className="countdown">
      <div className="block">
        <span className="number">
          {days}
        </span>
        <span className="text"> Days </span>
      </div>
      <div className="block">
        <span className="number">
           : 
        </span>
      </div>
      <div className="block">
        <span className="number">
          {printTime(hours)}
        </span>
        <span className="text"> Hours </span>
      </div>
      <div className="block">
        <span className="number">
          :
        </span>
      </div>
      <div className="block">
        <span className="number">
          {printTime(minutes)}
        </span>
        <span className="text"> Mins </span>
      </div>
      <div className="block">
        <span className="number">
           : 
        </span>
      </div>
      <div className="block">
        <span className="number">
          {printTime(seconds)}
        </span>
        <span className="text"> Secs </span>
      </div>
    </div>;
  }
};

class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      wishModal: false,
      wish: "",
      to: "",
      name: "",
      alert: ""
    }
  }
  
  toggleModal (to) {
    this.setState({
      wishModal: !this.state.wishModal,
      to
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit () {
    this.setState({
      wishModal: false
    })
    fetch("https://api.grambox.app/wish", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        wish: this.state.wish,
        to: this.state.to,
        name: this.state.name
      })
    }).then(res => res.json())
      .then((data) => {
        this.setState({
          wish: "",
          to: "",
          name: "",
          alert: "Thank you so much for wishing us :)"
        })
      });
  }

  render () {
    return (
      <div className="App">
        <div>
          <div className="position-relative">
            <section className="section section-hero section-shaped">
              <div className="shape handHoldHero" />
              <Container className="shape-container d-flex align-items-center py-md">
                <div className="col px-0" style={{ marginTop: -60 }}>
                  <Row className="align-items-center justify-content-center">
                    <Col className="text-center" lg="6">
                      <div>
                        <h5 class="name">Sarjun</h5>
                        <h5 class="connector">weds</h5>
                        <h5 class="name">Jannathul Firthous</h5>
                      </div>
                      <div className="btn-wrapper mt-0">
                        <Countdown
                          date={new Date(1615440600000)}
                          renderer={renderer}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew zindex-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div> */}
            </section>
          </div>
        </div>
        <Container>
          <div className="letter">
            <p className="biggerText" className="h3"> Dear All, </p>
            <br />
            <p className="para h5">
            We officially met as kids and fought for chocolates and cakes in some random family marriages.. when I saw her first time she was 4 year old with cute ponytail.
            </p>
            <br />

            <p className="para h5"> Then now we are meeting  again on March 11, its our day to makes us husband and wife in this wondrous world that would find happiness with your presence..
 </p>
            <br />
            <p className="para h5"> <strong>Location:</strong><br />
            </p>
            <p className="para h5"> <strong>Marriage Hall:</strong> <a href="https://bit.ly/3pNn5pE">https://bit.ly/3pNn5pE</a></p>
            <p className="para h5"> <strong>Stay hotel:</strong>  <a href="https://bit.ly/3pOJenr">https://bit.ly/3pOJenr </a>(Kindly confirm with 9738540354)</p>
            <Row>
              <Button href="javascript:;" className="wishButton" style={{ margin: "10px auto" }} onClick={() => this.toggleModal("both")} color="info">
                <img  className="photoIcon" /> &nbsp; Wish both of us together &nbsp; <img  className="photoIcon" style={{ transform: 'rotate(10deg)' }} />
              </Button>
            </Row>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Button href="javascript:;" className="wishButton" outline onClick={() => this.toggleModal("sri")}>
                <img  className="photoIcon" style={{ transform: "scaleX(-1) rotate(25deg)" }} /> &nbsp; Wish Sarjun
              </Button>

              <Button href="javascript:;" className="wishButton" outline onClick={() => this.toggleModal("preethi")}>
                <img  className="photoIcon" /> &nbsp; Wish Jannathul Firthous
              </Button>
            </div>

            <br />
            {/* <p className="para h5" style={{ marginTop: 10 }}> We know that most of you want to see us on our big day. Even though you can't see us physically on that time, You can see us virtually on those moments Live. Yes, We will be live streaming our wedding in this site.. </p>
            <br /> */}
            {/* <Row>
              <Button href="https://www.facebook.com/sriramanpanneer/videos/3215199025208440" color="danger" style={{ alignSelf: 'center', margin: "10px auto" }}>
                Watch us LIVE
              </Button> */}
              {/* <Button  className="btn-icon btn-3" color="danger" type="button" style={{ margin: "10px auto" }} disabled>
                <span className="btn-inner--icon">
                  <i className="ni ni-button-play" />
                </span>
                <span className="btn-inner--text watchLive">Watch LIVE </span>
              </Button> */}
              
             {/* <div style={{paddingBottom:'56.25%', position:'relative', display:'block', width:' 100%'}}>
             <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fsriramanpanneer%2Fposts%2F3214295311965478&width=500" width="500" height="496" style={{border:'none',overflow:'hidden'}} scrolling="no" frameborder="0" allowTransparency="true" ></iframe>
            </div>  */}
            {/* </Row> */}
            <br/>

            <p className="h5"> Your presence is big present for us. We really appreciate if you can donate to Proud Indian NGO who is helping underprivileged people. </p>
            <br/>
            <Row>
              <div style={{ margin: "0 auto" }}>
                {/* <span style={{ padding: 5 }}>Wedding Gift Cards by</span> <a href="https://bit.ly/2NhcL8w" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png" className="photoIcon appsIcon" style={{  }} /> </a>  */}
                {/* <a href="https://bit.ly/310CMkl" target="_blank"><img src="https://www.underconsideration.com/brandnew/archives/flipkart_logo_detail_icon.jpg" className="photoIcon appsIcon" style={{}} /> </a>  */}
                {/* <a href="https://bit.ly/2CqPkaG" target="_blank"> <img src="https://assets.materialup.com/uploads/951ea858-5d24-4aa6-8408-53da9774ccfb/preview" className="photoIcon appsIcon"></img></a> */}
              </div>
            </Row>
            <Row>
              <div style={{ margin: "0 auto" }}>
                {/* <p class="h6"> or </p>  */}
              </div>
            </Row>
            <Row>
              <div style={{ margin: "0 auto" }}>
                <a href="https://bit.ly/3deKtpz" className="btn btn-primary donate" target="_blank"> Donate to Proud Indian NGO </a> 
              </div>
            </Row>
            <br/>


            <p className="para"> </p> 


            {/* <p className="para h5"> We really miss the fun of sharing the joy, tease us, etc.,. Please do feel free to share your thoughts, memes over your social media too with our official hashtag. We will also pick few and feature it in this site.. </p>

            <br/>

            <h3 style={{ fontSize: 32, color: '#8e44ad', fontWeight: 'bold', textAlign: 'center', marginBottom: 40 }} className="hashtag">#SriWedsPreethi</h3> */}


            {(this.state.alert !== "") && <div style={{ position: 'fixed', bottom: 10 }}> 
              <Row style={{ flex: 1 }}>
                <Alert color="success">
                  {this.state.alert}
                </Alert>
              </Row>
            </div>}
            

          </div>
        </Container>


        <Modal
          className="modal-dialog-centered"
          isOpen={this.state.wishModal}
          toggle={() => this.toggleModal("wishModal")}
        >
          <Form className="form">
            <ModalBody style={{ padding: 40 }}>
              <Row>
                <p className="h6"> Thank you so much for taking time to wish us. It means a lot to us. You can also feel free to give your advices, wishes or anything which you want to tell us in private. </p>
                <Label for="name">Name </Label>
                <Input type="text" name="name" id="name" onChange={e => this.handleChange(e)} style={{ marginBottom: 10 }} />
                <Label for="wish">Your message </Label>
                <Input type="textarea" name="wish" id="wish" style={{ height: 200, marginBottom: 10 }} onChange={e => this.handleChange(e)} />

                {(this.state.to === "sri") && <p className="h6"> PS : Your wish can only be seen by Sriraman. No one else can see it including Preethi. </p>}
                {(this.state.to === "preethi") && <p className="h6"> PS : Your wish can only be seen by Preethi. No one else can see it including Sriraman. </p>}
              </Row>
            </ModalBody>
            <ModalFooter>
              <Button
                color="secondary"
                data-dismiss="modal"
                type="button"
                onClick={() => this.toggleModal("exampleModal")}
              >
                Close
              </Button>
              <Button color="primary" type="button" onClick={() => this.onSubmit()}>
                Submit
              </Button>
            </ModalFooter>
          </Form>
        </Modal>
      </div>
    );
  }
  
}

export default App;
