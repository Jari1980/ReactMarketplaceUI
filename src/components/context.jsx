import React, {createContext, useContext, useState} from "react"

const CounterContext = createContext()

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0)
    const [background, setBackground] = useState("linear-gradient(0deg,#f0e6e600, #d6d4dd 75%,#0000FF)")
    const [heading, setHeading] = useState("blue")

    return (
        <CounterContext.Provider value={{counter, setCounter, background, setBackground, heading, setHeading}}>
            {children}
        </CounterContext.Provider>
    )
}

export const useCounterContext = () => useContext(CounterContext)