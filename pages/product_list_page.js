import { useEffect } from 'react';
import LeftBar from "./leftbar";

export default function ProductList() {
    const customClasses = 'bg-white';

    const activePage = 'product_list_page'; // Set the active page dynamically

    useEffect(() => {
        const productCardHTML = createProductCard(
          'Iphone 15 Pro Max',
          'Phone',
          'Apple',
          'Yes',
          'RM 3499.00'
        );
    
        // Check if we are in a browser environment before using the document object
        if (typeof document !== 'undefined') {
            // Append the HTML to a container element
            const container = document.getElementById('ContinueShow'); // Replace with the actual ID of your container
            
            container.innerHTML += productCardHTML;
        }
    }, []); // Empty dependency array ensures the effect runs once after the initial render
  
    function handleDeleteClick() {
        const container = document.getElementById('container');
        const lastElement = container.lastElementChild;
        container.removeChild(lastElement);
    }

    function createProductCard(name, category, brand, availability, price) {
        
        return `
            <div id="container" class="py-2 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1">
                <h3 class="w-[30%] text-center text-black text-[24px] font-normal font-['Poppins']">${name}</h3>
                <h3 class="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">${category}</h3>
                <h3 class="w-[12%] text-center text-black text-[24px] font-normal font-['Poppins']">${brand}</h3>
                <div class="w-[13%] flex justify-center">
                    <h3 class="w-1/2 text-center text-black text-[24px] font-normal font-['Poppins'] bg-green-400 rounded-lg">${availability}</h3>
                </div>
                <h3 class="w-[18%] text-center text-black text-[24px] font-normal font-['Poppins']">${price}</h3>
                <div class="w-[15%] flex flex-row justify-center gap-9">
                    <button class="w-auto h-auto" ><img src="Edit_Icon_Green.png" alt="Edit Icon" /></button>
                    <button class="w-auto h-auto" onClick="handleDeleteClick()"><img src="Delete.png" alt="Delete Icon" /></button>

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
