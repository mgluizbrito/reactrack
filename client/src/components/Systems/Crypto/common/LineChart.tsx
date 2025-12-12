import { useState, useEffect } from "react"
import type { IPricesCoinData } from "../../../../interfaces/systems/crypto"
import Chart from "react-google-charts"

interface ILineChartProps {
    historicalData: IPricesCoinData;
}

const LineChart: React.FC<ILineChartProps> = ({ historicalData }) => {

    const [data, setData] = useState([['Data', 'Preços']])

    useEffect(() => {
        let dataCopy = [["Data", "Preços"]]
        if (historicalData.prices.length > 0) {
            historicalData.prices.map((item: any) => {
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0, -5)}`, item[1]])
            })
            setData(dataCopy)
        }
    }, [historicalData])

    return (
        <Chart 
            chartType="LineChart"
            data={(data)}
            options={{
                title: "Preços da Criptomoeda",
                curveType: "function",
                legend: { position: "bottom" },
            }}
        />
    )
}
export default LineChart