import React from 'react';

export default class TableHeader extends React.Component{

    handleHeaderStrings() {
        let headersArray = [];
        for (let i = 0; i < this.props.headers.length; i++) {
            let temp = this.props.headers[i].split("_");
            if (temp.length > 1) {
                let temp_string = ""
                for (let j = 0; j < temp.length; j++) {
                    temp_string = temp_string + temp[j].toUpperCase() + " ";
                }
                headersArray.push(temp_string);
            } else {
                headersArray.push(temp[0].toUpperCase());
            }
        }
        return headersArray;
    }

    render() {
        const headerValues = this.handleHeaderStrings();
        return (
            <thead>
                <tr>
                    {headerValues.map((item) => {
                        return (
                            <th key={item+"header"}>{item}</th>
                        )
                    })}
                </tr>
            </thead>
        )
    }
}