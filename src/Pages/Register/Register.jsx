import Lottie from "lottie-react";
import registrationLottie from '../../assets/lottie/register.json'
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {
  const navigate = useNavigate()
  const {createUser, updateUserProfile} = useContext(AuthContext)

    const handleSubmit = e => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const name = e.target.name.value
        const photoURL = e.target.photoURL.value
        // console.log(email, password, name, photoURL)

        // validation
        createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // update user profile
        updateUserProfile(name, photoURL)
        .then(() => {
          const userInfo = {
            name: name,
            email: email,
            photoURL: photoURL,
          }

             fetch("http://localhost:5000/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userInfo),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Your Registration Done",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }
                });

        })
        navigate('/')
        
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
          <label className="label">Name</label>
          <input name="name" type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <label className="label">Photo URL</label>
          <input name="photoURL" type="url" className="input" placeholder="Photo URL" />
          
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