import React, { useState, useRef } from "react";


const DetailForm = ({ onSubmit }) => {
    const [form, setForm] = useState({ name: "", phone: "", email: "", age: "" });
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showCamera, setShowCamera] = useState(false);
    const videoRef = useRef(null);
    const fileInputRef = useRef(null);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
            setShowCamera(false);
        }
    };

    const openFilePicker = () => {
        fileInputRef.current.click();
    };

    const openCamera = async () => {
        setShowCamera(true);
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true });
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            } catch (err) {
                alert("Could not access webcam.");
            }
        } else {
            alert("Webcam not supported in this browser.");
        }
    };

    const capturePhoto = () => {
        const video = videoRef.current;
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0);
        canvas.toBlob((blob) => {
            if (blob) {
                setImage(blob);
                setPreview(URL.createObjectURL(blob));
                if (video.srcObject) {
                    video.srcObject.getTracks().forEach((track) => track.stop());
                }
                setShowCamera(false);
            }
        }, "image/jpeg");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Phone validation: must be 10 digits
        if (!/^\d{10}$/.test(form.phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('email', form.email);
        formData.append('phone', form.phone);
        if (image) {
            formData.append('image', image); // send file directly
        }

        if (onSubmit) {
            onSubmit(formData);
        }
        setForm({ name: "", phone: "", email: "", age: "" });
        setImage(null);
        setPreview(null);
    };

    React.useEffect(() => {
        return () => {
            if (videoRef.current && videoRef.current.srcObject) {
                videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "auto" }}>
            <div style={{ marginBottom: 16 }}>
                <button type="button" onClick={openCamera} style={{ marginRight: 8 }}>
                    {preview ? "Retake Photo (Webcam)" : "Capture Photo (Webcam)"}
                </button>
                <button type="button" onClick={openFilePicker}>
                    {preview ? "Choose Another File" : "Select from File"}
                </button>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageChange}
                />
                {showCamera && (
                    <div style={{ marginTop: 10 }}>
                        <video ref={videoRef} autoPlay style={{ width: 240, height: 180, borderRadius: 8, border: '1px solid #ccc' }} />
                        <div>
                            <button type="button" onClick={capturePhoto} style={{ marginTop: 8 }}>Take Photo</button>
                        </div>
                    </div>
                )}
                {preview && !showCamera && (
                    <div style={{ marginTop: 10 }}>
                        <img
                            src={preview}
                            alt="Profile Preview"
                            style={{ width: 120, height: 120, borderRadius: "50%" }}
                        />
                    </div>
                )}
            </div>
            <div style={{ marginBottom: 16 }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: 8 }}
                />  
            </div>

<div style={{ marginBottom: 16 }}>
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    pattern="\d{10}"
                    maxLength={10}
                    style={{ width: "100%", padding: 8 }}
                />
            </div>
            <div style={{ marginBottom: 16 }}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    style={{ width: "100%", padding: 8 }}
                />
            </div>
            {/* <div style={{ marginBottom: 16 }}>
                <input
                    type="text"
                    name="age"
                    placeholder="Age"
                    value={form.age}
                    onChange={handleChange}
                    style={{ width: "100%", padding: 8 }}
                />
            </div> */}
            <button type="submit" style={{ width: "100%", padding: 10 }}>
                Submit
            </button>
        </form>
    );
};

export default DetailForm;