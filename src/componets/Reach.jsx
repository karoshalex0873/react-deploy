// import React from 'react'

import { useGSAP } from "@gsap/react"
import { FacebookImg, InstagramImg} from "../utils"
import gsap from "gsap"

const Reach = () => {
  useGSAP(() =>
    gsap.to('.link', { opacity: 1, y: 0 })
  )

  return (
    <>
      <div className="">
        <div className="sm:m-30 md:m-5 sm:p-30 link">
          <a href="https://www.instagram.com/tetrag_arts?igsh=MWVsZm1iOHB3cHJlMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={FacebookImg}
              style={{ width: '48px', height: '48px', filter: 'invert(1)', marginRight: '10px' }}
            />
            <h1 className="">Facebook</h1>
          </a>
        </div>
        <div className="sm:m-30 md:m-5 sm:p-30 link">
          <a href="https://www.instagram.com/tetrag_arts?igsh=MWVsZm1iOHB3cHJlMw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={InstagramImg}
              style={{ width: '48px', height: '48px', filter: 'invert(1)', marginRight: '10px' }}
            />
            <h1>Instagram</h1>
          </a>
        </div>
      </div>
    </>
  )
}

export default Reach
