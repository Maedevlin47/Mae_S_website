import React, { useState } from 'react';


function MessageMe () {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
    const { name, value } = event.target;
    
        if (name === 'full_name') {
            setFullName(value);
        } else if (name === 'email') {
            setEmail(value);
        } else if (name === 'message') {
            setMessage(value);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const data = {
            message: {
                full_name: fullName,
                email: email,
                message: message
            }
        };

        fetch('/messages', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
            })
            .then(response => {
                if (response.ok) {
                    setFullName('');
                    setEmail('');
                    setMessage('');
                return response.json();
                } else {
                throw new Error('Something went wrong');
                }
            })
            .then(data => console.log(data.message))
            .catch(error => console.error(error));
        }

    
    return (
        <div className="pl-60 pr-32 w-full h-full">
            <form onSubmit={handleSubmit}>
                <div class="flex flex-wrap -mx-3">
                    <div class="w-full md:w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-full-name">
                            Full Name:
                            <input className="appearance-none block w-full bg-stone-50 text-gray-900 border border-amber-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Bob Smith"
                                name="full_name"
                                value={fullName}
                                onChange={handleChange}
                            />
                            <p className="text-blue-800 text-s italic pb-2">Please fill out this field.</p>
                        </label>
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-email">
                            Email:
                        {/* </label> */}
                            <input className="appearance-none block w-full bg-stone-50 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                            />
                        </label>

                </div>
                    </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-s font-bold mb-2" for="grid-message">
                            Message:
                        <input className="no-resize appearance-none block w-full bg-stone-50 text-gray-900 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message" type="message"
                                name="message"
                                value={message}
                                onChange={handleChange}
                        />
                        </label>
                </div>
                    </div>
                <br />
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3">
                        <button className="shadow bg-amber-600 hover:bg-amber-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" 
                            type="submit">
                            Send
                        </button>
                </div>
                    <div className="md:w-2/3"></div>
                </div>
            </form>
        </div>
        );
    }



export default MessageMe;








// pl-60 pr-32 w-full h-full

// const handleSubmit = (event) => {
//     event.preventDefault();
//     fetch('/api/messages', {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json',
//         },


// .then((response) => response.json())
//             .then((data) => {
//             console.log('Success:', data);
//                 setFullName('');
//                 setEmail('');
//                 setMessage('');
//             })
            
//             .catch((error) => {
//             console.error('Error:', error);
//             });
//         };




// function MessageMe() {

    // const [fullName, setFullName] = useState('')
    // const [email, setEmail] = useState('')
    // const [message,setMessage] = useState('')

    // const [sentMessage, setSentMessage] = useState({fullName: '', email: '', message: ''})

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('/messages', {
    //             method: 'POST',
    //             headers: {
    //             'Content-Type': 'application/json',
    //             },
    //         body: JSON.stringify({ 
    //             fullName: fullName, 
    //             email: email, 
    //             message: message, 
    //         }),
    //     })
    //         .then((r) => {
    //             if (r.ok) {
    //                 r.json().then((data) => {
    //                     console.log('Success:', data);
    //                         setFullName('');
    //                         setEmail('');
    //                         setMessage('');
    //         })
    //             } else {
    //                 r.json((error) => {
    //                     console.error('Error:', error);
    //                 });
    //             // r.json((error).then('Error:', error);
    //         }
    //     });
    //     };



    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('/messages', {
    //             method: 'POST',
    //             headers: {'Content-Type': 'application/json'},
    //         body: JSON.stringify(sentMessage),
    //     })
    //     .then((r) => {
    //         if (r.ok) {
    //             r.json().then((data) => {
    //                 setSentMessage(data);
    //             } )
    //         } else {
    //             r.json().then(console.warn);
    //         }
    //     })
    // }





    // const [sentMessage, setSentMessage] = useState({full_name: '', email: '', message: ''})

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     fetch('/messages', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(sentMessage),
    //     })
    //     .then((r) => {
    //         if (r.ok) {
    //             r.json().then((data) => {
    //             console.log('Response data:', data);
    //             setSentMessage(data);
    //         })
    //         } else {
    //             r.json().then((error) => {
    //                 console.log(error);
    //                 alert(error.error);
    //         });
    //         }
    //     })
    //     .catch((error) => {
    //         console.error('Fetch error:', error);
    //     });
    // }




    // const [fullName, setFullName] = useState('');
    // const [email, setEmail] = useState('');
    // const [message, setMessage] = useState('');

    // const handleChange = (event) => {
    // const { name, value } = event.target;
    
    //     if (name === 'full_name') {
    //         setFullName(value);
    //     } else if (name === 'email') {
    //         setEmail(value);
    //     } else if (name === 'message') {
    //         setMessage(value);
    //     }
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();

    // const formData = new FormData();
    // formData.append('full_name', fullName);
    // formData.append('email', email);
    // formData.append('message', message);

    // fetch('/messages', {
    //     method: 'POST',
    //     body: formData,
    // })
    //     .then(response => {
    //         if (response.ok) {
    //             setFullName('');
    //             setEmail('');
    //             setMessage('');
    //             return response.json();
    //         } else {
    //             throw new Error('Something went wrong');
    //         }
    //     })
    //     .then(data => console.log(data.message))
    //     .catch(error => console.error(error));
    // };