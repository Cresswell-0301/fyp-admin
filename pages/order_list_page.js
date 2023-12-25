import LeftBar from "./leftbar"

export default function OrderList() {
    const Page = 'order_list_page';
    
    return(
        <div>
            <LeftBar activePage={Page} />
        </div>
    )
}