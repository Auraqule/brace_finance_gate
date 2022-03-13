let gate2IsOPen: boolean = false;
let gate4IsOPen: boolean = false;
let newUserpassword: HTMLInputElement;
let userEmailInput: HTMLInputElement;
let userTelephoneInput: HTMLInputElement;
let displayUserEnteredEmail: NodeList; // DISPLAY USER ENTERED EMAIL ON GATE 8
let displayUserEnteredPhoneNo: NodeList; // DISPLAY USER ENTERED PHONE NO ON GATE 9
let autofillUserEnteredEmail: HTMLInputElement; // AUTO FILLS GATE/PAGE 3 EMAIL INPUT WITH USER ENTERED EMAIL
let autofillUserEnteredPhoneNo: HTMLInputElement; // AUTO FILLS GATE/PAGE 5 TEL INPUT WITH USER ENTERED PBONE NUMBER

// QUERY DOM FOR USER OTP INPUT
const otp1Gate8 = document.getElementById("ts-otp1-gt8") as HTMLInputElement;
const otp2Gate8 = document.getElementById("ts-otp2-gt8") as HTMLInputElement;
const otp3Gate8 = document.getElementById("ts-otp3-gt8") as HTMLInputElement;
const otp4Gate8 = document.getElementById("ts-otp4-gt8") as HTMLInputElement;
const otp5Gate8 = document.getElementById("ts-otp5-gt8") as HTMLInputElement;
const otp6Gate8 = document.getElementById("ts-otp6-gt8") as HTMLInputElement;

const otp1Gate9 = document.getElementById("ts-otp1-gt9") as HTMLInputElement;
const otp2Gate9 = document.getElementById("ts-otp2-gt9") as HTMLInputElement;
const otp3Gate9 = document.getElementById("ts-otp3-gt9") as HTMLInputElement;
const otp4Gate9 = document.getElementById("ts-otp4-gt9") as HTMLInputElement;
const otp5Gate9 = document.getElementById("ts-otp5-gt9") as HTMLInputElement;
const otp6Gate9 = document.getElementById("ts-otp6-gt9") as HTMLInputElement;

const otp1Gate12 = document.getElementById("ts-otp1-gt12") as HTMLInputElement;
const otp2Gate12 = document.getElementById("ts-otp2-gt12") as HTMLInputElement;
const otp3Gate12 = document.getElementById("ts-otp3-gt12") as HTMLInputElement;
const otp4Gate12 = document.getElementById("ts-otp4-gt12") as HTMLInputElement;
const otp5Gate12 = document.getElementById("ts-otp5-gt12") as HTMLInputElement;
const otp6Gate12 = document.getElementById("ts-otp6-gt12") as HTMLInputElement;

const otp1Gate13 = document.getElementById("ts-otp1-gt13") as HTMLInputElement;
const otp2Gate13 = document.getElementById("ts-otp2-gt13") as HTMLInputElement;
const otp3Gate13 = document.getElementById("ts-otp3-gt13") as HTMLInputElement;
const otp4Gate13 = document.getElementById("ts-otp4-gt13") as HTMLInputElement;
const otp5Gate13 = document.getElementById("ts-otp5-gt13") as HTMLInputElement;
const otp6Gate13 = document.getElementById("ts-otp6-gt13") as HTMLInputElement;

// WORKING ON THE MODAL
const modalTrigger = document.querySelector(
  ".modal-trigger-container"
) as HTMLDivElement;
const modalWrapperAll = document.querySelector(
  ".modal-wrapper-All"
) as HTMLElement;
const wrapperAll = document.querySelector(".Wrapper-All") as HTMLElement;

modalTrigger.addEventListener("click", () => {
  hideAndDisplayModal(modalTrigger, modalWrapperAll);
});

// OVERLAY HANDLER
wrapperAll.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) {
    return;
  } else {
    hideAndDisplayModal(modalWrapperAll, modalTrigger);
  }
});

// function to hide and display modal

function hideAndDisplayModal(hide: any, reveal: any) {
  hide.style.cssText = "display: none !important";
  reveal.style.cssText = "display: block !important;";
  wrapperAll.classList.add("open");
}

// MAKING THE USER ENTERD OTPS INTO THEIR RESPECTIVE ARRAYS
const gate8Arr: HTMLInputElement[] = [
  otp1Gate8,
  otp2Gate8,
  otp3Gate8,
  otp4Gate8,
  otp5Gate8,
  otp6Gate8,
];
const gate9Arr: HTMLInputElement[] = [
  otp1Gate9,
  otp2Gate9,
  otp3Gate9,
  otp4Gate9,
  otp5Gate9,
  otp6Gate9,
];
const gate12Arr: HTMLInputElement[] = [
  otp1Gate12,
  otp2Gate12,
  otp3Gate12,
  otp4Gate12,
  otp5Gate12,
  otp6Gate12,
];
const gate13Arr: HTMLInputElement[] = [
  otp1Gate13,
  otp2Gate13,
  otp3Gate13,
  otp4Gate13,
  otp5Gate13,
  otp6Gate13,
];

// USER OTP NON-EMPTINESS VALIDATION
// FUCNTION TO TEST THE NON-EMPTINESS OF OTP INPUTS

const checkOTPIsNonEmpty = (OTPS: any) => {
  let result: boolean | string;
  result =
    (OTPS[0].value &&
      OTPS[1].value &&
      OTPS[2].value &&
      OTPS[3].value &&
      OTPS[4].value &&
      OTPS[5].value) !== "";
  return result;
};

// THIS FUNCTION HIDES AND DISPLAYS ANOTHER PAGE
function hideAndDisplayPage(hidePage: any, displayPage: any) {
  hidePage.style.cssText = "display:none !important;";
  displayPage.style.cssText = "display:block !important;";
}

// function to move the OTP input focus to the next OTP input box
function otpBoxFocusShiftHandler(
  currentOtpNo: HTMLInputElement,
  nextOtpNo: HTMLInputElement
): void {
  if (currentOtpNo.value) {
    nextOtpNo.focus();
  }
}

//  MOVES THE OTP INPUT FOCUS TO THE NEXT INPUT
gate8Arr.map((otp, index) => {
  otp.addEventListener("input", () => {
    if (index === 0) {
      otpBoxFocusShiftHandler(otp1Gate8, otp2Gate8);
      return;
    }
    if (index === 1) {
      otpBoxFocusShiftHandler(otp2Gate8, otp3Gate8);
      return;
    }
    if (index === 2) {
      otpBoxFocusShiftHandler(otp3Gate8, otp4Gate8);
      return;
    }
    if (index === 3) {
      otpBoxFocusShiftHandler(otp4Gate8, otp5Gate8);
      return;
    }
    if (index === 4) {
      otpBoxFocusShiftHandler(otp5Gate8, otp6Gate8);
      return;
    }
  });
});
//  MOVES THE OTP INPUT FOCUS TO THE NEXT INPUT
gate9Arr.map((otp, index) => {
  otp.addEventListener("input", () => {
    if (index === 0) {
      otpBoxFocusShiftHandler(otp1Gate9, otp2Gate9);
      return;
    }
    if (index === 1) {
      otpBoxFocusShiftHandler(otp2Gate9, otp3Gate9);
      return;
    }
    if (index === 2) {
      otpBoxFocusShiftHandler(otp3Gate9, otp4Gate9);
      return;
    }
    if (index === 3) {
      otpBoxFocusShiftHandler(otp4Gate9, otp5Gate9);
      return;
    }
    if (index === 4) {
      otpBoxFocusShiftHandler(otp5Gate9, otp6Gate9);
      return;
    }
  });
});
//  MOVES THE OTP INPUT FOCUS TO THE NEXT INPUT
gate12Arr.map((otp, index) => {
  otp.addEventListener("input", () => {
    if (index === 0) {
      otpBoxFocusShiftHandler(otp1Gate12, otp2Gate12);
      return;
    }
    if (index === 1) {
      otpBoxFocusShiftHandler(otp2Gate12, otp3Gate12);
      return;
    }
    if (index === 2) {
      otpBoxFocusShiftHandler(otp3Gate12, otp4Gate12);
      return;
    }
    if (index === 3) {
      otpBoxFocusShiftHandler(otp4Gate12, otp5Gate12);
      return;
    }
    if (index === 4) {
      otpBoxFocusShiftHandler(otp5Gate12, otp6Gate12);
      return;
    }
  });
});
gate13Arr.map((otp, index) => {
  otp.addEventListener("input", () => {
    if (index === 0) {
      otpBoxFocusShiftHandler(otp1Gate13, otp2Gate13);
      return;
    }
    if (index === 1) {
      otpBoxFocusShiftHandler(otp2Gate13, otp3Gate13);
      return;
    }
    if (index === 2) {
      otpBoxFocusShiftHandler(otp3Gate13, otp4Gate13);
      return;
    }
    if (index === 3) {
      otpBoxFocusShiftHandler(otp4Gate13, otp5Gate13);
      return;
    }
    if (index === 4) {
      otpBoxFocusShiftHandler(otp5Gate13, otp6Gate13);
      return;
    }
  });
});

// ROUTE TO SUBMIT PAGE IF OTP IS COMPLETE
// OTP INPUT BOX EMPTYNESS CHECK FOR GATE 8
otp6Gate8.addEventListener("input", () => {
  setTimeout(() => {
    const otpStatus = checkOTPIsNonEmpty(gate8Arr);
    otpStatus && hideAndDisplayPage(gate8, gate11);
  }, 400);
});

// OTP INPUT BOX EMPTYNESS CHECK FOR GATE 9

otp6Gate9.addEventListener("input", () => {
  setTimeout(() => {
    const otpStatus = checkOTPIsNonEmpty(gate9Arr);
    otpStatus && hideAndDisplayPage(gate9, gate11);
  }, 400);
});
// OTP INPUT BOX EMPTYNESS CHECK FOR GATE 12

otp6Gate12.addEventListener("input", () => {
  setTimeout(() => {
    const otpStatus = checkOTPIsNonEmpty(gate12Arr);
    otpStatus && hideAndDisplayPage(gate12, gate11);
  }, 400);
});

// OTP INPUT BOX EMPTYNESS CHECK FOR GATE 13

otp6Gate13.addEventListener("input", () => {
  setTimeout(() => {
    const otpStatus = checkOTPIsNonEmpty(gate13Arr);
    otpStatus && hideAndDisplayPage(gate13, gate11);
  }, 400);
});

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

// INPUT AN HYPHEN TO PHONE NO INPUT WHEN USER TYPES ANY DIGIT
userTelephoneInput.addEventListener(
  "keydown",
  () => {
    userTelephoneInput.value += " ";
  },
  { once: true }
);

// QUERY DOM FOR EMAIL AND TELEPHONE INPUTS TO AUTO FILL ALREADY ENTERED USER EMAIL AND PHONE NO
autofillUserEnteredEmail = document.querySelector(
  "#auto-fill-authentication-email"
) as HTMLInputElement;
autofillUserEnteredPhoneNo = document.querySelector(
  "#auto-fill-authentication-tel"
) as HTMLInputElement;

// QUERY THE DOM FOR NEW USER PASSWORD
newUserpassword = document.querySelector("#new-user-password")!;

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
  LoginForwardIcon.style.pointerEvents = "none";
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
      // logosArr[4] && window.location.reload();
      if (logosArr[4]) {
        // window.location.reload();
        // return;
      }
      logo.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate1.style.cssText = "display:block !important;";
    }
  });
});

// RESPONSIBLE FOR EXITING EACH PAGE => EXITING PAGE TO THE HOME PAGE WHEN THE USER CLICKS ON THE EXIT BUTTON
const exitsArr = [...exits];
exitsArr.map((exit: any, index: number) => {
  exit.addEventListener("click", () => {
    if (index === 10) {
      location.reload();
    }

    // (index === 7 || index === 8 || index === 9) && window.location.reload();
    // exit.parentNode.parentNode.parentNode.style.cssText =
    //   "display: none !important;";
    // gate1.style.cssText = "display:block !important;";

    hideAndDisplayModal(modalWrapperAll, modalTrigger);
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
      gate2IsOPen = false;
      gate4IsOPen = false;
      return;
    }
    if (index === 4) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      gate4.style.cssText = "display:block !important;";
      gate2IsOPen = false;
      gate4IsOPen = false;
      return;
    }
    if (index === 5) {
      backBtn.parentNode.parentNode.parentNode.style.cssText =
        "display: none !important;";
      // location.reload();
      gate2.style.cssText = "display:block !important;";
      gate2IsOPen = false;
      gate4IsOPen = false;
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
  gate1.style.cssText = "display:none !important; ;";
  gate2.style.cssText = "display:block !important;";
  userEmailInput.focus();
});

//  USE PHONE INSTEAD OPERATION HANDLER
const usePhoneInstead = document.querySelector(
  ".ts-use-phone-instead"
) as HTMLInputElement;

usePhoneInstead?.addEventListener("click", (): void => {
  gate2.style.cssText = "display:none !important;";
  gate4.style.cssText = "display:block !important;";
  userTelephoneInput.focus();
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
  if (userEmailInput.value === "auraqule@gmail.com") {
    gate3.style.cssText = "display:block !important;";
    const oldUserPasswordFromEmail = document.querySelector(
      ".old-user-password-from-email"
    ) as HTMLInputElement;
    oldUserPasswordFromEmail.focus();
  } else {
    gate10.style.cssText = "display:block !important;";
    newUserpassword.focus();
  }

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

  if (userTelephoneInput.value === "+234 7066389644") {
    gate5.style.cssText = "display:block !important;";
    const oldUserPasswordFromTel = document.querySelector(
      ".old-user-password-from-tel"
    ) as HTMLInputElement;
    oldUserPasswordFromTel.focus();
  } else {
    gate10.style.cssText = "display:block !important;";
    newUserpassword.focus();
  }

  autofillUserEnteredPhoneNo.value = userTelephoneInput.value;
  autofillUserEnteredPhoneNo.value.length <= 14
    ? (autofillUserEnteredPhoneNo.style.cssText = `background-image:url("./Assets/check-mark.png"); `)
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
      gate2IsOPen = !gate2IsOPen;
      gate4IsOPen = !gate4IsOPen;
      gate2.style.cssText = "display:block !important;";
      return;
    }
  } else {
    newUserpassword.addEventListener("keyup", (event) => {
      if (newUserpassword.value.length >= 8) {
        if (userPasswordPattern.test(newUserpassword.value)) {
          newUserpassword.style.cssText = "border-color: #1da95b !important";
        } else {
          newUserpassword.style.cssText = "border-color: red !important";
        }
      } else {
        newUserpassword.style.cssText = "border-color: red !important";
      }
    });
    newUserpassword.style.cssText = "border-color: red !important";
    newUserpassword.value = "";
    // newUserpassword.setAttribute("placeholder", "Invalid Password!");
  }
});

// FORGOT PASSWORD HANDLER
const forgotPasswordLinks = document.querySelectorAll(
  ".Forgot-password"
) as NodeList;

const forgotPasswordRecoverEmail = document.querySelector(
  ".forgot-password-recover-email"
) as HTMLInputElement;

const forgotPasswordLinksArr = [...forgotPasswordLinks];
forgotPasswordLinksArr.map((forgotPasswordLink, index: number): void => {
  forgotPasswordLink.addEventListener("click", () => {
    if (index === 0) {
      gate3.style.cssText = "display:none !important;";
      gate7.style.cssText = "display:block !important;";
      forgotPasswordRecoverEmail.focus();
      return;
    }
    if (index === 1) {
      gate5.style.cssText = "display:none !important;";
      gate7.style.cssText = "display:block !important;";
      forgotPasswordRecoverEmail.focus();

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
    forgotPasswordUsePhoneInsteadInput.focus();
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
