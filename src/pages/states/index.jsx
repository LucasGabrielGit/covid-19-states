// Imports
import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import api from "../../services/api";
export default class States extends Component {
  state = {
    states: [],
    stateInfo: {},
  };

  componentDidMount() {
    this.loadStates();
  }

  loadStates = async () => {
    const resp = await api.get("/api/report/v1");
    const { data, ...stateInfo } = resp.data;

    this.setState({ states: data, stateInfo });
  };

  render() {
    //eslint-disable-next-line
    const { states, stateInfo } = this.state;

    return (
      <div className="App text-center">
        {states.map((state) => (
          <Card
            className="shadow p-2 m-1 text-lefty"
            key={state.uid}
            style={{ margin: "0 auto", display: "inline-block" }}
          >
            <h5>
              {state.state} - <Badge variant="info">{state.uf}</Badge>
            </h5>
            <Card.Text>
              Casos: <Badge variant="warning">{state.cases}</Badge>
              <br />
              Suspeitos: <Badge variant="dark">{state.suspects}</Badge>
              <br />
              Mortes: <Badge variant="danger">{state.deaths}</Badge>
              <br />
              Recuperados: <Badge variant="success">{state.refuses}</Badge>
            </Card.Text>
          </Card>
        ))}
      </div>
    );
  }
}
