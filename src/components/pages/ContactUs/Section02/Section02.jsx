import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import "./Section02.css"
import email from "../../../../assets/Contact/email.svg"
import time from "../../../../assets/Contact/time.svg"
import c_fb from "../../../../assets/Contact/c_fb.png"
import c_insta from "../../../../assets/Contact/c_insta.png"
import c_tictok from "../../../../assets/Contact/c_tictok.png"
import c_twitter from "../../../../assets/Contact/c_twitter.png"
import loader from "../../../../assets/Contact/loader.gif"
import { Link } from 'react-router-dom';

const Section02 = (props) => {
    const form = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSubmit, setisSubmit] = useState(true);
    const [formData, setFormData] = useState({
        form: "Get Quote Form",
        user_name: "",
        user_phone: "",
        user_email: "",
        user_message: "",
    });
    const resetStatus = () => {
        setIsSuccess(false);
        setIsError(false);
    };
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setisSubmit(false)

        const formDataToSubmit = new FormData();
        formDataToSubmit.append("form", formData.form);
        formDataToSubmit.append("user_name", formData.user_name);
        formDataToSubmit.append("user_phone", formData.contact_number);
        formDataToSubmit.append("user_email", formData.email);
        formDataToSubmit.append("user_message", formData.details);

        try {
            // eslint-disable-next-line
            const response = await axios.post(
                "https://oms.smartkidstrainer.com/shipEmail/sendEmailContact.php",
                formData
            );

            setIsLoading(false);
            setisSubmit(true)
            setIsSuccess(true);
            setFormData({
                form: "Get Quote Form",
                user_name: "",
                user_phone: "",
                user_email: "",
                user_message: "",
            });
            setTimeout(resetStatus, 6000);
        } catch (error) {
            console.error("Error sending data:", error);
            setIsLoading(false);
            setisSubmit(true)
            setIsError(true);
            setFormData({
                form: "Get Quote Form",
                user_name: "",
                user_phone: "",
                user_email: "",
                user_message: "",
            });
            setTimeout(resetStatus, 6000);
        }
    };
    const inputRef1 = useRef(null);
    useEffect(() => {
        const searchInput = inputRef1.current;
        if (searchInput) {
            const handleDrop = (e) => {
                e.preventDefault();
            };
            const handleDragOver = (e) => {
                e.preventDefault();
            };

            searchInput.addEventListener('drop', handleDrop);
            searchInput.addEventListener('dragover', handleDragOver);

            // Cleanup event listeners on component unmount
            return () => {
                searchInput.removeEventListener('drop', handleDrop);
                searchInput.removeEventListener('dragover', handleDragOver);
            };
        }

    }, []);

    const inputRef2 = useRef(null);
    useEffect(() => {
        const searchInput = inputRef2.current;
        if (searchInput) {
            const handleDrop = (e) => {
                e.preventDefault();
            };
            const handleDragOver = (e) => {
                e.preventDefault();
            };

            searchInput.addEventListener('drop', handleDrop);
            searchInput.addEventListener('dragover', handleDragOver);

            // Cleanup event listeners on component unmount
            return () => {
                searchInput.removeEventListener('drop', handleDrop);
                searchInput.removeEventListener('dragover', handleDragOver);
            };
        }

    }, []);

    const inputRef3 = useRef(null);
    useEffect(() => {
        const searchInput = inputRef3.current;
        if (searchInput) {
            const handleDrop = (e) => {
                e.preventDefault();
            };
            const handleDragOver = (e) => {
                e.preventDefault();
            };

            searchInput.addEventListener('drop', handleDrop);
            searchInput.addEventListener('dragover', handleDragOver);

            // Cleanup event listeners on component unmount
            return () => {
                searchInput.removeEventListener('drop', handleDrop);
                searchInput.removeEventListener('dragover', handleDragOver);
            };
        }

    }, []);

    const inputRef4 = useRef(null);
    useEffect(() => {
        const searchInput = inputRef4.current;
        if (searchInput) {
            const handleDrop = (e) => {
                e.preventDefault();
            };
            const handleDragOver = (e) => {
                e.preventDefault();
            };

            searchInput.addEventListener('drop', handleDrop);
            searchInput.addEventListener('dragover', handleDragOver);

            // Cleanup event listeners on component unmount
            return () => {
                searchInput.removeEventListener('drop', handleDrop);
                searchInput.removeEventListener('dragover', handleDragOver);
            };
        }

    }, []);

    return (
        <>
            <div className='mx-auto d-flex flex-column flex-lg-row justify-content-between px-2 contactUserSection'>
                <div className='w-100 contact_form mb-5'>
                    {isSuccess &&
                        <div className="alert alert-success d-flex align-items-center sucessAlertBox w3-container w3-center w3-animate-top" role="alert">
                            <i className="bi bi-check2-square"></i>
                            <span className='mx-2 fontGotham'>Form Submitted Successfully!</span>
                        </div>
                    }
                    {isError &&
                        <div className="alert alert-danger d-flex align-items-center errortAlertBox w3-container w3-center w3-animate-top" role="alert">
                            <i className="bi bi-emoji-frown"></i>
                            <span className='mx-2 fontGotham'>Form Not Submitted, Please try Again!</span>
                        </div>
                    }
                    <h3 className='mb-4'>Contact Us</h3>
                    <form className='d-flex flex-column align-items-center align-items-lg-start' ref={form} onSubmit={handleSubmit}>
                        <input ref={inputRef1} required className='form-control px-0 rounded-0 border-0 mb-2 border-bottom' type="text" placeholder='Full Name' name="user_name" id="user_name" value={formData.user_name} onChange={handleInputChange} />
                        <input ref={inputRef2} required className='form-control px-0 rounded-0 border-0 mb-2 border-bottom' type="text" placeholder='Email Address' name="user_email" id="user_email" value={formData.user_email} onChange={handleInputChange} />
                        <input ref={inputRef3} required className='form-control px-0 rounded-0 border-0 mb-2 border-bottom' type="text" placeholder='Phone Number' name="user_phone" id="user_phone" value={formData.user_phone} onChange={handleInputChange} />
                        <textarea ref={inputRef4} required className='form-control px-0 rounded-0 border-0 mb-5 border-bottom' placeholder='Question/Comment' name="user_message" id="user_message" cols="30" rows="5" value={formData.user_message} onChange={handleInputChange}></textarea>
                        <div className='position-relative d-flex flex-column align-items-center' style={{ width: "136px", height: "40px" }}>
                            {isLoading && <img width={40} src={loader} alt="" draggable='false' />}
                            {isSubmit && <button className='btn btn-sm btn-outline-dark rounded-5' type="submit">Submit Form</button>}
                        </div>
                    </form>
                </div>
                <div className='w-100 social_box'>
                    <div>
                        <h3 className='mb-4'>Our Stores</h3>
                        <p className='mb-3 d-flex flex-column flex-lg-row align-items-center'><img width={25} className='me-2' src={email} alt="" draggable='false' /><Link className='nav-link'>Customerservice@nowandforever.com</Link></p>
                        <p className='mb-4 d-flex flex-column flex-lg-row align-items-center'><img width={25} className='me-2' src={time} alt="" draggable='false' />24 Hours 7 Days a week</p>
                        <div className='d-flex justify-content-center justify-content-lg-start'>
                            <Link className='social-hover-contact me-lg-4 mx-2 mx-lg-0' to="https://www.facebook.com/nowandforevertx/" target='_blank'><img width={14} src={c_fb} alt="" draggable='false' /></Link>
                            <Link className='social-hover-contact me-lg-4 mx-2 mx-lg-0' to="https://www.tiktok.com/@nowandforeverhtx" target='_blank'><img width={22} src={c_tictok} alt="" draggable='false' /></Link>
                            <Link className='social-hover-contact me-lg-4 mx-2 mx-lg-0' to="https://www.instagram.com/nowandforevertx/?hl=en" target='_blank'><img width={22} height={22} src={c_insta} alt="" draggable='false' /></Link>
                            <Link className='social-hover-contact me-lg-4 mx-2 mx-lg-0' to="https://twitter.com/nowandforevertx?lang=en" target='_blank'><img src={c_twitter} alt="" draggable='false' /></Link>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Section02