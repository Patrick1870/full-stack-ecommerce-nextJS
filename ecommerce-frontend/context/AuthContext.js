import { createContext, useState } from 'react'
import { useRouter } from 'next/router'

const AuthContext = createContext()

export const AuthProvider = (props) => {

    const [user, setUser] = useState(null)
    const router = useRouter()

    // adds email to user
    const loginUser = async (email) => {
        setUser({ email })
        router.push('/')
    }

    // logout user
    const logoutUser = async () => {
        setUser(null)
        router.push('/')
    }

    return (
        <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext