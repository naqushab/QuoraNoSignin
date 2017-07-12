document.body.className = document.body.className.replace("signup_wall_prevent_scroll","");
var element1 = document.getElementsByClassName("modal_signup_background");
element1[0].classList.remove("modal_signup_background");
var element2 = document.getElementsByClassName("vertical_alignment_wrapper");
element2[0].style.visibility = "hidden";
var element3 = document.getElementsByClassName("fixed_footer_gradient");
element3[0].classList.remove("fixed_footer_gradient");
var element4 = document.getElementsByClassName("SignupFooter");
element4[0].style.visibility = "hidden";