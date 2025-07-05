import Lottie from "lottie-react";
import signinLottie from '../../assets/lottie/signin.json'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link } from "react-router-dom";


const Signin = () => {
  const {signInUser} = useContext(AuthContext)

  const handleSignIn = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value
    // console.log(email, password)

    // sign in validation check
    signInUser(email, password)
    .then(result=>{
      console.log("sign in", result.user)
      e.target.reset()
    })
    .catch(error => {
      console.log(error)
    })

  }

    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-xl">
      {/* lottie file here */}
      <Lottie animationData={signinLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSignIn} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input  className="btn btn-neutral mt-4" type="submit" value="Login" />
        </fieldset>

        {/* social login component added */}
        <SocialLogin></SocialLogin>
            <p>
              You have no account, Please{" "}
              <Link className="text-blue-500" to="/register">
                Register
              </Link>
            </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Signin;