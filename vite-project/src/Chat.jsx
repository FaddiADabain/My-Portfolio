import React, { useState, useEffect, useRef } from 'react';
import './assets/Chat.css';
import chatLogo from './assets/chat.png';

const FIREBASE_FUNCTION_URL = 'https://firebase-chatgpt-request-osoadq6u5q-uc.a.run.app/';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [chatText, setChatText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);

    useEffect(() => {
        const initialBotMessage = {
            text: 'I am ChatGPT! I will be answering any questions you have about Faddi today. ' +
                'If you need any personal responses please feel free to email me at: fdabain01@manhattan.edu.',
            sender: 'bot'
        };
        setMessages([initialBotMessage]);
    }, []);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setChatText(event.target.value);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (chatText.trim() !== '') {
            const userMessage = { text: chatText, sender: 'user' };
            const botThinkingMessage = { text: 'Let me think about that for a second.', sender: 'bot' };
            setMessages([...messages, userMessage, botThinkingMessage]);
            setChatText('');

            try {
                const response = await fetch(FIREBASE_FUNCTION_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ message: chatText })
                });

                if (response.ok) {
                    const data = await response.json();
                    setMessages(prevMessages => prevMessages.slice(0, -1).concat({ text: data.response, sender: 'bot' }));
                } else {
                    setMessages(prevMessages => prevMessages.slice(0, -1).concat({ text: 'Error: Failed to get a response from the server.', sender: 'bot' }));
                }
            } catch (error) {
                setMessages(prevMessages => prevMessages.slice(0, -1).concat({ text: 'Error: Failed to get a response from the server.', sender: 'bot' }));
            }
        }
    };

    return (
        <div>
            <img className={`bubble ${isOpen ? 'open' : ''}`} onClick={toggleMenu} src={chatLogo} alt="Chat Logo" />

            <div className={`chat-window ${isOpen ? 'open' : ''}`}>
                <div className='chat-close' onClick={closeMenu}>
                    X
                </div>

                <div className='chat-response-window'>
                    {messages.map((message, index) => (
                        <div key={index} className={`chat-message ${message.sender}`}>
                            {message.text}
                        </div>
                    ))}
                    <div ref={chatEndRef}></div>
                </div>

                <form onSubmit={handleFormSubmit} autoComplete="off">
                    <input
                        name='chatText'
                        className='chat-text-box'
                        value={chatText}
                        onChange={handleInputChange}
                        autoComplete="off"
                    />
                </form>
            </div>
        </div>
    );
}

export default Chat;
