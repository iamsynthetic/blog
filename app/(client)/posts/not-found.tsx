import Header from '@/app/components/Header'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
        <Header title="404 - page not found" tags={true} />
        <Link href="/">go home</Link>
    </>
  )
}

export default NotFound
