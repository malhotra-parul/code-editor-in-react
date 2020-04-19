import styled from 'styled-components'

export const Container = styled.div`
    margin: 20px;
`

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  overflow: scroll;
`

export const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;

  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
`

export const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`

export const Label = styled.label`
  font-weight: bold;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  white-space: nowrap;
  align-items: center;
  cursor: pointer;
`

export const Sample = styled.div`
padding: 16px;
`;
