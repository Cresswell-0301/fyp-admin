import LeftBar from "./leftbar"

export default function Category() {
    const Css = 'bg-white';
    const Page = 'category_page';
    
    return(
        <div>
            <LeftBar customClasses={Css} activePage={Page} />
        </div>
    )
}