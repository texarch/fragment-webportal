import React from 'react';
import './RoleSelectionModal.css';
import individualBtn from '../assets/editor/EU_btn_log_in.png';
import organiserBtn from '../assets/editor/BU_btn_log.png';
// import businessLogo from '../assets/fragment-business-logo.png';

const RoleSelectionModal = ({
    isOpen,
    onClose,
    prefixText = "Log-in as",
    onIndividualClick,
    onOrganiserClick
}) => {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('role-modal-overlay')) {
            onClose();
        }
    };

    return (
        <div className="role-modal-overlay" onClick={handleOverlayClick}>
            {/* Back Button */}
            <button className="role-modal-back-btn" onClick={onClose}>
                ← Back
            </button>


            <div className="role-modal-container">
                {/* LEFT SECTION - Individual */}
                <div className="role-section individual-section" onClick={onIndividualClick}>
                    <div className="role-section-content">
                        <h1 className="role-title individual-title">Fragment</h1>
                        <div className="role-login-text">
                            <span className="login-prefix">{prefixText}</span>
                            <span className="login-role individual-role">Individual</span>
                        </div>
                        <div className="role-card individual-card">
                            <img src={individualBtn} alt="Individual Login" className="role-card-img" />
                        </div>
                    </div>
                </div>

                {/* RIGHT SECTION - Organiser */}
                <div className="role-section organiser-section" onClick={onOrganiserClick}>
                    <div className="role-section-content">
                        <h1 className="role-title organiser-title">Fragment Business</h1>
                        <div className="role-login-text">
                            <span className="login-prefix organiser-prefix">{prefixText}</span>
                            <span className="login-role organiser-role">Organiser</span>
                        </div>
                        <div className="role-card organiser-card">
                            <img src={organiserBtn} alt="Business Logo" className="role-card-img" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoleSelectionModal;
