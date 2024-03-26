import React from 'react'
import Events from '../events/events'


export default function Mainevent() {
    const mainevent = [
        {
            src: './assets/carouselImages/05.jpg',
            title: 'Vadhya Dhawani',
            filename: 'vadhyadhawani.pdf',
            filelink:"./assets/rules/vidhyadhwani.pdf",
            id:"13",
            reglink:"https://forms.gle/DpX4mbX2Sdeww2Xq8"
          },
          {
            src: './assets/carouselImages/05.jpg',
            title: 'RAAGA',
            filename: 'raaga.pdf',
            filelink:"./assets/rules/raaga.pdf",
            id:"14",
            reglink:"https://forms.gle/A4VxtTC3G2qNJTqt6"
          },
          {
            src: './assets/carouselImages/05.jpg',
            title: 'NATYA',
            filename: 'natya.pdf',
            filelink:"./assets/rules/natya.pdf",
            id:"15",
            reglink:"https://forms.gle/6QM95bdk4dnc5eKf6"
          },
          {
            src: './assets/carouselImages/05.jpg',
            title: 'Muscle War',
            filename: 'musclewar.pdf',
            filelink:"./assets/rules/musclewar.pdf",
            id:"16",
            reglink:"https://forms.gle/XzEAg9heegorschd8"
          },
    ]
  return (
    <div className='depmaincont specialcont'>
        <div className='depevent'>
        <section className="eventsec">
            <Events dept={mainevent} />
          </section>
    </div>
    </div>
    
  )
}
