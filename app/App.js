//import React from "react"
import React,{Component} from "react"
// App is a componnet, and essentially is a class.
// The component will be included in html as <App></App>.
//class App extends React.Component{
class App extends Component{ // we can destructure Comonent out of react.
    render(){
        // return a JSX statement
        return <h1>helle,{100+600}</h1>;
    }
}
export default App;