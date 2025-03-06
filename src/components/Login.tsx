import guitar from '../assets/guitar.png'
import google from '../assets/google.png'
import phone from '../assets/phone.png'
import { auth, googleProvider } from '../utility/firebase';
import { signInWithPopup } from "firebase/auth";

type Props = {
  setLoginModal : (value: boolean | ((prev: boolean) => boolean)) => void; 
  // setLoginModal data type will be either boolean or function 
}

const Login = ({setLoginModal}:Props) => {

    const googleSignin = async()=>{
      try {
        await signInWithPopup(auth ,googleProvider )
      } catch (error) {
        console.error(error)
      }
    }

    const closeLoginModal =()=>{
      setLoginModal(false)
    }

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="fixed inset-0 bg-zinc-950/75 transition-opacity"
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <h1 onClick={closeLoginModal} className="font-semibold text-2xl cursor-pointer text-end text-red-700">X</h1>
              <div className="sm:flex sm:items-start">
               
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <div className="mt-2">
                    <img src={guitar} alt="guitar-icon"  className="w-20 h-20 ml-30 cursor-pointer"/>
                    <p className="font-medium text-base mt-5 text-center">
                      Help us to become one of the safest places <br /> to buy or sell 
                    </p>
                    <div className="flex border-2 border-black  p-2 rounded-md mt-12 cursor-pointer">
                        <img src={phone} alt="guitar-icon"  className="w-6 h-6"/>
                        <h1 className="font-semibold ml-12" >Continue with phone</h1>
                    </div>
                    <div onClick = {googleSignin} className="flex border border-gray-300  p-2 rounded-md mt-4 cursor-pointer">
                        <img src={google} alt="google-icon"  className="w-6 h-6"/>
                        <h1 className="font-semibold ml-12 text-gray-600" >Continue with google</h1>
                    </div>
                    <h1 className="text-center mt-4"> OR </h1>
                    <h1 className="text-center mt-4 underline cursor-pointer"> Login with Email </h1>
                    <h1  className="text-center mt-24 text-xs " >All You Personal details are safe with us </h1>
                    <h1  className="text-center mt-4 text-xs" >if you continue you are accepting <span className="text-blue-600">OLX Terms and <br /> Conditons and Privacy Policy </span></h1>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
