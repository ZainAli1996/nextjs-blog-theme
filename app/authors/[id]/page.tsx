import "../../style.css";
import Link from "next/link";
import Image from "next/image";
import ErrorMessage from "@/components/ErrorMessage";

interface AuthorData {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

interface PostData {
    id: number;
    title: string;
    body: string;
    userId: number;
}

// Fetch the author using ID from URL
async function getUserById(id: string): Promise<AuthorData> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) {
        throw new Error("Author not found");
    }
    const authorInfo = await response.json();

    return {
        id: authorInfo.id,
        name: authorInfo.name,
        email: authorInfo.email,
        company: {
            name: authorInfo.company.name,
        },
    };
}

// Fetch all posts written by the author
async function getPostsByUserId(userId: string): Promise<PostData[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch posts by author");
    }
    return response.json();
}

// Author detail page
async function AuthorDetail({ params }: { params: { id: string } }) {
    try {
        const [authorInfo, authorArticles] = await Promise.all([
            getUserById(params.id),
            getPostsByUserId(params.id),
        ]);

        return (
            <div className="author-page">
                <div className="dg-container">
                    <div className="row row-gap-40">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h1 className="mb-0">{authorInfo.name}</h1>
                            <p><span><b>Email:</b></span> {authorInfo.email}</p>
                            <p className="mb-0"><span><b>Company:</b></span> {authorInfo.company.name}</p>
                        </div>

                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2>Posts by {authorInfo.name}</h2>
                            <div className="row row-gap-30">
                                {authorArticles.length > 0 ? (
                                    authorArticles.map(({ id, title, body }) => (
                                        <article key={id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                                            <div className="author-articles">
                                                <Link href={`/posts/${id}`}>
                                                    <Image
                                                        src={`https://picsum.photos/id/${id}/600/400`}
                                                        alt={title}
                                                        width={600}
                                                        height={400}
                                                    />
                                                </Link>
                                                <h3>
                                                    <Link href={`/posts/${id}`} className="hdg-26-dark weight-600 min-56-h two-line mb-0">{title}</Link>
                                                </h3>
                                                <p className="two-line mb-0">{body}</p>
                                            </div>
                                        </article>
                                    ))
                                ) : (
                                    <p>This author has not written any posts yet.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } catch (error) {
        console.error(error);
        return (
            <ErrorMessage message="Something went wrong while loading the article." />
        );
    }
}
export default AuthorDetail;