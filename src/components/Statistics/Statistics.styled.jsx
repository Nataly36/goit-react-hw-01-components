import styled from '@emotion/styled';
export const Section = styled.section`
  display: flex;
  flex-direction: column;
background-color:#FFF5EE;
  margin: 0 auto;
 
  max-width: 100%;
  width: 360px;

  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  border-radius: 8px;
`;

export const Title = styled.h2`
  font-size: 45px;
  font-weight: 700;
  color: blue;

  text-align: center;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
   background-color:#1E90FF;
  margin-right:0;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  // gap: 5px;

  
 
  

  padding-top: 5px;
  padding-right: 10px;
  padding-bottom: 5px;
  padding-left: 10px;
  }

  // :last-child {
  //  background-color:#00FFFF;
  }

  // background-color: #2F4F4F;
`;

export const Label = styled.span`
  font-size:20px;
  color:#FFF5EE;
`;

export const Percentage = styled.span`
  font-size:25px;

  color: #FFF5EE;
`;

