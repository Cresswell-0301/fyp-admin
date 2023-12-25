import { useEffect, useState } from 'react';
import LeftBar from "./leftbar"

export default function Brand() {
    const customClasses = 'bg-white';
    const Page = 'brand_page';  // Set the active page dynamically
    const [items, setItems] = useState([]);
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');

    const data = [  // declare the database data here to print the data
        { Id: 1, name1: "Apple", name2: "Phone" },
        { Id: 2, name1: "Samsung", name2: "Tablet" },
        { Id: 3, name1: "Vivo", name2: "Charger" },
        { Id: 4, name1: "Apple", name2: "Phone" },
        { Id: 5, name1: "Samsung", name2: "Tablet" },
        { Id: 6, name1: "Vivo", name2: "Charger" },
        { Id: 7, name1: "Apple", name2: "Phone" },
        { Id: 8, name1: "Samsung", name2: "Tablet" },
        { Id: 9, name1: "Vivo", name2: "Charger" },
        { Id: 10, name1: "Apple", name2: "Phone" },
        { Id: 11, name1: "Samsung", name2: "Tablet" },
        { Id: 12, name1: "Vivo", name2: "Charger" },
    ];

    useEffect(() => {
        setItems(data);
    }, []);

    // Function edit button 
    const handleEdit = (id) => {
        console.log(`Edit button clicked for item with ID: ${id}`);
    };

    // Function delete button 
    const handleDelete = (id) => {
        console.log(`Delete button clicked for item with ID: ${id}`);
        
        // If you want to update the state and remove the item from the list, you can use setItems like this:
        setItems((prevItems) => prevItems.filter((item) => item.Id !== id));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        // Validate form inputs if needed

        // Create a new item based on form inputs
        const newItem = {
            Id: items.length + 1, // You may want to use a better way to generate unique IDs
            name1: brandName,
            name2: category,
        };

        // Update the state with the new item
        setItems((prevItems) => [...prevItems, newItem]);

        // Reset form inputs
        setBrandName('');
        setCategory('');

        // Force a re-render by triggering a state change
        setItems((prevItems) => [...prevItems]);
    };

    return(
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar customClasses={customClasses} activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <div id="ContinueShow" className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <h1 className="w-full h-[50px] text-black text-[32px] font-normal font-['Poppins'] border-b-[1px] border-sky-700">Brand</h1>
                    
                    <form method="POST" onSubmit={handleFormSubmit}>
                        <div className="flex flex-row w-full h-[35px] mt-4 items-center">
                            <h2 className="w-[10%] text-xl text-right font-normal font-['Poppins']">Brand Name</h2>
                            <div className="flex flex-row pl-5 w-full h-full">
                                <input type="text" id="productName" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2" value={brandName} onChange={(e) => setBrandName(e.target.value)} required />
                            </div>
                        </div>

                        <div className="flex flex-row w-full min-h-[30px] h-auto mt-4">
                            <h2 className="w-[10%] text-xl text-right font-normal font-['Poppins']">Category</h2>
                            <div className="flex flex-row pl-5 w-[50%] h-full text-[18px] font-normal font-['Poppins']">
                                
                                <label className="min-w-[10%] w-auto cursor-pointer hover:font-semibold mr-3">
                                    <input type="radio" name="category" value="Phone" className="cursor-pointer mr-1" checked={category === "Phone"} onChange={() => setCategory("Phone")} required />Phone
                                </label>

                                <label className="min-w-[10%] w-auto cursor-pointer hover:font-semibold mr-3">
                                    <input type="radio" name="category" value="Tablet" className="cursor-pointer mr-1" checked={category === "Tablet"} onChange={() => setCategory("Tablet")} required />Tablet
                                </label>

                                <label className="min-w-[10%] w-auto cursor-pointer hover:font-semibold mr-3">
                                    <input type="radio" name="category" value="PhoneCase" className="cursor-pointer mr-1" checked={category === "PhoneCase"} onChange={() => setCategory("PhoneCase")} required />Phone Case
                                </label>

                                <label className="min-w-[10%] w-auto cursor-pointer hover:font-semibold mr-3">
                                    <input type="radio" name="category" value="Charger" className="cursor-pointer mr-1" checked={category === "Charger"} onChange={() => setCategory("Charger")} required />Charger
                                </label>

                                <label className="min-w-[10%] w-auto cursor-pointer hover:font-semibold mr-3">
                                    <input type="radio" name="category" value="Cable" className="cursor-pointer mr-1" checked={category === "Cable"} onChange={() => setCategory("Cable")} required />Cable
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex flex-row w-full h-[35px] mt-4 pl-[11%] items-center">
                            <button type="submit" className="w-[8%] h-full bg-teal-200 rounded-lg text-center text-black text-[20px] font-normal font-['Poppins'] hover:bg-teal-400 hover:text-white">Add</button>
                        </div>
                    </form>

                    <div className="pt-16 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                        <h2 className="w-1/5 text-center text-black text-[26px] font-normal font-['Poppins']">Brand</h2>
                        <h2 className="w-3/5 text-center text-black text-[26px] font-normal font-['Poppins']">Category</h2>
                        <h2 className="w-1/5 text-center text-black text-[26px] font-normal font-['Poppins']">Action</h2>
                    </div>

                    {items.map(({ Id, name1, name2 }) => (
                        <div key={Id} className="flex flex-row w-full h-[40px] border-b-[1px] border-sky-700 gap-1 items-center">
                            <h2 className="w-1/5 text-center text-black text-[20px] font-normal font-['Poppins']">{name1}</h2>
                            
                            <h2 className="w-3/5 text-center text-black text-[20px] font-normal font-['Poppins']">{name2}</h2>
                            
                            <div className="w-1/5 flex flex-row justify-center gap-9">
                                <button className="w-[25px] h-fit edit-btn" id={`edit-btn-${Id}`} title="Edit" onClick={() => handleEdit(Id)}>
                                    <img src="Edit_Icon_Green.png" alt="Edit Icon" />
                                </button>

                                <button className="w-[30px] h-fit pl-[5px] delete-btn" id={`delete-btn-${Id}`} title="Delete" onClick={() => handleDelete(Id)}>
                                    <img src="Delete.png" alt="Delete Icon" />
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
                                
            </div>
        </div>
    )
}