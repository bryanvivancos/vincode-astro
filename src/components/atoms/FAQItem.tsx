import { useState } from "react"
import ChevronDownIcon from "../icons/ChevronDownIcon";
import ChevronUpIcon from "../icons/ChevronUpIcon";

interface FAQProps {
    question: string;
    answer: string
}

export const FAQItem = ({ question, answer }: FAQProps) => {
    const [isOpen, setIsOpen] = useState(false)

    const toogleOpen = () => {
        setIsOpen(!isOpen)
    }


    return (
        <div className="border border-gray-700 rounded-lg">
            <button
                onClick={toogleOpen}
                aria-expanded={isOpen}
                className="flex justify-between items-center w-full py-5 px-6 text-left"
            >
                <span className="text-base font-medium text-white">
                    {question}
                </span>
                {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out pb-5 px-6 ${isOpen ? 'max-h-auto opacity-100 ' : 'max-h-0 hidden opacity-0'}`}>
                <p className="text-gray-300">{answer}</p>
            </div>
        </div>
    )
}
