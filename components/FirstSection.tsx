'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Image from 'next/image';

// 1. Define the structure of a post
interface FirstSecData {
    id: number;
    title: string;
    body: string;
}

// Component: FirstSection
const FirstSection = () => {
    // 2. Declare state to hold the posts
    const [latestArticles, setLatestArticles] = useState<FirstSecData[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // 3. Fetch posts from API when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setLatestArticles(response.data.slice(0, 6)); // Show first six posts
            } catch (error: any) {
                console.error("Error Fetching Articles:", error);
                setError("Failed to load articles. Please try again later.");
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="first-fold">
            <div className="dg-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-sec">
                            <p className="hdg-32-dark weight-700 mb-0">Hot Now</p>
                        </div>
                        {/* Error Handling Start */}
                        {error && <div className="its-error" role="alert">{error}</div>}
                        {/* Error Handling End */}
                        <div className="row row-gap-30">
                            {/* 4. Render posts using map() */}
                            {latestArticles.map(({id, title, body}, index) => (
                                <article key={id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                    <div className="column-sec">
                                        <Link href={`/posts/${id}`}>
                                            <Image
                                                src={`https://picsum.photos/id/${id}/600/400`}
                                                alt={title}
                                                width={600}
                                                height={400}
                                                priority={index < 3} // First three images
                                            />
                                            <p className="hdg-24-dark weight-600 min-56-h two-line mb-0">{title}</p>
                                        </Link>
                                        <p className="hdg-14-dark weight-400 three-line">{body}</p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FirstSection;
