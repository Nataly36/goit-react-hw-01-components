import styled from '@emotion/styled';
export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  
  margin: 0 auto;
  margin-bottom: 25px;
  padding: 15px;

  max-width: 100%;
  width: 360px;
  
  border-radius: 10px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color:#FFEFD5;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 150px;
  width: 150px;

  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

 
`;

export const Info = styled.p`
  color: #000080;
 font-size: 25px;

`;

export const Name = styled(Info)`
  color: #008080
    font-weight: 500;
`;

export const Tag = styled(Info)`
  color:#4682B4

`;

export const Location = styled(Info)`
  color: #4682B4;
 
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 5px;
  width: 100%;
  background-color:#BA55D3;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;

 
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color:#00FFFF;
  font-size: 18px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: #8B008B;
 
 
`;