const LeftBar = ({activePage}) => {
    const isEditActive = activePage === 'edit_page';
    const isProductListActive = activePage === 'product_list_page';
    const isNewProductActive = activePage === 'add_new_product_page';
    const isBrandActive = activePage === 'brand_page';
    const isCategoryActive = activePage === 'category_page';
    const isAddCategoryActive = activePage === 'add_category_page';
    const isOrderActive = activePage === 'order_list_page';
    const isSlidesActive = activePage === 'slides';

    return (
        <div className="w-[320px] h-[780px] bg-blue-300 rounded-[10px] my-7 mx-5 p-5 flex flex-col fixed">
            
            {/* Top Start */}
            <div className="w-full h-[80px] flex flex-row">
                <img src="Admin_Icon.png" className="w-[80px] h-full bg-slate-400 rounded-full" alt="Admin Photo" />

                <div className="w-full h-full grid content-center justify-center">
                    <h1 className="text-black text-[26px] font-normal font-['Oxygen']">Admin_Name</h1>

                    <div className={`w-fit h-full flex flex-row items-center group ${isEditActive ? 'active' : ''}`} title="Edit" onClick={() => location.href = "edit_page"}>
                        <img className={`w-5 h-5 filter cursor-pointer group-hover:brightness-100 group-hover:grayscale-0 ${isEditActive ? 'brightness-100 grayscale-0' : 'brightness-50 grayscale-50'}`} src="Edit_Icon.png"/>
                        <h2 className={`pl-2 text-[20px] font-normal font-['Oxygen'] cursor-pointer group-hover:text-gray-100 ${isEditActive ? 'text-gray-100' : 'text-gray-500'}`}>Edit</h2>
                    </div>
                </div>
            </div>
            {/* Top End */}

            <div className="w-full h-[600px]">
                {/* Product Start */}
                <h1 className="pt-5 pb-1 text-black text-[26px] font-normal font-['Oxygen']">Product</h1>

                <div className="flex flex-col text-center gap-3">
                    <a href="product_list_page" className={`group ${isProductListActive ? 'active' : ''}`} title="Product List">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isProductListActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Product List
                        </button>
                    </a>

                    <a href="add_new_product_page" className={`group ${isNewProductActive ? 'active' : ''}`} title="Add New Product">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isNewProductActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Add New Product
                        </button>
                    </a>
                    
                </div>
                {/* Product End */}

                {/* Category Start */}
                <h1 className="pt-5 pb-1 text-black text-[26px] font-normal font-['Oxygen']">Categories</h1>

                <div className="flex flex-col text-center gap-3">
                    <a href="brand_page" className={`group ${isBrandActive ? 'active' : ''}`} title="Brand">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isBrandActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Brand
                        </button>
                    </a>

                    <a href="category_page" className={`group ${isCategoryActive ? 'active' : ''}`} title="Category">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isCategoryActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Category List
                        </button>
                    </a>

                    <a href="add_category_page" className={`group ${isAddCategoryActive ? 'active' : ''}`} title="AddCategory">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isAddCategoryActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Add Category
                        </button>
                    </a>
                    
                </div>
                {/* Category End */}

                {/* Order Start */}
                <h1 className="pt-5 pb-1 text-black text-[26px] font-normal font-['Oxygen']">Order</h1>

                <div className="flex flex-col text-center gap-3">
                    <a href="order_list_page" className={`group ${isOrderActive ? 'active' : ''}`} title="Order List">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isOrderActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Order List
                        </button>
                    </a>
                </div>
                {/* Order End */}

                {/* Slide Start */}
                {/* <h1 className="pt-5 pb-1 text-black text-[26px] font-normal font-['Oxygen']">Slide</h1> */}

                <div className="flex flex-col text-center gap-3 pt-8">
                    <a href="slides" className={`group ${isSlidesActive ? 'active' : ''}`} title="Slide List">
                        <button className={`w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] ${isSlidesActive ? 'bg-white' : ''} group-hover:bg-white`}>
                        Manage Slides
                        </button>
                    </a>
                </div>
                {/* Slide End */}

            </div>

            <div className="h-[70px] text-center pt-5">
                <a href="/" className="group">
                    <button className="w-[180px] h-[50px] rounded-[10px] border border-sky-800 text-black text-[20px] font-normal font-['Poppins'] group-hover:bg-white">
                    Sign Out
                    </button>
                </a>
            </div>
        </div>
    )
};

export default LeftBar;