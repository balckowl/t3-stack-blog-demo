"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { api } from "~/trpc/react"
import AllBlogList from "./allBlogList"

const Contact = ({ userId }: { userId: string }) => {

    const [name, setName] = useState<string>("")
    const postBlog = api.post.postBlog.useMutation({
        onSuccess: () =>{
            router.refresh()
        }
    })
    const router = useRouter()

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()

        if (name && userId) {
            postBlog.mutate({
                name: name,
                createdById: userId
            })
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" className="border-[1px] border-black w-[300px]" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <button type="submit" className="bg-red-400">投稿</button>
            </form>
        </div>
    )
}

export default Contact