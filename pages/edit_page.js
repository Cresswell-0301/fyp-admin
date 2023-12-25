import { useRef, useState } from "react";
import LeftBar from "./leftbar"

export default function Edit() {
    const Page = 'edit_page';

    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);

    const loadFile = (e) => {
        // Handle file loading logic
        const file = e.target.files[0];

        if (file) {
            // Check if the file size is less than 2 MB (2 * 1024 * 1024 bytes)
            if (file.size <= 2 * 1024 * 1024) {

                // Check if the file format is acceptable (PNG, JPG, JPEG)
                const allowedFormats = ['image/png', 'image/jpeg', 'image/jpg'];

                if (allowedFormats.includes(file.type)) {
                    const reader = new FileReader();
                    reader.onload = () => {
                        setImage(reader.result);
                    };
                    reader.readAsDataURL(file);
                } else {
                    alert("Only PNG, JPG, and JPEG formats are allowed");
                    // clear the file input
                    fileInputRef.current.value = "";
                }
            } else {
                alert("File size must be less than 2 MB");
                // clear the file input
                fileInputRef.current.value = "";
            }
        }
    };

    const handleClick = () => {
        // Trigger click on the file input
        fileInputRef.current.click();
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);

        setTimeout(() => {
          setPasswordVisible(false);
        }, 3000);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmpasswordVisible);

        setTimeout(() => {
          setConfirmPasswordVisible(false);
        }, 3000);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const password = document.getElementById("pwd").value;
        const confirmPassword = document.getElementById("confirmPwd").value;
        const Message = document.getElementById("Message");

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please check and try again.");
            Message.style.display = "block";
        } else {
            e.target.submit();
        }
    };

    return(
        <div className="bg-white w-auto h-auto flex flex-row">
            <LeftBar activePage={Page} />

            <div className="bg-white text-black w-4/5 min-h-screen h-auto p-8 ml-[20%]">
                <form method="POST" onSubmit={handleSubmit} className="w-full h-full flex flex-col p-5 bg-gray-50 rounded-[10px] border border-zinc-600">
                    <div className='w-full h-[50px] flex flex-row border-b-[1px] border-sky-700 pb-2'>
                        <h1 className="w-full h-full text-black text-[32px] font-normal font-['Poppins']">Edit Profile</h1>
                    </div>

                    <div className="flex flex-row w-full h-[20%] mt-3">
                        <div image={image} className="w-[11%] h-[130px] rounded-full bg-gray-300 ml-12" 
                        style={{ backgroundImage: image ? `url(${image})` : 'none', 
                        backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                        <div className="w-[89%] h-full pl-5 flex flex-col">
                            <div className="flex flex-col w-full text-gray-500 text-xl font-normal font-['Poppins'] pb-2">
                                <div className="flex flex-row w-full">
                                   <span className="w-[18%]">Acceptable file formats</span>
                                   <span className="w-[82%]">: PNG, JPG, JPEG</span>
                                </div>

                                <div className="flex flex-row w-full">
                                    <span className="w-[18%]">Recommended Size</span>
                                    <span className="w-[82%]">: 300px x 290px</span>
                                </div>

                                <span>Image size cannot be larger than 2MB</span>
                            </div>
                                
                            <input type="file" id="file" ref={fileInputRef} className="hidden" onChange={loadFile} />
                            <button type="button" htmlFor="file" className="bg-teal-200 rounded-[10px] w-[12%] cursor-pointer text-center text-black text-[20px] font-normal font-['Poppins'] hover:bg-teal-400" onClick={handleClick}>Image Select</button>
                        </div>
                    </div>

                    <div className="w-full h-[80%] mt-5">
                        <div className="flex flex-row w-full h-[30px] ">
                            <h2 className="w-[15%] text-right text-black text-xl font-normal font-['Poppins'] ">Username</h2>

                            <div className="flex flex-row pl-5 w-[89%] gap-3">
                                <input type="text" id="username" className="w-[20%] border-[1px] border-black rounded-lg pl-2 pr-2" />
                            </div>
                        </div>

                        <div className="flex flex-row w-full h-[30px] mt-5">
                            <h2 className="w-[15%] text-right text-black text-xl font-normal font-['Poppins'] ">Password</h2>

                            <div className="flex flex-row pl-5 w-[89%] gap-3 items-center">
                                <input type={passwordVisible ? "text" : "password"} id="pwd" className="w-[20%] h-full border-[1px] border-black rounded-lg pl-2 pr-2" />

                                <img src={passwordVisible ? "show.png" : "close.png"} alt="Icon Error" className="w-6 h-6 cursor-pointer" onClick={togglePasswordVisibility}/>
                            </div>
                        </div>

                        <div className="flex flex-row w-full h-[30px] mt-5">
                            <h2 className="w-[15%] text-right text-black text-xl font-normal font-['Poppins'] ">Confirm Password</h2>

                            <div className="flex flex-row pl-5 w-[89%] gap-3 items-center">
                                <input type={confirmpasswordVisible ? "text" : "password"} id="confirmPwd" className="w-[20%] h-full border-[1px] border-black rounded-lg pl-2 pr-2" />

                                <img src={confirmpasswordVisible ? "show.png" : "close.png"} alt="Icon Error" className="w-6 h-6 cursor-pointer" onClick={toggleConfirmPasswordVisibility}/>

                                <span id="Message" className="hidden w-[30%] ml-3 text-red-500 text-l font-[500] font-['Poppins']">*Passwords Don't Match with Confirm Password</span>
                            </div>
                        </div>

                        <div className="mt-8 w-[33%] h-[30px] text-right">
                            <button type="submit" className="w-[25%] h-[30px] rounded-[10px] bg-teal-200 text-[18px] font-normal font-['Poppins'] hover:bg-teal-400">Update</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}
