import { FAQItem } from "../atoms/FAQItem";
import { ChevronDownIcon, ChevronUpIcon } from "../icons";


// Definimos la estructura de nuestros datos
export interface FaqData {
  id: number;
  question: string;
  answer: string;
}

// Tus datos de ejemplo (¡puedes añadir más!)

export const FAQAccordion = ({faqs}: { faqs: FaqData[]}) => {
  return (
    <section>

        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <details className="border border-gray-700 rounded-lg group" key={index}>
                  <summary className="flex justify-between items-center w-full py-5 px-6 cursor-pointer list-none">
                    <span className="text-base font-medium text-white">
                      {faq.question}
                    </span>

                    <span className="ml-4">
                      <span className="group-open:hidden">
                        <ChevronDownIcon />
                      </span>
                      <span className="hidden group-open:block">
                        <ChevronUpIcon />
                      </span>
                    </span>
                  </summary>

                  <div className="px-6 pb-5 text-text-secondary">
                    {faq.answer}
                  </div>
              </details>

            ))}
        </div>
    </section>
  )
}
