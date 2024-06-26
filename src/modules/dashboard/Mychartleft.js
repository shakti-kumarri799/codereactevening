import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
    {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
    },
    {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
    },
];

function Mychartleft(props) {
    return (
        <div className='border shadow rounded p-3'>
            <h5>disply: {props.arjun}</h5>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-3'>
                        <select className='form-control'>
                            {props.dropdata.map((d) => {
                                return (
                                    <option>{d.id}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <select className='form-control'>
                            {props.dropdata.map((d) => {
                                return (
                                    <option>{d.title}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <select className='form-control'>
                            {props.dropdata.map((d) => {
                                return (
                                    <option>{d.userId}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className='col-md-3'>
                        <select className='form-control'>
                            {props.dropdata.map((d) => {
                                return (
                                    <option>{d.body}</option>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
            <BarChart
                width={800}
                height={300}
                data={data}

            >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="gray" />
                <Bar dataKey="uv" fill="orange" />
            </BarChart>
        </div>
    )
}

export default Mychartleft