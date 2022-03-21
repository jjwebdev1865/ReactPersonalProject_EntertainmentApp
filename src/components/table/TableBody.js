import React from 'react';
import '../../static/tableBody.css';
import '../../static/pageStyles.css';

export default class TableBody extends React.Component {

    render() {
        return (
            <tbody>
                {this.props.content.map((item, index) => {
                    return (
                        <tr key={this.props.type + index}>
                            {item.map((test, index) => {
                                return (
                                    <td key={item[0]+"key"+index}>{test}</td>
                                )
                            })}
                        </tr>   
                    )
                })}
            </tbody>
        )
    }
}