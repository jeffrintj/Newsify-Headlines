import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {

        localStorage.removeItem(`news-${category}`)

        setLoading(true);
        setError("");

        const apiKey = import.meta.env.VITE_API_KEY;

        if (!apiKey) {
            setError("API key is missing");
            setLoading(false);
            return;
        }

        /* ✅ CACHE PER CATEGORY */
        const cacheKey = `news-${category}`;
        const cachedNews = localStorage.getItem(cacheKey);

        if (cachedNews) {
            setArticles(JSON.parse(cachedNews));
            setLoading(false);
            return;
        }

        const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=in&category=${category}&apikey=${apiKey}`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                const articlesData = Array.isArray(data.articles)
                    ? data.articles
                    : [];

                localStorage.setItem(cacheKey, JSON.stringify(articlesData));
                setArticles(articlesData);
            })
            .catch(() => {
                setError("Unable to load news for this category.");
                setArticles([]);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [category]); // 🔥 DEPENDS ON CATEGORY

    return (
        <div className="container news-container">
            <br />
            <h2 className="text-center mb-4">
                Latest <span className="badge bg-danger">Headlines</span>
            </h2>

            {loading && (
                <p className="text-center text-secondary">Loading news...</p>
            )}

            {error && (
                <p className="text-center text-warning fw-semibold">{error}</p>
            )}

            <button
                className="btn btn-danger mb-3"
                onClick={() => {
                    localStorage.removeItem(`news-${category}`);
                    window.location.reload();
                }}
            >
                Refresh News
            </button>


            <div className="row g-4 justify-content-center">
                {!loading &&
                    !error &&
                    articles.map((news, index) => (
                        <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                            <NewsItem
                                title={news.title}
                                description={news.description}
                                src={news.image}
                                url={news.url}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default NewsBoard;
