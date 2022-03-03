let gate2IsOPen: boolean = false;
let gate4IsOPen: boolean = false;
let newUserpassword: HTMLInputElement;
let userEmailInput: HTMLInputElement;
let userTelephoneInput: HTMLInputElement;
let displayUserEnteredEmail: NodeList; // DISPLAY USER ENTERED EMAIL ON GATE 8
let displayUserEnteredPhoneNo: NodeList; // DISPLAY USER ENTERED PHONE NO ON GATE 9
let autofillUserEnteredEmail: HTMLInputElement; // AUTO FILLS GATE/PAGE 3 EMAIL INPUT WITH USER ENTERED EMAIL
let autofillUserEnteredPhoneNo: HTMLInputElement; // AUTO FILLS GATE/PAGE 5 TEL INPUT WITH USER ENTERED PBONE NUMBER

// QUERY DOM FOR PAGES/GATES  I.E SECTION ELEMENTS
const gate1 = document.getElementById("ts-gate-1")!;
const gate2 = document.getElementById("ts-gate-2")!;
const gate3 = document.getElementById("ts-gate-3")!;
const gate4 = document.getElementById("ts-gate-4")!;
const gate5 = document.getElementById("ts-gate-5")!;
const gate6 = document.getElementById("ts-gate-6")!;
const gate7 = document.getElementById("ts-gate-7")!;
const gate8 = document.getElementById("ts-gate-8")!;
const gate9 = document.getElementById("ts-gate-9")!;
const gate10 = document.getElementById("ts-gate-10")!;
const gate11 = document.getElementById("ts-gate-11")!;
const gate12 = document.getElementById("ts-gate-12")!;
const gate13 = document.getElementById("ts-gate-13")!;

// QUERY DOM FOR FORM ELEMENTS
const gate2Form = document.querySelector("#ts-gate2-form") as HTMLFormElement;
const gate3Form = document.querySelector("#ts-gate3-form") as HTMLFormElement;
const gate4Form = document.querySelector("#ts-gate4-form") as HTMLFormElement;
const gate5Form = document.querySelector("#ts-gate5-form") as HTMLFormElement;
const gate6Form = document.querySelector("#ts-gate6-form") as HTMLFormElement;
const gate7Form = document.querySelector("#ts-gate7-form") as HTMLFormElement;
const gate8Form = document.querySelector("#ts-gate8-form") as HTMLFormElement;
const gate9Form = document.querySelector("#ts-gate9-form") as HTMLFormElement;
const gate10Form = document.querySelector("#ts-gate10-form") as HTMLFormElement;

// QUERY DOM FOR ENTERED USER "PHONE-NO" AND "EMAIL" INPUT
userEmailInput = document.querySelector("#ts-email") as HTMLInputElement;
userTelephoneInput = document.querySelector("#ts-tel") as HTMLInputElement;

// QUERY DOM FOR EMAIL AND TELEPHONE INPUTS TO AUTO FILL ALREADY ENTERED USER EMAIL AND PHONE NO
autofillUserEnteredEmail = document.querySelector(
  "#auto-fill-authentication-email"
) as HTMLInputElement;
autofillUserEnteredPhoneNo = document.querySelector(
  "#auto-fill-authentication-tel"
) as HTMLInputElement;

// QUERY DOM FOR SPANS TO DISPLAY EMAIL AND PHONE NO => I.E PAGES/GATES 8,9,12,13
displayUserEnteredEmail = document.querySelectorAll(
  ".display-authentication-email"
) as NodeList;
displayUserEnteredPhoneNo = document.querySelectorAll(
  ".display-authentication-phone-no"
) as NodeList;

// QUERY DOM FOR LOGIN FORWARD ARROW ICON
const LoginForwardIcons = document.querySelectorAll(
  ".email-login-forward-icon, .tel-login-forward-icon "
) as NodeList;

const LoginForwardIconsArr: any = [...LoginForwardIcons];
LoginForwardIconsArr.map((LoginForwardIcon: any, index: number): void => {
  LoginForwardIcon.addEventListener("click", (): void => {
    if (index === 0) {
      gate8.style.cssText = "display:none !important;";
      gate11.style.cssText = "display:block !important;";
      return;
    }
    if (index === 1) {
      gate9.style.cssText = "display:none !important;";
      gate11.style.cssText = "display:block !important;";
      return;
    }
    if (index === 2) {
      gate12.style.cssText = "display:none !important;";
      gate11.style.cssText = "display:block !important;";
      return;
    }
    if (index === 3) {
      gate13.style.cssText = "display:none !important;";
      gate11.style.cssText = "display:block !important;";
      return;
    }
  });
});

// QUERY DOM FOR OTHER RELEVANT ELEMENTS such as => [logo, exit button, back button]
const logos = document.querySelectorAll(".logo, .logo-left");
const exits = document.querySelectorAll(".exit-right");
const backBtns = document.querySelectorAll(".back-left");

// RESPONSIBLE FOR TAKING THE USER BACK TO THE HOMEPAGE WHEN THE LOGO BUTTON IS CLICKED
const logosArr = [...logos];
logosArr.map((logo: any) => {
  logo.addEventListener("click", () => {
    if (logo !== logosArr[0]) {
      logo.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate1.style.cssText = "display:block !important;";
    }
  });
});
// RESPONSIBLE FOR EXITING EACH PAGE => EXITING PAGE TO THE HOME PAGE WHEN THE USER CLICKS ON THE EXIT BUTTON
const exitsArr = [...exits];
exitsArr.map((exit: any) => {
  exit.addEventListener("click", () => {
    exit.parentNode.parentNode.parentNode.style.cssText =
      "display: none !important;";
    gate1.style.cssText = "display:block !important;";
  });
});

// RESPONSIBLE FOR HANDLING THE BACK FUNCTION/ OPERATION
const backBtnsArr = [...backBtns];
backBtnsArr.map((backBtn: any, index: number) => {
  backBtn.addEventListener("click", (): void => {
    if (index === 0) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate2.style.cssText = "display:block !important;";
      return;
    }
    if (index === 1) {
      // backBtn.parentNode.parentNode.parentNode.style.cssText =
      //   "display: none !important;";
      // gate5.style.cssText = "display:block !important;";
      return;
    }
    if (index === 2) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate5.style.cssText = "display:block !important;";
      return;
    }
    if (index === 3) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate2.style.cssText = "display:block !important;";
      return;
    }
    if (index === 4) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate2.style.cssText = "display:block !important;";
      return;
    }
    if (index === 5) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate9.style.cssText = "display:block !important;";
      return;
    }
    if (index === 6) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate2.style.cssText = "display:block !important;";
      return;
    }
    if (index === 7) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate2.style.cssText = "display:block !important;";
      return;
    }
  });
});

// "ONCLICK" EVENTLISTENERS => responsible for handling the events required when a button or link is clicked
const btnGate1 = document.querySelector(".btn-gate-1") as HTMLButtonElement;
btnGate1.addEventListener("click", () => {
  gate1.style.cssText = "display:none !important;";
  gate2.style.cssText = "display:block !important;";
});

//  USE PHONE INSTEAD OPERATION HANDLER
const usePhoneInstead = document.querySelector(
  ".ts-use-phone-instead"
) as HTMLInputElement;

usePhoneInstead?.addEventListener("click", (): void => {
  gate2.style.cssText = "display:none !important;";
  gate4.style.cssText = "display:block !important;";
});

//  USE EMAIL INSTEAD OPERATION HANDLER
const useEmailInstead = document.querySelector(
  ".ts-use-email-instead"
) as HTMLInputElement;

useEmailInstead?.addEventListener("click", (): void => {
  gate4.style.cssText = "display:none !important;";
  gate2.style.cssText = "display:block !important;";
});

// SUBMIT HANDLER FUNCTION TO PREVENT DEFAULT PAGE REFRESH ACTION ON SUBMIT
const submitHandler = (e: any): void => {
  e.preventDefault();
};

// "ONSUBMIT" EVENTLISTENERS => responsible for handling whaterver happens anytime a form is submitted
gate2Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  // TOGGLE GATE-2 TO EITHER OPEN OR CLOSE
  gate2IsOPen = !gate2IsOPen;
  gate2.style.cssText = "display:none !important;";
  // ROUTE THE USER TO THE APPROPRIATE GATE BASED ON THE CONDITION THAT THEY HAVE THEIR RECORD IN THE DATABASE OR NOT
  //  IF THE USER HAS A RECORD ? ROUTE THEM TO THE LOGIN GATE : OTHERWISE TO THE SIGN UP GATE

  userEmailInput.value === "auraqule@gmail.com"
    ? (gate3.style.cssText = "display:block !important;")
    : (gate10.style.cssText = "display:block !important;");

  autofillUserEnteredEmail.value = userEmailInput.value;
  const twoDisplayUserEnteredEmail = [...displayUserEnteredEmail];
  twoDisplayUserEnteredEmail.map((eachDisplayEmail: any) => {
    eachDisplayEmail.textContent = userEmailInput.value;
  });
});
gate3Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  gate3.style.cssText = "display:none !important;";
  gate6.style.cssText = "display:block !important;";
  logginInLoadingPage(gate6, gate12);
});
gate4Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  // TOGGLE GATE-4 TO EITHER OPEN OR CLOSE
  gate4IsOPen = !gate4IsOPen;
  gate4.style.cssText = "display:none !important;";

  userTelephoneInput.value === "7066389644"
    ? (gate5.style.cssText = "display:block !important;")
    : (gate10.style.cssText = "display:block !important;");

  autofillUserEnteredPhoneNo.value = userTelephoneInput.value;
  autofillUserEnteredPhoneNo.value.length <= 10
    ? (autofillUserEnteredPhoneNo.style.cssText = `background-image:url("../Assets/check-mark.png"); `)
    : null;
  const twoDisplayUserEnteredPhoneNo = [...displayUserEnteredPhoneNo];
  twoDisplayUserEnteredPhoneNo.map((eachDisplayPhoneNo: any) => {
    eachDisplayPhoneNo.textContent = userTelephoneInput.value;
  });
});
gate5Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  gate5.style.cssText = "display:none !important;";
  gate6.style.cssText = "display:block !important;";

  logginInLoadingPage(gate6, gate13);
});
const logginInLoadingPage = (firstGate: any, secondGate: any): void => {
  setTimeout(() => {
    firstGate.style.cssText = "display:none !important;";
    secondGate.style.cssText = "display:block !important;";
  }, 2500);
};
gate7Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  gate7.style.cssText = "display:none !important;";
  gate2.style.cssText = "display:block !important;";
});

gate10Form.addEventListener("submit", (e): void => {
  submitHandler(e);
  newUserpassword = document.querySelector("#new-user-password")!;
  // NEW USER AUTHENTICATION REGEX PATTERN
  const userPasswordPattern = /^(?=.*\d).{9,}$/;
  if (userPasswordPattern.test(newUserpassword.value)) {
    gate10.style.cssText = "display:none !important;";
    if (gate2IsOPen && !gate4IsOPen) {
      gate8.style.cssText = "display:block !important;";
      return;
    }
    if (gate4IsOPen && !gate2IsOPen) {
      gate9.style.cssText = "display:block !important;";
      return;
    } else {
      // location.reload();
      gate2IsOPen = !gate2IsOPen;
      gate4IsOPen = !gate4IsOPen;
      gate2.style.cssText = "display:block !important;";
      return;
    }
  } else {
    newUserpassword.value = "";
    newUserpassword.setAttribute("placeholder", "Invalid Password!");
  }
});

// FORGOT PASSWORD HANDLER
const forgotPasswordLinks = document.querySelectorAll(
  ".Forgot-password"
) as NodeList;

const forgotPasswordLinksArr = [...forgotPasswordLinks];
forgotPasswordLinksArr.map((forgotPasswordLink, index: number): void => {
  forgotPasswordLink.addEventListener("click", () => {
    if (index === 0) {
      gate3.style.cssText = "display:none !important;";
      gate7.style.cssText = "display:block !important;";
      return;
    }
    if (index === 1) {
      gate5.style.cssText = "display:none !important;";
      gate7.style.cssText = "display:block !important;";
      return;
    }
  });
});

// FORGOT PASSWORD, USE PHONE INSTEAD OPERATIONS HANDLER
const forgotPasswordUsePhoneInstead = document.querySelector(
  ".forgot-password-use-phone-instead"
) as HTMLLIElement;
const forgotPasswordUsePhoneInsteadLabel = document.querySelector(
  ".ts-label"
) as HTMLLabelElement;
const forgotPasswordUsePhoneInsteadInput = document.querySelector(
  ".ts-input"
) as HTMLInputElement;
forgotPasswordUsePhoneInstead.addEventListener("click", (): void => {
  if (
    forgotPasswordUsePhoneInstead.textContent?.includes("Use Phone Instead")
  ) {
    forgotPasswordUsePhoneInstead.textContent = "Use Email Instead";
    forgotPasswordUsePhoneInsteadLabel.textContent = "Phone number";
    forgotPasswordUsePhoneInsteadInput.type = "tel";
    // forgotPasswordUsePhoneInsteadInput.style.paddingLeft = "none !important";
    // forgotPasswordUsePhoneInsteadInput.setAttribute("class", "ts-tel");
    forgotPasswordUsePhoneInsteadInput.placeholder = "Enter your phone number";
  } else {
    forgotPasswordUsePhoneInstead.textContent = "Use Phone Instead";
    forgotPasswordUsePhoneInsteadLabel.textContent = "Email Address";
    forgotPasswordUsePhoneInsteadInput.type = "email";
    forgotPasswordUsePhoneInsteadInput.placeholder = "Enter your email address";
  }
});

// PASSWORD HIDE OR REVEAL FUNCIONALITY
const togglePasswordVisibility = document.querySelectorAll(
  ".password-eye-toggle, .password-eye-reveal"
) as NodeList;

const userPassword = document.querySelectorAll(".ts-password") as NodeList;
const userPasswordArr = [...userPassword];
const togglePasswordVisibilityArr = [...togglePasswordVisibility];
togglePasswordVisibilityArr.map((toggleEye: any): void => {
  toggleEye.addEventListener("click", (): void => {
    userPasswordArr.map((password: any): void => {
      // TOGGLE FROM TYPE PASSWORD TO TEXT TO REVEAL USER ENTERED PASSWORD
      const type =
        password.getAttribute("type") === "password" ? "text" : "password";
      password.setAttribute("type", type);
    });
  });
});
