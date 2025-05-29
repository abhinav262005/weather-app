// State and City Data
const stateCityData = {
    India: {
        Telangana: ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Karimnagar", "Adilabad"],
        Karnataka: ["Bangalore", "Mysore", "Mangalore", "Hubli", "Belgaum", "Davangere", "Bijapur", "Shimoga"],
        Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Solapur", "Kolhapur", "Amravati", "Thane"],
        TamilNadu: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Erode", "Vellore", "Tirunelveli"],
        WestBengal: ["Kolkata", "Siliguri", "Durgapur", "Asansol", "Howrah", "Malda", "Jalpaiguri", "Bankura"],
        UttarPradesh: ["Lucknow", "Kanpur", "Varanasi", "Agra", "Allahabad", "Noida", "Ghaziabad", "Meerut", "Aligarh"],
        Rajasthan: ["Jaipur", "Jodhpur", "Udaipur", "Ajmer", "Bikaner", "Kota", "Bharatpur", "Alwar", "Sikar"],
        Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar"],
        MadhyaPradesh: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Rewa", "Satna"],
        Bihar: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Ara", "Begusarai", "Purnia"],
        Punjab: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Pathankot"],
        Haryana: ["Gurgaon", "Faridabad", "Panipat", "Hisar", "Rohtak", "Ambala", "Karnal", "Yamunanagar"],
        Kerala: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kannur", "Kollam", "Alappuzha", "Palakkad"],
        AndhraPradesh: ["Vijayawada", "Visakhapatnam", "Tirupati", "Guntur", "Rajahmundry", "Kakinada", "Kadapa"],
        Assam: ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tinsukia", "Nagaon", "Tezpur"],
        Odisha: ["Bhubaneswar", "Cuttack", "Rourkela", "Puri", "Sambalpur", "Berhampur", "Balasore"],
        Chhattisgarh: ["Raipur", "Bilaspur", "Durg", "Korba", "Jagdalpur", "Rajnandgaon", "Mahasamund"],
        Jharkhand: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Deoghar", "Hazaribagh", "Ramgarh"],
        JammuAndKashmir: ["Srinagar", "Jammu", "Anantnag", "Baramulla", "Udhampur", "Kathua"],
        Uttarakhand: ["Dehradun", "Haridwar", "Nainital", "Rudrapur", "Haldwani", "Rishikesh", "Almora"],
        HimachalPradesh: ["Shimla", "Manali", "Dharamshala", "Kangra", "Mandi", "Solan", "Hamirpur"],
        Goa: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim"],
        Tripura: ["Agartala", "Dharmanagar", "Udaipur"],
        Meghalaya: ["Shillong", "Tura", "Jowai"],
        Manipur: ["Imphal", "Thoubal", "Bishnupur"],
        Nagaland: ["Kohima", "Dimapur", "Mokokchung"],
        ArunachalPradesh: ["Itanagar", "Tawang", "Pasighat"],
        Mizoram: ["Aizawl", "Lunglei", "Champhai"],
        Sikkim: ["Gangtok", "Namchi"],
        AndamanAndNicobar: ["Port Blair", "Diglipur"],
        Lakshadweep: ["Kavaratti", "Agatti"]
    },
    USA: { 
        California: ["Los Angeles", "San Francisco", "San Diego"],
        Texas: ["Houston", "Dallas", "Austin"], 
        Florida: ["Miami", "Orlando", "Tampa"],
        NewYork: ["New York City", "Buffalo", "Rochester"],
        Illinois: ["Chicago", "Aurora", "Naperville"] 
    }, 
    UK: { 
        England: ["London", "Manchester", "Birmingham"],
        Scotland: ["Edinburgh", "Glasgow", "Aberdeen"], Wales: ["Cardiff", "Swansea", "Newport"],
        NorthernIreland: ["Belfast", "Derry", "Lisburn"] 
        },
    Canada: {
        Ontario: ["Toronto", "Ottawa", "Hamilton"], 
        Quebec: ["Montreal", "Quebec City", "Gatineau"],
        BritishColumbia: ["Vancouver", "Victoria", "Surrey"],
        Alberta: ["Calgary", "Edmonton", "Red Deer"] 
        }, 
    Australia: {
        NewSouthWales: ["Sydney", "Newcastle", "Wollongong"],
        Victoria: ["Melbourne", "Geelong", "Ballarat"], 
        Queensland: ["Brisbane", "Gold Coast", "Cairns"],
        WesternAustralia: ["Perth", "Bunbury", "Mandurah"] 
        }, 
    Germany: { 
        Bavaria: ["Munich", "Nuremberg", "Augsburg"],
        Berlin: ["Berlin"], 
        NorthRhineWestphalia: ["Cologne", "Düsseldorf", "Dortmund"] 
        }, 
    France: { 
        ÎleDeFrance: ["Paris", "Versailles", "Boulogne-Billancourt"],
        ProvenceAlpesCôteDAzur: ["Nice", "Marseille", "Toulon"],
        AuvergneRhôneAlpes: ["Lyon", "Grenoble", "Saint-Étienne"]
        },
    Brazil: { 
        SãoPaulo: ["São Paulo", "Campinas", "Santos"], 
        RioDeJaneiro: ["Rio de Janeiro", "Niterói", "Petrópolis"], 
        Bahia: ["Salvador", "Feira de Santana", "Vitória da Conquista"] 
    }
};

// Populate States based on Selected Country
document.getElementById('country').addEventListener('change', function () {
    const country = this.value;
    const stateDropdown = document.getElementById('state');
    stateDropdown.innerHTML = `<option value="" disabled selected>Select State</option>`;
    for (const state in stateCityData[country]) {
        stateDropdown.innerHTML += `<option value="${state}">${state}</option>`;
    }
    document.getElementById('city').innerHTML = `<option value="" disabled selected>Select City</option>`;
});

// Populate Cities based on Selected State
document.getElementById('state').addEventListener('change', function () {
    const country = document.getElementById('country').value;
    const state = this.value;
    const cityDropdown = document.getElementById('city');
    cityDropdown.innerHTML = `<option value="" disabled selected>Select City</option>`;
    for (const city of stateCityData[country][state]) {
        cityDropdown.innerHTML += `<option value="${city}">${city}</option>`;
    }
});

// Fetch Weather and Display with Emojis
document.getElementById('getWeather').addEventListener('click', function () {
    const city = document.getElementById('city').value;
    if (!city) {
        alert("Please select a country, state, and city!");
        return;
    }

    const apiKey = '0f48ef0677194703a3a105252251103'; // Replace with your WeatherAPI key
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) throw new Error("Error fetching weather data!");
            return response.json();
        })
        .then(data => {
            const condition = data.current.condition.text.toLowerCase();
            let emoji = '';
            if (condition.includes('sunny')) emoji = '☀️';
            else if (condition.includes('cloud')) emoji = '☁️';
            else if (condition.includes('rain')) emoji = '🌧️';
            else if (condition.includes('snow')) emoji = '❄️';
            else emoji = '🌈';

            const weatherDetails = `
                <h2>${data.location.name}, ${data.location.country}</h2>
                <p>Temperature: ${data.current.temp_c}°C ${emoji}</p>
                <p>Weather: ${data.current.condition.text}</p>
                <p>Humidity: ${data.current.humidity}%</p>
                <p>Wind Speed: ${data.current.wind_kph} km/h</p>
            `;
            document.getElementById('weatherDetails').innerHTML = weatherDetails;

            const alertMessage = document.getElementById('alertMessage');
            if (data.current.temp_c > 40) {
                alertMessage.innerText = '🔥 Alert: Extreme Heatwave!';
            } else if (data.current.wind_kph > 50) {
                alertMessage.innerText = '🌬️ Alert: Strong Winds!';
            } else {
                alertMessage.innerText = '';
            }
        })
        .catch(error => {
            document.getElementById('weatherDetails').innerHTML = `<p style="color: red;">${error.message}</p>`;
            console.error(error);
        });
});

// Theme Toggle Logic
document.body.classList.add("light"); // Set default theme to light

document.getElementById("toggleTheme").addEventListener("click", function () {
    const body = document.body;

    // Toggle between light and dark themes
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
    } else if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        body.classList.add("light");
    } else {
        // If no class exists, default to light theme
        body.classList.add("light");
    }
});
