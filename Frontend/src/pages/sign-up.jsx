import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp() {
  const email=useRef()
  const username=useRef()
  const password=useRef()
  const confirmpassword=useRef()
  const volunteer=useRef()//0 for volunteer and 1 for organization
  const org=useRef()
  const isChecked=useRef()
  const nav=useNavigate()
  return (
    <section className="m-8 flex">
            <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Join Us Today</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to register.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input
              size="lg" ref={email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your username
            </Typography>
            <Input
              size="lg" ref={username}
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your password
            </Typography>
            <Input ref={password} style={{color:"black"}}
              size="lg" type="password"
              placeholder="Enter your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
             Confirm Your password
            </Typography>
            <Input ref={confirmpassword}
              size="lg"  type="password"
              placeholder="Confirm your password"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
         
            <p className="font-serif ">Signup as ?</p>
          <form className="border p-3 border-black rounded-md">
            <input type="radio" ref={volunteer} name="option" id="volunteer" />
            <label htmlFor="volunteer" className="p-2">Volunteer</label>
            <input type="radio" ref={org} name="option" id="org" />
            <label htmlFor="org" className="p-2">Organization</label>
          </form>
          <Checkbox ref={isChecked}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
               
                  Terms and Conditions
                
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={(e)=>{
            e.preventDefault()
          
            if(email.current.children[0].value==''|| confirmpassword.current.children[0].value=='' || password.current.children[0].value=='' || username.current.children[0].value==''){
             toast.error("Please enter all fields properly!!")
             return 
            }
            if(!email.current.children[0].value.includes("@")){
              toast.error("Not a valid email")
              return
            }
            if(confirmpassword.current.children[0].value!=password.current.children[0].value){
              toast.error("Passwords dont match !!")
              return 

            }
            if(password.current.children[0].value.length <6){
              toast.error("Pasword should be at least 6 characters long!!")
              return
            }
              
          if(!volunteer.current.checked && !org.current.checked){
            toast.error("Please choose whether you are a volunteer or an orgnization!!")
            return
          }
             if(!isChecked.current.children[0].children[0].checked){
              toast.error("Please accept our terms and conditions")
              return
             }
         
            console.log(email.current.children[0].value);
            console.log(password.current.children[0].value.length);
            console.log(username.current.children[0].value);
            console.log(volunteer.current.checked);
            console.log(org.current.checked);
          //   email.current.children[0].value=''
          //  password.current.children[0].value=''
          //  confirmpassword.current.children[0].value=''
          //  password.current.children[0].value=''
          //  username.current.children[0].value=''

          toast.success("Done now ",{
            autoClose:3000
          })
           
          }}>
            Register Now
          </Button>
          <button className=" bg-black rounded-md text-white mt-2 text-sm font-bold  p-1 py-2 w-full" onClick={()=>{
            nav('/home')
          }} >Back to Home Page</button>

          {/* <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <img src="/img/twitter-logo.svg" height={24} width={24} alt="" />
              <span>Sign in With Twitter</span>
            </Button>
          </div> */}
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Already have an account?
            <Link to="/signin" className="text-gray-900 ml-1">Sign in</Link>
          </Typography>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
}

export default SignUp;
