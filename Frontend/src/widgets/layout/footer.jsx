import PropTypes from "prop-types";
import { Typography, IconButton,Input,Textarea,Checkbox,Button} from "@material-tailwind/react";
import { PageTitle} from "@/widgets/layout";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const year = new Date().getFullYear();

export function Footer({ title, description, socials, menus, copyright }) {
  const username=useRef()
  const email=useRef()
  const msg=useRef()
  const isChecked=useRef()
  return (
    <div>
       <section className="relative block h-[20vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-3.png')] bg-cover bg-center scale-105" />
        
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
      </section>
      <footer className="relative px-4 pt-8 pb-6">
      
      <PageTitle section="Contact Us" heading="Want to work with us?">
           Complete this form and we will get back to you in 24 hours.
         </PageTitle>
         <form className="mx-auto w-full mt-12 lg:w-5/12">
           <div className="mb-8 flex gap-8">
             <Input ref={username} variant="outlined" size="lg" label="Full Name" />
             <Input ref={email} variant="outlined" size="lg" label="Email Address" />
           </div>
           <Textarea ref={msg} variant="outlined" size="lg" label="Message" rows={8} />
           <Checkbox ref={isChecked}
             label={
               <Typography
                 variant="small"
                 color="gray"
                 className="flex items-center font-normal"
               >
                 I agree to the
                 <a
                   href="#"
                   className="font-medium transition-colors hover:text-gray-900"
                 >
                   &nbsp;Terms and Conditions
                 </a>
               </Typography>
             }
             containerProps={{ className: "-ml-2.5" }}
           />
           <Button variant="gradient" size="lg" className="mt-8" fullWidth onClick={(e)=>{
           if(email.current.children[0].value=='' || msg.current.children[0].value=='' || username.current.children[0].value==''){
            toast.error("Please enter all deatils correctly!!",{
              autoClose:2000
            })
            return
           }
            if(!email.current.children[0].value.includes("@") ||!email.current.children[0].value.includes(".") ){
              toast.error("Enter  a valid email!!",{autoClose:2000})
              return
            }
           
            if(!isChecked.current.children[0].children[0].checked){
              toast.error("Please accept to our terms and conditions",{autoClose:2000})
              return
            }
           

            console.log(email.current.children[0].value)
            console.log(username.current.children[0].value);
            console.log(msg.current.children[0].value);
            toast.success("Done now",{autoClose:2000})
           }}>
             Send Message
           </Button>
         </form>
     <div className="container mx-auto">
       <div className="flex flex-wrap  pt-6 text-center lg:text-left">
         <div className="w-full px-4  lg:w-6/12">
           <Typography variant="h4" className="mb-4" color="blue-gray">
             {title}
           </Typography>
           <Typography className="font-normal text-blue-gray-500 lg:w-2/5">
             {description}
           </Typography>
           <div className="mx-auto mt-6 mb-8 flex justify-center gap-2 md:mb-0 lg:justify-start">
             {socials.map(({ color, name, path },index) => (
              
                 <IconButton key={index+1} color="white" className="rounded-full shadow-none bg-transparent">
                   <Typography color={color} key={index}>
                     <i className={`fa-brands fa-${name}`} />
                   </Typography>
                 </IconButton>
              
             ))}
           </div>
         </div>
         <div className="mx-auto mt-12  lg:mt-0">
           {menus.map(({ name, items }) => (
             <div key={name}>
               <Typography
                 variant="small"
                 color="blue-gray"
                 className="mb-2 block font-medium uppercase"
               >
                 {name}
               </Typography>
               <ul className="mt-3">
                 {items.map((item) => (
                   <li key={item.name}>
                     <Typography
                       as="a"
                       href={item.path}
                       target="_blank"
                       rel="noreferrer"
                       variant="small"
                       className="mb-2 block font-normal text-blue-gray-500 hover:text-blue-gray-700"
                     >
                       {item.name}
                     </Typography>
                   </li>
                 ))}
               </ul>
             </div>
           ))}
         </div>
       </div>
       <hr className="my-6 border-gray-300" />
       <div className="flex flex-wrap items-center justify-center md:justify-between">
         <div className="mx-auto w-full px-4 text-center">
           <Typography
             variant="small"
             className="font-normal text-blue-gray-500"
           >
             {copyright}
           </Typography>
         </div>
       </div>
     </div>
     <ToastContainer></ToastContainer>
   </footer>
    </div>
    
  );
}

Footer.defaultProps = {
  title: "Volunteer Platform",
  description:
    "Connect Volunteers with Organzations",
  socials: [
    {
      color: "gray",
      name: "twitter",
      path: "https://www.twitter.com/",
    },
    {
      color: "gray",
      name: "youtube",
      path: "https://www.youtube.com",
    },
    {
      color: "gray",
      name: "instagram",
      path: "https://www.instagram.com/",
    },
    {
      color: "black",
      name: "github",
      path: "https://github.com/",
    },
  ],
  menus: [
    {
      name: "useful links",
      items: [
        { name: "About Us", path: "/about-us" },
       
        {
          name: "Github",
          path: "https://github.com/ad-shekhar/volunteer_management_platform_hacktahon",
        }
      ],
    },
    // {
    //   name: "Other resources",
    //   items: [
    //     {
    //       name: "MIT License",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/LICENSE.md?ref=mtk",
    //     },
    //     {
    //       name: "Contribute",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CONTRIBUTING.md?ref=mtk",
    //     },
    //     {
    //       name: "Change Log",
    //       path: "https://github.com/creativetimofficial/material-tailwind/blob/main/CHANGELOG.md?ref=mtk",
    //     },
    //     {
    //       name: "Contact Us",
    //       path: "https://creative-tim.com/contact-us?ref=mtk",
    //     },
    //   ],
    // },
  ],
  copyright: (
    <>
      Copyright © {year} Volunteer Platform
      
      .
    </>
  ),
};

Footer.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  socials: PropTypes.arrayOf(PropTypes.object),
  menus: PropTypes.arrayOf(PropTypes.object),
  copyright: PropTypes.node,
};

Footer.displayName = "/src/widgets/layout/footer.jsx";

export default Footer;
