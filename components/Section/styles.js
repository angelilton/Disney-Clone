import styled from 'styled-components'

export const Title = styled.h3``

export const Card = styled.div`
  display: flex;
  position: relative;
  overflow: auto;
  margin: 0 auto;

  ::-webkit-scrollbar {
    height: 7px;
    width: 600px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #e5e5e0;
  }
`
