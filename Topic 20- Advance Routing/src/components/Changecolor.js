export const Changecolor = ({ isActive }) => ({
  color: isActive ? "green" : "black",
  fontWeight: isActive ? "bold" : "normal",
  textDecoration: 'none'
});
