// app.js

// --- Base Mock Data ---
const baseRegionData = [
    {
        name: "Mumbai - West",
        zone: "west",
        rx: 2400,
        sales: 85.0,
        conversions: 120,
        growth: 15,
        target: 81.0,
        doctors: [
            { name: "Dr. A. K. Mehta", specialty: "Cardiologist", rx: 145 },
            { name: "Dr. Sunita Rao", specialty: "Diabetologist", rx: 112 },
            { name: "Dr. Rajesh Shah", specialty: "Neurologist", rx: 95 }
        ],
        drugs: [
            { name: "CardioProtect", category: "Cardiology", sales: 850 },
            { name: "GlicoControl", category: "Diabetology", sales: 720 },
            { name: "NeuroRelax", category: "Neurology", sales: 410 }
        ]
    },
    {
        name: "Delhi - NCR",
        zone: "north",
        rx: 1850,
        sales: 72.5,
        conversions: 95,
        growth: 5,
        target: 82.0,
        doctors: [
            { name: "Dr. Vivek Sharma", specialty: "Pediatrician", rx: 105 },
            { name: "Dr. Neha Gupta", specialty: "Cardiologist", rx: 98 },
            { name: "Dr. Amit Verma", specialty: "General Physician", rx: 80 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 650 },
            { name: "InflaQuiet", category: "Analgesics", sales: 520 },
            { name: "CardioProtect", category: "Cardiology", sales: 490 }
        ]
    },
    {
        name: "Bangalore",
        zone: "south",
        rx: 2100,
        sales: 90.2,
        conversions: 150,
        growth: 22,
        target: 80.5,
        doctors: [
            { name: "Dr. Sandeep Nair", specialty: "Neurologist", rx: 160 },
            { name: "Dr. Priya Patel", specialty: "Endocrinologist", rx: 142 },
            { name: "Dr. Kiran Kumar", specialty: "Pulmonologist", rx: 110 }
        ],
        drugs: [
            { name: "NeuroRelax", category: "Neurology", sales: 910 },
            { name: "PulmoSafe", category: "Pulmonology", sales: 850 },
            { name: "GlicoControl", category: "Diabetology", sales: 640 }
        ]
    },
    {
        name: "Chennai",
        zone: "south",
        rx: 950,
        sales: 30.1,
        conversions: 40,
        growth: -2,
        target: 48.5,
        doctors: [
            { name: "Dr. R. Balaji", specialty: "General Physician", rx: 75 },
            { name: "Dr. Lakshmi Dev", specialty: "Cardiologist", rx: 62 },
            { name: "Dr. S. Subramanian", specialty: "Pediatrician", rx: 48 }
        ],
        drugs: [
            { name: "InflaQuiet", category: "Analgesics", sales: 320 },
            { name: "CardioProtect", category: "Cardiology", sales: 290 },
            { name: "GlicoControl", category: "Diabetology", sales: 180 }
        ]
    },
    {
        name: "Kolkata",
        zone: "east",
        rx: 1200,
        sales: 45.8,
        conversions: 65,
        growth: 8,
        target: 56.5,
        doctors: [
            { name: "Dr. Subhash Bose", specialty: "Pulmonologist", rx: 90 },
            { name: "Dr. Ananya Sen", specialty: "Diabetologist", rx: 82 },
            { name: "Dr. Joydeep Roy", specialty: "Neurologist", rx: 55 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 480 },
            { name: "PulmoSafe", category: "Pulmonology", sales: 350 },
            { name: "InflaQuiet", category: "Analgesics", sales: 210 }
        ]
    },
    {
        name: "Pune",
        zone: "west",
        rx: 1550,
        sales: 58.0,
        conversions: 88,
        growth: 12,
        target: 55.0,
        doctors: [
            { name: "Dr. Rahul Deshmukh", specialty: "Cardiologist", rx: 115 },
            { name: "Dr. Shilpa Kulkarni", specialty: "Neurologist", rx: 85 },
            { name: "Dr. Mahesh Joshi", specialty: "Diabetologist", rx: 78 }
        ],
        drugs: [
            { name: "CardioProtect", category: "Cardiology", sales: 550 },
            { name: "NeuroRelax", category: "Neurology", sales: 420 },
            { name: "GlicoControl", category: "Diabetology", sales: 380 }
        ]
    },
    {
        name: "Ahmedabad",
        zone: "west",
        rx: 1300,
        sales: 48.2,
        conversions: 72,
        growth: 9,
        target: 46.0,
        doctors: [
            { name: "Dr. Hitesh Patel", specialty: "Endocrinologist", rx: 94 },
            { name: "Dr. Chirag Vyas", specialty: "General Physician", rx: 80 },
            { name: "Dr. Mona Shah", specialty: "Cardiologist", rx: 68 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 430 },
            { name: "CardioProtect", category: "Cardiology", sales: 350 },
            { name: "InflaQuiet", category: "Analgesics", sales: 220 }
        ]
    },
    {
        name: "Hyderabad",
        zone: "south",
        rx: 1750,
        sales: 68.4,
        conversions: 104,
        growth: 16,
        target: 65.0,
        doctors: [
            { name: "Dr. K. Srinivas", specialty: "Neurologist", rx: 130 },
            { name: "Dr. Madhavi Latha", specialty: "Cardiologist", rx: 110 },
            { name: "Dr. Venkat Rao", specialty: "Pulmonologist", rx: 85 }
        ],
        drugs: [
            { name: "NeuroRelax", category: "Neurology", sales: 680 },
            { name: "CardioProtect", category: "Cardiology", sales: 590 },
            { name: "PulmoSafe", category: "Pulmonology", sales: 440 }
        ]
    },
    {
        name: "Lucknow",
        zone: "north",
        rx: 1100,
        sales: 40.0,
        conversions: 55,
        growth: 4,
        target: 50.0,
        doctors: [
            { name: "Dr. S. C. Mishra", specialty: "General Physician", rx: 82 },
            { name: "Dr. Rita Agnihotri", specialty: "Diabetologist", rx: 70 },
            { name: "Dr. Anil Rastogi", specialty: "Pediatrician", rx: 55 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 390 },
            { name: "InflaQuiet", category: "Analgesics", sales: 240 },
            { name: "CardioProtect", category: "Cardiology", sales: 210 }
        ]
    },
    {
        name: "Guwahati",
        zone: "east",
        rx: 800,
        sales: 22.5,
        conversions: 30,
        growth: -5,
        target: 35.0,
        doctors: [
            { name: "Dr. B. K. Sarma", specialty: "Cardiologist", rx: 58 },
            { name: "Dr. Nabajit Baruah", specialty: "General Physician", rx: 42 },
            { name: "Dr. Runumi Devi", specialty: "Diabetologist", rx: 35 }
        ],
        drugs: [
            { name: "CardioProtect", category: "Cardiology", sales: 220 },
            { name: "GlicoControl", category: "Diabetology", sales: 160 },
            { name: "InflaQuiet", category: "Analgesics", sales: 110 }
        ]
    }
];

const baseHqData = [
    {
        name: "Bandra - West",
        zone: "west",
        rx: 1100,
        sales: 42.0,
        conversions: 60,
        growth: 14,
        target: 40.0,
        doctors: [
            { name: "Dr. A. K. Mehta", specialty: "Cardiologist", rx: 85 },
            { name: "Dr. Sunita Rao", specialty: "Diabetologist", rx: 62 }
        ],
        drugs: [
            { name: "CardioProtect", category: "Cardiology", sales: 450 },
            { name: "GlicoControl", category: "Diabetology", sales: 340 }
        ]
    },
    {
        name: "Andheri - West",
        zone: "west",
        rx: 1300,
        sales: 43.0,
        conversions: 60,
        growth: 16,
        target: 41.0,
        doctors: [
            { name: "Dr. Rajesh Shah", specialty: "Neurologist", rx: 75 },
            { name: "Dr. P. J. Kothari", specialty: "Cardiologist", rx: 65 }
        ],
        drugs: [
            { name: "CardioProtect", category: "Cardiology", sales: 400 },
            { name: "NeuroRelax", category: "Neurology", sales: 380 }
        ]
    },
    {
        name: "South Delhi",
        zone: "north",
        rx: 1050,
        sales: 41.5,
        conversions: 55,
        growth: 6,
        target: 42.0,
        doctors: [
            { name: "Dr. Vivek Sharma", specialty: "Pediatrician", rx: 65 },
            { name: "Dr. Neha Gupta", specialty: "Cardiologist", rx: 58 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 360 },
            { name: "CardioProtect", category: "Cardiology", sales: 290 }
        ]
    },
    {
        name: "Noida",
        zone: "north",
        rx: 800,
        sales: 31.0,
        conversions: 40,
        growth: 3,
        target: 40.0,
        doctors: [
            { name: "Dr. Amit Verma", specialty: "General Physician", rx: 48 },
            { name: "Dr. Ritu Goel", specialty: "Endocrinologist", rx: 35 }
        ],
        drugs: [
            { name: "InflaQuiet", category: "Analgesics", sales: 280 },
            { name: "GlicoControl", category: "Diabetology", sales: 290 }
        ]
    },
    {
        name: "Koramangala",
        zone: "south",
        rx: 1150,
        sales: 49.0,
        conversions: 80,
        growth: 24,
        target: 41.0,
        doctors: [
            { name: "Dr. Sandeep Nair", specialty: "Neurologist", rx: 90 },
            { name: "Dr. Kiran Kumar", specialty: "Pulmonologist", rx: 65 }
        ],
        drugs: [
            { name: "NeuroRelax", category: "Neurology", sales: 520 },
            { name: "PulmoSafe", category: "Pulmonology", sales: 490 }
        ]
    },
    {
        name: "Indiranagar",
        zone: "south",
        rx: 950,
        sales: 41.2,
        conversions: 70,
        growth: 20,
        target: 39.5,
        doctors: [
            { name: "Dr. Priya Patel", specialty: "Endocrinologist", rx: 82 },
            { name: "Dr. S. Raghavan", specialty: "Cardiologist", rx: 55 }
        ],
        drugs: [
            { name: "NeuroRelax", category: "Neurology", sales: 390 },
            { name: "GlicoControl", category: "Diabetology", sales: 320 }
        ]
    },
    {
        name: "Salt Lake",
        zone: "east",
        rx: 700,
        sales: 26.8,
        conversions: 40,
        growth: 10,
        target: 30.5,
        doctors: [
            { name: "Dr. Subhash Bose", specialty: "Pulmonologist", rx: 52 },
            { name: "Dr. Ananya Sen", specialty: "Diabetologist", rx: 48 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 280 },
            { name: "PulmoSafe", category: "Pulmonology", sales: 210 }
        ]
    },
    {
        name: "Howrah",
        zone: "east",
        rx: 500,
        sales: 19.0,
        conversions: 25,
        growth: 5,
        target: 26.0,
        doctors: [
            { name: "Dr. Joydeep Roy", specialty: "Neurologist", rx: 32 },
            { name: "Dr. M. K. Banerjee", specialty: "General Physician", rx: 28 }
        ],
        drugs: [
            { name: "GlicoControl", category: "Diabetology", sales: 200 },
            { name: "InflaQuiet", category: "Analgesics", sales: 130 }
        ]
    }
];

// --- State Variables ---
let state = {
    theme: 'light',
    activeTab: 'executive',
    zone: 'all',
    view: 'region',
    date: '2026-06-01',
    search: '',
    sortBy: 'sales',
    sortOrder: 'desc'
};

// --- DOM Reference Cache ---
const DOM = {
    themeToggleBtn: document.getElementById('theme-toggle'),
    themeToggleSun: document.querySelector('.icon-sun'),
    themeToggleMoon: document.querySelector('.icon-moon'),
    
    zoneFilter: document.getElementById('zone-filter'),
    viewFilter: document.getElementById('view-filter'),
    dateFilter: document.getElementById('date-filter'),
    tableSearch: document.getElementById('table-search'),
    
    tabButtons: document.querySelectorAll('.nav-item'),
    tabContents: document.querySelectorAll('.tab-content'),
    
    kpiRxVal: document.getElementById('kpi-rx-val'),
    kpiRxTrend: document.getElementById('kpi-rx-trend'),
    kpiSalesVal: document.getElementById('kpi-sales-val'),
    kpiSalesTrend: document.getElementById('kpi-sales-trend'),
    kpiConversionsVal: document.getElementById('kpi-conversions-val'),
    kpiConversionsTrend: document.getElementById('kpi-conversions-trend'),
    kpiAchievementVal: document.getElementById('kpi-achievement-val'),
    kpiAchievementTrend: document.getElementById('kpi-achievement-trend'),
    
    tableBody: document.getElementById('table-body'),
    tableHeaders: document.querySelectorAll('#performance-table th'),
    
    progressQ2Percent: document.getElementById('progress-q2-percent'),
    progressQ2Bar: document.getElementById('progress-q2-bar'),
    progressAnnualPercent: document.getElementById('progress-annual-percent'),
    progressAnnualBar: document.getElementById('progress-annual-bar'),
    progressNewconPercent: document.getElementById('progress-newcon-percent'),
    progressNewconBar: document.getElementById('progress-newcon-bar'),
    
    alertsContainer: document.getElementById('alerts-container'),
    
    // Modal elements
    detailModal: document.getElementById('detail-modal'),
    modalBackdrop: document.getElementById('modal-backdrop'),
    modalClose: document.getElementById('modal-close'),
    modalRegionName: document.getElementById('modal-region-name'),
    modalRegionType: document.getElementById('modal-region-type'),
    modalRx: document.getElementById('modal-rx'),
    modalSales: document.getElementById('modal-sales'),
    modalConversions: document.getElementById('modal-conversions'),
    modalGrowth: document.getElementById('modal-growth'),
    modalAchievement: document.getElementById('modal-achievement'),
    modalDoctorsList: document.getElementById('modal-doctors-list'),
    modalDrugsList: document.getElementById('modal-drugs-list')
};

// --- Chart Instances ---
let growthChartInstance = null;
let productPieChartInstance = null;
let zoneBarChartInstance = null;
let therapeuticChartInstance = null;
let modalTrendChartInstance = null;

// --- Helper Functions ---
function getChartColors() {
    const isDark = state.theme === 'dark';
    return {
        text: isDark ? '#94a3b8' : '#475569',
        grid: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)',
        primary: '#6366f1',
        primaryGlow: 'rgba(99, 102, 241, 0.15)',
        accent: '#22d3ee',
        success: '#10b981',
        warning: '#f59e0b',
        danger: '#ef4444'
    };
}

// Seeded Random Generator based on date string
function seedRandom(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return function() {
        const x = Math.sin(hash++) * 10000;
        return x - Math.floor(x);
    };
}

// Generate dynamic but stable dataset variant based on state.date
function getDynamicData() {
    const dataList = state.view === 'region' ? baseRegionData : baseHqData;
    const rand = seedRandom(state.date);
    
    return dataList.map(item => {
        const factor = 0.85 + rand() * 0.3; // ±15% variation
        const growthFactor = (rand() * 10) - 5; // ±5% variation on growth
        const rx = Math.round(item.rx * factor);
        const sales = parseFloat((item.sales * factor).toFixed(1));
        const conversions = Math.round(item.conversions * factor);
        const growth = Math.round(item.growth + growthFactor);
        const target = parseFloat((item.target * factor).toFixed(1));
        
        return {
            ...item,
            rx,
            sales,
            conversions,
            growth,
            target
        };
    });
}

// Draw custom vector sparkline on a KPI canvas
function drawSparkline(canvasId, values, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Reset canvas resolution to match container bounding box
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = w;
    canvas.height = h;
    
    ctx.clearRect(0, 0, w, h);
    if (values.length < 2) return;
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    const range = maxVal - minVal || 1;
    const step = w / (values.length - 1);
    
    values.forEach((v, index) => {
        const x = index * step;
        const y = h - 6 - ((v - minVal) / range) * (h - 12);
        if (index === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    });
    ctx.stroke();
    
    // Fill Gradient under sparkline
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color + '2a');
    gradient.addColorStop(1, color + '00');
    ctx.fillStyle = gradient;
    ctx.fill();
}

// Update Top KPI Cards
function renderKPIs(filteredData) {
    const totalRx = filteredData.reduce((sum, item) => sum + item.rx, 0);
    const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0); // In lakhs
    const totalConversions = filteredData.reduce((sum, item) => sum + item.conversions, 0);
    
    const totalTarget = filteredData.reduce((sum, item) => sum + item.target, 0);
    const avgAchievement = totalTarget > 0 ? Math.round((totalSales / totalTarget) * 100) : 0;
    
    // In Lakhs to Crore conversion if high
    const salesDisplay = totalSales >= 100 
        ? `₹ ${(totalSales / 100).toFixed(2)} Cr` 
        : `₹ ${totalSales.toFixed(1)} Lakhs`;
    
    DOM.kpiRxVal.textContent = totalRx.toLocaleString('en-IN');
    DOM.kpiSalesVal.textContent = salesDisplay;
    DOM.kpiConversionsVal.textContent = totalConversions.toLocaleString('en-IN');
    DOM.kpiAchievementVal.textContent = `${avgAchievement}%`;

    // Dynamic Sparklines values (simulated month-over-month)
    const rand = seedRandom(state.date);
    const colors = getGetTrendColors();
    
    const rxHistory = Array.from({length: 8}, () => Math.round(500 + rand() * 1500));
    const salesHistory = Array.from({length: 8}, () => 20 + rand() * 80);
    const conversionsHistory = Array.from({length: 8}, () => 10 + rand() * 40);
    const achievementHistory = Array.from({length: 8}, () => Math.round(70 + rand() * 40));

    drawSparkline('sparkline-rx', rxHistory, colors.primary);
    drawSparkline('sparkline-sales', salesHistory, colors.success);
    drawSparkline('sparkline-conversions', conversionsHistory, colors.danger);
    drawSparkline('sparkline-achievement', achievementHistory, colors.warning);
    
    // Set Target visual metrics
    DOM.progressQ2Percent.textContent = `${Math.min(100, avgAchievement)}%`;
    DOM.progressQ2Bar.style.width = `${Math.min(100, avgAchievement)}%`;
    
    const annualProgress = Math.round(avgAchievement * 0.45); // Half year weight
    DOM.progressAnnualPercent.textContent = `${annualProgress}%`;
    DOM.progressAnnualBar.style.width = `${annualProgress}%`;
    
    const newConvsAchievement = Math.min(100, Math.round((totalConversions / (filteredData.length * 12)) * 100));
    DOM.progressNewconPercent.textContent = `${newConvsAchievement}%`;
    DOM.progressNewconBar.style.width = `${newConvsAchievement}%`;
}

function getGetTrendColors() {
    return {
        primary: '#4f46e5',
        success: '#10b981',
        danger: '#ef4444',
        warning: '#f59e0b'
    };
}

// Render the Interactive Performance Table
function renderTable(filteredData) {
    // Sort logic
    const sorted = [...filteredData].sort((a, b) => {
        let valA = a[state.sortBy];
        let valB = b[state.sortBy];
        
        // compute achievement percentage if sorted by it
        if (state.sortBy === 'achievement') {
            valA = a.target > 0 ? (a.sales / a.target) * 100 : 0;
            valB = b.target > 0 ? (b.sales / b.target) * 100 : 0;
        } else if (state.sortBy === 'name') {
            valA = a.name.toLowerCase();
            valB = b.name.toLowerCase();
        }
        
        if (valA < valB) return state.sortOrder === 'asc' ? -1 : 1;
        if (valA > valB) return state.sortOrder === 'asc' ? 1 : -1;
        return 0;
    });

    DOM.tableBody.innerHTML = '';
    
    if (sorted.length === 0) {
        DOM.tableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 40px; color: var(--text-muted);">No records match your filters.</td></tr>`;
        return;
    }

    sorted.forEach(item => {
        const achPercent = item.target > 0 ? Math.round((item.sales / item.target) * 100) : 0;
        let badgeClass = 'badge-mid';
        if (achPercent >= 100) badgeClass = 'badge-high';
        else if (achPercent < 80) badgeClass = 'badge-low';

        const row = document.createElement('tr');
        row.innerHTML = `
            <td class="region-cell">${item.name}</td>
            <td>${item.rx.toLocaleString('en-IN')}</td>
            <td>₹ ${item.sales.toFixed(1)} L</td>
            <td>${item.conversions}</td>
            <td style="color: ${item.growth >= 0 ? 'var(--success)' : 'var(--danger)'}; font-weight:600;">
                ${item.growth >= 0 ? '+' : ''}${item.growth}%
            </td>
            <td><span class="badge ${badgeClass}">${achPercent}%</span></td>
        `;
        
        row.addEventListener('click', () => showRegionDetail(item));
        DOM.tableBody.appendChild(row);
    });
}

// Render Dashboard and Tab-specific Charts
function renderCharts(filteredData) {
    const cColors = getGetChartColors();
    const isDark = state.theme === 'dark';

    // 1. Executive Summary: Monthly Growth Trend
    const ctxGrowth = document.getElementById('growthChart');
    if (ctxGrowth) {
        const rand = seedRandom(state.date);
        const randomGrowthRates = Array.from({length: 6}, () => Math.round(5 + rand() * 25));
        
        if (growthChartInstance) {
            growthChartInstance.destroy();
        }
        
        growthChartInstance = new Chart(ctxGrowth, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Sales Growth Rate %',
                    data: randomGrowthRates,
                    borderColor: cColors.primary,
                    backgroundColor: cColors.primaryGlow,
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: cColors.primary,
                    pointRadius: 4,
                    pointHoverRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { color: cColors.grid },
                        ticks: { color: cColors.text }
                    },
                    x: { 
                        grid: { display: false },
                        ticks: { color: cColors.text }
                    }
                }
            }
        });
    }

    // 2. Executive Summary: Product Sales Distribution
    const ctxProduct = document.getElementById('productPieChart');
    if (ctxProduct) {
        // Dynamic shares based on zone selection
        const rand = seedRandom(state.zone + state.date);
        const segments = [
            Math.round(20 + rand() * 20),
            Math.round(15 + rand() * 15),
            Math.round(10 + rand() * 15),
            Math.round(10 + rand() * 10),
            Math.round(5 + rand() * 10)
        ];
        
        if (productPieChartInstance) {
            productPieChartInstance.destroy();
        }

        productPieChartInstance = new Chart(ctxProduct, {
            type: 'doughnut',
            data: {
                labels: ['Cardiology', 'Diabetology', 'Neurology', 'Analgesics', 'Pulmonology'],
                datasets: [{
                    data: segments,
                    backgroundColor: [cColors.primary, cColors.accent, cColors.success, cColors.warning, cColors.danger],
                    borderWidth: isDark ? 2 : 1,
                    borderColor: isDark ? '#0d1222' : '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: { color: cColors.text, font: { family: 'Inter', size: 11 } }
                    }
                },
                cutout: '70%'
            }
        });
    }

    // 3. Tab 2: Regional Analysis - Zone bar comparisons
    const ctxZone = document.getElementById('zoneBarChart');
    if (ctxZone) {
        // Aggregate zones data
        const zones = { west: 0, north: 0, south: 0, east: 0 };
        filteredData.forEach(item => {
            if (zones[item.zone] !== undefined) {
                zones[item.zone] += item.sales;
            }
        });
        
        if (zoneBarChartInstance) {
            zoneBarChartInstance.destroy();
        }

        zoneBarChartInstance = new Chart(ctxZone, {
            type: 'bar',
            data: {
                labels: ['West Zone', 'North Zone', 'South Zone', 'East Zone'],
                datasets: [{
                    label: 'Total Revenue (Lakhs)',
                    data: [zones.west, zones.north, zones.south, zones.east],
                    backgroundColor: [cColors.primary, cColors.accent, cColors.success, cColors.warning],
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: { 
                        beginAtZero: true, 
                        grid: { color: cColors.grid },
                        ticks: { color: cColors.text }
                    },
                    x: { 
                        grid: { display: false },
                        ticks: { color: cColors.text }
                    }
                }
            }
        });
    }

    // 4. Tab 3: Products Insights - Therapeutic area trends
    const ctxTherapeutic = document.getElementById('therapeuticChart');
    if (ctxTherapeutic) {
        if (therapeuticChartInstance) {
            therapeuticChartInstance.destroy();
        }
        
        therapeuticChartInstance = new Chart(ctxTherapeutic, {
            type: 'radar',
            data: {
                labels: ['Market Demand', 'Sales Target', 'Field Force Focus', 'Doctor Sentiment', 'Retention Rate'],
                datasets: [
                    {
                        label: 'Cardiology (CardioProtect)',
                        data: [90, 85, 95, 80, 88],
                        borderColor: cColors.primary,
                        backgroundColor: cColors.primary + '15',
                        borderWidth: 2
                    },
                    {
                        label: 'Diabetology (GlicoControl)',
                        data: [75, 90, 80, 85, 78],
                        borderColor: cColors.success,
                        backgroundColor: cColors.success + '15',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: { color: cColors.text }
                    }
                },
                scales: {
                    r: {
                        grid: { color: cColors.grid },
                        pointLabels: { color: cColors.text },
                        angleLines: { color: cColors.grid },
                        ticks: { backdropColor: 'transparent', color: cColors.text }
                    }
                }
            }
        });
    }
}

function getGetChartColors() {
    return getChartColors();
}

// Generate active operational alerts
function renderAlerts(filteredData) {
    if (!DOM.alertsContainer) return;
    DOM.alertsContainer.innerHTML = '';
    
    let alertCount = 0;
    
    filteredData.forEach(item => {
        const achievement = item.target > 0 ? Math.round((item.sales / item.target) * 100) : 0;
        
        if (achievement < 80) {
            alertCount++;
            const node = document.createElement('div');
            node.className = 'alert-item alert-danger';
            node.innerHTML = `
                <div class="alert-message">
                    <strong>Critical Shortfall:</strong> ${item.name} (${item.zone.toUpperCase()} zone) has achieved only ${achievement}% of its monthly targets. Review inventory supply or regional sales officer engagement.
                    <div class="alert-time">Scheduled review: 2 hours ago</div>
                </div>
            `;
            DOM.alertsContainer.appendChild(node);
        } else if (item.growth >= 20) {
            alertCount++;
            const node = document.createElement('div');
            node.className = 'alert-item alert-success';
            node.innerHTML = `
                <div class="alert-message">
                    <strong>High Performance Spike:</strong> ${item.name} has recorded an outstanding growth of +${item.growth}% MoM. Inventory supply optimization recommended to prevent stocking issues.
                    <div class="alert-time">Triggered: Just now</div>
                </div>
            `;
            DOM.alertsContainer.appendChild(node);
        }
    });

    if (alertCount === 0) {
        DOM.alertsContainer.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">All parameters healthy. No urgent alerts triggered for this date/zone filter combination.</div>`;
    }
}

// Show Slide-in Regional detail drawer
function showRegionDetail(item) {
    const achPercent = item.target > 0 ? Math.round((item.sales / item.target) * 100) : 0;
    
    DOM.modalRegionName.textContent = item.name;
    DOM.modalRegionType.textContent = `${state.view.toUpperCase()} detail view (${item.zone.toUpperCase()} zone)`;
    
    DOM.modalRx.textContent = item.rx.toLocaleString('en-IN');
    DOM.modalSales.textContent = `₹ ${item.sales.toFixed(1)} Lakhs`;
    DOM.modalConversions.textContent = item.conversions;
    DOM.modalGrowth.textContent = `${item.growth >= 0 ? '+' : ''}${item.growth}%`;
    DOM.modalAchievement.textContent = `${achPercent}%`;
    
    // Top Doctors population
    DOM.modalDoctorsList.innerHTML = '';
    item.doctors.forEach(doc => {
        const el = document.createElement('div');
        el.className = 'top-list-item';
        el.innerHTML = `
            <div>
                <div class="top-item-name">${doc.name}</div>
                <div style="font-size:11px; color: var(--text-muted);">${doc.specialty}</div>
            </div>
            <span class="top-item-val">${doc.rx} Rx</span>
        `;
        DOM.modalDoctorsList.appendChild(el);
    });

    // Top Drugs population
    DOM.modalDrugsList.innerHTML = '';
    item.drugs.forEach(drug => {
        const el = document.createElement('div');
        el.className = 'top-list-item';
        el.innerHTML = `
            <div>
                <div class="top-item-name">${drug.name}</div>
                <div style="font-size:11px; color: var(--text-muted);">${drug.category}</div>
            </div>
            <span class="top-item-val" style="color: var(--success);">${drug.sales} units</span>
        `;
        DOM.modalDrugsList.appendChild(el);
    });

    // Render Modal Mini Chart
    setTimeout(() => {
        const ctxModalTrend = document.getElementById('modalTrendChart');
        if (ctxModalTrend) {
            const rand = seedRandom(item.name + state.date);
            const trendValues = Array.from({length: 5}, () => Math.round(5 + rand() * 40));
            const cColors = getGetChartColors();

            if (modalTrendChartInstance) {
                modalTrendChartInstance.destroy();
            }

            modalTrendChartInstance = new Chart(ctxModalTrend, {
                type: 'bar',
                data: {
                    labels: ['W1', 'W2', 'W3', 'W4', 'W5'],
                    datasets: [{
                        label: 'Weekly Sales',
                        data: trendValues,
                        backgroundColor: cColors.primary,
                        borderRadius: 4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false }
                    },
                    scales: {
                        y: { display: false },
                        x: { grid: { display: false }, ticks: { color: cColors.text } }
                    }
                }
            });
        }
    }, 50);

    DOM.detailModal.classList.add('open');
    DOM.modalBackdrop.classList.add('open');
}

function closeRegionDetail() {
    DOM.detailModal.classList.remove('open');
    DOM.modalBackdrop.classList.remove('open');
}

// Master UI Update Coordinator
function updateUI() {
    const rawData = getDynamicData();
    
    // Filter by Zone
    let filtered = rawData;
    if (state.zone !== 'all') {
        filtered = rawData.filter(item => item.zone === state.zone);
    }
    
    // Filter by Search Query
    if (state.search.trim() !== '') {
        const q = state.search.toLowerCase();
        filtered = filtered.filter(item => item.name.toLowerCase().includes(q));
    }
    
    // Trigger sections redraw
    renderKPIs(filtered);
    renderTable(filtered);
    renderCharts(filtered);
    renderAlerts(filtered);
}

// --- Setup Event Listeners ---
function init() {
    // 1. Theme Toggle Trigger
    DOM.themeToggleBtn.addEventListener('click', () => {
        const root = document.documentElement;
        const currentTheme = root.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        root.setAttribute('data-theme', newTheme);
        state.theme = newTheme;
        
        if (newTheme === 'dark') {
            DOM.themeToggleSun.style.display = 'block';
            DOM.themeToggleMoon.style.display = 'none';
        } else {
            DOM.themeToggleSun.style.display = 'none';
            DOM.themeToggleMoon.style.display = 'block';
        }
        
        // Re-render UI and chart styles
        updateUI();
    });

    // 2. Filter changes
    DOM.zoneFilter.addEventListener('change', (e) => {
        state.zone = e.target.value;
        updateUI();
    });

    DOM.viewFilter.addEventListener('change', (e) => {
        state.view = e.target.value;
        // Search filter updates title
        const titleEl = document.querySelector('#performance-table th[data-sort="name"]');
        if (titleEl) {
            titleEl.innerHTML = `${state.view === 'region' ? 'Region' : 'HQ'} <span class="sort-icon">↕</span>`;
        }
        updateUI();
    });

    DOM.dateFilter.addEventListener('change', (e) => {
        state.date = e.target.value;
        updateUI();
    });

    DOM.tableSearch.addEventListener('input', (e) => {
        state.search = e.target.value;
        updateUI();
    });

    // 3. Tab Navigation Triggers
    DOM.tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            DOM.tabButtons.forEach(b => b.classList.remove('active'));
            DOM.tabContents.forEach(c => c.classList.remove('active'));
            
            btn.classList.add('active');
            const targetEl = document.getElementById(`tab-${targetTab}`);
            if (targetEl) targetEl.classList.add('active');
            
            state.activeTab = targetTab;
            
            // Adjust subtitle based on tab
            const subText = {
                executive: 'Executive overview of regional sales, trends and prescription analytics.',
                regional: 'In-depth geographic comparison, performance matrices, and zonal statistics.',
                products: 'Therapeutic categories analysis, drug distribution rates, and clinical metrics.',
                alerts: 'Live operational indicators, compliance triggers, and volume deviations.'
            };
            document.getElementById('dashboard-subtitle').textContent = subText[targetTab] || '';
            
            // Redraw charts due to container visibility changes
            setTimeout(updateUI, 50);
        });
    });

    // 4. Sorting headers
    DOM.tableHeaders.forEach(th => {
        th.addEventListener('click', () => {
            const sortType = th.getAttribute('data-sort');
            if (!sortType) return;
            
            if (state.sortBy === sortType) {
                state.sortOrder = state.sortOrder === 'asc' ? 'desc' : 'asc';
            } else {
                state.sortBy = sortType;
                state.sortOrder = 'desc'; // Default to desc for stats
            }
            
            // Reset indicators
            DOM.tableHeaders.forEach(header => {
                const span = header.querySelector('.sort-icon');
                if (span) span.textContent = '↕';
            });
            
            const mySpan = th.querySelector('.sort-icon');
            if (mySpan) {
                mySpan.textContent = state.sortOrder === 'asc' ? '↑' : '↓';
            }
            
            updateUI();
        });
    });

    // 5. Drawer Close
    DOM.modalClose.addEventListener('click', closeRegionDetail);
    DOM.modalBackdrop.addEventListener('click', closeRegionDetail);

    // Initial Draw call
    updateUI();
}

// Start application
document.addEventListener('DOMContentLoaded', init);
