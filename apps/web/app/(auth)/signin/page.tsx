import AuthPage from "../../components/AuthPage";

export default function page() {
    return(
        <div className="w-screen h-screen flex bg-amber-50">
            <div className="w-screen sm:w-[50vw] h-screen flex items-center justify-center flex-col p-3">
                <AuthPage isSignin={true}/>
            </div>
            <div className="hidden sm:flex sm:w-[50vw] p-3">
                <div className="w-full rounded-xl bg-[url('/auth-banner.png')] bg-cover">

                </div>
            </div>
        </div>
    )
};
