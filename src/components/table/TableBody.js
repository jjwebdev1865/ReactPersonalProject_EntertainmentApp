import React from 'react';
import '../../static/books/tableBody.css';
import '../../static/pageStyles.css';

export default class TableBody extends React.Component {

    render() {
        return (
            <tbody>
                {this.props.content.map((item, index) => {
                    return (
                        <tr key={this.props.type + index}>
                            {item.map((test, index) => {
                                let ans = Array.isArray(test)
                                if (ans === true) {
                                    if (test.length === 0) {
                                        return (
                                            <td key={item[0]+"key"+index}>{test.length}</td>
                                        )
                                    } else {
                                        let sum = 0;
                                        for (let j = 0; j < test.length; j++) {
                                            sum = sum + test[j]
                                        }
                                        let aveRate = parseFloat(sum / test.length).toFixed(2)
                                        return (
                                            <td key={item[0]+"key"+index}>{aveRate}</td>
                                        )
                                    }
                                } else {
                                    return (
                                        <td key={item[0]+"key"+index}>{test}</td>
                                    )
                                }
                            })}
                        </tr>   
                    )
                })}
            </tbody>
        )
    }
}