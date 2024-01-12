import LeftBar from "./leftbar"
import React, {useRef , useState} from 'react';

export default function Slides() {
    const Page = 'slides';  // Set the active page dynamically

    const fileInputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleDelete = () => {
        const answer = window.confirm("Confirm to reset to default image ?");

        if(answer){
            // Reset the file input
            fileInputRef.current.value = null;

            // Set to default image when "Reset" button is clicked
            const defaultImageUrl = "https://img.freepik.com/free-vector/neon-style-coming-soon-glowing-background-design_1017-25516.jpg";
            setImage(defaultImageUrl);
        }
    };

    const loadFile = (event) => {
        const selectedFile = event.target.files[0];

        // Create URL for the selected file
        const imageUrl = URL.createObjectURL(selectedFile);

        // Set the image source
        setImage(imageUrl);
    }

    return (
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <div id="ContinueShow" className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <h1 className="w-full h-[50px] text-black text-[32px] font-normal font-['Poppins'] border-b-[1px] border-sky-700">Slides</h1>

                    <div className="w-full h-full pt-5">

                        <form action="add_new_product_page" method="POST" className="w-full h-auto flex flex-col rounded-[10px]">
                            <h2 className="w-full h-[30px] text-black text-[20px] font-normal font-['Poppins']">First Slide</h2>

                            <div className="flex flex-row items-center">
                                <div style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundSize: 'contain', backgroundPosition: 'center' }} // Database image masuk " NONE " keyword
                                className="w-[25%] h-[180px] rounded-xl bg-gray-300"
                                >
                                </div>

                                <div className="flex flex-col w-auto h-full gap-5 justify-center pl-10 pr-10">
                                    <button type="button" className="flex flex-row items-center justify-center bg-green-400 rounded-[10px] w-[150px] h-[54px] cursor-pointer text-center
                                    text-black text-[20px] font-normal font-['Poppins'] hover:bg-green-500" 
                                    title="Upload"
                                    onClick={handleClick}
                                    >
                                        <span className="w-[108px]">Upload</span>
                                        <svg className="w-[32px] h-8 mr-[2px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.625 15C5.625 14.5858 5.28921 14.25 4.875 14.25C4.46079 14.25 4.125 14.5858 4.125 15H5.625ZM4.875 16H4.125H4.875ZM19.275 15C19.275 14.5858 18.9392 14.25 18.525 14.25C18.1108 14.25 17.775 14.5858 17.775 15H19.275ZM12.2914 5.46127C12.5461 5.13467 12.4879 4.66338 12.1613 4.40862C11.8347 4.15387 11.3634 4.21212 11.1086 4.53873L12.2914 5.46127ZM7.20862 9.53873C6.95387 9.86533 7.01212 10.3366 7.33873 10.5914C7.66533 10.8461 8.13662 10.7879 8.39138 10.4613L7.20862 9.53873ZM12.2914 4.53873C12.0366 4.21212 11.5653 4.15387 11.2387 4.40862C10.9121 4.66338 10.8539 5.13467 11.1086 5.46127L12.2914 4.53873ZM15.0086 10.4613C15.2634 10.7879 15.7347 10.8461 16.0613 10.5914C16.3879 10.3366 16.4461 9.86533 16.1914 9.53873L15.0086 10.4613ZM12.45 5C12.45 4.58579 12.1142 4.25 11.7 4.25C11.2858 4.25 10.95 4.58579 10.95 5H12.45ZM10.95 16C10.95 16.4142 11.2858 16.75 11.7 16.75C12.1142 16.75 12.45 16.4142 12.45 16H10.95ZM4.125 15V16H5.625V15H4.125ZM4.125 16C4.125 18.0531 5.75257 19.75 7.8 19.75V18.25C6.61657 18.25 5.625 17.2607 5.625 16H4.125ZM7.8 19.75H15.6V18.25H7.8V19.75ZM15.6 19.75C17.6474 19.75 19.275 18.0531 19.275 16H17.775C17.775 17.2607 16.7834 18.25 15.6 18.25V19.75ZM19.275 16V15H17.775V16H19.275ZM11.1086 4.53873L7.20862 9.53873L8.39138 10.4613L12.2914 5.46127L11.1086 4.53873ZM11.1086 5.46127L15.0086 10.4613L16.1914 9.53873L12.2914 4.53873L11.1086 5.46127ZM10.95 5V16H12.45V5H10.95Z" fill="#ffffff"></path> </g></svg>
                                        <input type="file" ref={fileInputRef} className="hidden" onChange={loadFile} />
                                    </button>

                                    <button type="button" className="flex flex-row items-center justify-center bg-red-400 rounded-[10px] w-[150px] h-[54px] cursor-pointer text-center
                                    text-black text-[20px] font-normal font-['Poppins'] hover:bg-red-500 group"
                                    title="Reset"
                                    onClick={handleDelete}
                                    >
                                        <span className="w-[108px]">Reset</span>
                                        <svg className="w-[32px] h-8 mr-[2px] group-hover:rotate-[100deg] group-hover:transition group-hover:duration-500" 
                                        viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="rotate(270)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none" fill-rule="evenodd" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" transform="translate(2 2)"> <path d="m12.5 1.5c2.4138473 1.37729434 4 4.02194088 4 7 0 4.418278-3.581722 8-8 8s-8-3.581722-8-8 3.581722-8 8-8"></path> <path d="m12.5 5.5v-4h4"></path> </g> </g></svg>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}