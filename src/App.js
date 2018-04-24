import React, {
  Component
} from 'react';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  onGreet(age) {
    alert(age);
  }
  render() {
    const user = {
      name: "Anna",
      hobbies: ["sports", "reading"]
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Home name={"max"} initialAge={12} user={user} greet={this.onGreet}>
              <p>I am a child</p>
            </Home>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;