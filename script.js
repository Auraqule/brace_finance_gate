"use strict";
let gate2IsOPen = false;
let gate4IsOPen = false;
let newUserpassword;
let userEmailInput;
let userTelephoneInput;
let displayUserEnteredEmail; // DISPLAY USER ENTERED EMAIL ON GATE 8
let displayUserEnteredPhoneNo; // DISPLAY USER ENTERED PHONE NO ON GATE 9
let autofillUserEnteredEmail; // AUTO FILLS GATE/PAGE 3 EMAIL INPUT WITH USER ENTERED EMAIL
let autofillUserEnteredPhoneNo; // AUTO FILLS GATE/PAGE 5 TEL INPUT WITH USER ENTERED PBONE NUMBER
// QUERY DOM FOR USER OTP INPUT
const otp1Gate8 = document.getElementById("ts-otp1-gt8");
const otp2Gate8 = document.getElementById("ts-otp2-gt8");
const otp3Gate8 = document.getElementById("ts-otp3-gt8");
const otp4Gate8 = document.getElementById("ts-otp4-gt8");
const otp5Gate8 = document.getElementById("ts-otp5-gt8");
const otp6Gate8 = document.getElementById("ts-otp6-gt8");
const otp1Gate9 = document.getElementById("ts-otp1-gt9");
const otp2Gate9 = document.getElementById("ts-otp2-gt9");
const otp3Gate9 = document.getElementById("ts-otp3-gt9");
const otp4Gate9 = document.getElementById("ts-otp4-gt9");
const otp5Gate9 = document.getElementById("ts-otp5-gt9");
const otp6Gate9 = document.getElementById("ts-otp6-gt9");
const otp1Gate12 = document.getElementById("ts-otp1-gt12");
const otp2Gate12 = document.getElementById("ts-otp2-gt12");
const otp3Gate12 = document.getElementById("ts-otp3-gt12");
const otp4Gate12 = document.getElementById("ts-otp4-gt12");
const otp5Gate12 = document.getElementById("ts-otp5-gt12");
const otp6Gate12 = document.getElementById("ts-otp6-gt12");
const otp1Gate13 = document.getElementById("ts-otp1-gt13");
const otp2Gate13 = document.getElementById("ts-otp2-gt13");
const otp3Gate13 = document.getElementById("ts-otp3-gt13");
const otp4Gate13 = document.getElementById("ts-otp4-gt13");
const otp5Gate13 = document.getElementById("ts-otp5-gt13");
const otp6Gate13 = document.getElementById("ts-otp6-gt13");
// WORKING ON THE MODAL
const modalTrigger = document.querySelector(".modal-trigger-container");
const modalWrapperAll = document.querySelector(".modal-wrapper-All");
const wrapperAll = document.querySelector(".Wrapper-All");
modalTrigger.addEventListener("click", () => {
    hideAndDisplayModal(modalTrigger, modalWrapperAll);
});
// OVERLAY HANDLER
wrapperAll.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
        return;
    }
    else {
        hideAndDisplayModal(modalWrapperAll, modalTrigger);
    }
});
// function to hide and display modal
function hideAndDisplayModal(hide, reveal) {
    hide.style.cssText = "display: none !important";
    reveal.style.cssText = "display: block !important;";
    wrapperAll.classList.add("open");
}
// MAKING THE USER ENTERD OTPS INTO THEIR RESPECTIVE ARRAYS
const gate8Arr = [
    otp1Gate8,
    otp2Gate8,
    otp3Gate8,
    otp4Gate8,
    otp5Gate8,
    otp6Gate8,
];
const gate9Arr = [
    otp1Gate9,
    otp2Gate9,
    otp3Gate9,
    otp4Gate9,
    otp5Gate9,
    otp6Gate9,
];
const gate12Arr = [
    otp1Gate12,
    otp2Gate12,
    otp3Gate12,
    otp4Gate12,
    otp5Gate12,
    otp6Gate12,
];
const gate13Arr = [
    otp1Gate13,
    otp2Gate13,
    otp3Gate13,
    otp4Gate13,
    otp5Gate13,
    otp6Gate13,
];
// USER OTP NON-EMPTINESS VALIDATION
// FUCNTION TO TEST THE NON-EMPTINESS OF OTP INPUTS
const checkOTPIsNonEmpty = (OTPS) => {
    let result;
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
function hideAndDisplayPage(hidePage, displayPage) {
    hidePage.style.cssText = "display:none !important;";
    displayPage.style.cssText = "display:block !important;";
}
// function to move the OTP input focus to the next OTP input box
function otpBoxFocusShiftHandler(currentOtpNo, nextOtpNo) {
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
const gate1 = document.getElementById("ts-gate-1");
const gate2 = document.getElementById("ts-gate-2");
const gate3 = document.getElementById("ts-gate-3");
const gate4 = document.getElementById("ts-gate-4");
const gate5 = document.getElementById("ts-gate-5");
const gate6 = document.getElementById("ts-gate-6");
const gate7 = document.getElementById("ts-gate-7");
const gate8 = document.getElementById("ts-gate-8");
const gate9 = document.getElementById("ts-gate-9");
const gate10 = document.getElementById("ts-gate-10");
const gate11 = document.getElementById("ts-gate-11");
const gate12 = document.getElementById("ts-gate-12");
const gate13 = document.getElementById("ts-gate-13");
// QUERY DOM FOR FORM ELEMENTS
const gate2Form = document.querySelector("#ts-gate2-form");
const gate3Form = document.querySelector("#ts-gate3-form");
const gate4Form = document.querySelector("#ts-gate4-form");
const gate5Form = document.querySelector("#ts-gate5-form");
const gate6Form = document.querySelector("#ts-gate6-form");
const gate7Form = document.querySelector("#ts-gate7-form");
const gate8Form = document.querySelector("#ts-gate8-form");
const gate9Form = document.querySelector("#ts-gate9-form");
const gate10Form = document.querySelector("#ts-gate10-form");
// QUERY DOM FOR ENTERED USER "PHONE-NO" AND "EMAIL" INPUT
userEmailInput = document.querySelector("#ts-email");
userTelephoneInput = document.querySelector("#ts-tel");
// QUERY DOM FOR EMAIL AND TELEPHONE INPUTS TO AUTO FILL ALREADY ENTERED USER EMAIL AND PHONE NO
autofillUserEnteredEmail = document.querySelector("#auto-fill-authentication-email");
autofillUserEnteredPhoneNo = document.querySelector("#auto-fill-authentication-tel");
// QUERY DOM FOR SPANS TO DISPLAY EMAIL AND PHONE NO => I.E PAGES/GATES 8,9,12,13
displayUserEnteredEmail = document.querySelectorAll(".display-authentication-email");
displayUserEnteredPhoneNo = document.querySelectorAll(".display-authentication-phone-no");
// QUERY DOM FOR LOGIN FORWARD ARROW ICON
const LoginForwardIcons = document.querySelectorAll(".email-login-forward-icon, .tel-login-forward-icon ");
const LoginForwardIconsArr = [...LoginForwardIcons];
LoginForwardIconsArr.map((LoginForwardIcon, index) => {
    LoginForwardIcon.addEventListener("click", () => {
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
logosArr.map((logo) => {
    logo.addEventListener("click", () => {
        if (logo !== logosArr[0]) {
            // logosArr[4] && window.location.reload();
            if (logosArr[4]) {
                window.location.reload();
                return;
            }
            logo.parentNode.parentNode.parentNode.style.cssText =
                "display: none !important;";
            gate1.style.cssText = "display:block !important;";
        }
    });
});
// RESPONSIBLE FOR EXITING EACH PAGE => EXITING PAGE TO THE HOME PAGE WHEN THE USER CLICKS ON THE EXIT BUTTON
const exitsArr = [...exits];
exitsArr.map((exit, index) => {
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
backBtnsArr.map((backBtn, index) => {
    backBtn.addEventListener("click", () => {
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
            // location.reload();
            gate2.style.cssText = "display:block !important;";
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
const btnGate1 = document.querySelector(".btn-gate-1");
btnGate1.addEventListener("click", () => {
    gate1.style.cssText = "display:none !important; ;";
    gate2.style.cssText = "display:block !important;";
});
//  USE PHONE INSTEAD OPERATION HANDLER
const usePhoneInstead = document.querySelector(".ts-use-phone-instead");
usePhoneInstead === null || usePhoneInstead === void 0 ? void 0 : usePhoneInstead.addEventListener("click", () => {
    gate2.style.cssText = "display:none !important;";
    gate4.style.cssText = "display:block !important;";
});
//  USE EMAIL INSTEAD OPERATION HANDLER
const useEmailInstead = document.querySelector(".ts-use-email-instead");
useEmailInstead === null || useEmailInstead === void 0 ? void 0 : useEmailInstead.addEventListener("click", () => {
    gate4.style.cssText = "display:none !important;";
    gate2.style.cssText = "display:block !important;";
});
// SUBMIT HANDLER FUNCTION TO PREVENT DEFAULT PAGE REFRESH ACTION ON SUBMIT
const submitHandler = (e) => {
    e.preventDefault();
};
// "ONSUBMIT" EVENTLISTENERS => responsible for handling whaterver happens anytime a form is submitted
gate2Form.addEventListener("submit", (e) => {
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
    twoDisplayUserEnteredEmail.map((eachDisplayEmail) => {
        eachDisplayEmail.textContent = userEmailInput.value;
    });
});
gate3Form.addEventListener("submit", (e) => {
    submitHandler(e);
    gate3.style.cssText = "display:none !important;";
    gate6.style.cssText = "display:block !important;";
    logginInLoadingPage(gate6, gate12);
});
gate4Form.addEventListener("submit", (e) => {
    submitHandler(e);
    // TOGGLE GATE-4 TO EITHER OPEN OR CLOSE
    gate4IsOPen = !gate4IsOPen;
    gate4.style.cssText = "display:none !important;";
    userTelephoneInput.value === "7066389644"
        ? (gate5.style.cssText = "display:block !important;")
        : (gate10.style.cssText = "display:block !important;");
    autofillUserEnteredPhoneNo.value = userTelephoneInput.value;
    autofillUserEnteredPhoneNo.value.length <= 10
        ? (autofillUserEnteredPhoneNo.style.cssText = `background-image:url("./Assets/check-mark.png"); `)
        : null;
    const twoDisplayUserEnteredPhoneNo = [...displayUserEnteredPhoneNo];
    twoDisplayUserEnteredPhoneNo.map((eachDisplayPhoneNo) => {
        eachDisplayPhoneNo.textContent = userTelephoneInput.value;
    });
});
gate5Form.addEventListener("submit", (e) => {
    submitHandler(e);
    gate5.style.cssText = "display:none !important;";
    gate6.style.cssText = "display:block !important;";
    logginInLoadingPage(gate6, gate13);
});
const logginInLoadingPage = (firstGate, secondGate) => {
    setTimeout(() => {
        firstGate.style.cssText = "display:none !important;";
        secondGate.style.cssText = "display:block !important;";
    }, 2500);
};
gate7Form.addEventListener("submit", (e) => {
    submitHandler(e);
    gate7.style.cssText = "display:none !important;";
    gate2.style.cssText = "display:block !important;";
});
gate10Form.addEventListener("submit", (e) => {
    submitHandler(e);
    newUserpassword = document.querySelector("#new-user-password");
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
        }
        else {
            gate2IsOPen = !gate2IsOPen;
            gate4IsOPen = !gate4IsOPen;
            gate2.style.cssText = "display:block !important;";
            return;
        }
    }
    else {
        newUserpassword.addEventListener("keyup", (event) => {
            if (newUserpassword.value.length >= 8) {
                if (userPasswordPattern.test(newUserpassword.value)) {
                    newUserpassword.style.cssText = "border-color: #1da95b !important";
                    console.log(newUserpassword.value.length);
                }
                else {
                    newUserpassword.style.cssText = "border-color: red !important";
                }
            }
            else {
                newUserpassword.style.cssText = "border-color: red !important";
            }
        });
        newUserpassword.style.cssText = "border-color: red !important";
        newUserpassword.value = "";
        // newUserpassword.setAttribute("placeholder", "Invalid Password!");
    }
});
// FORGOT PASSWORD HANDLER
const forgotPasswordLinks = document.querySelectorAll(".Forgot-password");
const forgotPasswordLinksArr = [...forgotPasswordLinks];
forgotPasswordLinksArr.map((forgotPasswordLink, index) => {
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
const forgotPasswordUsePhoneInstead = document.querySelector(".forgot-password-use-phone-instead");
const forgotPasswordUsePhoneInsteadLabel = document.querySelector(".ts-label");
const forgotPasswordUsePhoneInsteadInput = document.querySelector(".ts-input");
forgotPasswordUsePhoneInstead.addEventListener("click", () => {
    var _a;
    if ((_a = forgotPasswordUsePhoneInstead.textContent) === null || _a === void 0 ? void 0 : _a.includes("Use Phone Instead")) {
        forgotPasswordUsePhoneInstead.textContent = "Use Email Instead";
        forgotPasswordUsePhoneInsteadLabel.textContent = "Phone number";
        forgotPasswordUsePhoneInsteadInput.type = "tel";
        // forgotPasswordUsePhoneInsteadInput.style.paddingLeft = "none !important";
        // forgotPasswordUsePhoneInsteadInput.setAttribute("class", "ts-tel");
        forgotPasswordUsePhoneInsteadInput.placeholder = "Enter your phone number";
    }
    else {
        forgotPasswordUsePhoneInstead.textContent = "Use Phone Instead";
        forgotPasswordUsePhoneInsteadLabel.textContent = "Email Address";
        forgotPasswordUsePhoneInsteadInput.type = "email";
        forgotPasswordUsePhoneInsteadInput.placeholder = "Enter your email address";
    }
});
// PASSWORD HIDE OR REVEAL FUNCIONALITY
const togglePasswordVisibility = document.querySelectorAll(".password-eye-toggle, .password-eye-reveal");
const userPassword = document.querySelectorAll(".ts-password");
const userPasswordArr = [...userPassword];
const togglePasswordVisibilityArr = [...togglePasswordVisibility];
togglePasswordVisibilityArr.map((toggleEye) => {
    toggleEye.addEventListener("click", () => {
        userPasswordArr.map((password) => {
            // TOGGLE FROM TYPE PASSWORD TO TEXT TO REVEAL USER ENTERED PASSWORD
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
        });
    });
});
