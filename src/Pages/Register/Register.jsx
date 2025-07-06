import Lottie from "lottie-react";
import registrationLottie from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()
  const {createUser} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        // console.log(email, password)

        // validation
        createUser(email, password)
      .then((result) => {
        navigate('/')
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    }


    return (
       <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left w-xl">
     
      {/* lottie file here */}
      <Lottie animationData={registrationLottie}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleSubmit} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input  className="btn btn-neutral mt-4"type="submit" value="Register" />
        </fieldset>
        {/* social login component added */}
        <SocialLogin></SocialLogin>
            <p>
              Already you have account, Please{" "}
              <Link className="text-blue-500" to="/signin">
                Sign In
              </Link>
            </p>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;