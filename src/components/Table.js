import React from 'react';

const TableHeader = () => { 
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Remove</th>
            </tr>
        </thead>
    );
}

const TableBody = props => { 
    const rows = props.linkData.map((row, index) => {
        return (
            <tr key={index}>
                <td>
                    {row.linkName}
                </td>
                <td>
                    <a href={row.url}>
                        {row.url}
                    </a>
                </td>
                <td>
                    <button onClick={() => props.removeLink(index)}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>;
}

const Table = (props) => {
        return(
        <div>
            {TableHeader()}
            {TableBody(props)}
        </div>
        );
}

export default Table;