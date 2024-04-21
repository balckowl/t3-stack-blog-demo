import { api } from "~/trpc/server"

const ServerAllBlogList = async ({ userId }: { userId: string }) => {

    const allBlogs = await api.post.getAllBlogs({ createdById: userId })


    return (
        <div>
            {allBlogs.map((blog)=>(
                <div key={blog.id}>{blog.name}</div>
            ))}
        </div>
    )
}

export default ServerAllBlogList