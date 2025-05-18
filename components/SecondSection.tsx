'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import axios from "axios";
import Link from 'next/link';
import PostImage from 'next/image';

interface Post {
    id: number;
    title: string;
    body: string;
}

export default function SecondSection() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPosts(response.data.slice(6, 10)); // Show next 5 posts, starting from index # 6
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <section className="second-fold">
            <div className="dg-container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="heading-sec">
                            <p className="hdg-32-dark weight-700 color-white mb-0">Trending Articles</p>
                        </div>
                        <Swiper
                            modules={[Pagination, Navigation, Autoplay]}
                            pagination={{ clickable: true }}
                            navigation
                            autoplay={{
                                delay: 5000,
                                disableOnInteraction: false,
                            }}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                            {posts.map((post) => (
                                <SwiperSlide key={post.id}>
                                    <div className="single-slider shadow-lg">
                                        <Link href={`/posts/${post.id}`}>
                                            <PostImage
                                                src={`https://picsum.photos/id/${post.id}/1400/500`}
                                                alt={post.title}
                                                width={1400}
                                                height={500} />
                                        </Link>
                                        <div className="p-15 bg-white">
                                            <Link href={`/posts/${post.id}`}>
                                                <p className="hdg-30-dark weight-600 two-line">{post.title}</p>
                                            </Link>
                                            <p className="hdg-14-dark weight-400 one-line mb-0">{post.body}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}