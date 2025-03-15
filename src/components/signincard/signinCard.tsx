import { Link,useNavigate } from "react-router-dom";



export default function SignIn() {
    const navigate=useNavigate()

    const Handelchange=()=>{
        navigate('/',{replace:true})
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 ">
            <div className="bg-white w-[30rem] h-[30rem] rounded-lg p-6 relative shadow-lg">
                <div className="">
                   {/* header */}
                   <div className="flex justify-between items-center">
                   <button
                    className=" text-3xl  text-gray-500 hover:text-gray-700"
                    
                >
                    ✖
                </button>
                <h2 className=" text-2xl">تسجيل الدخول</h2>
                   </div>
                   {/* form */}
                   <div className="mt-10">
                    <form action="">
                        <div className="flex flex-col text-right">
                        <label htmlFor="email" className="text-xl">البريد الالكترونى</label><br />
                        <input type="email" id="email" required className="InputStyle" />
                        </div>
                        <div className="flex flex-col text-right mt-3">
                        <label htmlFor="password" className="text-xl">كلمه المرور</label><br />
                        <input type="password" id="password" required className="InputStyle" />
                        </div>
                        <div className="flex mx-2 justify-between my-5">
                            <Link to='/register' className="text-blue-500 underline"> نسيت كلمه المرور؟</Link>
                            <p className="text-xl inline">تذكرنى <span><input type="checkbox" className="h-4 w-4 inline"/></span></p>
                        </div>
                        <button onClick={Handelchange} className="w-full  MainColorBG text-white rounded-3xl py-3 px-6 hover:bg-green-700">تسجيل الدخول</button>
                    </form>
                    {/* don't have an acount */}
                    <div className="mt-4 text-center">
                        <h3>ليس لديك حساب؟ <span><Link to='/register' className="underline text-blue-500">قم بالضغط هنا</Link></span></h3>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
