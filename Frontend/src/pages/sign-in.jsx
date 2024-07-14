import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link,useNavigate } from "react-router-dom";
import { useRef,useState } from "react";


export function SignIn() {
  const email=useRef()
  const username=useRef()
  const password=useRef()
  const chosenfield=useRef()
  const [orgfield,setorgField]=useState(false)
  const [volunteerfield,setvolunteerField]=useState(false)

  const volunteer=useRef()//0 for volunteer and 1 for organization
  const org=useRef()
  const isChecked=useRef()
  const nav=useNavigate()
  const handleSignUp = () => {
    // Handle your signup logic here
    // After successful sign up, redirect to the dashboard home
    nav('/dashboard/home');
  };
  return (
    <div>
      
      <section className="m-8  flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <Typography variant="h2" className="font-bold mb-4">Sign In</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your email
            </Typography>
            <Input ref={email}
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Your username
            </Typography>
            <Input ref={username}
              size="lg"
              placeholder="John Doe"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
              Password
            </Typography>
            <Input ref={password}
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             <p className="font-serif ">Signup as ?</p>
             <form className="border p-3 border-black rounded-md">
            <input type="radio" onChange={(e)=>{
              if(orgfield){
                setorgField(prev=>!prev)
              }
              setvolunteerField(prev=>!prev)
              
            }} ref={volunteer} name="option" id="volunteer" />
            <label htmlFor="volunteer" className="p-2">Volunteer</label>
            <input type="radio" onChange={(e)=>{
              if(volunteerfield==true){
                setvolunteerField(prev=>!prev)
              }
              setorgField(prev=>!prev)
             
            }} ref={org} name="option" id="org" />
            <label htmlFor="org" className="p-2">Organization</label>
          </form>
          </div>
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="small" color="blue-gray" className="-mb-3 font-medium">
             {volunteerfield && "Volunteer Name"}
             {orgfield && "Organization Name"}
            </Typography>
            <Input ref={chosenfield}
              size="lg"  type="password"
              
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox ref={isChecked}
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center justify-start font-medium"
              >
                I agree the&nbsp;
                <a
                  href="#"
                  className="font-normal text-black transition-colors hover:text-gray-900 underline"
                >
                  Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6" fullWidth onClick={(e)=>{
             e.preventDefault()
          
             if(email.current.children[0].value=='' || password.current.children[0].value==''||chosenfield.current.children[0].value=='' || username.current.children[0].value==''){
              toast.error("Please enter all fields properly!!")
              return 
             }
             if(!email.current.children[0].value.includes("@") || !email.current.children[0].value.includes(".")){
               toast.error("Not a valid email")
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
          
         
 
            handleSignUp()
            
          }}>
            Sign In
          </Button>
          <button className=" bg-black rounded-md text-white mt-2 text-sm font-bold  p-1 py-2 w-full" onClick={()=>{
            nav('/home')
          }} >Back to Home Page</button>

         
        
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered?
            <Link to="/sign-up" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>

      </div>
      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
      <ToastContainer />
    </section>
    </div>
  );
}

export default SignIn;
