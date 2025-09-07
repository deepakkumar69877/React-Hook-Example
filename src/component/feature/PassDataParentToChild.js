import React from 'react';

export const ChildComponent = ({ dataFromParent }) => {
    return (
        <div className="bg-green-200 shadow-md rounded-lg p-6 m-4 max-w-sm mx-auto">
            <h3 className="text-xl font-semibold mb-2">{dataFromParent.name} Component</h3>
            <p className="mb-1"><span className="font-bold">Name:</span> {dataFromParent.name}</p>
            <p className="mb-1"><span className="font-bold">Email:</span> {dataFromParent.email}</p>
            <p className="mb-1"><span className="font-bold">Address:</span> {dataFromParent.address}</p>
            <p className="mb-1"><span className="font-bold">Number:</span> {dataFromParent.phone}</p>
        </div>
    )
}

const PassDataParentToChild = () => {
    let data = [
        {
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
        }
    ];
    return (
        <div className="text-center bg-red-100 min-h-screen py-8">
            <h2 className="text-2xl font-bold mb-6">This is Parent Component</h2>
            <div className="flex flex-wrap justify-center">
                {data.map((item, index) => (
                    <ChildComponent key={index} dataFromParent={item} />
                ))}
            </div>
        </div>
    )
}

export default PassDataParentToChild;
