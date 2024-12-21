/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ["Poppins", "sans-serif"],
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		colors: {
		  foreground: "#1a202c", // สีพื้นหลังปุ่ม
		  "muted-foreground": "#718096", // สีสำหรับ hover หรือข้อความ muted
		  background: "#ffffff", // สีพื้นหลัง
		  muted: "#f8f9fa", // สีขอบหรือลิงก์ hover
		  input: "#e2e8f0", // สีสำหรับ border input
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  