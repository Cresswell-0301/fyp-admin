import { useState, useEffect } from 'react';
import LeftBar from "./leftbar";

let uniqueIdCounter = 0; // Initialize a counter outside the component

export default function ProductList() {
    const customClasses = 'bg-white';
    const activePage = 'product_list_page'; // Set the active page dynamically
    
    const availability = useState('Yes');
    const [priorityClass, setPriorityClass] = useState('bg-green-400'); // Set an initial value

    useEffect(() => {
        // Set the priority class based on the availability
        setPriorityClass(availability === 'Yes' ? 'bg-green-400' : 'bg-red-400');
    }, [availability]);

    useEffect(() => {
        const productCardHTML = createProductCart(
          'Iphone 15 Pro Max',
          'Phone',
          'Apple',
          'Yes',
          'RM 3499.00'
        );

        const container = document.getElementById('ContinueShow');
        container.innerHTML += productCardHTML;

        const editButton = document.getElementById(`edit-btn-${uniqueIdCounter}`);
        const deleteButton = document.getElementById(`delete-btn-${uniqueIdCounter}`);

        if (editButton) {
            editButton.addEventListener('click', handleEditClick);
        }

        if (deleteButton) {
            deleteButton.addEventListener('click', () => handleDeleteClick(productCardContainer));
        }

        return () => {
            // Remove event listeners when component unmounts
            if (editButton) {
                editButton.removeEventListener('click', handleEditClick);
            }
        
            if (deleteButton) {
                deleteButton.removeEventListener('click', () => handleDeleteClick(productCardContainer));
            }
        };
    }, [handleEditClick, handleDeleteClick]);

    // Function to generate a unique ID
    function generateUniqueId() {
        return (uniqueIdCounter += 1);
    }

    function handleEditClick() {
        const Editselection = confirm('Continue to edit ?');
        
        if(Editselection){
            console.log('Editing');
        }
    }

    function handleDeleteClick(productCardContainer) {
        const Deleteselection = confirm('Confirm to delete ?');
        
        if(Deleteselection){
            productCardContainer.remove();
        }
    }

    function createProductCart(name, category, brand, availability, price) {
        const Id = generateUniqueId();
        
        const priorityClass = availability === 'Yes' ? 'bg-green-400' : 'bg-red-400';

        return `
            <div id="container" class="py-2 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                <h3 class="w-[30%] text-center text-black text-[24px] font-normal font-['Poppins']">${name}</h3>
                
                <h3 class="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">${category}</h3>
                
                <h3 class="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">${brand}</h3>
                
                <div class="w-[13%] flex justify-center">
                    <h3 id="Priority" class="w-1/2 text-center text-black text-[24px] font-normal font-['Poppins'] rounded-lg ${priorityClass}">${availability}</h3>
                </div>
                
                <h3 class="w-[18%] text-center text-black text-[24px] font-normal font-['Poppins']">${price}</h3>
                
                <div class="w-[15%] flex flex-row justify-center gap-9">
                    <button class="w-auto h-auto edit-btn" id="edit-btn-${Id}" title="Edit" data-id="${Id}"><img src="Edit_Icon_Green.png" alt="Edit Icon" /></button>
                    <button class="w-auto h-auto delete-btn" id="delete-btn-${Id}" title="Delete" data-id="${Id}"><img src="Delete.png" alt="Delete Icon" /></button>
                </div>
            </div>
        `;
    }

    return (
        <div className="bg-white w-screen h-screen flex flex-row">
            <LeftBar customClasses={customClasses} activePage={activePage}/>

            <div className="text-black absolute inset-y-0 right-0 w-4/5 p-8 ">
                <div id="ContinueShow" className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600 overflow-y-auto">
                    <h1 className="w-full h-[50px] text-black text-[32px] font-normal font-['Poppins'] border-b-[1px] border-sky-700">Product List</h1>

                    <div className="pt-16 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                        <h2 className="w-[30%] text-center text-black text-[26px] font-normal font-['Poppins']">Name</h2>                                                
                        <h2 className="w-[12%] text-center text-black text-[26px] font-normal font-['Poppins']">Category</h2>
                        <h2 className="w-[12%] text-center text-black text-[26px] font-normal font-['Poppins']">Brand</h2>
                        <h2 className="w-[13%] text-center text-black text-[26px] font-normal font-['Poppins']">Priority</h2>
                        <h2 className="w-[18%] text-center text-black text-[26px] font-normal font-['Poppins']">Price</h2>
                        <h2 className="w-[15%] text-center text-black text-[26px] font-normal font-['Poppins']">Action</h2>
                    </div>

                </div>
                
            </div>
        </div>
    )
}
