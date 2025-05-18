'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import axios from 'axios'
import PostImage from 'next/image';

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

    useEffect(() => {
        // 3. Fetch posts from API when the component mounts
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setLatestArticles(response.data.slice(0, 6)); // Limit to first 6 posts
            } catch (error) {
                console.error("Error Fetching Articles:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="first-fold">
            <div className="dg-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row row-gap-30">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="heading-sec">
                                    <p className="hdg-32-dark weight-700 mb-0">Hot Now</p>
                                </div>
                                <div className="row row-gap-30">
                                    {/* 4. Render posts using map() */}
                                    {latestArticles.map((hotArticles, index) => (
                                        <div key={hotArticles.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="column-sec">
                                                <Link href={`/posts/${hotArticles.id}`}>
                                                    <PostImage
                                                        src={`https://picsum.photos/id/${hotArticles.id}/600/400`}
                                                        alt={hotArticles.title}
                                                        width={600}
                                                        height={400}
                                                        priority={index < 3} // First three images
                                                    />
                                                    <p className="hdg-24-dark weight-600 min-56-h two-line mb-0">{hotArticles.title}</p>
                                                </Link>
                                                <p className="hdg-14-dark weight-400 three-line">{hotArticles.body}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default FirstSection;
