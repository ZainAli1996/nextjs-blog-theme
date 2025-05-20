import "../../style.css";
import Image from "next/image";
import Link from "next/link";
import ErrorMessage from "@/components/ErrorMessage";


interface PostData {
    id: number;
    title: string;
    body: string;
    userId: number; // UserId to fetch the (users/blog-author) API
}

interface CommentData {
    id: number;
    name: string;
    email: string;
    body: string;
}

interface AuthorData {
    id: number;
    name: string;
    email: string;
    company: {
        name: string;
    };
}

// Fetch the article using ID from URL
async function getPostById(id: string): Promise<PostData> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!response.ok) {
        throw new Error("Article not found");
    }
    return response.json();
}

// Fetch the comments of the article using ID from URL
async function getCommentsByPostId(postId: string): Promise<CommentData[]> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
    if (!response.ok) {
        throw new Error("Failed to fetch comments");
    }
    return response.json();
}

// Fetch the Author info based on userId
async function getUserById(userId: number): Promise<AuthorData> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("User not found");
    return response.json();
}

// Use params.id to get the article ID from the URL and show the post.
async function PostDetail({ params }: { params: { id: string } }) {

    try {
        const [myArticles, myComments] = await Promise.all([
            getPostById(params.id),
            getCommentsByPostId(params.id)
        ]);

        const myAuthor = await getUserById(myArticles.userId);

        return (
            <div className="dg-container post-container">
                <div className="row row-gap-40">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Image
                            src={`https://picsum.photos/id/${myArticles.id}/800/400`}
                            alt={myArticles.title}
                            width={800}
                            height={400} priority={true} />
                        <h1 className="mb-0">{myArticles.title}</h1>
                        <p>{myArticles.body}</p>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>About Author</h2>
                        <div className="author-info">
                            <h3>
                                <span><b>Written by: </b></span>
                                <Link href={`/authors/${myAuthor.id}`}>{myAuthor.name}</Link>
                            </h3>
                            <p><span><b>Email:</b></span> {myAuthor.email}</p>
                            <p><span><b>Company:</b></span> {myAuthor.company.name}</p>
                        </div>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <h2>Comments On This Post</h2>
                        {myComments.length > 0 ? (
                            myComments.map(({ id, name, email, body }) => (
                                <div key={id} className="comment-card">
                                    <h3><span>User Name:</span> {name}</h3>
                                    <p><span><b>User Email:</b></span> {email}</p>
                                    <p><span><b>Commented:</b></span> {body}</p>
                                </div>
                            ))
                        ) : (
                            <p>No comments available for this post.</p>
                        )}
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
export default PostDetail;