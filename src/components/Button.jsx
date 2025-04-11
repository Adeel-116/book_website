import  {useEffect, useState} from 'react'

export default function({text, children}) {
    const [animation, setAnimation] = useState(false)
    useEffect(()=>{
        setAnimation(false)
    }, [])

    return (
        <div className={`w-fit relative bg-[#00c0ff] overflow-hidden xl:p-3 p-1.5 group ${children}`}
            onMouseEnter={() => setAnimation(true)}
            onMouseLeave={() => setAnimation(false)}
        >
            {/* Background Animation */}
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>

            {/* Text */}
            <div className="relative z-10">
                <span className="font-medium"
                    style={{color: animation ? "white" : "#ffff"}}
                >
                    {text}
                </span>
            </div>
        </div>
    )
}
