// import { useState } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'


function App() {
  interface footerInterface {
    title: string,
    id: number,
  }
  let headerItems: footerInterface[] = [{title: 'Homepage', id: 1}, {title: 'Book With Us', id: 2}, {title: 'About Us', id: 3}]
  let socialMedia: footerInterface[] = [{title: 'Facebook', id: 1}, {title: 'Instagram', id: 2}, {title: 'Tik Tok', id: 3}]
  return (
    <div className="overallStyling">
      <Header title="Opal's Cottage OF DOOM" headerList={headerItems}/>
      <Body />
      <Footer socialMedia={socialMedia}/>
    </div>
  )
}

export default App