import { useState, useEffect, useRef } from 'react';
import LeftBar from "./leftbar";

let uniqueIdCounter = 0; // Initialize a counter outside the component

export default function ProductList() {
    const activePage = 'product_list_page'; // Set the active page dynamically
    
    const [availability, setAvailability] = useState('Yes');
    const [priorityClass, setPriorityClass] = useState('bg-green-400'); // Set an initial value
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');
    const [productName, setProductName] = useState(''); // Added productName state
    const [items, setItems] = useState([]);
    const [selectedItemId, setSelectedItemId] = useState(null);
    const [chk, setChk] = useState(''); // State to handle price input
    const [isValidInput, setIsValidInput] = useState(true); // State to track input validity
    const YesInputRef = useRef(null);
    const NoInputRef = useRef(null);

    const data = [  // declare the database data here to print the data
        { Id: 1, name: "Iphone 15 Pro Max", category: "Mobile", brand: "Apple", availability: "Yes", price: "RM 3499.00" },
        { Id: 2, name: "Macbook", category: "Tablet", brand: "Apple", availability: "Yes", price: "RM 5499.00" },
        { Id: 3, name: "Samsung 14 Pro", category: "Mobile", brand: "Samsung", availability: "No", price: "RM 4499.00" },
    ];            

    useEffect(() => {
        setItems(data);
    }, []);

    function handleEditClick(id) {
        const Editselection = confirm('Continue to edit ?');
        const ShowEdit = document.getElementById("myForm");

        if(Editselection){
            console.log('Editing');
            ShowEdit.style.display = "flex";

            // Find the selected item by id
            const selectedItem = data.find(item => item.Id === id);

            // Set the form fields with the selected item's data
            setProductName(selectedItem.name);
            setBrandName(selectedItem.brand);
            setCategory(selectedItem.category);
            setAvailability(selectedItem.availability);
            setChk(selectedItem.price.replace("RM ", "")); // assuming price is in the format "RM 3499.00"    
 
            // Save the selected item id for future reference
            setSelectedItemId(id);
        }
    }

    function handleDeleteClick(id) {
        const Deleteselection = confirm('Confirm to delete ?');
        
        if(Deleteselection) {
            setItems((prevItems) => prevItems.filter((item) => item.Id !== id));
        }
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }

    function handleCategoryChange(e) {
        setCategory(e.target.value);
    }

    function handleBrandChange(e) {
        setBrandName(e.target.value);
    }

    function handleButtonClick(option) {
        // Handle priority button click
        setAvailability(option);
        setPriorityClass(option === 'Yes' ? 'bg-green-400' : 'bg-red-400');
        console.log('Availability:', option, 'Priority Class:', priorityClass);
    }

    function checkInput(e) {
        // Handle price input change and check validity
        const inputValue = e.target.value;
        setChk(inputValue);

        // const regex = /^\d+(\.\d{1,2})?$/;
        const regex = /^\d+(\.\d{0,2})?$/;

        setIsValidInput(regex.test(inputValue));
    }

    function handleSubmit(e) {
        e.preventDefault();

        // After submission, you may want to update the data with the new values
        const updatedItems = items.map((item) => {
            if (item.Id === selectedItemId) {
                return {
                    ...item,
                    name: productName,
                    brand: brandName,
                    category: category,
                    availability: availability,
                    price: `RM ${chk}`,
                };
            }
            return item;
        });

        setItems(updatedItems);
        // After submission, you may want to close the form
        closeForm();
    }

    return (
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={activePage}/>

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <div id="ContinueShow" className="w-full min-h-full h-auto flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <h1 className="w-full h-[50px] text-black text-[32px] font-normal font-['Poppins'] border-b-[1px] border-sky-700">Product List</h1>

                    {/* Form Start */}
                    <form method="POST" id='myForm' className='hidden flex-col w-full h-full' onSubmit={handleSubmit}>
                        {/* Product Start */}
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[12%] text-xl text-right font-normal font-['Poppins']">Product Name</h2>
                            <div className="flex flex-row ml-5 w-[88%] h-full">
                                <input type="text" id="productName" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2 text-center font-normal" 
                                value={productName} 
                                onChange={(e) => setProductName(e.target.value)}
                                required />
                            </div>
                        </div>
                        {/* Product End */}

                        {/* Category Start */}
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[12%] text-xl text-right font-normal font-['Poppins']">Category</h2>
                            <div className="flex flex-row w-[88%] h-full text-[18px] font-normal font-['Poppins']">
                                
                                <div className="flex flex-row pl-5 w-full">
                                    <select
                                        id="category"
                                        name="category"
                                        className="w-[20%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg"
                                        value={category}
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
                        </div>
                        {/* Category End */}

                        {/* Brand Start */}
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[12%] text-xl text-right font-normal font-['Poppins']">Brand</h2>

                            <div className="flex flex-row w-[88%] h-full text-[18px] font-normal font-['Poppins']">
                                
                                <div className="flex flex-row pl-5 w-full">
                                    <select
                                        id="brand"
                                        name="brand"
                                        className="w-[20%] text-center text-black text-xl font-normal font-['Poppins'] border-[1px] border-black rounded-lg"
                                        value={brandName}
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
                        </div>
                        {/* Brand End */}

                        {/* Priority Start */}
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[12%] text-xl text-right font-normal font-['Poppins']">Priority</h2>

                            <div className="flex flex-row w-[88%] h-full text-[18px] font-normal font-['Poppins']">
                                
                                <div className="flex flex-row pl-5 w-full">
                                    <div className='w-[85%] h-[30px] pl-3 flex gap-2 text-center'>

                                        {/* Yes Btn */}
                                        <input type="button" 
                                        name="nfcOption" 
                                        ref={YesInputRef} 
                                        value="Yes"
                                        className='hidden'
                                        required />

                                        <button
                                            type='button'
                                            id='yes-btn'
                                            className={`w-[6%] h-[30px] border-[1px] border-black rounded-lg font-semibold hover:bg-gray-300 hover:border-gray-300 cursor-pointer ${availability === 'Yes' && productName !== '' ? 'bg-green-400' : 'bg-transparent'}`}
                                            title="Yes"
                                            onClick={() => handleButtonClick('Yes')}
                                        >
                                            Yes
                                        </button>

                                        {/* No Btn */}
                                        <input type="button" 
                                        name="nfcOption" 
                                        ref={NoInputRef} 
                                        value="No"
                                        className='hidden'
                                        required/>

                                        <button
                                            type='button'
                                            id='no-btn'
                                            className={`w-[6%] h-[30px] border-[1px] border-black rounded-lg font-semibold hover:bg-gray-300 hover:border-gray-300 cursor-pointer ${availability === 'No' && productName !== '' ? 'bg-red-400' : 'bg-transparent'}`}
                                            title="No"
                                            onClick={() => handleButtonClick('No')}
                                        >
                                            No
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Priority End */}

                        {/* Price Start */}
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[12%] text-xl text-right font-normal font-['Poppins']">Price</h2>

                            <div className="flex flex-row ml-5 w-[88%] h-full">

                                <span
                                className="w-[5%] h-full text-black text-xl uppercase 
                                font-normal font-['Poppins'] border-[1px] border-black rounded-l-lg
                                mb-3 flex items-center justify-center"
                                > MYR</span>

                                <input type="text" 
                                pattern="^\d+(\.\d{0,2})?$"
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
                        
                        <div className="flex flex-row w-full h-[35px] mt-4 pl-[25%] items-center">
                            <button type="submit" className="w-[8%] h-full bg-teal-200 rounded-lg text-center text-black text-[20px] font-normal font-['Poppins'] hover:bg-teal-400 hover:text-white">Update</button>
                        </div>
                    </form>
                    {/* Form End */}
                    <div className="pt-16 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                        <h2 className="w-[30%] text-center text-black text-[26px] font-normal font-['Poppins']">Name</h2>                                                
                        <h2 className="w-[12%] text-center text-black text-[26px] font-normal font-['Poppins']">Category</h2>
                        <h2 className="w-[12%] text-center text-black text-[26px] font-normal font-['Poppins']">Brand</h2>
                        <h2 className="w-[13%] text-center text-black text-[26px] font-normal font-['Poppins']">Priority</h2>
                        <h2 className="w-[18%] text-center text-black text-[26px] font-normal font-['Poppins']">Price</h2>
                        <h2 className="w-[15%] text-center text-black text-[26px] font-normal font-['Poppins']">Action</h2>
                    </div>

                    {items.map(({ Id, name, category, brand, availability, price }) => (
                        <div id="container" className="py-2 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                            <h3 className="w-[30%] text-center text-black text-[24px] font-normal font-['Poppins']">{name}</h3>
                            
                            <h3 className="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">{category}</h3>
                            
                            <h3 className="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">{brand}</h3>
                            
                            <div className="w-[13%] flex justify-center">
                                <h3 id="Priority" className={`w-1/2 text-center text-black text-[24px] font-normal font-['Poppins'] rounded-lg ${availability === 'Yes' ? 'bg-green-400' : 'bg-red-400'}`}>{availability}</h3>
                            </div>
                            
                            <h3 className="w-[18%] text-center text-black text-[24px] font-normal font-['Poppins']">{price}</h3>
                            
                            <div className="w-[15%] flex flex-row justify-center gap-9">
                                <button className="w-auto h-auto edit-btn" id={`edit-btn-${Id}`} title="Edit" onClick={() => handleEditClick(Id)}><img src="Edit_Icon_Green.png" alt="Edit Icon" /></button>
                                <button className="w-auto h-auto delete-btn" id={`delete-btn-${Id}`} title="Delete" onClick={() => handleDeleteClick(Id)}><img src="Delete.png" alt="Delete Icon" /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}