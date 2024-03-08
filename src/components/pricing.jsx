import { useState } from 'react'
 import redcircle from '../assets/red.svg'
 import greencircle from '../assets/green.png'

const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false)

    const packages = [
        { name: 'Start', monthlyPrice: '19', yearlyPrice: '199', description: 'Access to analytics with 3 months of historical data' , },
        { name: 'Advance', monthlyPrice: '39', yearlyPrice: '399', description: 'Planning up to 2,000 pieces of content per month.' , },
        { name: 'Premium', monthlyPrice: '59', yearlyPrice: '599', description: 'Utillize the AI assistant for generating new copy ideas.' ,},
    ]
    return (
        <div className='md:px-14 p-4 max-w-s mx-auto py-10' id='pricing'>

            <div className='text-center'>

                <h2 className='md:text-5xl last:text-3xl font-extrabold text-primary mb-2'>Here are all our plans</h2>
                <p className='text-tertiary px-4 mx-auto md:w-1/3'>A simple paragraph is comprised of three major components. The which is often a declarative sentence. </p>
               

                {/*toogle price*/}
                <div className='mt-16'>
                    <label htmlFor="toogle" className='inline-flex items-center cursor-pointer'>

                        <span className='mr-8 text-2xl font-semibold'>Monthly</span>

                        <div className='w-14 h-6 bg-gray-300 rounded-full transition duration-500 ease-in-out'>

                            <div className={`w-6 h-6 rounded-full ${isYearly ? "bg-primary ml-8" : "bg-gray-500  "} `}></div>

                        </div>
                        <span className='ml-8 text-2xl font-semibold'>Yearly</span>
                    </label>
                    <input type="checkbox" id='toogle' className='hidden' checked={isYearly} onChange={() => setIsYearly(!isYearly)} />
                </div>

              
            </div>
                      {/*Pricing cards*/}

                <div    className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-3/4 mx-auto'>
                    {
                        packages.map((pkg , index) =>(
                            <div key={index} className='border py-10  md:px-6 px-4 rounded-lg shadow-3xl'>

                            <h3 className='text-3xl font-bold text-center text-primary'>{pkg.name}</h3>  
                            <p className='text-tertiary  text-center my-5'>{pkg.description}</p>  
                            <p className='mt-5 text-center text-secondary text-4xl font-bold'>{
                                
                                isYearly? `$${pkg.yearlyPrice}` :  `$${pkg.monthlyPrice}`
                                
                                }

                                <span className='text-base text-tertiary font-medium'>/{ isYearly ? "yearly" : "monthly" }</span>
                                </p>
                                <ul className='mt-4  space-y-2 px-4'>
                                     <li className='flex gap-2 '> <img src={redcircle} alt="color green" className='w-5 h-5' /> Videos of Lessons</li>
                                     <li className='flex gap-2 '> <img src={greencircle} alt="color green" className='w-5 h-5' /> Homework check</li>
                                     <li className='flex gap-2 '> <img src={redcircle} alt="color green" className='w-5 h-5' /> Additional practical task</li>
                                     <li className='flex gap-2 '> <img src={greencircle} alt="color green" className='w-5 h-5' /> Monthly conferences </li>
                                     <li className='flex gap-2 '> <img src={redcircle} alt="color green" className='w-5 h-5' /> Personal advice from teachers</li>
                                </ul>
                                <div className='w-full mx-auto flex mt-8 items-center justify-center'>
                                    <button className='btnPrimary '>Get started</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

        </div>
    )
}

export default Pricing