/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [data, setData] = useState([]);
    let total = 12;
    const dataPercentage = (data.length / total) * 100;
    const remainingPercentage = 100 - dataPercentage;

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
                        data: [dataPercentage, remainingPercentage],
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
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const value = context.dataset.data[context.dataIndex];
                                return `${value.toFixed(2)}%`;
                            },
                        },
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
