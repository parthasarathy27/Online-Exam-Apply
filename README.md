# Government Exam Registration System

## Project Overview
This project is a web-based Government Exam Registration System that allows users to register and apply for various government exams. The application includes user authentication (login & registration), multi-step form submission, and session management.

## Features
- User authentication (Registration & Login)
- Multi-step government exam registration form
- Client-side validation
- Session management
- Confirmation and review before submission
- Success page with official exam portal links

## Technologies Used
- HTML5
- CSS3 (Bootstrap & Tailwind CSS)
- JavaScript (Client-side validation & session handling)
- Firebase (For authentication - optional)

## Project Structure
```
project-folder/
│── index.html            # Login & Registration page
│── registration.html      # Multi-step exam registration form
│── assets/
│   ├── logo.jpg          # Project logo
│── css/
│   ├── style.css         # Custom styles
│── js/
│   ├── auth.js           # Authentication handling
│   ├── session.js        # Session management
│── README.md             # Project documentation
```

## Installation & Usage
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/exam-registration.git
   ```
2. Navigate to the project folder:
   ```bash
   cd exam-registration
   ```
3. Open `index.html` in a browser.

## How to Use
### User Authentication
- New users can register by providing an email, username, and password.
- Existing users can log in using their registered credentials.
- Once logged in, users can access the exam registration form.

### Exam Registration Process
1. **Personal Details:** Enter personal information like name, DOB, and contact details.
2. **Educational & Exam Details:** Provide academic qualifications and exam preferences.
3. **Confirmation:** Review entered details before submission.
4. **Success Page:** Redirects users to relevant exam portals.

## Scripts & Functionalities
- **`auth.js`**: Handles user registration and login.
- **`session.js`**: Manages user sessions and logout functionality.
- **Form Handling**: JavaScript validates input fields and switches between registration steps.

## Future Enhancements
- Backend integration with Firebase or a database for storing registration data.
- OTP-based authentication.
- Admin panel for managing applications.

