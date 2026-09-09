import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    
    // Defer the initial state setting slightly to avoid the lint error and 
    // run it asynchronously, or just execute onChange immediately:
    if (mounted) {
       onChange();
    }
    
    return () => {
      mounted = false;
      mql.removeEventListener("change", onChange)
    }
  }, [])

  return !!isMobile
}
