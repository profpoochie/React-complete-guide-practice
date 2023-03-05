import "./Card.css";

function Card(props) {
  // don't forget the whitespace on the "card"
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
