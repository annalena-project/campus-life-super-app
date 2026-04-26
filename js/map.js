/* Map JavaScript */

    // Campus center coordinates - North Park University
    const campusLat = 41.9745;
    const campusLng = -87.7125;

    // Initialize map
    const map = L.map('map').setView([campusLat, campusLng], 16);

    // OpenStreetMap tiles - free, no API key needed
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Location data with coordinates + info
    const locations = {
        athletic: {
            lat: 41.97337,
            lng: -87.70888,
            name: "Athletic Center",
            hours: "6:00 AM - 10:00 PM",
            desc: "Gym facilities and sports events."
        },
        dining: {
            lat: 41.97269,
            lng: -87.71163,
            name: "Main Dining",
            hours: "Mon-Fri 7:00 AM - 8:00 PM | Sat-Sun 8:00 AM - 6:00 PM",
            desc: "Full service dining hall."
        },
        library: {
            lat: 41.97432,
            lng: -87.71208,
            name: "Library",
            hours: "8:00 AM - 10:00 PM",
            desc: "Study zones and computers available."
        },
        cafeteria: {
            lat: 41.97488,
            lng: -87.71195,
            name: "Cafeteria",
            hours: "Mon-Fri 7:00 AM - 6:00 PM | Sat-Sun 10:00 AM - 4:00 PM",
            desc: "Coffee and quick bites."
        },       
    };

    // Add markers to map
    const markers = {};
    for (const key in locations) {
        const loc = locations[key];
        const marker = L.marker([loc.lat, loc.lng])
            .addTo(map)
            .bindPopup(`
                <strong>${loc.name}</strong><br>
                <i class="fa-solid fa-clock"></i> ${loc.hours}<br>
                ${loc.desc}
            `);
        markers[key] = marker;
    }

    // Focus on location when sidebar card is clicked
    function focusLocation(key) {
        const loc = locations[key];
        map.setView([loc.lat, loc.lng], 18);
        markers[key].openPopup();
    }

    // Reset map to campus view
    function resetMap() {
        map.setView([campusLat, campusLng], 16);
    }