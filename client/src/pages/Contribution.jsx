import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const Contribute = () => {

  const navigate=useNavigate();

  const [data,setData] = useState({
    name:'',
    collegeName:'',
    company:'',
    jobTitle:'',
    resumeScreening:'',
    round1Name:'',
    round1:'',
    round2Name:'',
    round2:'',
    round3Name:'',
    round3:'',
    round4Name:'',
    round4:'',
    round5Name:'',
    round5:''
  });

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value});
    console.log({...data,[e.target.name]:e.target.value});
  }

  const handleClick=async(e)=>{
    e.preventDefault();
    const {name,collegeName,company,jobTitle,resumeScreening,round1Name,round1,round2Name,round2,round3Name,round3,round4Name,round4,round5Name,round5}=data;

    const res=await fetch('/contribute',{
        method:"POST",
        headers:{
            "Content-Type":'application/json'
        },
        body:JSON.stringify({
          name,collegeName,company,jobTitle,resumeScreening,round1Name,round1,round2Name,round2,round3Name,round3,round4Name,round4,round5Name,round5
        })
    })
    const responseData=await res.json();
    if(!responseData){
        window.alert("Invalid submission");
        console.log("invalid submission");
    }else{
        window.alert("Successfull submission");
        console.log('successfull submission');
        setData('')
        navigate('/');
    }
}

  return (


<section class=" py-1 bg-blueGray-50">
<div class="w-full lg:w-8/12 px-4 mx-auto mt-6">
  <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">
          My Review
        </h6>
        
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <form>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          User Information
        </h6>
        <div class="flex flex-wrap">
          
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Name
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='name' onChange={handleChange} />
            </div>
          </div>
          <div class="w-full lg:w-6/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                College Name
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='collegeName' onChange={handleChange}/>
            </div>
          </div>
          
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300"/>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Company Information
        </h6>
        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Company Name
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='company' onChange={handleChange} />
            </div>
          </div>
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Job Title
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='jobTitle' onChange={handleChange} />
            </div>
          </div>
        </div>

        <hr class="mt-6 border-b-1 border-blueGray-300"/>

        <div className='mt-6 border-b-1 border-blueGray-300'>
        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Was there resume screening round? 
        </h6>
        <div class="w-full lg:w-6/12 px-4">
        <div class="border-0 mb-2 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        <input type="radio" value="Yes" name="resumeScreening"  onChange={handleChange} /> Yes<br/>
        </div>
        <div class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150">
        <input type="radio"  value="No" name="resumeScreening"  onChange={handleChange} /> No<br/>
        </div>
        </div>
        
        </div>
        <hr class="mt-6 border-b-1 border-blueGray-300"/>

        <h6 class="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Interview Experience
        </h6>
          <div class="w-full lg:w-12/12 px-4">
        <div class="flex flex-wrap">
            <div class="relative w-full mb-3">


              
            <div class="w-full lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                What was round 1?
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='round1Name' onChange={handleChange}/>
            </div>
          </div>


              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Round 1
              </label>
              <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" name='round1' onChange={handleChange}> </textarea>
            </div>
          </div>
        </div>


        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
            <div class="w-full lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                What was round 2?
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='round2Name' onChange={handleChange}/>
            </div>
          </div>
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Round 2
              </label>
              <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" name='round2' onChange={handleChange}> </textarea>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
            <div class="w-full lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                What was round 3?
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='round3Name' onChange={handleChange}/>
            </div>
          </div>
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Round 3
              </label>
              <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" name='round3' onChange={handleChange}> </textarea>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
            <div class="w-full lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                What was round 4?
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='round4Name' onChange={handleChange}/>
            </div>
          </div>
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Round 4
              </label>
              <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" name='round4' onChange={handleChange}> </textarea>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap">
          <div class="w-full lg:w-12/12 px-4">
            <div class="relative w-full mb-3">
            <div class="w-full lg:w-6/12">
            <div class="relative w-full mb-3">
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                What was round 5?
              </label>
              <input type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" name='round5Name' onChange={handleChange}/>
            </div>
          </div>
              <label class="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                Round 5
              </label>
              <textarea type="text" class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" rows="4" name='round5' onChange={handleChange}> </textarea>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>

<button class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-4 float-right ease-linear transition-all duration-150" type="button" onClick={handleClick}>
          SUBMIT
        </button>
       
</div>
</section>
  )
}

export default Contribute