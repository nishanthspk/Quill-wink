import React, { useState } from 'react';
import Assets from './Assets';

const SelectToken = ({ onCheckClick, setSelectedToken, setTokenAddress, setChainId, empty, setempty , buttonclick , setButtonclick }) => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const tokenChainMap = {
    ETH: 1,
    BSC: 56,
    Polygon: 137,
    Base: 8453,
  };

  const handleButtonClick = (buttonIndex, token) => {
    setSelectedButton(buttonIndex);
    setSelectedToken(token);
    setChainId(tokenChainMap[token]); // Set the chainId based on the selected token
    setButtonclick(false)
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setTokenAddress(e.target.value); // Update token address
    setempty(false)
  };



  return (
    <div
      className="bg-[#18162099]/60 rounded-[10px] backdrop-filter backdrop-blur-sm w-[250px] lg:w-[460px] mx-auto p-[20px] lg:p-[30px] jost"
      style={{ boxShadow: '4px 4px 12px rgba(0, 0, 0, 0.5)' }}
    >
      <p className="text-white  lg:text-[20px] text-center lg:text-center">Evaluate Any Token</p>
      <div className="lg:mt-6 mt-4 space-y-2 lg:space-y-4">
        <div className="flex justify-center space-x-2 lg:space-x-6">
          {['ETH', 'BSC', 'Polygon', 'Base'].map((token, index) => (
            <button
              key={token}
              className={`px-3 py-1 lg:px-4 lg:py-2 rounded-md flex items-center text-[9px] lg:text-sm gap-1 lg:gap-2 ${
                selectedButton === index + 1
                  ? 'bg-black text-white font-normal border border-black'
                  : 'border border-white text-white opacity-60 font-light hover:bg-black hover:opacity-100 hover:border-black'
              }`}
              onClick={() => handleButtonClick(index + 1, token)}
            >
              <img className="h-2 lg:h-4" src={Assets[token]} alt={token} /> {token}
            </button>
          ))}
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-white w-full lg:w-full lg:h-12 rounded-[5px]  text-black lg:p-4"
          placeholder="Enter token address"
        />
        {empty && <div className='flex justify-center items-center text-red-500 '> Enter Valid Token address </div>}
        {buttonclick && <div className='flex justify-center items-center text-red-500 '> Select the chain </div>}
        <div className="flex justify-end rounded-[20px]">
          <button
            onClick={    onCheckClick}
            className="bg-[#007AFF] hover:bg-[#007AFF]/70 rounded-[5px] text-white px-2 lg:p-2 lg:px-6 ml-auto lg:text-xl border-y border-y-[#86AFFF]"
          >
            Check
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectToken;
