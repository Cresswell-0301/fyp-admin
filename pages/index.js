export default function Home() {

  const SubmitForm = (e) => {
    e.preventDefault();

    const AdminName = 'aaa';  // Set Admin Username
    const AdminPwd = '1111';  // Set Admin Password

    const Username = document.getElementById("username").value;
    const Password = document.getElementById("password").value;

    const Error1 = document.getElementById("username_error"); // Error Message
    const Error2 = document.getElementById("password_error"); // Error Message

    if (Username === AdminName && Password === AdminPwd) {
      Error1.style.display = "none";
      Error2.style.display = "none";
      
      location.href = "product_list_page";
    } else {
      if (Username != AdminName && Password != AdminPwd) {
        Error1.style.display = "flex";
        Error2.style.display = "flex";
      }

      if (Username === AdminName && Password != AdminPwd) {
        Error1.style.display = "none";
        Error2.style.display = "flex";
      }

      if (Username != AdminName && Password === AdminPwd) {
        Error1.style.display = "flex";
        Error2.style.display = "none";
      }
    }
  };

  return (
    <div className="w-screen h-screen flex items-center bg-gray-50 justify-center">
      <div className="w-1/3 h-[600px] bg-blue-300 rounded-[10px] flex flex-col p-6">
        
        <div className="h-[15%] w-full flex flex-row">
          <img className="w-2/5" src="Company_Logo_Black_Mode.png" alt="Company Logo"/>
          <h1 className="w-3/5 h-full text-black text-[32px] font-normal font-['Poppins'] grid text-center content-center">Admin site</h1>
        </div>

        <form className="flex flex-col mt-10 h-[85%] w-full gap-3" method="post" onSubmit={SubmitForm}>

          <div className="flex flex-col">
            <label className="w-full h-fit text-black text-[26px] font-normal font-['Poppins']" htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder="Username" className="bg-white text-black pl-1 py-1 ml-4 rounded-md w-3/5 border-2 border-gray" title="Fill-in your Username" required/>
            <span className="hidden pl-4 text-red-500 font-medium" id="username_error">* Username incorrect</span>  {/* create a function to check username/password */}
          </div>

          <div className="flex flex-col">
            <label className="w-full h-fit text-black text-[26px] font-normal font-['Poppins']" htmlFor="password">Password</label>
            <input type="text" id="password" placeholder="Password" className="bg-white text-black pl-1 py-1 ml-4 rounded-md w-3/5 border-2 border-gray" title="Fill-in your Password" required/>
            <span className="hidden pl-4 text-red-500 font-medium" id="password_error">* Password incorrect</span>  {/* create a function to check username/password */}
          </div>

          <button type="submit" title="Login" className="mt-6 ml-4 w-[150px] h-[50px] bg-cyan-200 rounded-[10px] border border-neutral-700 text-center text-black text-[26px] font-normal font-['Poppins'] hover:bg-blue-400 hover:text-gray-100">Login</button>
        </form>
      </div>
    </div>
  )
}