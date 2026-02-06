import image from "../assets/NEWS.jpg";

const NewsItem = ({ title, description, src, url }) => {
    return (
        <div className="card news-card bg-dark text-light h-100">
            <img
                src={src || image}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = image;
                }}
                className="card-img-top"
                alt={title}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title">{title}</h5>

                <p className="card-text flex-grow-1">
                    {description
                        ? description.slice(0, 90)
                        : "This is current event information."}
                </p>

                <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-auto"
                >
                    Read More
                </a>
            </div>
        </div>
    );
};

export default NewsItem;

