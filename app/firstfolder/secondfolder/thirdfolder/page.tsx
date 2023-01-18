'use client';
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';


export default function folder3 () {
  const router = useRouter();
  return (
    <>
    <div  style={{
          color: "white",
          background: "blue",
          fontSize: "50px",
          borderRadius: "10px",
        }}>In Folder3 </div>
        <br/>
    <br/>
    <br/>
    <Link href="../"> Go to Main </Link>
    <br/>
    <br/>
    <br/>
    <button type ="button" onClick = {() => router.push('../')}> Go to Main Page </button>

    </>
   
    
  )
}
