interface InputProps{
    label : string;
    onChange : (e : any) => void;
}

export default function Input({label, onChange} : InputProps) {
    return <input
        className="border p-1.5 rounded-xl w-80 border-neutral-300"
        placeholder={label}
        onChange={onChange}
        type="password"
    />
};
