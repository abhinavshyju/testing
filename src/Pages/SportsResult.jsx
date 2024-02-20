import React from 'react';

const SportsResult = () => {
    return (
        <div>
             <div className="">

               
           <div className=" px-7 py-5">
           <div className="w-full flex justify-center items-center h-48 bg-white mb-10 shadow-xl rounded-xl bg-cover bg-center " style={{backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} >
                <h1 className='font-black text-6xl text-white'>Sports Result</h1>
            </div>
            <h1 className=' text-left ml-4 font-mono font-bold text-xl text-white'> Score Board</h1>
                <div className="w-full shadow-lg rounded-lg flex flex-col py-5 ">
               
                <div className=" w-full flex justify-between px-4 py-2 border-b-2 border-gray-600 mt-3 font-semibold indicator">
                {/* <span className="indicator-item badge badge-primary mr-2">Winner</span>  */}
                        <h1 >1</h1>
                        <h1 className='text-left' >NISHAN</h1>
                        <h1>51</h1>
                    </div>

                    <div className=" w-full flex justify-between px-4 py-2 border-b-2 border-gray-600 mt-3 font-semibold">
                        <h1 >2 </h1>
                        <h1 className='text-left' >NAGARA</h1>
                        <h1>46</h1>
                    </div>

                    <div className=" w-full flex justify-between px-4 py-2 border-b-2 border-gray-600 mt-3 font-semibold">
                        <h1 >3</h1>
                        <h1 className='text-left' >BANSURI</h1>
                        <h1>44</h1>
                    </div>

                    <div className=" w-full flex justify-between px-4 py-2 border-b-2 border-gray-600 mt-3 font-semibold">
                        <h1 >4</h1>
                        <h1 className='text-left' >DHANKUL</h1>
                        <h1>21</h1>
                    </div>
        
        
                    
                

                </div>
            </div>
</div>
        </div>
    );
}

export default SportsResult;
