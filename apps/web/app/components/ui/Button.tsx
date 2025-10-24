interface ButtonProps{
    isSignin : boolean;
    onClick : () => void;
}

export default function Button({isSignin, onClick} : ButtonProps) {
    return <button onClick={onClick}>
        {isSignin ? 'Sign in' : 'Sign up'}
    </button>
};
