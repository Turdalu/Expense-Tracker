import React from 'react'
import { styled } from 'styled-components'

function ChartBar({label,currentPrice,maximumPrice}) {
    const fillHeight = (100 * currentPrice) / maximumPrice

  return (
    <StyledChrtBar>
        <ChartBarInner>
            <ChartBarFill persent={fillHeight}></ChartBarFill>
        </ChartBarInner>
        <ChartBarLabel>{label}</ChartBarLabel>
    </StyledChrtBar>
  )
}
 
export default ChartBar

const StyledChrtBar = styled.div`
    height: 100px;
    display: flex;
    flex-direction:column;
`
const ChartBarInner = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    border: 1px solid #363636;
    background: #a892ee;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: flex-end;
    
    
`
const ChartBarFill = styled.div`
    width: 100%;
    background: #4826B9;
    transition: all 0.3s ease-out;
    height: ${({persent}) => persent}%;
    
`
const ChartBarLabel = styled.p`
    font-weight: bold;
    font-size: 0.5rem;
    
`

