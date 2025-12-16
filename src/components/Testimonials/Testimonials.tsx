// import StarRatingIcon from '../icons/StarRatingIcon';
// import ThumbsUpIcon from '../icons/ThumbsUpIcon';
// import ThumbsDownIcon from '../icons/ThumbsDownIcon';
// import styles from './Testimonials.module.css';

import { testimonials }  from "../../CONSTANTS";;


export default function Testimonials() {
  return (
    <section id="testimonials" className="py-15 place-items-center">
      <div className="max-w-[960px]">
        <h2 className="sectionTitle">Testimonios</h2>
        
        <div className="flex flex-col md:gap-8 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-background-card rounded-lg p-4 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-3xl object-cover"
                />
                <div className="flex flex-col gap-1">
                  <div className="text-base font-medium text-text-primary">{testimonial.name}</div>
                  <div className="text-sm font-normal text-text-secondary">{testimonial.date}</div>
                </div>
              </div>
              
              {/* <div className="flex gap-1">
                <StarRatingIcon width={100} height={20} color="#91B8C9" />
              </div> */}
              
              <p className="text-base font-normal leading-6 text-text-primary">{testimonial.text}</p>
              
              {/* <div className="flex items-center gap-9">
                <button className="flex items-center gap-2 bg-none border-none cursor-pointer transition-all opacity-70 duration-300 ease-in-out hover:opacity-30">
                  <ThumbsUpIcon width={20} height={20} color="#91B8C9" />
                  <span className="text-base font-normal text-text-secondary">{testimonial.likes}</span>
                </button>
                <button className="flex items-center gap-2 bg-none border-none cursor-pointer transition-all opacity-70 duration-300 ease-in-out hover:opacity-30">
                  <ThumbsDownIcon width={20} height={20} color="#91B8C9" />
                </button>
              </div> */}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// return (
//     <section id="testimonials" className={styles.testimonials}>
//       <div className="max-w-[960px]">
//         <h2 className="sectionTitle">Testimonials</h2>
        
//         <div className={styles.testimonialsList}>
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className={styles.testimonialCard}>
//               <div className={styles.testimonialHeader}>
//                 <img 
//                   src={testimonial.avatar} 
//                   alt={testimonial.name}
//                   className={styles.avatar}
//                 />
//                 <div className={styles.authorInfo}>
//                   <div className={styles.authorName}>{testimonial.name}</div>
//                   <div className={styles.date}>{testimonial.date}</div>
//                 </div>
//               </div>
              
//               <div className={styles.rating}>
//                 <StarRatingIcon width={100} height={20} color="#91B8C9" />
//               </div>
              
//               <p className={styles.testimonialText}>{testimonial.text}</p>
              
//               <div className={styles.actions}>
//                 <button className={styles.actionButton}>
//                   <ThumbsUpIcon width={20} height={20} color="#91B8C9" />
//                   <span className={styles.actionCount}>{testimonial.likes}</span>
//                 </button>
//                 <button className={styles.actionButton}>
//                   <ThumbsDownIcon width={20} height={20} color="#91B8C9" />
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );