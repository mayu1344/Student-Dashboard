import React from 'react';
import {
    ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
    BarChart, Bar, LineChart, Line, Legend
} from 'recharts';
import styles from './Dashboard.module.css';
import {
    Clock, MoreHorizontal, Award, Target, Trophy, Car, ListTodo, Bell, Calendar, CheckCircle2, Circle, TrendingUp
} from 'lucide-react';

// --- Data ---
console.log("Dashboard v1.3 Loaded - Explicit Grid Rows");

const screenTimeData = [
    { day: 'Mon', study: 3.5, entertainment: 2.1 },
    { day: 'Tue', study: 4.2, entertainment: 1.8 },
    { day: 'Wed', study: 2.8, entertainment: 3.2 },
    { day: 'Thu', study: 4.5, entertainment: 1.5 },
    { day: 'Fri', study: 3.9, entertainment: 2.5 },
    { day: 'Sat', study: 1.5, entertainment: 5.2 },
    { day: 'Sun', study: 1.2, entertainment: 4.8 },
];

const focusData = [
    { month: 'Jan', score: 65, trend: 400 },
    { month: 'Feb', score: 70, trend: 600 },
    { month: 'Mar', score: 75, trend: 800 },
    { month: 'Apr', score: 68, trend: 700 },
    { month: 'May', score: 80, trend: 900 },
    { month: 'Jun', score: 85, trend: 1100 },
    { month: 'Jul', score: 78, trend: 1000 },
];

const sleepData = [
    { month: 'Jan', productivity: 75, quality: 65, lastYear: 50 },
    { month: 'Feb', productivity: 78, quality: 68, lastYear: 55 },
    { month: 'Mar', productivity: 76, quality: 72, lastYear: 60 },
    { month: 'Apr', productivity: 82, quality: 70, lastYear: 58 },
    { month: 'May', productivity: 80, quality: 75, lastYear: 65 },
    { month: 'Jun', productivity: 85, quality: 80, lastYear: 70 },
];

const alumniData = [
    { name: 'Alumni A', tier: 'Tier 1 Company', package: '18 LPA', similarity: '92%', initial: 'A', color: '#3B82F6' },
    { name: 'Alumni B', tier: 'Tier 2 Product Company', package: '12 LPA', similarity: '88%', initial: 'B', color: '#8B5CF6' },
    { name: 'Alumni C', tier: 'Tier 1 Startup', package: '15 LPA', similarity: '85%', initial: 'C', color: '#10B981' },
];

// --- Sub-components ---

const SimilarAlumni = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.titleWithIcon}>
                <Trophy size={18} color="#F59E0B" />
                <h3 className={styles.cardTitle}>Similar Alumni</h3>
            </div>
        </div>
        <div className={styles.alumniList}>
            {alumniData.map((alumni, idx) => (
                <div key={idx} className={styles.alumniItem}>
                    <div className={styles.alumniAvatar} style={{ backgroundColor: alumni.color }}>
                        {alumni.initial}
                    </div>
                    <div className={styles.alumniInfo}>
                        <div className={styles.alumniName}>{alumni.name}</div>
                        <div className={styles.alumniTier}>{alumni.tier}</div>
                        <div className={styles.alumniPackage}>
                            <Award size={12} /> <span>{alumni.package}</span>
                        </div>
                    </div>
                    <div className={styles.alumniSimilarity}>
                        <span>Similarity:</span> <strong>{alumni.similarity}</strong>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const YourProgress = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.titleWithIcon}>
                <Target size={18} color="#10B981" />
                <h3 className={styles.cardTitle}>Your Progress</h3>
            </div>
        </div>
        <div className={styles.streakCard}>
            <div className={styles.streakEmoji}>🔥</div>
            <div className={styles.streakInfo}>
                <div className={styles.streakValue}>5-Day</div>
                <div className={styles.streakLabel}>Active Streak</div>
            </div>
        </div>
        <div className={styles.achievementsGrid}>
            <div className={styles.achievementItem}>
                <div className={styles.achievementIcon} style={{ background: '#F0FDF4' }}>🏅</div>
                <div className={styles.achievementLabel}>Skill Verified</div>
            </div>
            <div className={styles.achievementItem}>
                <div className={styles.achievementIcon} style={{ background: '#FFFBEB' }}>⭐</div>
                <div className={styles.achievementLabel}>Top Performer</div>
            </div>
            <div className={styles.achievementItem}>
                <div className={styles.achievementIcon} style={{ background: '#FEF2F2' }}>🎯</div>
                <div className={styles.achievementLabel}>Goal Achiever</div>
            </div>
        </div>
        <div className={styles.progressSection}>
            <div className={styles.progressHeader}>
                <span>Monthly Progress</span>
                <strong>68%</strong>
            </div>
            <div className={styles.progressBarWrapper}>
                <div className={styles.progressBarFill} style={{ width: '68%' }}></div>
            </div>
        </div>
    </div>
);

const TrajectoryScore = () => (
    <div className={`${styles.card} ${styles.trajectoryCard}`}>
        <div className={styles.cardHeader}>
            <div className={styles.titleWithIcon}>
                <TrendingUp size={18} color="var(--accent-green)" />
                <h3 className={styles.cardTitle}>TRAJECTORY SCORE</h3>
            </div>
            <div className={styles.deltaBadge}>
                <span className={styles.deltaValue}>+4%</span>
                <span className={styles.deltaLabel}>this week</span>
            </div>
        </div>
        <div className={styles.trajectoryContent}>
            <div className={styles.scoreInfo}>
                <div className={styles.momentumText}>Gaining Momentum!</div>
                <div className={styles.rankingText}>
                    On track for <span className={styles.highlightText}>Top 30%</span>
                </div>
                <div className={styles.subStats}>
                    <div className={styles.statBox}>
                        <p className={styles.subLabel}>Next Milestone</p>
                        <p className={styles.subValue}>Tier 1 Entry</p>
                    </div>
                    <div className={styles.statBox}>
                        <p className={styles.subLabel}>Potential Boost</p>
                        <p className={styles.subValue} style={{ color: '#10B981' }}>+12% (Projects)</p>
                    </div>
                </div>
            </div>
            <div className={styles.chartCircleWrapper}>
                <svg width="140" height="140" viewBox="0 0 140 140">
                    <circle cx="70" cy="70" r="62" fill="none" stroke="#F3F4F6" strokeWidth="10" />
                    <circle
                        cx="70" cy="70" r="62" fill="none"
                        stroke="url(#scoreGradient)" strokeWidth="10"
                        strokeDasharray="390" strokeDashoffset="110"
                        strokeLinecap="round"
                        transform="rotate(-90 70 70)"
                        className={styles.animatedRing}
                    />
                    <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#8B5CF6" />
                            <stop offset="100%" stopColor="#10B981" />
                        </linearGradient>
                    </defs>
                </svg>
                <div className={styles.circleTextCenter}>
                    <div className={styles.xpLabel}>LEVEL</div>
                    <div className={styles.xpValue}>24</div>
                </div>
            </div>
        </div>
        <div className={styles.trajectoryFooter}>
            <div className={styles.insightDotGreen}></div>
            <p>Your recent consistency in <strong>Study Hours</strong> is pushing you into the top performer bracket.</p>
        </div>
    </div>
);

const GapAnalysis = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Gap Analysis</h3>
        </div>
        <div className={styles.gapTable}>
            <div className={styles.gapRowHeader}>
                <span>METRIC</span>
                <span>YOU</span>
                <span>AVG ALUMNI</span>
                <span>GAP</span>
            </div>
            {[
                { label: 'GPA', you: '7.5', avg: '8.2', gap: '-0.7', color: 'red' },
                { label: 'Study Hours', you: '15', avg: '22', gap: '-7', color: 'red' },
                { label: 'Sleep', you: '5.8', avg: '7.4', gap: '-1.6', color: 'red' },
                { label: 'Projects', you: '5', avg: '7', gap: '-2', color: 'red' },
            ].map((item, idx) => (
                <div key={idx} className={styles.gapRow}>
                    <span className={styles.gapLabel}>{item.label}</span>
                    <span className={styles.gapValue}>{item.you}</span>
                    <span className={styles.gapValue}>{item.avg}</span>
                    <span className={`${styles.gapGap} ${item.color === 'red' ? styles.negative : ''}`}>
                        {item.gap}
                    </span>
                </div>
            ))}
        </div>
        <div className={styles.gapFooter}>
            <div className={styles.insightDot}></div>
            <p>Students with 7+ hours sleep had 12% higher placement rates.</p>
        </div>
    </div>
);

const ScreenTimeChart = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Screen Time</h3>
            <select className={styles.selectSmall}>
                <option>Last Week</option>
            </select>
        </div>
        <div style={{ height: 200, width: '100%', marginTop: '1rem' }}>
            <ResponsiveContainer>
                <AreaChart data={screenTimeData}>
                    <defs>
                        <linearGradient id="colorStudy" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorEnt" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1} />
                            <stop offset="95%" stopColor="#ec4899" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} tickFormatter={(val) => `${val}h`} />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Area type="monotone" dataKey="study" name="Study" stroke="#8b5cf6" fillOpacity={1} fill="url(#colorStudy)" strokeWidth={2} />
                    <Area type="monotone" dataKey="entertainment" name="Entertainment" stroke="#ec4899" fillOpacity={1} fill="url(#colorEnt)" strokeWidth={2} />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    </div>
);

const UpcomingClasses = () => (
    <div className={`${styles.card} ${styles.darkCard}`}>
        <div className={styles.dateHeader}>
            <div className={styles.titleWithIcon}>
                <Calendar size={18} color="var(--accent-purple)" />
                <h3 className={styles.plannerMainTitle}>Daily Planner</h3>
            </div>
            <Clock size={16} />
        </div>

        <div className={styles.dateSelector}>
            {['03', '04', '05', '06', '07'].map((day, idx) => (
                <div key={idx} className={`${styles.dateItem} ${day === '05' ? styles.activeDate : ''}`}>
                    <span className={styles.dayNum}>{day}</span>
                    <span className={styles.dayName}>Mon</span>
                    <div className={styles.dateDots}>
                        {day === '05' && <span className={styles.dotRed}></span>}
                        <span className={styles.dotGreen}></span>
                    </div>
                </div>
            ))}
        </div>

        {/* Section 1: Today's Schedule */}
        <div className={styles.plannerSection}>
            <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>Today's Schedule</h4>
                <span className={styles.badgeCount}>2 Events</span>
            </div>
            <div className={styles.classList}>
                <div className={styles.classItem}>
                    <div className={styles.classTime}>
                        <Clock size={14} /> <span>10:00 - 11:30</span>
                    </div>
                    <div className={styles.classTitle}>Advanced Web Architecture</div>
                </div>
                <div className={styles.classItem}>
                    <div className={styles.classTime}>
                        <Clock size={14} /> <span>14:00 - 15:30</span>
                    </div>
                    <div className={styles.classTitle}>Machine Learning Seminar</div>
                </div>
            </div>
        </div>

        {/* Section 2: To-Do List */}
        <div className={styles.plannerSection}>
            <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>To-Do List</h4>
                <ListTodo size={16} className={styles.sectionIcon} />
            </div>
            <div className={styles.todoList}>
                <div className={`${styles.todoItem} ${styles.done}`}>
                    <CheckCircle2 size={16} color="var(--accent-green)" />
                    <span>Morning meditation</span>
                </div>
                <div className={styles.todoItem}>
                    <Circle size={16} color="#D1D5DB" />
                    <span>Complete React assignment</span>
                </div>
                <div className={styles.todoItem}>
                    <Circle size={16} color="#D1D5DB" />
                    <span>Review project feedback</span>
                </div>
            </div>
        </div>

        {/* Section 3: Daily Updates */}
        <div className={styles.plannerSection}>
            <div className={styles.sectionHeader}>
                <h4 className={styles.sectionTitle}>Daily Updates</h4>
                <Bell size={16} className={styles.sectionIcon} />
            </div>
            <div className={styles.updateCard}>
                <div className={styles.updateItem}>
                    <div className={styles.updateDot}></div>
                    <div className={styles.updateContent}>
                        <p className={styles.updateText}>Phase 2 results are out tomorrow</p>
                        <span className={styles.updateTime}>2h ago</span>
                    </div>
                </div>
                <div className={styles.updateItem}>
                    <div className={styles.updateDot}></div>
                    <div className={styles.updateContent}>
                        <p className={styles.updateText}>New workshop added: UX Design</p>
                        <span className={styles.updateTime}>5h ago</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const FocusScore = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <h3 className={styles.cardTitle}>Focus score and Trend</h3>
        </div>
        <div style={{ height: 250, width: '100%', marginTop: '1rem' }}>
            <ResponsiveContainer>
                <BarChart data={focusData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                    <YAxis hide />
                    <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Bar dataKey="score" fill="#10B981" radius={[4, 4, 0, 0]} barSize={20} />
                    <Line type="monotone" dataKey="trend" stroke="#34D399" strokeWidth={3} dot={false} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    </div>
)

const SleepConsistency = () => (
    <div className={styles.card}>
        <div className={styles.cardHeader}>
            <div className={styles.titleWithIcon}>
                <div className={styles.iconBox}>
                    <Clock size={18} color="#8b5cf6" />
                </div>
                <div>
                    <h3 className={styles.cardTitle}>Sleep Consistency</h3>
                    <p className={styles.cardSub}>6 Month Performance Trends</p>
                </div>
            </div>
        </div>
        <div style={{ height: 250, width: '100%', marginTop: '1rem' }}>
            <ResponsiveContainer>
                <LineChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9CA3AF' }} />
                    <YAxis hide />
                    <Tooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                    <Line type="monotone" dataKey="productivity" stroke="#3B82F6" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="quality" stroke="#EC4899" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="lastYear" stroke="#D1D5DB" strokeWidth={2} dot={false} strokeDasharray="5 5" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
)

const RoamingCars = () => (
    <div className={styles.roamingTrack}>
        <div className={`${styles.carComplex} ${styles.carPath1}`}>
            <Car size={48} className={styles.carHuge} />
        </div>
        <div className={`${styles.carComplex} ${styles.carPath2}`}>
            <Car size={40} className={styles.carHugeGreen} />
        </div>
    </div>
);

const DashboardGrid = () => {
    return (
        <div className={styles.gridContainer}>
            <RoamingCars />

            <div className={styles.mainGrid}>
                {/* Analytics Row */}
                <TrajectoryScore />
                <GapAnalysis />
                <div className={styles.stretchRow}><UpcomingClasses /></div>

                {/* Growth Row */}
                <ScreenTimeChart />
                <SleepConsistency />

                {/* Focus Row */}
                <FocusScore />
                <div className={styles.spanTwoCols}>
                    <SimilarAlumni />
                </div>
                <YourProgress />
            </div>
        </div>
    )
}

export default DashboardGrid;
