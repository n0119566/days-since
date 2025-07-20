# Days Since - Date Difference Calculator

A clean, responsive web application that precisely calculates the time difference between any two dates, displaying results in years, months, and days. Perfect for tracking anniversaries, project timelines, age calculations, or any date-based milestones.

**🌐 Live Demo:** [View on GitHub Pages](https://n0119566.github.io/days-since/)

## 📖 About This Project

The Days Since application is a practical web tool designed to calculate exact time differences between dates with precision and accuracy. Unlike simple day calculators, this application accounts for leap years, varying month lengths, and provides a detailed breakdown showing years, months, and days separately.

Whether you're tracking how long since a significant event, calculating someone's exact age, planning future milestones, or managing project timelines, this tool provides accurate, easy-to-understand results.

## ✨ Features

- **Precise Date Calculations**: Accurate computation accounting for leap years and varying month lengths
- **Bidirectional Calculation**: Works for both past and future dates relative to any starting point
- **Detailed Results**: Displays results broken down into years, months, and days
- **User-Friendly Interface**: Clean, responsive design using Bootstrap framework
- **Default Values**: Pre-populated with sensible default dates for quick testing
- **Cross-Browser Compatible**: Works reliably across modern web browsers
- **Mobile Responsive**: Optimized for both desktop and mobile devices
- **No External Dependencies**: Runs entirely in the browser without requiring server-side processing

## 🚀 Usage Instructions

### Basic Usage

1. **Open the Application**: Visit [https://n0119566.github.io/days-since/](https://n0119566.github.io/days-since/)

2. **Select Start Date**: 
   - Click on the "Start Date" field
   - Choose your desired starting date using the date picker
   - Default is set to March 27, 2023

3. **Select End Date**: 
   - Click on the "End Date" field
   - Choose your desired ending date using the date picker
   - Default is set to today's date

4. **Calculate**: Click the "Calculate!" button to see results

5. **View Results**: The application will display the exact time difference in the format:
   ```
   It is X year(s), Y month(s), and Z day(s) between [start date] and [end date]
   ```

### Example Use Cases

- **Age Calculation**: Set start date as someone's birthday and end date as today
- **Anniversary Tracking**: Calculate time since a wedding, graduation, or other milestone
- **Project Timeline**: Determine duration between project start and completion dates
- **Event Planning**: Calculate time remaining until a future event
- **Historical Analysis**: Find the time span between historical events

### Tips

- The application automatically handles date order - it will calculate the absolute difference regardless of which date is earlier
- All calculations account for leap years and the varying number of days in each month
- Dates are displayed in MM/DD/YYYY format in the results

## 🛠️ Technical Details

### Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Bootstrap CSS Framework
- **Deployment**: GitHub Pages
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)

### Key Components

- `index.html`: Main application interface
- `main.js`: Core date calculation and event handling logic
- `exactAge.js`: Precise age calculation algorithm with leap year support
- `style.css`: Custom styling and responsive design enhancements
- `bootstrap.css`: Bootstrap framework for consistent UI components

### Algorithm Highlights

The application uses a sophisticated date calculation algorithm that:
- Properly handles leap years (accounting for the 400-year rule)
- Accurately calculates differences across month boundaries
- Handles edge cases like February 29th and months with different day counts
- Provides consistent results regardless of date input order

## 🤝 Contributing

We welcome contributions to improve the Days Since application! Here's how you can help:

### Ways to Contribute

1. **Bug Reports**: Found an issue? Please open a GitHub issue with details
2. **Feature Requests**: Have an idea for improvement? Share it via GitHub issues
3. **Code Contributions**: Submit pull requests for bug fixes or new features
4. **Documentation**: Help improve this README or add code comments
5. **Testing**: Help test the application across different browsers and devices

### Development Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/n0119566/days-since.git
   cd days-since
   ```

2. **Local Development**:
   ```bash
   # Serve locally using Python (Python 3)
   python -m http.server 8000
   
   # Or using Node.js (if you have it installed)
   npx http-server
   ```

3. **Open in Browser**: Navigate to `http://localhost:8000`

### Contribution Guidelines

- Follow existing code style and formatting
- Test your changes across multiple browsers
- Ensure responsive design is maintained
- Add comments for complex logic
- Update documentation if adding new features

### Pull Request Process

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is available as open source. Feel free to use, modify, and distribute according to your needs.

## 🙏 Acknowledgments

- **Bootstrap Team**: For providing the excellent CSS framework
- **Kevin Leary**: Base code inspiration for the exact age calculation algorithm ([source](https://www.kevinleary.net/blog/javascript-age-birthdate-mm-dd-yyyy/))
- **CADZ LLC**: Development and maintenance
- **GitHub Pages**: For free hosting of this application

## 📞 Contact & Support

- **Website**: [GitHub Pages Deployment](https://n0119566.github.io/days-since/)
- **Issues**: [GitHub Issues Page](https://github.com/n0119566/days-since/issues)
- **Email**: info@MotoMileage.com
- **Company**: CADZ LLC, Bend, OR 97703, US

---

**Made with ❤️ by CADZ LLC - Making things better, smarter...**
