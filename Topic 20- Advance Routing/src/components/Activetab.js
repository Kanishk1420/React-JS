 export const activeLinkStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    fontWeight: isActive ? 'bold' : 'normal',
    marginRight: '15px',
    textDecoration: 'none'
  });