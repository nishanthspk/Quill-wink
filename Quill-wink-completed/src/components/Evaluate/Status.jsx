import React from 'react';
import Assets from '../Assets';



const Status = ({ totalScore, tokenAge, honeypotStatus ,owner}) => {
  const handleCopy = () => {
    if (owner) {
      navigator.clipboard.writeText(owner).then(() => {
        // alert('Address copied to clipboard!'); // Optional: you can show a message
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    }
  
  }
  return (
    <div>
      <div className="flex gap-1 lg:gap-4 text-[8px] lg:text-sm">
        <div className="space-y-2 lg:space-y-3">
          <div className="">
            <p className='text-[#DDDDDD]'>Last Known Status:</p>
            <div className="bg-[#FFFFFF]/10 h-6 lg:h-10 w-16 lg:w-fit rounded-[8px] p-[1px] lg:p-[10px] flex items-center gap-1 lg:gap-2">
              <img className=' h-4 lg:h-6' src={Assets.Token} alt="" />
              <p className=''>{honeypotStatus}</p>
            </div>
          </div>
          <div className="w-fit">
            <p className='text-[#DDDDDD]'>Token Age:</p>
            <p className='text-center'>{tokenAge} Years</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="w-fit">
            <p className='text-[#DDDDDD]'>Overall Score:</p>
            <div className="bg-[#B40D00] h-5 lg:h-10 w-full rounded-[8px] flex justify-center items-center lg:mx-auto">
              <p className='text-base font-semibold'>{totalScore}%</p>
            </div>
          </div>
          <div className="w-fit cursor-pointer" onClick={handleCopy}>
            <p className='text-[#DDDDDD] ' >Ownership:</p>
            {/* {owner.slice(0,5)} */}
            { owner !== '' && owner.slice(0,5)}    { owner !== '' && "..."}     { owner !== '' && owner.slice(-5)} 
         {owner === '' &&    <img className='h-3 lg:h-4 mx-auto' src={Assets.X} alt="X" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
