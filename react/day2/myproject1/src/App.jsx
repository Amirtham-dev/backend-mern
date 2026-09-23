


import React, {Component} from 'react';

class Class1 extends Component{
    render(){
        return<h2>THIS IS CLASS COMPONNET1</h2>;
    }
}
class Class2 extends Component{
    render(){
        return<h2>THIS IS CLASS COMPONNET2</h2>;
    }
}
class Class3 extends Component{
    render(){
        return<h2>THIS IS CLASS COMPONNET3</h2>;
    }
}
class Class4 extends Component{
    render(){
        return<h2>THIS IS CLASS COMPONNET4</h2>;
    }
}
class Class5 extends Component{
    render(){
        return<h2>THIS IS CLASS COMPONNET5</h2>;
    }
}

class App extends Component {
    render() {
        return (<>
            <div>

            <h1>this is react app</h1>

            
            <Class1/>
            <Class2/>
            <Class3/>
            <Class4/>
            <Class5/>
        </div>
        
        
        </>

        )
    }
}

export default App;