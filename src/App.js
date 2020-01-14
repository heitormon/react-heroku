import React, { Component } from 'react';
import './css/pure-min.css';
import './css/menus-core-min.css';
import './css/side-menu.css'
import $ from 'jquery'
class App extends Component {
  constructor() {
    super();
    this.state = { lista: [], empresa: [], size: [] };
  }

  componentWillMount() {
    $.ajax({
      url: "https://service-java-nobu.herokuapp.com/pessoa",
      dataType: 'json',

      success: function (resposta) {
        console.log(this);
        this.setState({ lista: resposta });
      }.bind(this)
    });
  }
  enviaForm(evento){
    let xd = '3';
    evento.preventDefault();
    const min = Math.ceil(0);
    const max = Math.floor(20);
    const a = Math.floor(Math.random() * (max - min)) + min
    for (let index = 0; index < a; index++) {
      xd = xd + '=';
      
    }
    xd = xd +'D';
    alert(xd)
    // this.setState({size: xd})   
  }
  render() {
    return (
        <div id="main">
          <div class="header center">
            <h1>SITE Xd</h1>
          </div>
          <div class="content center" id="content">
            <div class="pure-form pure-form-aligned">
              <form class="pure-form-stacked" onSubmit={this.enviaForm} method="post">
                <div class="pure-control-group">
                  <label htmlFkor="nome">Nome</label>
                  <input id="nome" type="text" name="nome" value="" />
                </div>
                <div class="pure-control-group">
                  <button type="submit" class="pure-button pure-button-primary">Calcular Xd</button>
                </div>
              </form>
            </div>
            <div>
              <table class="pure-table">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.lista.map((autor) => {
                      return (
                        <tr key={autor.id}>
                          <td>{autor.nome}</td>
                          <td>{autor.email}</td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
    );
  }
}

export default App;