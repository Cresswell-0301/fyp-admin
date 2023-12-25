import { useEffect , useState } from "react";
import LeftBar from "./leftbar"

export default function OrderList() {
    const Page = 'order_list_page';
    const [items, setItems] = useState([]);
    
    const data = [  // declare the database data here to print the data
        {Id: 1, date: "02/11/2023, 11:28:50", paid: "Yes", recipient: "ZI JIAN LOOI@exmple.com<br/>Address<br/>MYR 5899", product: "XiaoMi 13 Pro x2<br/>Macbook 14 Pro x1"},
        {Id: 2, date: "12/11/2023, 16:45:53", paid: "No", recipient: "ZI JIAN LOOI@exmple.com<br/>Address<br/>MYR 18999", product: "XiaoMi 13 Pro x3<br/>Macbook 14 Pro x2"},
    ];

    useEffect(() => {
        setItems(data);
    }, []);

    return(
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <div className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <div className='w-full h-[50px] flex flex-row border-b-[1px] border-sky-700 pb-2'>
                        <h1 className="w-full h-full text-black text-[32px] font-normal font-['Poppins']">Order List</h1>
                    </div>

                    <div className="mt-12 flex flex-row w-full h-fit border-b-[1px] border-sky-700 gap-1 uppercase rounded-tl-xl rounded-tr-xl bg-teal-300">
                        <h2 className="w-[20%] text-center text-black text-[20px] font-semibold font-['Poppins']">Date</h2>
                        <h2 className="w-[10%] text-center text-black text-[20px] font-semibold font-['Poppins']">Paid</h2>
                        <h2 className="w-[40%] text-center text-black text-[20px] font-semibold font-['Poppins']">Recipient</h2>
                        <h2 className="w-[30%] text-center text-black text-[20px] font-semibold font-['Poppins']">Products</h2>
                    </div>

                    {items.map(({ Id, date, paid, recipient, product }) => (
                        <div key={Id} className="flex flex-row w-full min-h-[40px] h-auto border-b-[1px] border-sky-700 gap-1 items-center">
                            <h2 className="w-[20%] text-center text-black text-[20px] font-[200] font-['Poppins']">{date}</h2>
                            <h2 className={`w-[10%] text-center text-black text-[20px] font-[500] font-['Poppins']" ${paid === "Yes" ? "text-green-500" : "text-red-500"}`}>{paid}</h2>
                            <h2 className="w-[40%] text-center text-black text-[18px] font-[200] font-['Poppins']" dangerouslySetInnerHTML={{ __html: recipient }}></h2>
                            <h2 className="w-[30%] text-center text-black text-[18px] font-[200] font-['Poppins']" dangerouslySetInnerHTML={{ __html: product }}></h2>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}