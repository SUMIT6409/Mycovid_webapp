class OTP extends Component {
  state = {
    phone: "",
  };

  componentDidMount = (props) => {
    this.setState({ phone: this.props.location.state.phone });
    console.log(this.state.phone);
  };
  handleClick = () => {
    console.log(this.state.phone);
    const history = useHistory();
    //history.push("/dashboard");
  };
  render() {
    return (
      <div>
        <img
          src="https://cdn4.iconfinder.com/data/icons/blue-sapphire-medical-set-2/256/66-512.png"
          width="200"
          className="m-5"
        />
        <div className="container height-100 d-flex justify-content-center ">
          <div className="position-relative">
            <div
              className="card p-2 text-center"
              style={{ backgroundColor: "#0096FF" }}
            >
              <h6 style={{ color: "white" }}>
                Please enter the one time password <br /> to verify your account
              </h6>
              <div>
                {" "}
                <span style={{ color: "white" }}>
                  A code has been sent to your number
                </span>{" "}
              </div>
              <div
                id="otp"
                // className="inputs d-flex flex-row justify-content-center mt-2"
              >
                {" "}
                <input
                  autoFocus
                  className="m-2 text-center form-control rounded"
                  type="text"
                  id="first"
                  maxLength="6"
                  minLength="6"
                  style={{ borderColor: "black" }}
                />{" "}
              </div>
              <div className="mt-4">
                {" "}
                <button className="btn btn-danger px-4 validate">
                  Validate
                </button>{" "}
              </div>
            </div>
            <div>
              <div>
                {" "}
                <br />
                <span>Didn't get the code </span> <br />
                <br />
                <button
                  className="text-decoration-none btn btn-primary"
                  style={{ color: "white" }}
                  onClick={this.handleClick}
                >
                  Resend
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OTP;
