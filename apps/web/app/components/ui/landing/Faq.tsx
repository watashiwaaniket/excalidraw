import { FileQuestion } from "lucide-react";
import { ShineButton } from "../ShineButton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../Accordian";

export const faqData = [
    {
      question: "How does real-time collaboration work?",
      answer:
        "All changes sync instantly across all participants, so everyone sees updates the moment they happen.",
    },
    {
      question: "Do I need an account to start a board?",
      answer:
        "Yes. You can create and share a board with a single link. Sign-up is needed to access the offerings of wiredraw.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Your boards are encrypted, auto-synced to the cloud, and backed by version history for safe restoration.",
    },
    {
      question: "Can I use the app on mobile or tablet?",
      answer:
        "Yes. The canvas is fully responsive and works smoothly on desktops, tablets, and smartphones.",
    },
];
  

export default function Faq() {
    return(
        <section className="py-20 flex flex-col items-center">
            <div className="flex p-4">
                <ShineButton label="FAQ" Icon={FileQuestion} IconAura="blue"/>
            </div>
            <h2 className="text-3xl md:text-4xl w-full text-center text-neutral-800 mb-8 px-2">
                You got questions? We got answers
            </h2>
            <div className="rounded-2xl p-4 sm:w-xl lg:w-6xl">
                <Accordion type="single" collapsible className="w-full space-y-5">
                {faqData.map((faq) => (
                    <AccordionItem
                    key={faq.question}
                    value={faq.question}
                    className="group/faq shadow-input rounded-xl border border-neutral-300 bg-white transition duration-200 hover:shadow-xl hover:-translate-x-0.5 hover:-translate-y-0.5 relative overflow-hidden data-[state=open]:bg-[#f4f3f3]"
                    >
                    <div className="absolute bg-linear-to-br from-blue-50/50 to-transparent h-full inset-0 z-0 opacity-0 group-hover/faq:opacity-100 transition-opacity duration-200"></div>
                    <AccordionTrigger className="cursor-pointer px-6 py-5 text-left hover:no-underline font-semibold text-neutral-600 text-base relative z-10">
                        {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-5 text-neutral-600 text-sm leading-relaxed relative z-10">
                        {faq.answer}
                    </AccordionContent>
                    </AccordionItem>
                ))}
                </Accordion>
            </div>
        </section>
    )
};
