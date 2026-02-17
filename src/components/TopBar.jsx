import React, { useState, useRef } from 'react';
import { Search, Bell, MessageSquare, Settings, User, Camera, X, Check, LogOut, Edit2, Plus } from 'lucide-react';
import styles from './TopBar.module.css';

const TopBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: 'Alex Johnson',
        email: 'alex.j@example.com',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    });
    const [tempProfile, setTempProfile] = useState({ ...profile });
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTempProfile(prev => ({ ...prev, image: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        setProfile(tempProfile);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setTempProfile({ ...profile });
        setIsEditing(false);
    };

    return (
        <header className={styles.topBar}>
            {/* Back Button & Search */}
            <div className={styles.leftSection}>
                <button className={styles.backButton}>←</button>
                <div className={styles.searchWrapper}>
                    <Search size={18} className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.searchInput}
                    />
                </div>
            </div>

            {/* Actions & Profile */}
            <div className={styles.rightSection}>
                <button className={styles.iconButton} aria-label="Notifications">
                    <Bell size={20} />
                    <span className={styles.notificationDot}></span>
                </button>
                <button className={styles.iconButton} aria-label="Messages">
                    <MessageSquare size={20} />
                </button>
                <button className={styles.iconButton} aria-label="Settings">
                    <Settings size={20} />
                </button>

                <div className={styles.profileContainer}>
                    <div
                        className={styles.profileWrapper}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <img
                            src={profile.image}
                            alt="Profile"
                            className={styles.profileImage}
                        />
                    </div>

                    {isMenuOpen && (
                        <div className={styles.profileDropdown}>
                            <div className={styles.dropdownHeader}>
                                <img src={profile.image} alt="Avatar" className={styles.dropdownAvatar} />
                                <div className={styles.dropdownInfo}>
                                    <p className={styles.dropdownName}>{profile.name}</p>
                                    <p className={styles.dropdownEmail}>{profile.email}</p>
                                </div>
                            </div>
                            <div className={styles.dropdownDivider}></div>
                            <button className={styles.dropdownItem} onClick={() => { setIsEditing(true); setIsMenuOpen(false); }}>
                                <User size={16} />
                                <span>View Profile</span>
                            </button>
                            <button className={styles.dropdownItem} onClick={() => { setIsEditing(true); setIsMenuOpen(false); }}>
                                <Edit2 size={16} />
                                <span>Edit Profile</span>
                            </button>
                            <button className={styles.dropdownItem}>
                                <Plus size={16} />
                                <span>Add Account</span>
                            </button>
                            <button className={styles.dropdownItem}>
                                <Settings size={16} />
                                <span>Account Settings</span>
                            </button>
                            <div className={styles.dropdownDivider}></div>
                            <button className={`${styles.dropdownItem} ${styles.logout}`}>
                                <LogOut size={16} />
                                <span>Sign Out</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for Editing Profile */}
            {isEditing && (
                <div className={styles.modalOverlay} onClick={handleCancel}>
                    <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={styles.modalHeader}>
                            <h2>Edit Profile</h2>
                            <button onClick={handleCancel} className={styles.closeBtn}><X size={24} /></button>
                        </div>

                        <div className={styles.modalBody}>
                            <div className={styles.imageEditSection}>
                                <div className={styles.largeAvatarWrapper}>
                                    <img src={tempProfile.image} alt="Preview" className={styles.largeAvatar} />
                                    <button
                                        className={styles.cameraBtn}
                                        onClick={() => fileInputRef.current.click()}
                                    >
                                        <Camera size={20} />
                                    </button>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                        onChange={handleImageChange}
                                    />
                                </div>
                                <p className={styles.imageHint}>Click the camera to update photo</p>
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Full Name</label>
                                <input
                                    type="text"
                                    value={tempProfile.name}
                                    onChange={e => setTempProfile({ ...tempProfile, name: e.target.value })}
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    value={tempProfile.email}
                                    onChange={e => setTempProfile({ ...tempProfile, email: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className={styles.modalFooter}>
                            <button className={styles.cancelBtn} onClick={handleCancel}>Cancel</button>
                            <button className={styles.saveBtn} onClick={handleSave}>
                                <Check size={18} />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default TopBar;
