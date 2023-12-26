import { useEffect, useState } from 'react';
import LeftBar from "./leftbar"

export default function Category() {
    const Page = 'category_page';
    
    const [items, setItems] = useState([]);
    const [brandName, setBrandName] = useState('');
    const [category, setCategory] = useState('');
    const [editing, setEditing] = useState(false);
    const [editItemId, setEditItemId] = useState(null);

    const data = [  // declare the database data here to print the data
        { Id: 1, name1: "Phone", name2: "Processor, OS, Weight,Dimensions, SIM, Size, Display, Memory,NFC,Battery,Charging, In Box,Camera,Color" },
        { Id: 2, name1: "Power Bank", name2: "Capacity,Size, Weight,Shape,Port,Wireless,Fast Charge,In Box" },
        { Id: 3, name1: "Phone Case", name2: "Phone Model, Material, Hardness, Color" },
        { Id: 4, name1: "Earphone", name2: "Connection Type,Type,Audio Compatibility,Active Noise-Cancellation,Sensitivity,Function,In Box" },
        { Id: 5, name1: "Cable", name2: "Input,Output, (? to ?),Material, Length,Colour, Packing Accessories,Features,Support, Current Output" },
        { Id: 6, name1: "Wireless Earphone", name2: "Connection Type,Type,Audio Compatibility,Active Noise-Cancellation,Sensitivity,Wireless Type,Function,Color,In Box" }
    ];

    useEffect(() => {
        setItems(data);
    }, []);

    // Function edit button 
    const handleEdit = (id) => {
        console.log(`Edit button clicked for item with ID: ${id}`);

        // Find the item with the specified ID
        const selectedItem = items.find(item => item.Id === id);

        // Set the form inputs with the selected item's values
        setBrandName(selectedItem.name1);
        setCategory(selectedItem.name2);

        // Set editing mode and the ID of the item being edited
        setEditing(true);
        setEditItemId(id);
    };

    // Function delete button 
    const handleDelete = (id) => {
        console.log(`Delete button clicked for item with ID: ${id}`);
        
        // If you want to update the state and remove the item from the list, you can use setItems like this:
        setItems((prevItems) => prevItems.filter((item) => item.Id !== id));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (editing) {
            // If in editing mode, update the existing item
            setItems(prevItems => 
                prevItems.map(item =>
                    item.Id === editItemId ? { ...item, name1: brandName, name2: category } : item
                )
            );

            // Reset the form and exit editing mode
            setBrandName('');
            setCategory('');
            setEditing(false);
            setEditItemId(null);
        } else {
            // Create a new item based on form inputs
            const newItem = {
                Id: items.length + 1,
                name1: brandName,
                name2: category,
            };

            // Update the state with the new item
            setItems((prevItems) => [...prevItems, newItem]);

            // Reset form inputs
            setBrandName('');
            setCategory('');
        }
    };

    return(
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <div id="ContinueShow" className="w-full min-h-full h-auto flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <div className='w-full h-[50px] flex flex-row border-b-[1px] border-sky-700'>
                        <h1 className="w-full h-full text-black text-[32px] font-normal font-['Poppins']">Category List</h1>

                        <button className="w-10 h-10 bg-green-400 rounded-[10px] flex items-center justify-center hover:border-[0.75px] hover:border-black" onClick={() => { location.href = 'add_category_page'; }}>
                            <img class="w-[85%] h-[85%]" src="plus_icon.png" alt='Add Icon Error'/>
                        </button>
                    </div>
                    
                    <div className="pt-16 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                        <h2 className="w-1/5 text-center text-black text-[26px] font-normal font-['Poppins']">Category</h2>
                        <h2 className="w-3/5 text-center text-black text-[26px] font-normal font-['Poppins']">Spec Requirement</h2>
                        <h2 className="w-1/5 text-center text-black text-[26px] font-normal font-['Poppins']">Action</h2>
                    </div>

                    {items.map(({ Id, name1, name2 }) => (
                        <div key={Id} className="flex flex-row w-full min-h-[40px] h-auto border-b-[1px] border-sky-700 gap-1 items-center">
                            <h2 className="w-1/5 text-right pr-16 text-black text-[20px] font-semibold font-['Poppins']">{name1}</h2>
                            
                            <h2 className="w-3/5 text-center text-black text-[18px] font-[200] font-['Poppins']">{name2}</h2>
                                
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