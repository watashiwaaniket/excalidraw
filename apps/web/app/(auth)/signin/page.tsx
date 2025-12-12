import { GrainGradient } from "@paper-design/shaders-react";
import AuthPage from "../../components/AuthPage";
import Link from "next/link";

export default function page() {
    return(
        <div className="w-screen h-screen flex">
            <div className="w-screen sm:w-[50vw] h-screen flex items-center justify-between flex-col p-3">
                <Link href={'/'} className="text-2xl font-bold w-full text-left text-neutral-900">Wiredraw</Link>
                <AuthPage isSignin={true}/>
                <p className="text-sm text-gray-500 w-full text-left">
                    &copy; 2025 Wiredraw
                </p>
            </div>
            <div className="hidden sm:flex sm:w-[50vw] p-3">
                <div className="w-full rounded-xl overflow-clip relative">
                    <div className="absolute flex items-center justify-center w-full h-full text-2xl z-10 text-white/40">
                        <p className="flex flex-col w-[400px] gap-1">
                            Life is like riding a bicycle. To keep your balance, you must keep moving.
                            <span className="text-right">- Albert Einstein</span>
                        </p>
                    </div>
                    <GrainGradient
                        style={{height: "100%", width: "100%", position: "absolute", zIndex: "0"}}
                        colorBack="hsl(0, 0%, 8%)"
                        colors={["#9929EA", "#EE66A6", "#63C8FF", "#F6DC43"]}
                        softness={0.5}
                        className="opacity-96"
                        intensity={0.2}
                        noise={0.3}
                        shape="corners"
                        offsetX={0}
                        offsetY={0}
                        scale={0.9}
                        rotation={0}
                        speed={1}
                    />
                </div>
            </div>
        </div>
    )
};
