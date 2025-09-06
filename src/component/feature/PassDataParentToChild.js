import React from 'react';

export const ChildComponent = ({ dataFromParent }) => {
    return (
        <div>
            <h3>This is {dataFromParent.name} component</h3>
            <p> name: {dataFromParent.name} </p>
            <p> email: {dataFromParent.email} </p>
            <p> address: {dataFromParent.address} </p>
            <p> number: {dataFromParent.phone} </p>
        </div>
    )
}

const PassDataParentToChild = () => {
    let data = [{
        name: "deepak",
        email: "deepak@gmail.com",
        address: "Sitamarhi",
        phone: 8929366866,
    },
    {
        name: "chandan",
        email: "chandan@gmail.com",
        address: "Sheohar",
        phone: 8929366866,
    },
    {
        name: "Rahul",
        email: "rahul@gmail.com",
        address: "patna",
        phone: 8999999999,
    }];
    return (
        <div style={{ textAlign: "center" }}>
            <h2>This is Parent Component</h2>
            {/* const data = {JSON.stringify(data)} */}
            {data.map((item, index) => (
                <ChildComponent key={index} dataFromParent={item} />
            ))}
        </div>
    )
}

export default PassDataParentToChild;
