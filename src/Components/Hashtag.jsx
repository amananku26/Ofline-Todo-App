import React, { Component } from 'react'
import "./Todo.css"
import { AppContext } from "../Context/AppContext";

class HashtagView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            ShowID: ""
        }
    }

     allStorage = () =>  {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;
    
        while ( i-- ) {
            values.push( localStorage.getItem(keys[i]) );
        }
    
        return values;
    }



    componentDidMount() {
        var items = localStorage.getItem("todolist")
        var obj = JSON.parse(items)
        this.setState({
            data: obj
        })
    }

    showHashTags = (id) => {
        this.setState({
            ShowID: id
        })
    }

    render() {
        // console.log(this.allStorage())
        // console.log("hash check", this.context)
        const { data, ShowID } = this.state
        return (
            <div>
                {data && data.map((item) => {
                    return (
                        <button key={item.id} onClick={() => this.showHashTags(item.id)} className="btnhash" >{item.hashtag}</button>
                    )
                })}
                <div>
                    {data && data.map((show) => {
                        if (show.id == ShowID) {
                            return (
                                <div style={{ backgroundColor: "white" }} key={show.id}>
                                    {show.title}
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        )
    }
}

HashtagView.contextType = AppContext;
export default HashtagView