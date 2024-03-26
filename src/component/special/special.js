import React from 'react'
import Events from '../events/events'


export default function Special() {
    const special = [
        {
            src: './assets/carouselImages/05.jpg',
            title: 'CIVIL',
            description: 'Description for CIVIL',
            id:"13"
          },
          {
            src: './assets/carouselImages/05.jpg',
            title: 'CIVIL',
            description: 'Description for CIVIL',
            id:"14"
          },
          {
            src: './assets/carouselImages/05.jpg',
            title: 'CIVIL',
            description: 'Description for CIVIL',
            id:"15"
          },
    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={special} />
          </section>
    </div>
    </div>
    
  )
}
