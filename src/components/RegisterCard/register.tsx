import { Link,useNavigate } from "react-router-dom";



export default function Register() {
    const navigate=useNavigate()

    const Handelchange=()=>{
        navigate('/')
    }
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-5 ">
            <div className="bg-white w-[32rem] max-h-[35rem] overflow-y-auto rounded-lg p-3 relative shadow-lg ">
                <div className="mt-2">
                   {/* header */}
                   <div className="flex justify-between items-center">
                   <button
                    className=" text-3xl  text-gray-500 hover:text-gray-700"
                    
                >
                    ✖
                </button>
                <h2 className=" text-2xl">انشاء حساب جديد</h2>
                   </div>
                   {/* form */}
                   <div className=" mt-5">
                    <form action="">
                      {/*the first and last name */}
                      <div className="flex justify-between">
                        <div className="flex flex-col text-right">
                        <label htmlFor="text" className="text-xl">الاسم الاخير</label><br />
                        <input type="text" id="firstname" required className=" InputStyle " />
                        </div>
                        <div className="flex flex-col text-right">
                        <label htmlFor="text" className="text-xl">الاسم الاول</label><br />
                        <input type="text" id="lastname" required className=" InputStyle" />
                        </div>
                      </div>
                      {/* email */}
                        <div className="flex flex-col text-right mt-3">
                        <label htmlFor="email" className="text-xl">البريد الالكترونى</label><br />
                        <input type="email" id="email" required className="InputStyle w-full" />
                        </div>
                        {/* password */}
                        <div className="flex flex-col text-right mt-3">
                        <label htmlFor="password" className="text-xl">كلمه المرور</label><br />
                        <input type="password" id="password" required className="InputStyle w-full" />
                        </div>
                        <div className="flex mx-2 justify-between my-5">
                            <Link to='/register' className="text-blue-500 underline"> نسيت كلمه المرور؟</Link>
                            <p className="text-xl inline">تذكرنى <span><input type="checkbox" className="h-4 w-4 inline"/></span></p>
                        </div>
                        <button onClick={Handelchange} className="w-full my-1 MainColorBG text-white rounded-3xl py-3 px-6 hover:bg-green-700">تسجيل الدخول</button>
                    </form>
                    {/* already have an acount */}
                    <div className="mt-1 text-center">
                        <h3> لديك حساب بالفعل؟ <span><Link to='/SignIn' className="underline text-blue-500">قم بالضغط هنا</Link></span></h3>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}
