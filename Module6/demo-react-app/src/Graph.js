import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarController, BarElement } from 'chart.js';
Chart.register(CategoryScale, LinearScale, BarController, BarElement);

const Graph = () => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState('regions'); // default display data to regions

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://api.worldbank.org/v2/country?format=json&per_page=1000"
      );
      const data = await response.json();
      setData(data[1]);
    };
    fetchData();
  }, []);

  const regions = {};
  const incomeLevels = {};

  data.forEach((item) => {
    if (item.region.value in regions) {
      regions[item.region.value] += 1;
    } else {
      regions[item.region.value] = 1;
    }

    if (item.incomeLevel.value in incomeLevels) {
      incomeLevels[item.incomeLevel.value] += 1;
    } else {
      incomeLevels[item.incomeLevel.value] = 1;
    }
  });

  const chartData = {
    labels: displayData === 'regions' ? Object.keys(regions) : Object.keys(incomeLevels),
    datasets: [
      {
        label: displayData === 'regions' ? "Region" : "Income Level",
        data: displayData === 'regions' ? Object.values(regions) : Object.values(incomeLevels),
        backgroundColor: displayData === 'regions' ? "rgba(75,192,192,1)" : "rgba(255,99,132,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 1,
      }
    ],
  };

  return (
    <div>
      <div className='componentBox'>
        <h2>World Bank API Graph</h2>
        <div>
          <button onClick={() => setDisplayData('regions')}>Regions</button>
          <button onClick={() => setDisplayData('incomeLevels')}>Income Levels</button>
        </div>
        <Bar
          key={Math.random()}
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: 'Number of Countries',
                  font: {
                    size: 16,
                    weight: 'bold'
                  }
                }
              },
              x: {
                title: {
                  display: true,
                  text: displayData === 'regions' ? 'Region' : 'Income Level',
                  font: {
                    size: 16,
                    weight: 'bold'
                  }
                }
              }
            },
            plugins: {
              title: {
                display: true,
                text: "Region vs Income Level",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Graph;
