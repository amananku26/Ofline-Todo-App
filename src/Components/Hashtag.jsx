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
        const { todo, hashSet } = this.context
        const { hasht } = this.state
        console.log(todo)
        return (
            <div>
                <h6>#hashtags</h6>
                {hashSet && hashSet.filter(function (item, pos) {
                    return hashSet.indexOf(item) == pos;
                }).map((item) => {
                    return (
                        <button key={item} onClick={() => this.showHashTags(item)} className="btnhash" >{item}</button>
                    )
                })}
                <div>
                    {todo && todo.map((match) => match.tHash.filter((show2) => {
                        if (show2 == hasht) {

                            return (
                                <div style={{ backgroundColor: "white" }} key={match.id}>
                                    <li style={{ alignText: "left" }}>{match.title}</li>
                                </div>
                            )
                        }
                    }))}
                </div>
            </div>
        )
    }
}

HashtagView.contextType = AppContext;
export default HashtagView