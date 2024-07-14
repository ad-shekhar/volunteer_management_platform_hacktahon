import {
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useRef, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp() {
  const email=useRef()
  const username=useRef()
  const password=useRef()
  const confirmpassword=useRef()
  const volunteer=useRef()//0 for volunteer and 1 for organization
  const chosenfield=useRef()
  const org=useRef()
  const isChecked=useRef()
  const nav=useNavigate()
  const [orgfield,setorgField]=useState(false)
  const [volunteerfield,setvolunteerField]=useState(false)
  const handleSignUp = () => {
    // Handle your signup logic here
    // After successful sign up, redirect to the dashboard home
    nav('/dashboard/home');
  };
  
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
          <Checkbox onChange={()=>{
            
          }} ref={isChecked}
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
          
            if(email.current.children[0].value==''|| confirmpassword.current.children[0].value==''||chosenfield.current.children[0].value=='' || password.current.children[0].value=='' || username.current.children[0].value==''){
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
         
        
            email.current.children[0].value=''
           password.current.children[0].value=''
           confirmpassword.current.children[0].value=''
           password.current.children[0].value=''
           username.current.children[0].value=''

         handleSignUp()
           
          }}>
            Register Now
          </Button>
          <button className=" bg-black rounded-md text-white mt-2 text-sm font-bold  p-1 py-2 w-full" onClick={()=>{
            nav('/home')
          }} >Back to Home Page</button>

          
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
