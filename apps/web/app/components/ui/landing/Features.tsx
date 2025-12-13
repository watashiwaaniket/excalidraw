import { SparkleIcon } from "lucide-react";
import { ShineButton } from "../ShineButton";
import { Bento } from "./Bento";

export default function Features() {
    return(
        <section className="pt-20 flex flex-col items-center">
            <div className="flex p-4">
                <ShineButton label="Realtime Collaboration" Icon={SparkleIcon} IconAura="yellow"/>
            </div>
            <h2 className="text-4xl w-100 text-center text-neutral-800">
                What makes us Special?
            </h2>
            <Bento />
        </section>
    )
};
