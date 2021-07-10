import useTypewriter from "react-typewriter-hook"
import { useState, useEffect, useRef } from "react"

const typingTitles = [
    "Full Stack Web Developer",
    "Designer",
    "Ready To Work With You"
]

let index = 0

const TypeWriter = () => {
    const [titles, setTitles] = useState("Full Stack Web Developer")
    const intervalRef = useRef({})
    const title = useTypewriter(titles)

    useEffect (
        () => {
            intervalRef.current = setInterval(() => {
                index = index > 2 ? 0 : ++index
                setTitles(typingTitles[index])
            }, 5000)
            return function clear() {
                clearInterval(intervalRef.current)
            }
        },
        [titles]
    )
    return (
        <span>I'm {title}</span>
    )
}