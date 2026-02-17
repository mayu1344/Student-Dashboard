import React from 'react';
import { MessageSquare, User, Settings, ArrowRight, FileText, Hexagon, LayoutDashboard, IndianRupee } from 'lucide-react'; // Hexagon as logo placeholder
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      {/* Logo Area */}
      <div className={styles.logoArea}>
        <div className={styles.logoIcon}>
          <Hexagon size={28} fill="white" color="white" />
        </div>
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className={styles.navItem}>
          <IndianRupee size={20} />
          <span>Memes</span>
          <ArrowRight size={16} className={styles.arrow} />
        </div>

        <div className={styles.navItem}>
          <MessageSquare size={20} />
          <span>Message</span>
        </div>

        <div className={`${styles.navItem} ${styles.active}`}>
          <User size={20} />
          <span>Student Profile</span>
        </div>

        <div className={styles.navItem}>
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </nav>

      {/* Footer / Logout */}
      <div className={styles.footer}>
        <button className={styles.logoutBtn}>
          <span>Log Out</span>
          <div className={styles.logoutIconWrapper}>
            <ArrowRight size={16} />
          </div>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
