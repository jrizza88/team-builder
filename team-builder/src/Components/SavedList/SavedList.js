import React from 'react';

const SavedList = props => {
    console.log('savedlist props: ', props)
    const {list} = props;
    return (
        <div>
           <h1> Saved List </h1>
            {/* <div>
                <ul>
                    <li>{list.name}</li>
                    <li>{list.email}</li>
                    <li>{list.role}</li>
                </ul>
                
            </div> */}
            {list.map((l, value) => (
                <div>
                    <li>{l.name}</li>
                    <li>{l.email}</li>
                    <li>{l.role}</li>
                </div>
            )) }
                  
        </div>
    )
    }

export default SavedList;

