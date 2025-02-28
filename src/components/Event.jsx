import React from 'react'

export default function Event(props) {
  const page = props.page
  return (
    <section className='px-4 md:px-32 py-12 z-10 relative'>
        {/* <h2 className='font-bold font-poppins text-2xl md:text-4xl uppercase text-center pt-4 pb-12'>!! Upcoming Event !!</h2> */}
        <div className='flex flex-col md:flex-row gap-8 items-center'>
            <div className='space-y-4 md:w-2/3'>
                {page == 'home' && <h2 className='font-medium font-poppins text-2xl uppercase text-[#eee]'>!! Upcoming event !!</h2>}
                <h1 className='font-bold font-poppins uppercase text-5xl md:text-7xl'>Hackathon Name</h1>
                <p className='font-poppins text-[#eee]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan
                et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                <a href={page == 'home' ? "/hack" : '/'} className='text-lg inline-block relative overflow-hidden bg-gradient-to-b from-primary to-secondary group transition p-2 px-5 rounded-full font-bold font-mont'>
                    <div className='inset-0 absolute bg-white group-hover:bg-transparent transition'></div>
                    <span className='z-20 relative text-transparent transition bg-clip-text group-hover:text-white bg-gradient-to-r from-primary to-secondary'>{page == 'home' ? 'KNOW MORE' : 'REGISTER ON COMMUDLE'}</span>
                </a>
            </div>
            <img src="/hack.gif" alt="hack" className='h-80 md:w-1/2 object-contain mix-blend-lighten' />
        </div>
    </section>
  )
}
