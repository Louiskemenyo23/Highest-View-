
import React from 'react';

const reviews = [
    {
        quote: "Absolutely breathtaking. The views were unparalleled, and the service was impeccable from start to finish. A truly 5-star experience that we will never forget.",
        name: "Charlotte H."
    },
    {
        quote: "The perfect romantic getaway. We stayed in the Superior Suite, and it exceeded all expectations. Dining at the restaurant was a highlight. We're already planning our next visit!",
        name: "David & Emily R."
    },
    {
        quote: "I travel frequently for business, and Highest View Hotel is now my top choice in the UK. The conference facilities are top-notch, and the staff is incredibly professional and accommodating.",
        name: "Samuel Jones"
    },
    {
        quote: "Our family had a wonderful time in the Garden Suite. The direct access to the gardens was perfect for the kids, and the welcome pack was a lovely touch. Highly recommended for families.",
        name: "The Peterson Family"
    },
    {
        quote: "An oasis of calm and luxury. The spa treatments were divine, and the overall atmosphere of the hotel is so serene. It's the perfect place to unwind and recharge.",
        name: "Ben Carter"
    }
];

const StarRating: React.FC = () => (
    <div className="flex text-brand-brass mb-4">
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        ))}
    </div>
);

const ReviewCard: React.FC<{ review: { quote: string; name: string; } }> = ({ review }) => (
    <div className="bg-brand-cream/90 p-8 rounded-lg shadow-xl text-left h-full flex flex-col transform hover:-translate-y-2 transition-transform duration-300">
        <StarRating />
        <p className="text-gray-700 italic mb-4 flex-grow">"{review.quote}"</p>
        <p className="font-semibold text-brand-text text-right">- {review.name}</p>
    </div>
);

const GuestReviewsPage: React.FC = () => {
    return (
        <div className="fade-in pt-24 pb-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-brand-text mb-4">What Our Guests Say</h1>
                    <p className="text-lg text-gray-700">
                        Read firsthand experiences from our valued guests whose stays were made memorable by our commitment to luxury and service.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review, index) => <ReviewCard key={index} review={review} />)}
                </div>
            </div>
        </div>
    );
};

export default GuestReviewsPage;