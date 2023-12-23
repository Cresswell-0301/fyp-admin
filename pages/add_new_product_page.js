import React, {useRef , useState , useEffect} from 'react';
import LeftBar from "./leftbar";

const colorNames = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'black'
];

export default function NewProduct() {
    const customClasses = 'bg-white';
    const activePage = 'add_new_product_page'; // Set the active page dynamically
    
    const YesInputRef = useRef(null);
    const NoInputRef = useRef(null);

    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const loadFile = (event) => {
        if (event.target.files.length > 0) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setImage(imageUrl);
        }
    };

    function handleButtonClick(choice) {
        // Reset styles for both buttons
        const Yes = document.getElementById("yes-btn");
        const No = document.getElementById("no-btn");
        const Green = "#8fe88d";    // Green Color
        const Red = "#f17a7a";  // Red Color

        if (choice === 'yes') {

            Yes.style.backgroundColor = Green;
            Yes.style.borderColor = Green;

            No.style.backgroundColor = "";
            No.style.borderColor = "";

            No.removeAttribute('disabled');
        } else if (choice === 'no') {
            No.style.backgroundColor = Red;
            No.style.borderColor = Red;

            Yes.style.backgroundColor = "";
            Yes.style.borderColor = "";

            Yes.removeAttribute('disabled');
        }
    }

    const [inputValue, setInputValue] = useState('');
    const [selectedColors, setSelectedColors] = useState([]);

    const [brandValue, setBrandValue] = useState('');
    const [categoryValue, setCategoryValue] = useState('');

    const [chk , setchk] = useState('');
    const [isValidInput, setIsValidInput] = useState(true);

    const [wght , setwght] = useState('');
    const [wghtValid, setwghtValid] = useState(true);

    const checkInput = (event) => {
        const value = event.target.value;
        setchk(value);

        // Check if the input matches the pattern
        const isValid = /^\d+(\.\d{1,2})?$/.test(value);
        setIsValidInput(isValid);
    };

    const checkWghtInput = (event) => {
        const value = event.target.value;
        setwght(value);

        // Check if the input matches the pattern
        const wghtValid = /^\d+(\.\d{1,2})?$/.test(value);
        setwghtValid(wghtValid);
    };
    
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };

    const handleBrandChange = (event) => {
        setBrandValue(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategoryValue(event.target.value);
    };

    useEffect(() => {
        const extractColors = (input, colorNames) => {
            const extractedColors = [];

            colorNames.forEach(color => {
                const regex = new RegExp(`\\b${color}\\b`, 'gi');
                const matches = input.match(regex);

                if (matches) {
                    extractedColors.push(...matches);
                }
            });

            return extractedColors;
        };

        const extractedColors = extractColors(inputValue, colorNames);
        setSelectedColors(extractedColors);
    }, [inputValue]);

    
    function showInputColorMss() {
        const mss = document.getElementById("colormss");

        alert("Pls input the color first !!");

        setTimeout(function() {
            mss.style.display = "flex";
            
            setTimeout(function() {
                mss.style.display = "none";
                
                setTimeout(function() {
                    mss.style.display = "flex";
                    
                    setTimeout(function() {
                        mss.style.display = "none";
                        
                        setTimeout(function() {
                            mss.style.display = "flex";
                            
                        }, 500);
        
                    }, 500);

                }, 500);

            }, 500);

        }, 500);

    }
    
    return (
        <div className="bg-white w-[100%] flex flex-row">
            <LeftBar customClasses={customClasses} activePage={activePage} />

            <div className="text-black w-full h-full p-8 bg-white">
                <form action="add_new_product_page" method="POST" className="w-[78%] h-auto flex flex-col p-5 ml-[21%] bg-gray-50 rounded-[10px] border border-zinc-600">
                    <div className="flex flex-row w-full h-[50px] border-b-[1px] border-sky-700 pb-2">
                        <h1 className="w-[92%] h-full text-black text-[32px] font-normal font-['Poppins']">Add New Product</h1>
                        <button type="submit" className="w-[8%] h-full bg-teal-200 rounded-lg text-center text-black text-[28px] font-normal font-['Poppins'] hover:bg-teal-400 hover:border-[0.5px] hover:border-black">Add</button>
                    </div>

                    <div className="w-full h-full flex flex-col pt-3">
                        <div className="flex flex-row w-full h-[20%]">
                            <div image={image} className="w-[11%] h-[130px] rounded-xl bg-gray-300" 
                            style={{ backgroundImage: image ? `url(${image})` : 'none', 
                            backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

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
                                
                                <input type="file" id="file" ref={fileInputRef} className="hidden" onChange={loadFile} />
                                <label htmlFor="file" className="bg-teal-200 rounded-[10px] w-[12%] h-full cursor-pointer text-center text-black text-[20px] font-normal font-['Poppins'] hover:bg-teal-400" onClick={handleClick}>Image Select</label>

                            </div>
                        </div>

                        <div className="flex flex-col w-full h-auto pt-5">
                            {/* Tag Start */}
                            <div className="flex flex-row w-full h-[30px] ">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Tag</h2>

                                <div className="flex flex-row pl-5 w-[89%] gap-3">
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
                                    <input type="text" id="productName" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2" required />
                                </div>
                            </div>
                            {/* Product Name End */}

                            {/* Brand Start */}
                            <div className="flex flex-row w-full h-[30px] mt-5">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Brand</h2>

                                <div className="flex flex-row pl-5 w-[89%]">
                                    <select
                                        id="brand"
                                        name="brand"
                                        className="w-[15%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg"
                                        value={brandValue}
                                        onChange={handleBrandChange}
                                        required
                                    >
                                        <option value="" disabled hidden>Select Brand</option>
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
                                    <select
                                        id="category"
                                        name="category"
                                        className="w-[15%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg"
                                        value={categoryValue}
                                        onChange={handleCategoryChange}
                                        required
                                    >
                                        <option value="" disabled hidden>Select Category</option>
                                        <option value="Mobile">Mobile</option>
                                        <option value="Tablet">Tablet</option>
                                        <option value="PhoneCase">Phone Case</option>
                                        <option value="Charger">Charger</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            {/* Category End */}

                            {/* Spec Start */}
                            <div className="flex flex-row w-full h-fit mt-5">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Spec</h2>

                                <div className="flex flex-col pl-5 w-[89%] h-fit">
                                    
                                    {/* Processor Start */}
                                    <div className="flex flex-row pl-5 w-[89%] h-[30px]">
                                        <select id="processorSpec" name="processorSpec" className="w-[15%] h-full text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                            <option value="Processor">Processor</option>
                                            <option value="#">#</option>
                                        </select>
                                        
                                        <div className='w-[85%] h-[30px] pl-3'>
                                            <input type="text" id="processorInput" className="w-[20%] h-full border-[1px] border-black rounded-lg pl-2 pr-2" required />
                                        </div>
                                    </div>
                                    {/* Processor End */}

                                    {/* Weight Start */}
                                    <div className="flex flex-row pl-5 mt-3 w-[89%] h-[30px]">
                                        <select id="weightSpec" name="weightSpec" className="w-[15%] h-[30px] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                            <option value="Weight">Weight</option>
                                            <option value="#">#</option>
                                        </select>
                                        
                                        <div className='w-[85%] h-[30px] pl-3 flex flex-row'>
                                            <input input type="text" pattern="^\d+(\.\d{1,2})?$" value={wght} id="weightInput" className="w-[15%] h-full text-center border-[1px] border-black rounded-lg pl-2 pr-2 appearance-textfield [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" min={0} onChange={checkWghtInput} required />
                                            
                                            <div className="w-[10%] h-full pl-3">
                                                <select id="weight" name="weight" className="w-full h-full text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                                    <option value="kg" selected>Kg</option>
                                                    <option value="g">g</option>
                                                </select>
                                            </div>

                                            {!wghtValid && (
                                                <p className="pl-3 text-red-500 font-semibold">Invalid input. Please enter a valid decimal number.(decimal.00)</p>
                                            )}
                                        </div>
                                    </div>
                                    {/* Weight End */}

                                    {/* NFC Start */}
                                    <div className="flex flex-row pl-5 mt-3 w-[89%] h-[30px]">
                                        <select id="nfcSpec" name="nfcSpec" className="w-[15%] h-[30px] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                            <option value="NFC" selected>NFC</option>
                                            <option value="#">#</option>
                                        </select>
                                        
                                        <div className='w-[85%] h-[30px] pl-3 flex gap-2 text-center'>

                                            {/* Yes Btn */}
                                            <input type="button" name="nfcOption" ref={YesInputRef} required />
                                            <button type='button' id='yes-btn' className="w-[6%] h-[30px] border-[1px] border-black rounded-lg font-semibold hover:bg-gray-300 hover:border-gray-300 cursor-pointer" title="Yes" onClick={() => handleButtonClick('yes')}>Yes</button>
                                            {/* No Btn */}
                                            <input type="button" name="nfcOption" ref={NoInputRef} required/>
                                            <button type='button' id='no-btn' className="w-[6%] h-[30px] border-[1px] border-black rounded-lg font-semibold hover:bg-gray-300 hover:border-gray-300 cursor-pointer" title="No" onClick={() => handleButtonClick('no')}>No</button>

                                        </div>
                                    </div>


                                    {/* NFC End */}

                                    {/* Display Start */}
                                    <div className="flex flex-row pl-5 mt-3 w-[89%] h-[80px]">
                                        <select id="display" name="display" className="w-[15%] h-[30px] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                            <option value="Display">Display</option>
                                            <option value="#">#</option>
                                        </select>
                                        
                                        <div className='w-[85%] h-[80px] pl-3'>
                                            <textarea id='displayTextarea' className="w-[25%] h-full border-[1px] border-black rounded-lg resize-none p-2 overflow-auto" required />
                                        </div>
                                    </div>
                                    {/* Display End */}

                                    {/* Color Start */}
                                    <div className="flex flex-row pl-5 mt-3 w-[89%] h-[80px]">
                                        <select id="color" name="color" className="w-[15%] h-[30px] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg">
                                            <option value="Color" selected>Color</option>
                                            <option value="#">#</option>
                                        </select>
                                        
                                        <div className='w-[85%] h-[80px] pl-3 flex flex-row items-center'>
                                            <textarea value={inputValue} id="colorTextarea" onChange={handleInputChange} className="w-[25%] h-full border-[1px] border-black rounded-lg resize-none p-2 overflow-auto" required />
                                            <span className='pl-3 text-red-500 font-semibold'>!! Note !!<br/>Way to input color :<br/>color (space) color (space) color ....</span>
                                        </div>
                                    </div>
                                    {/* Color End */}

                                </div>
                            </div>
                            {/* Spec End */}

                            {/* Quantity Start */}
                            <div className="flex flex-row w-full h-fit mt-3">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Quantity</h2>

                                <div className="flex flex-col pl-5 w-[89%] h-auto">
                                    {selectedColors.length > 0 ? (    
                                        selectedColors.map((color, index) => (
                                            <div className="flex flex-row w-[89%] h-auto pl-5 gap-3 mb-3">
                                                <span
                                                key={index}
                                                className="w-[15%] h-full text-black text-xl uppercase 
                                                font-normal font-['Poppins'] border-[1px] border-black rounded-lg
                                                mb-3 flex items-center justify-center"
                                                >{color}</span>

                                                <input type="number" className="w-[15%] h-full text-center border-[1px] border-black rounded-lg pl-2 pr-2 appearance-textfield [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" min={0} required />
                                            </div>
                                        )
                                    )) : (
                                        <div className="flex flex-row w-[89%] h-[41.5px] pl-5 gap-3 mb-3">
                                            <span
                                            className="w-[15%] h-full text-black text-xl uppercase 
                                            font-normal font-['Poppins'] border-[1px] border-black rounded-lg
                                            mb-3 flex items-center justify-center"
                                            onClick={showInputColorMss}
                                            ></span>

                                            <span className="w-[15%] h-full text-center border-[1px]
                                            border-black rounded-lg pl-2 pr-2 appearance-textfield 
                                            [&::-webkit-outer-spin-button]:appearance-none 
                                            [&::-webkit-inner-spin-button]:appearance-none"
                                            onClick={showInputColorMss}
                                            ></span>

                                            <span id='colormss' className='h-full items-center text-l text-red-500 font-bold hidden'>** Pls input the color first !!</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Quantity End */}
                            
                            {/* Pin Start */}
                            <div className="flex flex-row w-full h-[30px] ">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Pin to top ?</h2>

                                <div className="flex flex-row pl-10 w-[89%]">

                                    <label className="radio w-[8%] flex justify-center items-center gap-2 cursor-pointer hover:font-semibold" htmlFor="pinOnTopYesInput">
                                        <input
                                            type="radio"
                                            id="pinOnTopYesInput"
                                            name="Pin"
                                            className="text-black text-[28px] font-normal font-['Poppins'] rounded-none cursor-pointer"
                                        />
                                        <span>Yes</span>
                                    </label>

                                    <label className="radio w-[8%] flex justify-center items-center gap-2 cursor-pointer hover:font-semibold" htmlFor="pinOnTopNoInput">
                                        <input
                                            type="radio"
                                            id="pinOnTopNoInput"
                                            name="Pin"
                                            className="text-black text-[28px] font-normal font-['Poppins'] rounded-none cursor-pointer"
                                        />
                                        <span>No</span>
                                    </label>
                                </div>
                            </div>
                            {/* Pin End */}

                            {/* Price Start */}
                            <div className="flex flex-row w-full h-[30px] mt-3">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Product Price</h2>

                                <div className="flex flex-row pl-10 w-[89%]">

                                    <span
                                    className="w-[5%] h-full text-black text-xl uppercase 
                                    font-normal font-['Poppins'] border-[1px] border-black rounded-l-lg
                                    mb-3 flex items-center justify-center"
                                    > MYR</span>

                                    <input type="text" 
                                    pattern="^\d+(\.\d{1,2})?$"
                                    className="w-[15%] h-full text-center border-[1px]
                                    border-black rounded-r-lg pl-2 pr-2
                                    appearance-textfield [&::-webkit-outer-spin-button]:appearance-none 
                                    [&::-webkit-inner-spin-button]:appearance-none"
                                    value={chk}
                                    onChange={checkInput}

                                    min={0} required 
                                    />

                                    {!isValidInput && (
                                        <p className="pl-3 text-red-500 font-semibold">Invalid input. Please enter a valid decimal number.(decimal.00)</p>
                                    )}

                                </div>
                            </div>
                            {/* Price End */}

                            {/* Description Start */}
                            <div className="flex flex-row w-full h-[100px] mt-6">
                                <h2 className="w-[11%] text-right text-black text-xl font-normal font-['Poppins'] ">Description</h2>

                                <div className="flex flex-row pl-10 w-[89%]">
                                    <textarea id='description' className="w-[25%] h-full border-[1px] border-black rounded-lg resize-none p-2 overflow-auto" required />
                                </div>
                            </div>
                            {/* Description End */}

                        </div>
                    </div>
                </form>
                
            </div>

        </div>
    )
}