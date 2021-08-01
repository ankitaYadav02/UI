import "./login.css";

export default function Login() {
  return (
    <div className=" App sign__parent">
      <div className="sign__container">
        <div>
          <p className="sign__leadhead">Your space to be social</p>
          <p className="sign__head">
            Blast off today and join the fun!! Getting started is only a few
            clicks away.
          </p>
          <div className="sign__buttonContainer">
            <button className="sign__learnbuttons">Learn More</button>
            <button className="sign__morefeaturesbutton">Our Features</button>
          </div>
        </div>
      </div>
      <div className="sign__formParentContainer">
        <div className="sign__formContainer">
          <form action="/action_page.php" className="sign__form">
            <p className="sign__signupheading">Signin</p>
            <p className="sign__label">
              Email
            </p>
            <input type="text" name="gender" className="sign__input" />
            <p className="sign__label">
              Password
            </p>
            <input type="text" name="gender" className="sign__input" />
            <input type="submit" value="Signup" className="sign__button" />

            <p className="sign__signinLink">
              Don't have an Account?<span>Signup</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
