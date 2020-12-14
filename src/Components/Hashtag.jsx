import React, { Component } from 'react'
import "./Todo.css"
import { AppContext } from "../Context/AppContext";

class HashtagView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hasht: ""
        }
    }

    allStorage = () => {

        var values = [],
            keys = Object.keys(localStorage),
            i = keys.length;

        while (i--) {
            values.push(localStorage.getItem(keys[i]));
        }

        return values;
    }

    showHashTags = (hash) => {
        this.setState({
            hasht: hash
        })
        console.log(hash)
    }

    render() {
        const {todo} = this.context
        const { hasht } = this.state
        console.log(hasht)
        return (
            <div>
                <h6>#hashtags</h6>
                {todo && todo.map((item) => {
                    return (
                        <button key={item.id} onClick={() => this.showHashTags(item.hashtag)} className="btnhash" >{item.hashtag}</button>
                    )
                })}
                <div>
                    {todo && todo.filter((match)=> match.hashtag == hasht).map((show) => {
                            return (
                                <div style={{ backgroundColor: "white" }} key={show.id}>
                                    <li style={{alignText:"left"}}>{show.title}</li>
                                </div>
                            )
                    })}
                </div>
            </div>
        )
    }
}

HashtagView.contextType = AppContext;
export default HashtagView