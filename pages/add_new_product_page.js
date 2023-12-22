import React, {useRef , useState} from 'react';

import LeftBar from "./leftbar";

export default function NewProduct() {
    const customClasses = 'bg-white';
    const activePage = 'add_new_product_page'; // Set the active page dynamically
    
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const [image, setImage] = useState(null);

    const loadFile = (event) => {

        if (event.target.files.length > 0) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <div className="bg-white w-screen h-screen flex flex-row">
            <LeftBar customClasses={customClasses} activePage={activePage} />

            <div className="text-black absolute inset-y-0 right-0 w-4/5 p-8 ">
                <form action="#" method="POST" className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600 overflow-y-auto">
                    <div className="flex flex-row w-full h-[50px] border-b-[1px] border-sky-700 pb-2">
                        <h1 className="w-[92%] h-full text-black text-[32px] font-normal font-['Poppins']">Add New Product</h1>
                        <button type="submit" className="w-[8%] h-full bg-teal-200 rounded-lg text-center text-black text-[28px] font-normal font-['Poppins'] hover:bg-teal-400 hover:border-[0.5px] hover:border-black">Add</button>
                    </div>

                    <div className="w-full h-full flex flex-col pt-3">
                        <div className="flex flex-row w-full h-[20%]">
                            <div image={image} className="w-[11%] h-full rounded-xl bg-gray-300" style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            
                            <div className="w-[89%] h-full pl-5 flex flex-col">
                                <div className="flex flex-col text-gray-500 text-xl font-normal font-['Poppins'] pb-2">
                                    <div className="flex flex-row w-full">
                                        <span className="w-[18%]">Acceptable file formats</span>
                                        <span className="w-[82%]">: PNG, JPG, JPEG</span>
                                    </div>

                                    <div className="flex flex-row w-full">
                                        <span className="w-[18%]">Recommended Size</span>
                                        <span className="w-[82%]">: 300px x 290px</span>
                                    </div>

                                    <span>Image size cannot be larger than 2MB</span>
                                </div>
                                
                                <input type="file" ref={fileInputRef} className="hidden" onChange={loadFile} />
                                <label htmlFor="file" className="pt-1 bg-teal-200 rounded-[10px] w-[12%] h-full cursor-pointer text-center text-black text-[20px] font-normal font-['Poppins']" onClick={handleClick}>Image Select</label>
                            </div>
                        </div>

                        <div className="flex flex-col w-full h-auto pt-5">
                            {/* Tag Start */}
                            <div className="flex flex-row w-full h-[30px] ">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Tag</h2>

                                <div className="flex flex-row pl-5 w-[89%]">
                                    <label className="w-[10%] flex items-center gap-2 cursor-pointer hover:font-semibold group" title="New Arrival">
                                        <input type="radio" name="tag" value="NewArrival" className="cursor-pointer" required/>New Arrival
                                    </label>

                                    <label className="w-[10%] flex items-center gap-2 cursor-pointer hover:font-semibold group" title="Promotion">
                                        <input type="radio" name="tag" value="Promotion" className="cursor-pointer" required/>Promotion
                                    </label>

                                    <label className="w-[10%] flex items-center gap-2 cursor-pointer hover:font-semibold group" title="Last Stock">
                                        <input type="radio" name="tag" value="LastStock" className="cursor-pointer" required/>Last Stock
                                    </label>

                                    <label className="w-[10%] flex items-center gap-2 cursor-pointer hover:font-semibold group" title="Hot Deals">
                                        <input type="radio" name="tag" value="HotDeals" className="cursor-pointer" required/>Hot Deals
                                    </label>

                                    <label className="w-[10%] flex items-center gap-2 cursor-pointer hover:font-semibold group" title="No">
                                        <input type="radio" name="tag" value="No" className="cursor-pointer" required/>No
                                    </label>
                                </div>
                            </div>
                            {/* Tag End */}

                            {/* Product Name Start */}
                            <div className="flex flex-row w-full h-[30px] mt-5">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Product Name</h2>

                                <div className="flex flex-row pl-5 w-[89%]">
                                    <input type="text" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2" required />
                                </div>
                            </div>
                            {/* Product Name End */}

                            {/* Brand Start */}
                            <div className="flex flex-row w-full h-[30px] mt-5">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Brand</h2>

                                <div className="flex flex-row pl-5 w-[89%]">
                                    <select id="brand" name="brand" className="w-[15%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg" required>
                                        <option value="" selected disabled className="hidden"></option>
                                        <option value="Apple">Apple</option>
                                        <option value="Samsung">Samsung</option>
                                        <option value="Huawei">Huawei</option>
                                        <option value="Vivo">Vivo</option>
                                        <option value="XiaoMi">XiaoMi</option>
                                        <option value="Realme">Realme</option>
                                        <option value="Poco">Poco</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            {/* Brand End */}

                            {/* Category Start */}
                            <div className="flex flex-row w-full h-[30px] mt-5">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Category</h2>

                                <div className="flex flex-row pl-5 w-[89%]">
                                    <select id="category" name="category" className="w-[15%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                        <option value="" selected disabled className="hidden"></option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Tablet">Tablet</option>
                                        <option value="PhoneCase">Phone Case</option>
                                        <option value="Charger">Charger</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            {/* Category End */}

                        </div>
                    </div>
                </form>
                
            </div>

        </div>
    )
}