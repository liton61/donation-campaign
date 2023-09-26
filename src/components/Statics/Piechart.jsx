import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const PieChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

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
                        data: [6, 12],
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

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        }
    }, []);

    return (
        <div>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default PieChart;
