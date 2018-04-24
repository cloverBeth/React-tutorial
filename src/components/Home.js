import React, {
  Component
} from 'react';
import PropTypes from 'prop-types';
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      status: 0
    }
    setTimeout(() => {
      this.setState({
        status: 1
      })
    }, 3000);
  }

  onMakeOlder() {
    this.age += 3;
    this.setState({
      age: this.state.age + 3
    })
    console.log(this);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <div>your name is {this.props.name},your age is {this.state.age}</div>
            <p>this status:{this.state.status}</p>
            <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make Me Older</button>
            <div>
              <h4>hobbies</h4>
              <ul>
                {this.props.user.hobbies.map((hobby,i)=> <li key={i}>{hobby}</li>)}
              </ul>
            </div>
            <div>{this.props.children}</div>
          </div>
        </div>
        
      </div>
    );
  }
}
//检测类型
Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  children: PropTypes.element.isRequired
}