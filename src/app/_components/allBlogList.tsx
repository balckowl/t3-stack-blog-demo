"use client"

import { api } from "~/trpc/react"


const AllBlogList = ({ userId }: { userId: string }) => {

    const allBlogs = api.post.getAllBlogs.useQuery({ createdById: userId })
    console.log(allBlogs.data)

    return (
        <div>{allBlogs.data?.map((blog, index)=>(
            <div key={index}>{blog.name}</div>
        ))}</div>
    )
}

export default AllBlogList