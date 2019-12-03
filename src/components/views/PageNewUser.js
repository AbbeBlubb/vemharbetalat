import React from 'react';


export class PageNewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    };

  render() {
    return (
        <div className='padding-top-bottom-max-height-650px'>
          New user
          <br/>
          Här ska user få sina inloggningsuppgifter samt fylla i några uppgifter

          <div>Register</div>

          {this.state.error
              ? <div>{this.state.error.message}</div>
              : null
          }

          <form onSubmit={e => {return}}>
            <input
                type='text'
                name='email'
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange} />
            <input
                type='password'
                name='password'
                placeholder='Password'
                value={this.state.password}
                onChange={this.handleChange} />
            <button>Register</button>
          </form>

        </div>
    );
  }
}
