import { Component } from 'react';

// Class Component

class Index extends Component {
    constructor() {
        super();
        this.state = {
          firstName: null,
          isLoading: false
        };
    };
    // Need To Call The Component Did Mount To Use The Side Effect In The Class Component;
    componentDidMount() {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
       .then((response) => {
        return response.json();
       })
       .then((result) => {
        console.log(result);
       })
       .catch((err) => {
        console.log(err);
       })
       .finally(() => {
         console.log("End Of The Fetch");
       });
    };

    // if you want to track the update in state use the 
    componentDidUpdate() {
        console.log("Component Did Update");
    }
    
    
    handleClick() {
        //  this.setState({isLoading: true});
        this.setState({isLoading: this.state.isLoading ? false : true});
    };

    render() {
        return(
            <>
              {this.state.isLoading ? <div>
                <h1>Loding....</h1>
               <button onClick={() => this.handleClick()} >
                    Click Me
               </button>
              </div> : 
              <div>
               <h1>Welcome Back To The Ancient Class Component</h1>
               <button onClick={() => this.handleClick()} >
                    Click Me
               </button>
              </div>  
            }
            </>
        );
    };
};

export default Index;