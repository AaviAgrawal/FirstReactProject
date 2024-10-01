import React from 'react'

const App = () => {
  return (
    <div>
      <div className='bg-black h-screen w-full text-white '>
        <nav className='flex justify-between items-center'>
          <h1 className='px-24 py-8 text-2xl font-bold'>PROTOFILO.</h1>
          <div className='px-40 h-24 flex items-center gap-20 bg-gray-900'>
            <a href="#">HOME</a>
            <a href="#">ABOUT</a>
            <a href="#">WORKS</a>
            <a href="#">BLOG</a>
            <a href="#">CONTACT</a>
          </div>
        </nav>
        <div className='flex'>
          <div className='w-[34.8%] h-screen bg-black'>
            <div className='absolute top-[50%] left-36'>
            <h1 className='text-5xl'>MY NAME IS</h1>
            <h1 className='text-6xl font-bold'>AAVI AGRAWAL</h1>
            <h1 className='bg-yellow-400 w-[78%] text-black px-8 py-4 font-medium text-3xl'>I'M A UI DEVELOPER</h1>
            </div>
          </div>
          <div className='w-[65.2%]'>
            <img className='h-screen w-full object-cover object-center' src="https://images.unsplash.com/photo-1716674952470-2327f1594cce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9ybWFsJTIwcGhvdG8lMjBvZiUyMGElMjBnaXJsfGVufDB8fDB8fHww" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App