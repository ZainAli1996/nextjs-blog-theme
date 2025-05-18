'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import PostImage from 'next/image';

// Define interface for post data
interface ThirdSecData {
    id: number;
    title: string;
    body: string;
}

// Component: ThirdSection
const ThirdSection = () => {
    const [posts, setPosts] = useState<ThirdSecData[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data.slice(10, 18)); // Show next 8 posts, starting from index # 11
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="third-fold">
            <div className="dg-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="row row-gap-30">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div className="heading-sec">
                                    <p className="hdg-32-dark weight-700 mb-0">Featured Articles</p>
                                </div>

                                <div className="row row-gap-30">
                                    {posts.map(({ id, title, body }) => (
                                        <div key={id} className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12">
                                            <div className="crisp-posts">
                                                <div className="column-sec">
                                                    <Link href={`/posts/${id}`}>
                                                        <PostImage
                                                            src={`https://picsum.photos/id/${id}/600/400`}
                                                            alt={title}
                                                            width={600}
                                                            height={400} />
                                                        <p className="hdg-20-dark weight-600 min-48-h two-line mb-0">{title}</p>
                                                    </Link>
                                                    <p className="hdg-14-dark weight-400 three-line">{body}</p>
                                                </div>
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
}
export default ThirdSection