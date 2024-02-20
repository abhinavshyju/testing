import React, { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';

const HomeScreen = () => {
    const [data , setdata] = useState([]);
    const [page,Setpage]= useState([]);
    const [limitStart, SetlimitStart] = useState(0);
    const [limitEnd, SetlimitEnd] = useState(9);
    useEffect(() => {
        const GetData = async ()=>{
            const respone =  await axios.get("https://script.googleusercontent.com/macros/echo?user_content_key=6GSgh6bDdoPR1cb9GQIzn6uxQvtlXC6hfBFnKmfaDQKPR_MKS_ag7wuD6O6ijvjXKZqNH6sSuIEKLDon1IFmj_g0PwniU7jJm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMJrYDxmtdOu_m2V4trV0FrLmNQVRowuQGyuxlgvnUfbwoHRLoPq7dYHbcsNLbZl32ecs0XepM1h_AC-Sl1Aa_Q6EkNTFWH3sg&lib=MEtoSape5G71MwvSDAMV700uJLH3g0HUB")
            setdata(respone.data)
        }
        GetData();
    }, []);


    const Nishan = [];
    const Nagara = [];
    const Dhankul = [];
    const Bansuri = [];
    data.map((e)=>{
        if(e.group === "Nishan"){
            Nishan.push(e)
        }
        if(e.group === "Nagara"){
            Nagara.push(e)
        } if(e.group === "Dhankul"){
            Dhankul.push(e)
        } if(e.group === "Bansuri"){
            Bansuri.push(e)
        }
    })
    const mapData = data.slice(page, 10 + page);
    const nishanScore = Nishan.reduce((total, e) => total + e.score, 0);
    const nagaraScore = Nagara.reduce((total, e) => total + e.score, 0);
    const dhankulScore = Dhankul.reduce((total, e) => total + e.score, 0);
    const bansuriScore = Bansuri.reduce((total, e) => total + e.score, 0);

    const group = [{
        name : "Nishan",
        score : nishanScore ||0
    },{
        name : "Nagara",
        score : nagaraScore || 0
    },{
        name : "Dhankul",
        score : dhankulScore || 0
    },{
        name : "Bansuri",
        score : bansuriScore || 0
    }
]
const sortedData = group.slice().sort((a, b) => a.score - b.score);
  
    return (
      
           <>
          
{
    data == null ? (
        <div className="flex justify-center  min:h-screen  ">
            <span className="loading loading-ring loading-lg h-[300px]"></span>
        </div>
    ):(
        <div className="">
           <div className=" px-7 py-5">
           <div className="w-full flex justify-center items-center h-48 bg-white mb-10 shadow-xl rounded-xl bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1523174802553-10fd69b213ec?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}} >
                <h1 className='font-black text-6xl text-white'>Arts</h1>
            </div>
            <h1 className=' text-left ml-4 font-mono font-bold text-xl text-white'> Score Board</h1>
                <div className="w-full shadow-lg rounded-lg flex flex-col py-5 ">
               {sortedData.reverse().map((e,index)=>(
                <div className=" w-full flex justify-between px-4 py-2 border-b-2 border-gray-600 mt-3 font-semibold">
                        <h1 >{index+1}</h1>
                        <h1 className='text-left' >{e.name.toUpperCase()}</h1>
                        <h1>{e.score}</h1>
                    </div>
               ))}
                    
                

                </div>
            </div>

            <div className="px-5">
            <h1 className=' text-left ml-4 font-mono font-bold text-xl text-white'>Score Table</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Item</th>
        <th>Group</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {data.reverse().slice(limitStart, limitEnd+1 )
                .map((e)=>(
        <tr>
            <td>{e.name}</td>
            <td>{e.item}</td>
            <td>{e.group}</td>
            <td>{e.score}</td>
        </tr>
      ))}
      

    </tbody>
  </table>
  
</div>
<div className="flex justify-center mt-4">
<div className="join grid grid-cols-2 w-[200px] ">
  <button className="join-item btn btn-outline" onClick={()=>{ if(limitStart == 0){

}else{
   SetlimitStart(limitStart-10) ;SetlimitEnd(limitEnd - 10)
}}}>Previous page</button>
  <button className="join-item btn btn-outline"  onClick={()=> {SetlimitStart(limitStart+10); SetlimitEnd(limitEnd + 10)}}>Next</button>
</div>
</div>
            </div>
           </div>
    )
}

</>


    );
}


export default HomeScreen;
