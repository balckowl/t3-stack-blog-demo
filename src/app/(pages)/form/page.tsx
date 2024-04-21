"use client"

import { useSession } from "next-auth/react"
import AllBlogList from "~/app/_components/allBlogList"
import Contact from "~/app/_components/contact"

const page = () => {

    const { data: session } = useSession()

    return (
        <div>
            {session?.user.id && (
                <>
                    <Contact userId={session?.user.id} />
                    <AllBlogList userId={session?.user.id} />
                </>
            )}
        </div>
    )
}

export default page