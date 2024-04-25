import React from 'react'
import {
  BsFillArchiveFill,
  BsFillBellFill,
  BsFillGrid1X2Fill,
  BsFillPeopleFill,
} from 'react-icons/bs'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from 'recharts'
function Home() {
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]

  return (
    <mains className='main-container'>
      <div className='main-title'>
        <h3>DASHBOAD</h3>
      </div>
      <div className='main-card'>
        <div className='card'>
          <div className='inner-card'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card-icon' />
          </div>
          <h3>300</h3>
        </div>

        <div className='card'>
          <div className='inner-card'>
            <h3>CATEGORIES</h3>
            <BsFillGrid1X2Fill className='card-icon' />
          </div>
          <h3>50</h3>
        </div>

        <div className='card'>
          <div className='inner-card'>
            <h3>CUTOMERS</h3>
            <BsFillPeopleFill className='card-icon' />
          </div>
          <h3>12</h3>
        </div>

        <div className='card'>
          <div className='inner-card'>
            <h3>Alert</h3>
            <BsFillBellFill className='card-icon' />
          </div>
          <h3>300</h3>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' stackId='a' fill='#8884d8' />
            <Bar dataKey='uv' stackId='a' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type='monotone' dataKey='pv' stroke='#8884d8' />
          <Line type='monotone' dataKey='uv' stroke='#82ca9d' />
        </LineChart>
      </div>
    </mains>
  )
}

export default Home
