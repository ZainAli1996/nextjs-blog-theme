import "../../style.css";
import Link from "next/link";

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
    const [authorInfo, authorArticles] = await Promise.all([
        getUserById(params.id),
        getPostsByUserId(params.id),
    ]);

    return (
        <div className="dg-container post-container">
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
                                <div key={id} className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="author-articles">
                                        <h3>
                                            <Link className="hdg-24-dark weight-600 min-56-h two-line mb-0" href={`/posts/${id}`}>{title}</Link>
                                        </h3>
                                        <p className="two-line mb-0">{body}</p>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>This author has not written any posts yet.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AuthorDetail;