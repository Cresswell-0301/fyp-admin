import LeftBar from "./leftbar"

export default function OrderList() {
    const Css = 'bg-white';
    const Page = 'order_list_page';
    
    return(
        <div>
            <LeftBar customClasses={Css} activePage={Page} />
        </div>
    )
}