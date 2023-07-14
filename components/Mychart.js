import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Line, Chart } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'
// import { Chart }            from 'react-chartjs-2'
let empTime = []
let empValue = []
let empTime2 = []
let empValue2 = []

const DynamicChart = () => {

    const [chrtState, setChrtState] = useState({
        loading: true,
        drip: null,
      });

      function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp * 1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        // var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
        var time = hour + ':' + min;
        return time;
      }
    
    useEffect(async () => {
    setChrtState({ loading: true });
    const apiUrl = `https://api.drip.community/prices`;
    await axios
        .get(apiUrl)
        .then((res) => {
            
            res.data.map(time_res => {
            
                
                    empTime.push(timeConverter(time_res["time"]))
                    empValue.push(time_res["value"])
                
                    setChrtState({ loading: false });
            } )
           
        });
    }, [setChrtState]);

    const empTimeMin = empTime.slice(-1440)
    const empValueMin = empValue.slice(-1440)
    let empTime2 = empTimeMin.filter((element, index) => {
        return index % 48 === 0;
    })
    let empValue2 = empValueMin.filter((element, index) => {
        return index % 48 === 0;
      })
      
const data = {
    labels: empTime2,
    datasets: [
        {
            label: 'Drip Price',
            fill: false,
            lineTension: 0.5,
            backgroundColor: '#db86b2',
            borderColor: '#B57295',
            borderCapStyle: 'butt',
            borderDashOffset: 0.0,
            borderJoinStyle: '#B57295',
            pointBorderColor: '#B57295',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#B57295',
            pointHoverBorderColor: '#B57295',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data:empValue2
        },
    ],
}

const options = {
    maintainAspectRatio: true,
    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            grid: {
                borderDash: [3, 3],
            },
            // beginAtZero: true, // this works
        },
    },
    plugins: {
        legend: {
            display: false
        }
    }
}

if (chrtState.loading) {
    return <span>Loading</span>;
  }

    
    return (
    <div>
    <Line
        data={data}
        options={options}
            />
            
    </div>
)

}

export default DynamicChart

// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { Line, Chart } from 'react-chartjs-2'
// import { Chart as ChartJS } from 'chart.js/auto'
// // import { Chart }            from 'react-chartjs-2'
// const DynamicChart = () => {
//     const [chartData, setChartData] = useState({});
//     const [employeeSalary, setEmployeeSalary] = useState([]);
//     const [employeeAge, setEmployeeAge] = useState([]);

//     const data1 = () => {
//         let empSal = [];
//         let empAge = [];

    
//         axios.get("https://api.drip.community/prices/")
//         .then(res => {
//             console.log("axios", res);
//             for (const dataObj of res) {
//                 empSal.push(parseInt(dataObj.time));
//                 empAge.push(parseInt(dataObj.value));
//                 setEmployeeSalary(empSal)
//                 setEmployeeAge(empAge)
                
//             }
//             setChartData({
//                 labels: employeeAge,
//                 datasets: [{
//                     label: 'level of thicceness',
//                     data: employeeSalary,
//                     fill: false,
//                     lineTension: 0.5,
//                     backgroundColor: '#db86b2',
//                     borderColor: '#B57295',
//                     borderCapStyle: 'butt',
//                     borderDashOffset: 0.0,
//                     borderJoinStyle: '#B57295',
//                     pointBorderColor: '#B57295',
//                     pointBackgroundColor: '#fff',
//                     pointBorderWidth: 1,
//                     pointHoverRadius: 5,
//                     pointHoverBackgroundColor: '#B57295',
//                     pointHoverBorderColor: '#B57295',
//                     pointHoverBorderWidth: 2,
//                     pointRadius: 1,
//                     pointHitRadius: 10,
//                 }]
//             });
//         })
//         .catch(err => {
//             console.log(err);
//         })
        
//     }

// const data = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     datasets: [
//         {
//             label: 'My Balance',
//             fill: false,
//             lineTension: 0.5,
//             backgroundColor: '#db86b2',
//             borderColor: '#B57295',
//             borderCapStyle: 'butt',
//             borderDashOffset: 0.0,
//             borderJoinStyle: '#B57295',
//             pointBorderColor: '#B57295',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: '#B57295',
//             pointHoverBorderColor: '#B57295',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [500, 300, 400, 500, 800, 650, 700, 690, 1000, 1200, 1050, 1300],
//         },
//     ],
// }

// const options = {
//     maintainAspectRatio: true,
//     scales: {
//         x: {
//             grid: {
//                 display: false,
//             },
//         },
//         y: {
//             grid: {
//                 borderDash: [3, 3],
//             },
//             // beginAtZero: true, // this works
//         },
//     },
//     plugins: {
//         legend: {
//             display: false
//         }
//     }
// }

//     return (
//     <div>
//     <Line
//         data={data}
//         options={options}
//             />
            
//     </div>
// )

// }

// export default DynamicChart