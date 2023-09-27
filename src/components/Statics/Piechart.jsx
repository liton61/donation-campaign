import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [data, setData] = useState([]);
    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }
        const myChartRef = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(myChartRef, {
            type: "pie",
            data: {
                labels: ["Your Donation", "Total Donation"],
                datasets: [
                    {
                        data: [data.length, 12 - data.length],
                        backgroundColor: [
                            'rgba(0, 196, 159, 1)',
                            'rgba(255, 68, 74, 1)'
                        ],
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            },
        });
        const donationData = localStorage.getItem('donation');
        if (donationData) {
            const parsedData = JSON.parse(donationData);
            setData(parsedData);

        }

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }

    }, [data.length]);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PieChart;
