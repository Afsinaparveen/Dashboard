
import React from 'react';
import Records from '../../json-server/records.json';
import BarChart from 'react-easy-bar-chart';
import { Colors } from 'chart.js';

const blanceArray = Records.map(function (obj) {
  return { "id": obj.id, "value": obj.credit - obj.value, "month": obj.month, "color": obj.color };
})
console.log(blanceArray);

function Datacontents() {
  return (
    <>
      <div className="main">
        <div className="container">
          <div className="banner">
            <div className="heading">
              <h1>Accounts Dashboard</h1>
            </div>
            <div className="main-inner">
              <div className="left">
                <form>
                  <table>
                    <tbody>
                      <tr>
                        <th>Month</th>
                        <th>Credit</th>
                        <th>Debit</th>
                        <th>Account balance</th>
                      </tr>
                      {Records.map((item, i) => {
                        return (
                          <tr key={item.account}>
                            {console.log({ item })}
                            <td>{item.month}</td>
                            <td>{item.credit}</td>
                            <td>{item.value}</td>
                            <td>{item.credit - item.value}</td>
                          </tr>
                          
                        )
                      })}
                    </tbody>
                  </table>
                </form>
              </div>
              <div className="right">
                <BarChart
                  xAxis="Months"
                  yAxis="Account balance"
                  height="400"
                  width={800}
                  data={blanceArray}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      {console.log(Records)}
    </>
  );
}
export default Datacontents;