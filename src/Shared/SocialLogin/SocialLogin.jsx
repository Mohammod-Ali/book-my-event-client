import { useContext } from "react";
import AuthContext from "../../Context/AuthContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {
     const {signInWithGoogle} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state || '/'

    // google sign in validation added
    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            navigate(from)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div>
        <div className="divider">OR</div>
        <div className="text-center">
                  <button onClick={handleGoogleSignIn} className='btn'> <img className='w-9' src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" alt="" />Login with Google</button>
        </div>
        </div>
    );
};

export default SocialLogin;