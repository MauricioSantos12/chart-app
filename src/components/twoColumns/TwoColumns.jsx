import React from 'react'
import './twoColumns.scss'
import { Line ,Doughnut} from "react-chartjs-2";

const TwoColumns = ({chartData}) => {
  return (
    <section className='container-two-columns' id="doughnut">
        <div className="container-chart">
            <Line data={chartData} />
        </div>
        <div className="container-chart">
            <Doughnut data={chartData} />
        </div>
    </section>
  )
}

export default TwoColumns