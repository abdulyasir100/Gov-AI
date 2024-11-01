'use server'
 
import { redirect } from 'next/navigation'
 
const Landing = () => {
  return (
    redirect(`/landing`)
  )
}

export default Landing;