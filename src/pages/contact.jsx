import {AnimatePresence, motion} from "motion/react"
import { useState } from "react";

const Contact = () => {

  const [clicked,setClicked] = useState(false);

  return (
    <div className="mt-100 gap-20">
      
      <AnimatePresence>
      {clicked && (
          <motion.div
          className="mt-100 mb-10 cursor-pointer w-20 h-20 bg-blue-500"
          // initial={{
          //   x:0
          // }}
            animate={{
              x: 300 ,
            }} 

            transition={{
              delay:0.5,
            
            }}

            exit={{
             x:0,
            }}
          >  
          </motion.div>
      )}
      </AnimatePresence>

       <button onClick={()=>setClicked(!clicked)} className="bg-amber-600 text-white mb-7">click</button>

{/* guestures */}
      <motion.div
            // whileHover={{
            //   rotate:30,
            // }}

             dragConstraints={{
            top:400,
            bottom:400,
            right:400,
            left:400,
           }}
           drag={true}
            whileDrag={{
              rotate:45,
            }}
           
          
            className="mt-100 mb-10 cursor-pointer w-20 h-20 bg-blue-500">
      </motion.div>


          {/* lessons */}

          <div className="mt-15 gap-4 mb-15 p-10 flex flex-col justify-center text-white ">
            <div className="flex gap-4">
              <motion.p
              whileTap={{
                rotate:45,
                left:25,
                right:25,
              }}
              className="w-60 h-5 p-10 bg-amber-600">shachini</motion.p>
              <motion.p
              whileTap={{
                rotate:-45,
                left:25,
                right:25,
              }}
              className="w-60 h-5 p-10 bg-amber-600">shachini</motion.p>
             
            </div>

             <div className=" flex  gap-4">
              <motion.p
              whileTap={{
                rotate:-45,
                left:25,
                right:25,
              }}
              className="w-60 h-5 p-10 bg-amber-600">shachini</motion.p>
              <motion.p
              whileTap={{
                rotate:45,
                left:25,
                right:25,
              }}
              className="w-60 h-5 p-10 bg-amber-600">shachini</motion.p>
            </div>

          </div>

    </div>
  );
};

export default Contact;
