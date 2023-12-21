import LeftBar from "./leftbar"

export default function Brand() {
    const customClasses = 'bg-white';
    const Page = 'brand_page';  // Set the active page dynamically

    return(
        <div>
            <LeftBar customClasses={customClasses} activePage={Page} />
        </div>
    )
}