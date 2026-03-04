const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("isOpen");
  });

  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => navLinks.classList.remove("isOpen"));
  });
}

const genBtn = document.getElementById("genEmail");
const form = document.getElementById("appForm");
const output = document.getElementById("emailOutput");

function val(name) {
  const el = form.querySelector(`[name="${name}"]`);
  return el ? el.value.trim() : "";
}

if (genBtn && form && output) {
  genBtn.addEventListener("click", () => {
    const studentName = val("studentName");
    const age = val("age");
    const parentName = val("parentName");
    const parentEmail = val("parentEmail");
    const incomeBracket = val("incomeBracket");
    const needAid = val("needAid");
    const passportInfo = val("passportInfo");
    const notes = val("notes");

    const lines = [
      "Subject: Application – Advanced Studies Institute Shanghai 2026（" + studentName + "）",
      "",
      "To: summer@moseswrites.org",
      "",
      "Hello Admissions Team,",
      "",
      "I would like to apply for Advanced Studies Institute Shanghai (July 21–30, 2026). Below is our information:",
      "",
      "Student Name: " + studentName,
      "Student Age: " + age,
      "Parent/Guardian Name: " + parentName,
      "Parent Email: " + parentEmail,
      "Household Income Bracket: " + incomeBracket,
      "Applying for Financial Aid: " + needAid,
      "Passport Info: " + passportInfo,
      "",
      "Additional Notes:",
      notes ? notes : "(None)",
      "",
      "Thank you!",
      parentName
    ];

    output.value = lines.join("\n");
    output.focus();
    output.select();
  });
}
