import { useEffect,  useState } from "react"

export default function useObserver(refElement) {
    
    const [show, setShow] = useState(false)

    useEffect(() => {
      const showChange =(entries)=> {
          
            const el = entries[0]
            console.log(el.isIntersecting)
            if(el.isIntersecting){
                setShow(true)
                observer.disconnect()
            }else {
                setShow(false)
            }
      }
      const observer = new IntersectionObserver(showChange, {
          rootMargin: '100px'
      })
      observer.observe(refElement.current)
      
    })

    return { show }

}
 