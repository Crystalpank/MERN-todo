import { useCallback, useState, useEffect } from "react"


export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [userId, setUserId] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    
    const login = useCallback((jwtToken,id) => {
        setToken(jwtToken)
        setUserId(id)
        setIsAuth(true)
        localStorage.setItem("todo_userData", JSON.stringify({
            id,jwtToken
        }))
    }, []) 

    const logout = () => {
        setToken(null)
        setUserId(null)
        setIsAuth(false)
        localStorage.removeItem("todo_userData")
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("todo_userData"))
        if (data && data.jwtToken) {
            login(data.jwtToken, data.id)
            setIsAuth(true)
        }
    }, [login]);

    return {login, logout, token, userId, isAuth}
}