import React from 'react'
import Link from 'next/link'

export default function folder2() {
  return (
    <>
    <div  style={{
          color: "white",
          background: "red",
          fontSize: "50px",
          borderRadius: "10px",
        }}>In Folder2</div>
        <br/>
    <br/>
    <br/>
    <Link href="./firstfolder/secondfolder/thirdfolder"> Go to Third Folder </Link>
    </>
  )
}
