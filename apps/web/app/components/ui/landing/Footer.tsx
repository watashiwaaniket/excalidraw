import Link from "next/link";

const link = "hover:text-neutral-50"

export default function Footer() {
    return(
        <section className="w-screen bg-neutral-900 text-neutral-100 flex flex-col items-center">
            <div className="h-60 pt-12 flex justify-between w-[20rem] md:w-2xl lg:w-5xl">
                <div>
                    <h2 className="text-xl">WIREDRAW</h2>
                    <p className="text-xs text-neutral-400">
                        <Link href={'https://x.com/astriknormal'} className="hover:text-neutral-50">@astriknormal</Link> on twt
                    </p>
                </div>
                <div className="flex flex-col text-neutral-400">
                    <Link href={'https://github.com/watashiwaaniket/excalidraw'} className={link}>contribute</Link>
                    <Link href={'https://www.linkedin.com/in/aniket-dhakane-9b06a125b/'} className={link}>linkedIn</Link>
                    <Link href={'https://dev.to/hisukurifu'} className={link}>dev.to</Link>
                </div>
            </div>
            <div className="h-16 text-sm">&copy; 2025 wiredraw. made with 🩸🫩<span className="text-xs">n</span>💧</div>
        </section>
    )
};
