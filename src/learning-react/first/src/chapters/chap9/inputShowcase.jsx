import { createElement } from "react";
import "./styles/input-showcase.css";

function Row({ type, children, name = "input", ...rest }) {
  const element = createElement(name, { type, ...rest }, children);
  return (
    <tr>
      <td className="row-data-cell-definition">
        <pre>
          &lt;{name} {type && `type="${type}"`}/&gt;
        </pre>
      </td>
      <td className="row-data-cell-demo">{element}</td>
    </tr>
  );
}

function Table({ children }) {
  return (
    <table className="showcase-column">
      <thead>
        <tr>
          <th>Element</th>
          <th>Display</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

function InputsShowcase() {
  return (
    <div className="input-showcase-container">
      <Table>
        <Row type="button" value="Button"></Row>
        <Row type="checkbox"></Row>
        <Row type="color"></Row>
        <Row type="date"></Row>
        <Row type="datetime-local"></Row>
        <Row type="email"></Row>
        <Row type="file"></Row>
        <Row type="email"></Row>
        <Row type="image"></Row>
        <Row type="month"></Row>
        <Row type="number"></Row>
        <Row type="password"></Row>
        <Row type="radio"></Row>
      </Table>

      <Table>
        <Row type="range" value="5" min="1" max="10"></Row>
        <Row type="reset"></Row>
        <Row type="search"></Row>
        <Row type="submit"></Row>
        <Row type="tel"></Row>
        <Row type="text"></Row>
        <Row type="time"></Row>
        <Row type="url"></Row>
        <Row type="week"></Row>
        <Row name="textarea"></Row>
        <Row name="select">
          <option value="demo">Choose below...</option>
        </Row>
      </Table>
    </div>
  );
}

export default function InputsShowcaseDemo() {
  return <InputsShowcase></InputsShowcase>;
}
