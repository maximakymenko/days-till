import styled from 'styled-components';

export const StyledClock = styled.div`
position: relative;
display: block;
overflow: hidden;
width: 15%;
background: ${props => props.theme.primaryColorLight};

&.styling {
  min-width: 100px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0 0 10px ${props => props.theme.primaryColorDark};
}

&::before {
  display: block;
  padding-top: 100%;
  content: '';
}

.clock-content {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .background-numbers {
    position: absolute;
    top: 5%;
    left: 5%;
    z-index: 1;
    width: 90%;
    height: 90%;

    .numbers {
      fill: grey;
    }
  }

  .indicator {
    position: absolute;
    bottom: 50%;
    outline: 1px solid transparent;
    border-radius: 10px;
    transform-origin: bottom;

    &.seconds-indicator {
      z-index: 2;
      width: 0.5%;
      height: 37.5%;
      background-color: #dfc48c;
    }

    &.minutes-indicator {
      z-index: 3;
      width: 1%;
      height: 30%;
      background-color: #cd6a51;
    }

    &.hours-indicator {
      z-index: 4;
      width: 1.5%;
      height: 22.5%;
      background-color: #8f9c6c;
    }
  }

  .indicator-cover {
    position: absolute;
    bottom: 48.5%;
    z-index: 5;
    width: 3%;
    height: 3%;
    border-radius: 50%;
    background-color: lightgrey;
  }
}
`;
