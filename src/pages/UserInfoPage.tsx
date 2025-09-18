import React, { useState } from 'react';
import type { UserInfo } from '../types/Todo';

const UserInfoPage: React.FC = () => {
    const [formData, setFormData] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        country: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('User Info Submitted:', formData);
        setIsSubmitted(true);

        // Reset form after showing success message
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                city: '',
                zipCode: '',
                country: ''
            });
        }, 3000);
    };

    const resetForm = () => {
        setFormData(prev => ({
            firstName: prev.firstName,
            lastName: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            zipCode: '',
            country: ''
        }));
    };

    if (isSubmitted) {
        return (
            <div className="container">
                <div className="user-info-container">
                    <div className="success-message">
                        <div className="success-icon">✓</div>
                        <h2>Information Saved Successfully!</h2>
                        <p>Thank you for providing your information.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="user-info-container">
                <div className="user-info-header">
                    <h1 className="user-info-title">
                        📋 User Information
                    </h1>
                    <p className="user-info-subtitle">
                        Please fill in your personal information below
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="user-info-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName" className="form-label">
                                First Name <span className="required-asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                                placeholder="Enter your first name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName" className="form-label">
                                Last Name <span className="required-asterisk">*</span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="form-input"
                                required
                                placeholder="Enter your last name"
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">
                                Email Address <span className="required-asterisk">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter your email address"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter your phone number"
                            />
                        </div>
                    </div>

                    <div className="form-group form-group-spaced">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            className="form-input"
                            placeholder="Enter your street address"
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="city" className="form-label">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter your city"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                            <input
                                type="text"
                                id="zipCode"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter your zip code"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="country" className="form-label">Country</label>
                            <input
                                type="text"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="form-input"
                                placeholder="Enter your country"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button
                            type="button"
                            className="reset-button"
                            onClick={resetForm}
                        >
                            Reset Form
                        </button>
                        <button type="submit" className="submit-button">
                            Save Information
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserInfoPage;