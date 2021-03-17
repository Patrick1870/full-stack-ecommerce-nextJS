import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
    
    const router = useRouter()
    const isHome = router.pathname === "/"

    const goBack = e => {
        e.preventDefault()
        router.back(); // go back one step in history
    }

    return (
        <div className="text-xl p-10 bg-gray-100 mb-20 flex justify-center">
            {!isHome && 
                <div className="absolute left-5"><a href="#" onClick={goBack}> {"<"} Go back</a></div>}
            <Link href="/">
                <a>
                    <h1>
                        Full Stack Ecommerce Store
                    </h1>
                </a>
            </Link>
        </div>
    )

}