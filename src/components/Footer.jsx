import { ArrowUp } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <footer className='py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex justify-between flex-wrap items-center'>
      {" "}
      <p className='text-sm text-muted-foreground'> &copy; {new Date().getFullYear()} RoshanTech.co All rights reserved.</p>
      <a href="#hero" className='text-primary-foreground p-2 rounded-full bg-primary hover:bg-primary/20 hover:text-primary transition-colors'>
        <ArrowUp size={20}/>
      </a>
    </footer>
  )
}

export default Footer
