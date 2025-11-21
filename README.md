Femi's Developer Portfolio
A modern, interactive, and scalable portfolio website built for a Mobile Developer (Flutter/Kotlin) and Data Scientist. This project bridges the gap between sleek mobile UI aesthetics and data-driven functionality.
🚀 Features
Dual-Persona Design: Seamlessly showcases both Mobile Development (Flutter/Kotlin) and Data Science projects.
Interactive "Bug Smasher" Game: A custom-built mini-game running inside a virtual phone frame to engage visitors.
Real-Time Device Status: The virtual phone displays real-time clock and actual device battery level (via Battery Status API).
Dark/Light Mode: Fully responsive theme toggling with smooth transitions.
Project Categorization: Tabs to filter projects by technology (Flutter, Kotlin, Data).
Experience & Education Timelines: Clean, interactive tabs to display professional history and academic background.
Responsive Layout: Optimized for mobile, tablet, and desktop screens.
🛠️ Tech Stack
Framework: React (via Vite)
Styling: Tailwind CSS
Icons:
Lucide React (UI elements)
React Icons (Brand logos like Flutter, Python, etc.)
Deployment: Ready for Vercel, Netlify, or GitHub Pages.
📦 Installation & Setup
Clone the repository:
git clone [https://github.com/yourusername/my-portfolio.git](https://github.com/yourusername/my-portfolio.git)
cd my-portfolio


Install dependencies:
npm install


Run the development server:
npm run dev

Open your browser to http://localhost:5173.
📂 Project Structure
my-portfolio/
├── public/
│   └── assets/
│       └── images/       # Store your project screenshots here (e.g., petit.png)
├── src/
│   ├── App.jsx           # Main application logic and data
│   ├── main.jsx          # Entry point
│   └── index.css         # Tailwind directives
├── index.html
├── tailwind.config.js
└── package.json


📝 Customization
Adding Images
To make your project images appear, place your image files (e.g., petit.png, habitar.png) inside the public/assets/images/ folder. The code references them like this:
icon: "/assets/images/petit.png"


Updating Data
All content is managed via constant arrays inside src/App.jsx. You can easily edit these blocks to update your portfolio:
FlutterApps & KotlinApps: Add your mobile projects here.
DATA_PROJECTS: Add your data science work here.
EXPERIENCES: Update your work history.
EDUCATION: Update your academic background.
Changing the Mini-Game
The "Bug Smasher" game logic resides in the BugSmasher component within src/App.jsx. You can tweak the spawn rate, game duration, or scoring logic there.
🤝 Contributing
Feel free to fork this project and customize it for your own portfolio!
Fork the Project
Create your Feature Branch (git checkout -b feature/AmazingFeature)
Commit your Changes (git commit -m 'Add some AmazingFeature')
Push to the Branch (git push origin feature/AmazingFeature)
Open a Pull Request
📄 License
Distributed under the MIT License. See LICENSE for more information.