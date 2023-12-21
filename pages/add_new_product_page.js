import LeftBar from "./leftbar";

export default function NewProduct() {
    const customClasses = 'bg-white';
    const activePage = 'add_new_product_page'; // Set the active page dynamically
    
    return (
        <div>
            <LeftBar customClasses={customClasses} activePage={activePage} />
        </div>
    )
}
