import React from 'react'
import './cards.scss'

const Cards = () => {

    let cardsInfo = [
        {
            color: '#37478e',
            count: '5.3MM',
            name: 'Impressions',
            description: ''
        },
        {
            color: '#3e69a1',
            count: '58K',
            name: 'Clicks',
            description: ''
        },
        {
            color: '#6790c4',
            count: '1.03%',
            name: 'CTR',
            description: '+32% above benchmark'
        },
        {
            color: '#3e82a1',
            count: '%5.07',
            name: 'CPM',
            description: '+12% above benchmark'
        },
        {
            color: '#549dbd',
            count: '$0.15',
            name: 'CPC',
            description: '-7% below benchmarck'
        }
    ]
  return (
    <section className='container-general-cards'>
        <h1>Campaing Performance</h1>
        <div className='container-cards'>
            {
                cardsInfo.map(card => {
                    return (
                        <div className='container-card' style={{'--bgCard': card.color }}>
                            <h1>{card.count}</h1>
                            <p>{card.name}</p>
                            <span>{card.description}</span>
                        </div>
                    )
                })
            }
        </div>
        
        
    </section>
  )
}

export default Cards