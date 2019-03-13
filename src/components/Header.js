import React from "react";

const Header = props => (
  <div>
    <table style={tableStyle}>
      <tbody>
        <tr>
          <td style={tdStyle}>{props.children}</td>
          <td style={tdStyle}>{props.message}</td>
          <td style={tdStyle}>Score: {props.score} Highscore: {props.highscore}</td>
        </tr>
      </tbody>
    </table>
    <h4 style={h4Style}>Click on an image to earn points, but don't click the same image twice!</h4>
  </div>
);
const tableStyle = {
backgroundColor: "#282c34",
minHeight: "20vh",
display: "flex",
flexDirection: 'column',
alignItems: 'center',
justifyContent: 'center',
color: '#F3F3F3',
fontSize: '2rem'
}
const tdStyle = {
  textAlign: 'center',
  width: '33.3%'
}
const h4Style = {
  color: "#282c34",
  textAlign: 'center',
  margin: '5px'
}
export default Header;