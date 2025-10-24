interface InputProps{
    label : string;
    onChange : (e : any) => void;
}

export default function Input({label, onChange} : InputProps) {
    return <input
        type="text" 
        className="border p-1.5 rounded-xl"
        placeholder={label}
        onChange={onChange}
        type="password"
    />
};
