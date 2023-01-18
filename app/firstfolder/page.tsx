import React from 'react'
import Link from 'next/link'

export default function folder1() {
  return (
    
      <>
      <div  style={{
          color: "white",
          background: "green",
          fontSize: "50px",
          borderRadius: "10px",
        }}>In Folder1</div>
        <br/>
    <br/>
    <br/>
      <Link href="./firstfolder/secondfolder"> Go to Second Folder </Link>
      </>
  )
}

 