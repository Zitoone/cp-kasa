type RatingProps = {
    rating: string;
};

const Rating = ({ rating }: RatingProps) => {
    const note = parseInt(rating);
    return (
        <div className="rating">
            {"★".repeat(note) + "☆".repeat(5 - note)} <span>({rating})</span>
        </div>        
        );
};
export default Rating;
