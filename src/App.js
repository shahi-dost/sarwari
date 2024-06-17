import React, { useState, useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ContactForm from './ContactForm';
import './App.css';
import ishaqPro from "./images/ishaqTeam.png";

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={toggleAnswer}>
                {question}
            </button>
            <div
                className="faq-answer-wrapper"
                style={{
                    maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : '0px',
                    transition: 'max-height 0.5s ease'
                }}
            >
                <div className="faq-answer" ref={answerRef}>
                    <ul>
                        {answer.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const FAQList = () => {
    const faqs = [
        {
            "question": "Document Translation",
            "answer": [
                "Legal documents (contracts, agreements, court documents)",
                "Medical records and reports",
                "Technical manuals and user guides",
                "Business documents (reports, correspondence, marketing materials)",
                "Educational materials (textbooks, research papers)"
            ]
        },
        {
            "question": "Localization Services",
            "answer": [
                "Website localization to adapt content for Pashto/Dari-speaking audiences",
                "Software localization to ensure user interfaces and help guides are accessible",
                "Multimedia localization, including subtitles and voice-overs for videos"
            ]
        },
        {
            "question": "Transcription Services",
            "answer": [
                "Transcribing audio and video recordings in Pashto/Dari",
                "Providing written transcripts for legal, medical, and academic purposes"
            ]
        },
        {
            "question": "Subtitling and Voice-over",
            "answer": [
                "Creating subtitles for films, TV shows, and online videos in Pashto/Dari",
                "Providing voice-over services for multimedia content"
            ]
        },
        {
            "question": "Proofreading and Editing",
            "answer": [
                "Reviewing and correcting translated documents to ensure accuracy and quality",
                "Ensuring consistency and adherence to industry standards and client requirements"
            ]
        }];

    return (
        <div className="faq-list">
            {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
        </div>
    );
};

const InterpretsItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    const answerRef = useRef(null);

    const toggleAnswer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="interprets-item">
            <button className="interprets-question" onClick={toggleAnswer}>
                {question}
            </button>
            <div
                className="interprets-answer-wrapper"
                style={{
                    maxHeight: isOpen ? `${answerRef.current.scrollHeight}px` : '0px',
                    transition: 'max-height 0.5s ease'
                }}
            >
                <div className="interprets-answer" ref={answerRef}>
                    <ul>
                        {answer.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const InterpretsList = () => {
    const interprets = [
        {
            "question": "Simultaneous Interpretation",
            "answer": [
                "For conferences, seminars, and large meetings where real-time translation is needed"
            ]
        },
        {
            "question": "Consecutive Interpretation",
            "answer": [
                "For legal proceedings, medical appointments, and business meetings where the interpreter translates after the speaker has finished speaking"
            ]
        },
        {
            "question": "Telephone Interpretation",
            "answer": [
                "For customer service, helplines, and emergency services requiring over-the-phone translation"
            ]
        },
        {
            "question": "Video Remote Interpretation",
            "answer": [
                "For virtual meetings and online events where visual cues are important"
            ]
        },
        {
            "question": "Multilingual Support",
            "answer": [
                "Offering multilingual customer support services for businesses catering to Pashto/Dari-speaking clients"
            ]
        }
    ];

    return (
        <div className="interprets-list">
            {interprets.map((interprets, index) => (
                <InterpretsItem key={index} question={interprets.question} answer={interprets.answer} />
            ))}
        </div>
    );
};

const App = () => {
    const [aboutPage, setAbout] = useState("Translation");

    const renderContent = () => {
        switch (aboutPage) {
            case 'Translation':
                return (
                    <div>
                        <div className="button-group">
                            <button className={aboutPage === "Translation" ? "btn-trans" : "offbtn"} onClick={() => setAbout("Translation")}> <strong>Translation</strong> </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Interpretation" ? "btn-int" : "offbtn"} onClick={() => setAbout("Interpretation")}> Interpretation </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Message" ? "btn-mess" : "offbtn"} onClick={() => setAbout("Message")}> <strong>Contact</strong> </button>
                        </div>
                        <div className="tabs-trans">
                            <h1> Explore our comprehensive Pashto and Dari translation services, expertly tailored to meet all your document, localization, and multimedia needs.</h1>
                            <FAQList />
                        </div>
                    </div>
                );
            case 'Interpretation':
                return (
                    <div>
                        <div className="button-group">
                            <button className={aboutPage === "Translation" ? "btn-trans" : "offbtn"} onClick={() => setAbout("Translation")}> Translation </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Interpretation" ? "btn-int" : "offbtn"} onClick={() => setAbout("Interpretation")}> <strong>Interpretation</strong> </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Message" ? "btn-mess" : "offbtn"} onClick={() => setAbout("Message")}> <strong>Contact</strong> </button>
                        </div>
                        <div className="tabs-int">
                            <h1> Discover our professional Pashto and Dari interpretation services, designed to facilitate seamless communication across various settings, including conferences, meetings, and virtual events.</h1>
                            <InterpretsList />
                        </div>
                    </div>
                );
            case 'Message':
                return (
                    <div>
                        <div className="button-group">
                            <button className={aboutPage === "Translation" ? "btn-trans" : "offbtn"} onClick={() => setAbout("Translation")}> Translation </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Interpretation" ? "btn-int" : "offbtn"} onClick={() => setAbout("Interpretation")}> <strong>Interpretation</strong> </button>
                            <div className="gap">  </div>
                            <button className={aboutPage === "Message" ? "btn-mess" : "offbtn"} onClick={() => setAbout("Message")}> <strong>Contact</strong> </button>
                        </div>
                        <div className="tabs-mess">
                            <div className="textColumn">
                                <h1> <br />Have questions or need more information? Send us a message, and we'll be happy to assist you with your translation and interpretation needs.
                                    <br /> <br />
                                    By reaching out through this tab, you can request quotes, schedule consultations, or simply get answers to any questions you may have about our services. Please note that while we strive to respond to emails as quickly as possible, receiving a reply may take longer than a phone call. For more immediate assistance, consider giving us a call at: (716) 436-1045. We look forward to working with you!

                                </h1>
                            </div>
                            <div className="inputColumn">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                );
            default:
                return <h1>404 Not Found</h1>;
        }
    };

    return (
        <Router>
            <div className="app">
                <div className="main-content" id="home">
                    <div className="buffer-top"></div>
                    <div className="toolbar">
                        <div className="logo">Sarwari </div>
                        <h1>Pashto & Dari <br /> Interpreter Services</h1>
                        <div className="appointment">
                            <h1>Call to Schedule Your Appointment Today: <br /> (716) 436-1045</h1>
                        </div>
                    </div>
                    <div className="bufferRM"></div>

                    <div className="navigation">
                        <HashLink className="btn" smooth to="#about">About</HashLink>
                        <HashLink className="btn" smooth to="#services" onClick={() => setAbout("Translation")}>Services</HashLink>
                        <HashLink className="btn" smooth to="#contact" onClick={() => setAbout("Message")}>Contact</HashLink>
                    </div>

                    <div className="legal">
                        <div className="box"> Bridging Language Barriers with Professionalism and Precision</div>
                    </div>

                    <div className="buffer"></div>

                    <div id="about" className="About">
                        <div className="imageColumn">
                            <img src={ishaqPro} alt="Team behind the scenes" />
                        </div>
                        <div className="textColumn">
                            <h1>About the Team</h1>
                            <p>
                                At Sarwari Pashto and Dari Interpretation and Translation Services LLC, our team is committed to overcoming language barriers with professionalism and accuracy. Our seasoned interpreters and translators, experts in Pashto and Dari, guarantee precise and culturally attuned communication. We take pride in offering superior service across diverse settings, including conferences, meetings, and virtual events.
                                <br /><br />
                                With a deep understanding of cultural subtleties and specialized terminologies, they ensure seamless and effective communication. Whether you need simultaneous or consecutive interpretation, telephone, or video remote services, our team is fully equipped to deliver. At Sarwari, we believe in the transformative power of language to connect people and ideas, and we are committed to providing the highest quality in interpretation and translation services.                            </p>
                        </div>
                    </div>
                    <div className="buffer"></div>
                    <div className="legal" style={{ height: `150px`, }} ></div>
                    <div className="buffer"></div>
                    <div id="services">{renderContent()}</div>
                    <div className="buffer-below"></div>
                </div>
                <footer>
                    <div className="wrapper">
                        <div className="bottom">
                            <div className="services" id="contact">
                                <h5>Contact</h5>
                                <p>2 Marion Ct Apartment 3,<br /> Cheektowaga, NY 14225</p>
                                <p><br /><strong>Phone:</strong> (716) 436-1045</p>
                            </div>
                            <div className="social">
                                <HashLink smooth to="#home">Home</HashLink>
                                <HashLink smooth to="#about">About</HashLink>
                                <HashLink smooth to="#services" onClick={() => setAbout("Translation")}>Services</HashLink>
                                <HashLink smooth to="#contact" onClick={() => setAbout("Message")}>Contact</HashLink>
                            </div>
                        </div>
                    </div>
                    <div className="credits">Sarwari Pashto and Dari Interpreter and Translation Services LLC</div>
                </footer>

            </div>
        </Router>
    );
};

export default App;
