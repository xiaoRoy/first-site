export default function Button({ label, onClick }) {
  const internalOnClicked = (event) => {
    onClick(event);
  };
  return <button onClick={internalOnClicked}>{label}</button>;
}
