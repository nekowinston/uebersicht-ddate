import { styled } from "uebersicht";
import { DateTime } from "./lib/luxon";
import { DDate } from "./lib/ddate";

export const refreshFrequency = 1000 * 1;
export const command = (dispatch) => {
  dispatch();
};
export const updateState = (event, previousState) => {
  return event;
};

// global Styles
export const className = `
  left: 49.695%;
  top: 25.45%;
  line-height: 1;
  -webkit-font-smoothing: antialiased;

  @font-face {
    font-family: 'Steelfish';
    src: url('clock.widget/steelfish rg.otf');
  }
  @font-face {
    font-family: 'laCompagnieDesOmbres';
    src: url('clock.widget/la Compagnie des Ombres.ttf');
  }
`;

const baseSize = 3.0;

const Container = styled.div`
  padding-top: 1.2rem;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 8.27rem;
  height: 8.27rem;
  scale: 100% 90%;
  translate: -50% -50%;
  background: transparent;
  overflow: hidden;
  text-align: center;
  position: relative;
  /*background-color: rgba(255, 0, 0, 30%);*/
`;

const Time = styled.div`
  font-family: "Steelfish";
  font-size: ${baseSize * 1.5}rem;
  margin-bottom: -1.4rem;
  color: #f8bd96;
  position: relative;
  z-index: 0;
`;
const Day = styled.div`
  font-family: "laCompagnieDesOmbres";
  font-size: 2.5rem;
  color: #161321;
  white-space: nowrap;
  z-index: 999;
  position: relative;
`;
const Date = styled.div`
  font-family: "Steelfish";
  font-size: ${baseSize * 0.65}rem;
  margin-top: -0.7rem;
  color: #6f6d7f;
  text-transform: uppercase;
  white-space: nowrap;
  position: relative;
  z-index: 0;
`;

export const render = () => {
  const now = DateTime.now();
  const dd = new DDate();

  return (
    <Container>
      <Time>{now.toLocaleString(DateTime.TIME_24_SIMPLE)}</Time>
      <Day>{dd.date.day.l}</Day>
      <Date>
        {dd.date.season.l} {dd.date.date}
      </Date>
    </Container>
  );
};
