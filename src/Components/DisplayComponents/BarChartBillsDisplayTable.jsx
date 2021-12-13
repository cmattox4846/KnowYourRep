import React from 'react';
import { Bar, Bubble, Line, Pie, Radar, Scatter } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { Link } from 'react-router-dom'



const BarChartBillsDisplayTable =(props)=>{
    return(
<div>        {props.senatorBillVoteList.map((senator) => {
            const totalYes = senator.total.yes
            const totalNo = senator.total.no
            const bill = senator.bill.number
            return(
<div className=" Senatortable2">
            <h5>Bill Details</h5>
              <table className="Senatorwrapper1">
              <thead>
                      <th>
                        <div><Link to="/Bills"  > {senator.bill.number} ({senator.description})</Link></div>   <div>
                        Members Voting Position: {senator.position}
                        </div>
                      </th>
              </thead>
                <tbody>
                    <tr>
                      <td>
                      
            <Bar
            height={1}
            width={2}
             data={{
               labels: ["Votes"],

               datasets: [
                 {
                   label: "Total # Yes Votes",
                   data: [totalYes],

                   backgroundColor: [
                     "rgba(255, 99, 132, 0.5)",
                     "rgba(54, 162, 235, 0.2)",
                     "rgba(255, 206, 86, 0.2)",
                     "rgba(75, 192, 192, 0.2)",
                     "rgba(153, 102, 255, 0.2)",
                     "rgba(255, 159, 64, 0.2)",
                   ],
                   borderColor: [
                     "rgba(255, 99, 132, 1)",
                     "rgba(54, 162, 235, 1)",
                     "rgba(255, 206, 86, 1)",
                     "rgba(75, 192, 192, 1)",
                     "rgba(153, 102, 255, 1)",
                     "rgba(255, 159, 64, 1)",
                   ],
                   borderWidth: 1,
                 },
                 {
                   label: "Total # No Votes",
                   data: [totalNo],

                   backgroundColor: ["rgba(255, 206, 86, 0.5)"],
                   borderColor: [
                     "rgba(54, 162, 235, 1)",
                     "rgba(255, 206, 86, 1)",
                   ],
                   borderWidth: 1,
                 },
               ],
             }}
           />
                      </td>
                    </tr>
                </tbody>
              </table>
          </div>
          )
            })}
</div>
    )
}

export default BarChartBillsDisplayTable