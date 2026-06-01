// app.js

// --- Geographic Coordinates for HQs ---
const coordinates = {
    "Delhi": [28.6139, 77.2090],
    "Gurgaon": [28.4595, 77.0266],
    "Greater Noida": [28.4744, 77.5040],
    "Noida": [28.5355, 77.3910],
    "Loni": [28.7513, 77.2882],
    "Jaipur": [26.9124, 75.7873],
    "Kota": [25.2138, 75.8648],
    "Sri Ganganagar": [29.9142, 73.8788],
    "Bikaner": [28.0166, 73.3119],
    "Jodhpur": [26.2389, 73.0243],
    "Udaipur": [24.5854, 73.7125],
    "Ajmer": [26.4499, 74.6399],
    "Karnal": [29.6857, 76.9905],
    "Mandi": [31.5892, 76.9182],
    "Mohali": [30.7046, 76.7179],
    "Chandigarh": [30.7333, 76.7794],
    "Hisar": [29.1492, 75.7217],
    "Ludhiana": [30.9010, 75.8573],
    "Abohar": [30.1471, 74.1953],
    "Bathinda": [30.2110, 74.9454],
    "Patiala": [30.3398, 76.3869],
    "Jalandhar": [31.3260, 75.5762],
    "Panchkula": [30.6942, 76.8606],
    "Jammu": [32.7266, 74.8570],
    "Pathankot": [32.2659, 75.6461],
    "Amritsar": [31.6340, 74.8723],
    "Srinagar": [34.0837, 74.7973],
    "Agra": [27.1767, 78.0081],
    "Bareilly": [28.3670, 79.4304],
    "Hathras": [27.6046, 78.0494],
    "Jhansi": [25.4484, 78.5685],
    "Meerut": [28.9845, 77.7064],
    "Saharanpur": [29.9680, 77.5552],
    "Haldwani": [29.2189, 79.5126],
    "Lucknow": [26.8467, 80.9462],
    "Kanpur": [26.4499, 80.3319],
    "Ayodhya": [26.7922, 82.1998],
    "Gorakhpur": [26.7606, 83.3731],
    "Varanasi": [25.3176, 82.9739],
    "Prayagraj": [25.4358, 81.8463],
    "Indore": [22.7196, 75.8577],
    "Ujjain": [23.1760, 75.7885],
    "Ratlam": [23.3315, 75.0367],
    "Jabalpur": [23.1815, 79.9864],
    "Raipur": [21.2514, 81.6296],
    "Bilaspur": [22.0790, 82.1391],
    "Bhopal": [23.2599, 77.4126],
    "Sagar": [23.8388, 78.7378],
    "Gwalior": [26.2183, 78.1828],
    "Kolkata": [22.5726, 88.3639],
    "Chinsurah": [22.9024, 88.3957],
    "Burdwan": [23.2324, 87.8630],
    "Bolpur": [23.6692, 87.6836],
    "Midnapore": [22.4164, 87.3269],
    "Haldia": [22.0257, 88.0583],
    "Siliguri": [26.7271, 88.3953],
    "Cooch Behar": [26.3452, 89.4482],
    "Berhampore": [24.0988, 88.2497],
    "Malda": [25.0108, 88.1411],
    "Guwahati": [26.1445, 91.7362],
    "Imphal": [24.8170, 93.9368],
    "Jorhat": [26.7509, 94.2037],
    "Silchar": [24.8333, 92.7789],
    "Nagaon": [26.3562, 92.6841],
    "Patna": [25.5941, 85.1376],
    "Katihar": [25.5262, 87.5739],
    
    // South Zone HQs (Added to support the South Zone tab)
    "Bangalore": [12.9716, 77.5946],
    "Chennai": [13.0827, 80.2707],
    "Hyderabad": [17.3850, 78.4867],
    "Kochi": [9.9312, 76.2673],
    "Coimbatore": [11.0168, 76.9558],
    "Visakhapatnam": [17.6868, 83.2185]
};

// --- Base Dataset matching user HQs ---
const baseHqData = [
    { name: "Delhi", zone: "north", rx: 2500, sales: 95.0, conversions: 140, growth: 12, target: 85.0 },
    { name: "Gurgaon", zone: "north", rx: 1500, sales: 56.0, conversions: 80, growth: 20, target: 50.0 },
    { name: "Greater Noida", zone: "north", rx: 900, sales: 32.0, conversions: 45, growth: 10, target: 30.0 },
    { name: "Noida", zone: "north", rx: 1300, sales: 48.0, conversions: 65, growth: 18, target: 44.0 },
    { name: "Loni", zone: "north", rx: 700, sales: 22.0, conversions: 30, growth: 4, target: 20.0 },
    { name: "Jaipur", zone: "north", rx: 1400, sales: 52.0, conversions: 70, growth: 15, target: 48.0 },
    { name: "Kota", zone: "north", rx: 850, sales: 29.0, conversions: 35, growth: 8, target: 27.0 },
    { name: "Sri Ganganagar", zone: "north", rx: 780, sales: 26.0, conversions: 32, growth: 6, target: 25.0 },
    { name: "Bikaner", zone: "north", rx: 820, sales: 28.0, conversions: 30, growth: 5, target: 27.0 },
    { name: "Jodhpur", zone: "north", rx: 1050, sales: 38.0, conversions: 50, growth: 10, target: 35.0 },
    { name: "Udaipur", zone: "north", rx: 920, sales: 32.5, conversions: 40, growth: 9, target: 30.0 },
    { name: "Ajmer", zone: "north", rx: 890, sales: 30.0, conversions: 38, growth: 7, target: 28.0 },
    { name: "Karnal", zone: "north", rx: 950, sales: 33.0, conversions: 42, growth: 7, target: 30.0 },
    { name: "Mandi", zone: "north", rx: 760, sales: 24.5, conversions: 28, growth: 4, target: 22.0 },
    { name: "Mohali", zone: "north", rx: 1150, sales: 42.0, conversions: 58, growth: 15, target: 38.0 },
    { name: "Chandigarh", zone: "north", rx: 1400, sales: 52.0, conversions: 75, growth: 14, target: 48.0 },
    { name: "Hisar", zone: "north", rx: 900, sales: 31.0, conversions: 38, growth: 5, target: 28.0 },
    { name: "Ludhiana", zone: "north", rx: 1350, sales: 50.0, conversions: 68, growth: 9, target: 46.0 },
    { name: "Abohar", zone: "north", rx: 720, sales: 23.0, conversions: 25, growth: 2, target: 21.0 },
    { name: "Bathinda", zone: "north", rx: 1000, sales: 35.0, conversions: 46, growth: 4, target: 32.0 },
    { name: "Patiala", zone: "north", rx: 1100, sales: 39.0, conversions: 52, growth: 5, target: 36.0 },
    { name: "Jalandhar", zone: "north", rx: 1200, sales: 44.0, conversions: 60, growth: 8, target: 40.0 },
    { name: "Panchkula", zone: "north", rx: 1050, sales: 38.0, conversions: 50, growth: 10, target: 35.0 },
    { name: "Jammu", zone: "north", rx: 1080, sales: 39.5, conversions: 48, growth: 8, target: 36.0 },
    { name: "Pathankot", zone: "north", rx: 850, sales: 29.0, conversions: 34, growth: 6, target: 26.0 },
    { name: "Amritsar", zone: "north", rx: 1250, sales: 46.0, conversions: 62, growth: 7, target: 42.0 },
    { name: "Srinagar", zone: "north", rx: 1150, sales: 42.5, conversions: 52, growth: 6, target: 39.0 },
    { name: "Agra", zone: "north", rx: 1300, sales: 47.0, conversions: 64, growth: 8, target: 43.0 },
    { name: "Bareilly", zone: "north", rx: 1100, sales: 38.5, conversions: 50, growth: 6, target: 35.0 },
    { name: "Hathras", zone: "north", rx: 780, sales: 25.0, conversions: 30, growth: 3, target: 23.0 },
    { name: "Jhansi", zone: "north", rx: 920, sales: 31.5, conversions: 38, growth: 4, target: 29.0 },
    { name: "Meerut", zone: "north", rx: 1250, sales: 45.0, conversions: 58, growth: 9, target: 41.0 },
    { name: "Saharanpur", zone: "north", rx: 980, sales: 33.5, conversions: 42, growth: 5, target: 30.0 },
    { name: "Haldwani", zone: "north", rx: 800, sales: 27.0, conversions: 32, growth: 5, target: 25.0 },
    { name: "Lucknow", zone: "north", rx: 1600, sales: 59.0, conversions: 85, growth: 14, target: 55.0 },
    { name: "Kanpur", zone: "north", rx: 1450, sales: 54.0, conversions: 75, growth: 6, target: 50.0 },
    { name: "Ayodhya", zone: "north", rx: 1020, sales: 36.0, conversions: 45, growth: 12, target: 32.0 },
    { name: "Gorakhpur", zone: "north", rx: 1150, sales: 41.0, conversions: 52, growth: 8, target: 38.0 },
    { name: "Varanasi", zone: "north", rx: 1350, sales: 49.5, conversions: 68, growth: 10, target: 45.0 },
    { name: "Prayagraj", zone: "north", rx: 1280, sales: 46.0, conversions: 60, growth: 7, target: 42.0 },
    
    // West Zone HQs
    { name: "Indore", zone: "west", rx: 1350, sales: 49.0, conversions: 72, growth: 11, target: 45.0 },
    { name: "Ujjain", zone: "west", rx: 850, sales: 29.0, conversions: 35, growth: 8, target: 27.0 },
    { name: "Ratlam", zone: "west", rx: 750, sales: 25.0, conversions: 30, growth: 3, target: 24.0 },
    { name: "Jabalpur", zone: "west", rx: 950, sales: 34.0, conversions: 40, growth: 7, target: 32.0 },
    { name: "Bhopal", zone: "west", rx: 1200, sales: 44.0, conversions: 60, growth: 9, target: 40.0 },
    { name: "Sagar", zone: "west", rx: 700, sales: 23.0, conversions: 28, growth: 4, target: 22.0 },
    { name: "Gwalior", zone: "west", rx: 1000, sales: 36.0, conversions: 48, growth: 5, target: 35.0 },
    
    // East Zone HQs
    { name: "Raipur", zone: "east", rx: 1150, sales: 42.0, conversions: 55, growth: 10, target: 38.0 },
    { name: "Bilaspur", zone: "east", rx: 900, sales: 31.0, conversions: 42, growth: 6, target: 29.0 },
    { name: "Kolkata", zone: "east", rx: 2100, sales: 78.0, conversions: 110, growth: 8, target: 75.0 },
    { name: "Chinsurah", zone: "east", rx: 810, sales: 27.0, conversions: 31, growth: 4, target: 25.0 },
    { name: "Burdwan", zone: "east", rx: 940, sales: 33.0, conversions: 40, growth: 6, target: 30.0 },
    { name: "Bolpur", zone: "east", rx: 730, sales: 23.5, conversions: 26, growth: 5, target: 22.0 },
    { name: "Midnapore", zone: "east", rx: 880, sales: 30.0, conversions: 36, growth: 4, target: 28.0 },
    { name: "Haldia", zone: "east", rx: 820, sales: 28.0, conversions: 32, growth: 5, target: 26.0 },
    { name: "Siliguri", zone: "east", rx: 980, sales: 35.0, conversions: 45, growth: 8, target: 32.0 },
    { name: "Cooch Behar", zone: "east", rx: 760, sales: 25.0, conversions: 28, growth: -1, target: 24.0 },
    { name: "Berhampore", zone: "east", rx: 790, sales: 26.0, conversions: 30, growth: 3, target: 25.0 },
    { name: "Malda", zone: "east", rx: 770, sales: 25.5, conversions: 29, growth: 2, target: 24.0 },
    { name: "Guwahati", zone: "east", rx: 1100, sales: 40.0, conversions: 50, growth: 12, target: 37.0 },
    { name: "Imphal", zone: "east", rx: 680, sales: 22.0, conversions: 22, growth: -3, target: 24.0 },
    { name: "Jorhat", zone: "east", rx: 780, sales: 27.0, conversions: 32, growth: 5, target: 25.0 },
    { name: "Silchar", zone: "east", rx: 740, sales: 25.0, conversions: 28, growth: 2, target: 24.0 },
    { name: "Nagaon", zone: "east", rx: 710, sales: 23.0, conversions: 25, growth: 4, target: 22.0 },
    { name: "Patna", zone: "east", rx: 1250, sales: 45.0, conversions: 58, growth: 9, target: 42.0 },
    { name: "Katihar", zone: "east", rx: 720, sales: 24.0, conversions: 26, growth: -2, target: 25.0 },
    
    // South Zone HQs
    { name: "Bangalore", zone: "south", rx: 2200, sales: 88.0, conversions: 130, growth: 18, target: 80.0 },
    { name: "Chennai", zone: "south", rx: 1900, sales: 74.0, conversions: 105, growth: 10, target: 70.0 },
    { name: "Hyderabad", zone: "south", rx: 2000, sales: 82.0, conversions: 115, growth: 14, target: 75.0 },
    { name: "Kochi", zone: "south", rx: 1300, sales: 48.0, conversions: 65, growth: 12, target: 42.0 },
    { name: "Coimbatore", zone: "south", rx: 1200, sales: 44.0, conversions: 58, growth: 8, target: 40.0 },
    { name: "Visakhapatnam", zone: "south", rx: 1100, sales: 40.0, conversions: 52, growth: 9, target: 37.0 }
];

// Combine both configurations for full dashboard consistency
const baseRegionData = baseHqData;

// Seed names for details generators
const docSpecialties = ["Cardiologist", "Diabetologist", "Neurologist", "Pulmonologist", "General Physician", "Endocrinologist", "Pediatrician"];
const medications = [
    { name: "CardioProtect", category: "Cardiology" },
    { name: "GlicoControl", category: "Diabetology" },
    { name: "NeuroRelax", category: "Neurology" },
    { name: "InflaQuiet", category: "Analgesics" },
    { name: "PulmoSafe", category: "Pulmonology" }
];

// --- State Variables ---
let state = {
    theme: 'light',
    activeTab: 'executive',
    zone: 'all',
    view: 'hq',
    date: '2026-06-01',
    search: '',
    sortBy: 'sales',
    sortOrder: 'desc'
};

// --- DOM References ---
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
    
    alertsContainer: document.getElementById('alerts-container'),
    
    // Modal
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

// --- Map References ---
let mapInstance = null;
let markersLayer = null;

// --- Chart Instances ---
let growthChartInstance = null;
let productPieChartInstance = null;
let zoneBarChartInstance = null;
let therapeuticChartInstance = null;
let modalTrendChartInstance = null;

// --- Map Initialization ---
function initMap() {
    if (mapInstance) return;
    
    mapInstance = L.map('india-map', {
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false
    }).setView([22.973, 78.656], 4.5); // Centers directly on India
    
    updateMapTiles();
    markersLayer = L.layerGroup().addTo(mapInstance);
}

// Update Map style tiles responsive to theme transitions
function updateMapTiles() {
    if (!mapInstance) return;
    
    mapInstance.eachLayer(layer => {
        if (layer instanceof L.TileLayer) {
            mapInstance.removeLayer(layer);
        }
    });
    
    // CartoDB minimalist tile sets
    const tileUrl = state.theme === 'dark' 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
        
    L.tileLayer(tileUrl, {
        maxZoom: 18
    }).addTo(mapInstance);
}

// Render dynamic circle markers on the Leaflet map
function updateMapMarkers(filteredData) {
    if (!markersLayer) return;
    markersLayer.clearLayers();
    
    const colors = getThemeColors();
    
    filteredData.forEach(item => {
        const coords = coordinates[item.name];
        if (!coords) return; // Skip if coordinates undefined
        
        const achPercent = item.target > 0 ? Math.round((item.sales / item.target) * 100) : 0;
        
        // Dynamic bubble color based on target achievements
        let color = colors.danger;
        if (achPercent >= 100) color = colors.success;
        else if (achPercent >= 80) color = colors.warning;
        
        // Bubble size proportional to sales volume
        const radius = Math.max(7, Math.min(22, Math.sqrt(item.sales) * 2));
        
        const marker = L.circleMarker(coords, {
            radius: radius,
            fillColor: color,
            color: 'var(--border-color)',
            weight: 1.5,
            opacity: 0.9,
            fillOpacity: 0.75
        });
        
        // Tooltip rendering matching glassmorphism panel styles
        const tooltipText = `
            <div style="font-family:'Inter', sans-serif;">
                <strong style="font-size:12px; color: var(--text-primary); display:block; margin-bottom:4px;">${item.name}</strong>
                <div style="font-size:10px; color: var(--text-secondary); line-height: 1.4;">
                    Zone: ${item.zone.toUpperCase()}<br/>
                    Sales: ₹ ${item.sales.toFixed(1)} L<br/>
                    Rx Volume: ${item.rx.toLocaleString()}<br/>
                    <strong style="color: ${color};">Achievement: ${achPercent}%</strong>
                </div>
            </div>
        `;
        
        marker.bindTooltip(tooltipText, {
            direction: 'top',
            offset: [0, -5],
            className: 'custom-leaflet-tooltip'
        });
        
        marker.on('click', () => {
            showRegionDetail(item);
        });
        
        // Hover Scale Micro-interactions
        marker.on('mouseover', function() {
            this.setStyle({
                weight: 2.5,
                fillOpacity: 0.95,
                color: 'var(--primary)'
            });
        });
        
        marker.on('mouseout', function() {
            this.setStyle({
                weight: 1.5,
                fillOpacity: 0.75,
                color: 'var(--border-color)'
            });
        });
        
        markersLayer.addLayer(marker);
    });
}

// --- Helpers ---
function getThemeColors() {
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

// Custom Seeded dynamic data variation generator
function getDynamicData() {
    const rand = seedRandom(state.date);
    
    return baseHqData.map(item => {
        const factor = 0.85 + rand() * 0.3; // ±15% variance
        const growthFactor = (rand() * 10) - 5; // ±5% variance
        const rx = Math.round(item.rx * factor);
        const sales = parseFloat((item.sales * factor).toFixed(1));
        const conversions = Math.round(item.conversions * factor);
        const growth = Math.round(item.growth + growthFactor);
        const target = parseFloat((item.target * factor).toFixed(1));
        
        // Dynamically seed local doctors lists
        const localDoctors = Array.from({length: 3}, (_, i) => {
            const specIdx = Math.floor(rand() * docSpecialties.length);
            const drName = `Dr. ${item.name[0]}${item.name[1]} ${['Sharma', 'Gupta', 'Kumar', 'Patel', 'Nair', 'Bose', 'Verma'][Math.floor(rand() * 7)]} ${String.fromCharCode(65 + i)}`;
            return {
                name: drName,
                specialty: docSpecialties[specIdx],
                rx: Math.round(rx * (0.1 + rand() * 0.15))
            };
        }).sort((a,b) => b.rx - a.rx);

        // Dynamically seed top drugs values
        const localDrugs = medications.map(med => {
            return {
                name: med.name,
                category: med.category,
                sales: Math.round(sales * (5 + rand() * 10))
            };
        }).sort((a,b) => b.sales - a.sales).slice(0, 3);
        
        return {
            ...item,
            rx,
            sales,
            conversions,
            growth,
            target,
            doctors: localDoctors,
            drugs: localDrugs
        };
    });
}

function drawSparkline(canvasId, values, color) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
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
    
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    const gradient = ctx.createLinearGradient(0, 0, 0, h);
    gradient.addColorStop(0, color + '2a');
    gradient.addColorStop(1, color + '00');
    ctx.fillStyle = gradient;
    ctx.fill();
}

// Render Upper Statistics indicators
function renderKPIs(filteredData) {
    const totalRx = filteredData.reduce((sum, item) => sum + item.rx, 0);
    const totalSales = filteredData.reduce((sum, item) => sum + item.sales, 0);
    const totalConversions = filteredData.reduce((sum, item) => sum + item.conversions, 0);
    
    const totalTarget = filteredData.reduce((sum, item) => sum + item.target, 0);
    const avgAchievement = totalTarget > 0 ? Math.round((totalSales / totalTarget) * 100) : 0;
    
    const salesDisplay = totalSales >= 100 
        ? `₹ ${(totalSales / 100).toFixed(2)} Cr` 
        : `₹ ${totalSales.toFixed(1)} Lakhs`;
    
    DOM.kpiRxVal.textContent = totalRx.toLocaleString('en-IN');
    DOM.kpiSalesVal.textContent = salesDisplay;
    DOM.kpiConversionsVal.textContent = totalConversions.toLocaleString('en-IN');
    DOM.kpiAchievementVal.textContent = `${avgAchievement}%`;

    const rand = seedRandom(state.date);
    const rxHistory = Array.from({length: 8}, () => Math.round(500 + rand() * 1500));
    const salesHistory = Array.from({length: 8}, () => 20 + rand() * 80);
    const conversionsHistory = Array.from({length: 8}, () => 10 + rand() * 40);
    const achievementHistory = Array.from({length: 8}, () => Math.round(70 + rand() * 40));

    drawSparkline('sparkline-rx', rxHistory, '#4f46e5');
    drawSparkline('sparkline-sales', salesHistory, '#10b981');
    drawSparkline('sparkline-conversions', conversionsHistory, '#ef4444');
    drawSparkline('sparkline-achievement', achievementHistory, '#f59e0b');
}

// Render Summary Data Table
function renderTable(filteredData) {
    const sorted = [...filteredData].sort((a, b) => {
        let valA = a[state.sortBy];
        let valB = b[state.sortBy];
        
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

// Render dynamic graphs
function renderCharts(filteredData) {
    const cColors = getThemeColors();
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
                    <strong>Critical Shortfall:</strong> ${item.name} (${item.zone.toUpperCase()} zone) has achieved only ${achievement}% of its targets. Review inventory supply or regional executive officer engagement immediately.
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
                    <strong>High Growth Indicator:</strong> ${item.name} has recorded growth of +${item.growth}% MoM. Inventory supply optimization recommended to prevent stocking issues.
                    <div class="alert-time">Triggered: Just now</div>
                </div>
            `;
            DOM.alertsContainer.appendChild(node);
        }
    });

    if (alertCount === 0) {
        DOM.alertsContainer.innerHTML = `<div style="text-align:center; padding: 40px; color: var(--text-muted);">All parameters healthy. No urgent alerts triggered for this filter combination.</div>`;
    }
}

// Slide open detailed drawer modal
function showRegionDetail(item) {
    const achPercent = item.target > 0 ? Math.round((item.sales / item.target) * 100) : 0;
    
    DOM.modalRegionName.textContent = item.name;
    DOM.modalRegionType.textContent = `HQ details overview (${item.zone.toUpperCase()} zone)`;
    
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

    // Render Modal Weekly Trend Chart
    setTimeout(() => {
        const ctxModalTrend = document.getElementById('modalTrendChart');
        if (ctxModalTrend) {
            const rand = seedRandom(item.name + state.date);
            const trendValues = Array.from({length: 5}, () => Math.round(5 + rand() * 40));
            const cColors = getThemeColors();

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

// Master state-to-UI update function
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
    
    // Redraw Table, Map, KPI indicators, Charts
    renderKPIs(filtered);
    renderTable(filtered);
    renderCharts(filtered);
    renderAlerts(filtered);
    
    // Lazy-draw Leaflet markers to prevent blocking main UI thread
    if (state.activeTab === 'executive') {
        setTimeout(() => {
            initMap();
            updateMapMarkers(filtered);
        }, 100);
    }
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
        
        // Redraw map tiles
        updateMapTiles();
        
        // Re-render UI & Chart themes
        updateUI();
    });

    // 2. Filter changes
    DOM.zoneFilter.addEventListener('change', (e) => {
        state.zone = e.target.value;
        updateUI();
    });

    DOM.viewFilter.addEventListener('change', (e) => {
        state.view = e.target.value;
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
                executive: 'Executive overview of sales headquarters, targets, and prescription metrics.',
                regional: 'Geographic zone contribution, comparison metrics and regional insights.',
                products: 'Therapeutic categories analysis, drug distribution rates, and clinical metrics.',
                alerts: 'Live operational indicators, target warnings, and field force deviations.'
            };
            document.getElementById('dashboard-subtitle').textContent = subText[targetTab] || '';
            
            // Re-render charts or initialize map
            setTimeout(updateUI, 100);
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
                state.sortOrder = 'desc';
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

    // 5. Drawer Close triggers
    DOM.modalClose.addEventListener('click', closeRegionDetail);
    DOM.modalBackdrop.addEventListener('click', closeRegionDetail);

    // Initial Draw call
    updateUI();
}

// Start application
document.addEventListener('DOMContentLoaded', init);
