import React from 'react'
import Assets from '../Assets'

const Info = ({ holdersCount, currentLiquidity, lpHolders, buyTax, sellTax, transferTax , pairs}) => {
    return (
        <div className="text-[8px] lg:text-sm space-y-1 lg:space-y-4">
            <div className=" flex justify-between">
                <div className="">
                    <p>Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Exclamatory} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-xs'>
                            {holdersCount}
                            </p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p>Current Liquidity</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-xs'>${currentLiquidity}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p>LP Holders</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-md'>{lpHolders}</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-2 lg:mx-5 lg:self-stretch"></div>
                <div className="">
                    <p>Trading Pairs</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Caution} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-md'>{pairs}</p>
                    </div>
                </div>
            </div>

            <div className=" flex justify-center">
                <div className="">
                    <p>Buy Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-md'>{buyTax}%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-5 lg:mx-10 self-stretch"></div>
                <div className="">
                    <p>Sell Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-md'>{sellTax}%</p>
                    </div>
                </div>
                <div className="border-l-2 border-white/10 mx-5 lg:mx-10 self-stretch"></div>
                <div className="">
                    <p>Transfer Tax</p>
                    <div className=" flex justify-center gap-1 items-center">
                        <img className='h-2 lg:h-4' src={Assets.Shield} alt="" />
                        <p className=' font-semibold text-[10px] lg:text-md'>{transferTax}%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info