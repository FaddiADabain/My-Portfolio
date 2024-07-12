import React, { useState, useEffect, useRef } from 'react';
import './assets/Chat.css';
import chatLogo from './assets/images/chat.png';
import chatSubmitImage from './assets/images/SubmitButtonImage.png';

const FIREBASE_FUNCTION_URL = 'https://firebase-chatgpt-request-osoadq6u5q-uc.a.run.app/';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [chatText, setChatText] = useState('');
    const [messages, setMessages] = useState([]);
    const chatEndRef = useRef(null);
    const textAreaRef = useRef(null);

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

    useEffect(() => {
        adjustTextAreaHeight();
    }, [chatText]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleInputChange = (event) => {
        setChatText(event.target.value);
        adjustTextAreaHeight();
    };

    const adjustTextAreaHeight = () => {
        const textArea = textAreaRef.current;
        if (textArea) {
            textArea.style.height = 'auto';
            textArea.style.height = `${textArea.scrollHeight}px`;
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        if (chatText.trim() !== '') {
            const userMessage = { text: chatText, sender: 'user' };
            const botThinkingMessage = { text: 'Let me think about that for a second.', sender: 'bot' };
            const updatedMessages = [...messages, userMessage, botThinkingMessage];
            setMessages(updatedMessages);
            setChatText('');

            try {
                const response = await fetch(FIREBASE_FUNCTION_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        message: chatText,
                        history: updatedMessages.map(msg => ({
                            role: msg.sender === 'user' ? 'user' : 'assistant',
                            content: msg.text
                        }))
                    })
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

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleFormSubmit(event);
        }
    };

    return (
        <div className='chat-bubble'>
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
                    <textarea
                        ref={textAreaRef}
                        name='chatText'
                        className='chat-text-box'
                        value={chatText}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoComplete="off"
                        rows="1"
                        style={{ height: '30px' }}
                    />

                    <img className='chat-submit-button' onClick={handleFormSubmit} src={chatSubmitImage} alt='Send' />
                </form>
            </div>
        </div>
    );
}

export default Chat;
