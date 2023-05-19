var username, password, role;

function login() {
  username = prompt("Enter your username:");
  password = prompt("Enter your password:");
  role = prompt("Enter your role (admin, teacher, or student):");

  if (!username || !password || !role) {
    alert("All fields are required.");
  } else {
    switch (role) {
      case "admin":
        alert("Welcome back to the class portal, admin!");
        break;
      case "teacher":
        alert("Thank you for logging in, teacher!");
        break;
      case "student":
        alert("Welcome to the class portal, student!");
        break;
      default:
        alert("Role out of range.");
        break;
    }
  }
}

function gradeAverage() {
  var grade1 = parseFloat(prompt("Enter grade 1:"));
  var grade2 = parseFloat(prompt("Enter grade 2:"));
  var grade3 = parseFloat(prompt("Enter grade 3:"));
  var grade4 = parseFloat(prompt("Enter grade 4:"));

  var average = (grade1 + grade2 + grade3 + grade4) / 4;
  average = Math.round(average);
  console.log("Hello, student, your average is " + average + ". The letter equivalent is " + Grade(average));
}

function Grade(average) {
  if (average <= 74) {
    return "F";
  } else if (average >= 75 && average <= 84) {
    return "C";
  } else if (average >= 85 && average <= 89) {
    return "B";
  } else if (average >= 90 && average <= 95) {
    return "A";
  } else if (average > 96) {
    return "A+";
  }
}

login();
gradeAverage();
