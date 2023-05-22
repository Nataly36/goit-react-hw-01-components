import styled from '@emotion/styled';
export const Table = styled.table`
  margin: 0 auto;
  margin-bottom: 10px;
  padding: 5px;
 
  max-width: 90%;
  width: 90%;
  border-radius: 10px;
  box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
`;

export const Thead = styled.thead`
  border-radius: 5px;
  background-color:#FFFFE0;
  color: green;
  text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
  
  font-size: 18px;
  text-transform: uppercase;
`;

export const Tr = styled.tr`
  :hover {
   background-color: rgb(115, 120, 175);
-webkit-box-shadow: 0 6px 6px -6px #0E1119;
     -moz-box-shadow: 0 6px 6px -6px #0E1119;
          box-shadow: 0 6px 6px -6px #0E1119;
           color: #ffffff;
    text-shadow: .0625rem .0625rem .0625rem #400075;
`;

export const ExtendedTr = styled(Tr)`
  background-color: ${props =>
    props.idx % 2 === 0 ? props.theme.colors.muted : 'transparent'};
`;


export const Th = styled.th`
  padding: 0.5rem 0;
 
  text-align: left;

 
`;

export const Tb = styled.tbody`
  background-color: white;
`;

export const Td = styled.td`
  padding-left: 5px;
  border-right: 0.125rem solid #e9edff;

  

   

   
  }
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;