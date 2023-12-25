import React, { useState } from 'react';
import LeftBar from "./leftbar"

export default function AddCategory() {
    const Page = 'add_category_page';

    const [inputCount, setInputCount] = useState(1);

    const createNewInput = () => {
        setInputCount(prevCount => prevCount + 1);
    };

    const deleteInput = () => {
        if (inputCount > 1) {
            setInputCount(prevCount => prevCount - 1);
        }
    };

    return(
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <form method='POST' className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <div className='w-full h-[50px] flex flex-row border-b-[1px] border-sky-700 pb-2'>
                        <h1 className="w-full h-full text-black text-[32px] font-normal font-['Poppins']">Add Category</h1>

                        <button type="submit" className="w-[8%] h-full bg-teal-200 rounded-lg text-center text-black text-[20px] font-normal font-['Poppins'] hover:bg-teal-400 hover:text-white">Save</button>
                    </div>

                    <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                        <h2 className="w-[15%] text-xl text-right font-normal font-['Poppins']">Category Name</h2>
                        <div className="flex flex-row pl-5 w-[85%] h-full">
                            <input type="text" id="categoryName" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2" required />
                        </div>
                    </div>

                    <div id="inputCon" className="flex flex-row w-full min-h-[35px] h-auto mt-4">
                        <h2 className="w-[15%] text-xl text-right font-normal font-['Poppins']">Spec Requirement</h2>
                        
                        <div className='flex flex-col w-[85%]'>

                            {[...Array(inputCount)].map((_, index) => (
                                <div className="flex flex-row pl-5 w-full h-[30px] mb-3">
                                    <input type="text" key={index} className="w-[15%] border-[1px] border-black rounded-lg pl-2 pr-2" required />
                                    <input type="text" key={index} className="ml-5 w-[15%] border-[1px] border-black rounded-lg pl-2 pr-2" required />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-row w-full h-10 mt-3 gap-20'>
                        <button className="ml-[208px] w-10 h-10 bg-green-400 rounded-[10px] flex items-center justify-center hover:border-[0.75px] hover:border-black" title='Add Row' onClick={() => createNewInput()}>
                            <img class="w-[85%] h-[85%]" src="plus_icon.png" alt='Add Icon Error'/>
                        </button>

                        <button className="w-10 h-10 bg-red-400 rounded-[10px] flex items-center justify-center hover:border-[0.75px] hover:border-black" title='Delete Row' onClick={() => deleteInput()}>
                            <img class="w-[85%] h-[100%]" src="minus_icon.png" alt='Delete Icon Error'/>
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}