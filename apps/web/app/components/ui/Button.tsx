interface ButtonProps{
    isSignin : boolean;
    onClick : () => void;
}

export default function Button({isSignin, onClick} : ButtonProps) {
    return <button onClick={onClick} className="bg-[#FF0080] text-white p-2 rounded-xl w-80 cursor-pointer hover:bg-[#FF0080]/80 transition-all duration-300">
        <span className="text-white">
            {isSignin ? 'Sign in' : 'Sign up'}
        </span>
    </button>
};
