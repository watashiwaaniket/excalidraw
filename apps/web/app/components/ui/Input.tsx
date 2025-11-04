interface InputProps{
    label : string;
    onChange : (e : any) => void;
    type : "username" | "password";
}

export default function Input({label, onChange, type} : InputProps) {
    return(
        <div>
            <p className="text-sm text-neutral-800 p-0.5">{type}</p>
            <input
                className="border p-1.5 rounded-xl w-80 border-neutral-300"
                placeholder={label}
                onChange={onChange}
                type={type}
            />
        </div>
    )
};
