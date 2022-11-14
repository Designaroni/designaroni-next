// /* eslint-disable react/display-name */
// import type { ComponentType, useLayoutEffect, useRef } from "react"
// import { motionValue, useTransform } from "framer-motion"

// const scrollOffset = motionValue(0)

// export function withScroll(Component: any): ComponentType {
//   return (props) => {
//     const ref = useRef<HTMLDivElement>(null)

//     // Reset scroll offset on mount
//     useLayoutEffect(() => {
//         scrollOffset.set(0)
//     }, [])

//     const onScroll = () => {
//         if (!ref.current) return
//         scrollOffset.set(ref.current.scrollTop)
//     }

//     return <Component {...props} ref={ref} onScroll={onScroll} />
//   }
// }

// export function withTopByScroll(Component: any): ComponentType<any> {
//   return (props) => {
//     // Fade in when scroll offset hits 50
//     // Finish fade when scroll offset is 200
//     const top = useTransform(scrollOffset, [0, 200], [100, 0])

//     return <Component {...props} style={{ ...props.style, top }} />
//   }
// }

// import type { ComponentType } from "react";

export {};
