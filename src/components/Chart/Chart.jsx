import React from 'react'
import "./Chart.css"
import ChartBar from './ChartBar'
import { styled } from 'styled-components'

const Chart = ({expenses}) => {
  const maximumPrice = 2000;

  const month = [
    {
      label: 'Январь',
      currentPrice: 0,
    },
    {
      label: 'Февраль',
      currentPrice: 0,
    },
    {
      label: 'Март',
      currentPrice: 0,
    },
    {
      label: 'Апрель',
      currentPrice: 0,
    },
    {
      label: 'Май',
      currentPrice: 0,
    },
    {
      label: 'Июнь',
      currentPrice: 0,
    },
    {
      label: 'Июль',
      currentPrice: 0,
    },
    {
      label: 'Август',
      currentPrice: 0,
    },
    {
      label: 'Сентябрь',
      currentPrice: 0,
    },
    {
      label: 'Октябьр',
      currentPrice: 0,
    },
    {
      label: 'Ноябрь',
      currentPrice: 0,
    },
    {
      label: 'Декабрь',
      currentPrice: 0,
    }
  ]

  expenses.forEach((el) => {
    const filteredPrice = el.date.getMonth();
    month[filteredPrice].currentPrice += el.amount;

  })

  return (
    <StyledChart>
      {month.map((el) =>(
        <ChartBar 
          key={el.label}  
          label={el.label}
          currentPrice={el.currentPrice}
          maximumPrice={maximumPrice}
        />

      ))}
    </StyledChart>
  )
}

export default Chart


const StyledChart = styled.div`
  width: 100%;
  padding: 1rem;
  background: #f8dfff;
  height: 151px;
  border-radius: 12px;
  display: flex;
  justify-content:space-between;
`