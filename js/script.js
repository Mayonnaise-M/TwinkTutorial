// // STEP 0
document.getElementById("step0").addEventListener("click", function () {
    div0.style.display = "none";
    div1.style.display = "block";

    document.getElementById("div1").scrollIntoView({ block: 'start' });
});

// // STEP 1
document.getElementById("step1").addEventListener("click", function () {
    img1.style.display = "block";
    txt1.style.display = "block";
    btn1.style.display = "block";

    document.getElementById("img1").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("next1").addEventListener("click", function () {
    div1.style.display = "none";
    div2.style.display = "block";

    document.getElementById("div2").scrollIntoView({ block: 'start' });
});

// // STEP 2
document.getElementById("step2bed").addEventListener("click", function () {
    img2bed.style.display = "block";
    txt2.style.display = "block";
    btn2.style.display = "block";
    img2couch.style.display = "none";

    document.getElementById("img2bed").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("step2couch").addEventListener("click", function () {
    img2couch.style.display = "block";
    txt2.style.display = "block";
    btn2.style.display = "block";
    img2bed.style.display = "none";

    document.getElementById("img2couch").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("prev2").addEventListener("click", function () {
    div1.style.display = "block";
    div2.style.display = "none";

    document.getElementById("div1").scrollIntoView({ block: 'start' });
});

document.getElementById("next2").addEventListener("click", function () {
    div2.style.display = "none";
    div3.style.display = "block";

    document.getElementById("div3").scrollIntoView({ block: 'start' });
});

// // STEP 3
document.getElementById("step3").addEventListener("click", function () {
    img3clothes.style.display = "none";
    img3naked.style.display = "block";
    txt3.style.display = "block";
    btn3.style.display = "block";

    document.getElementById("img3naked").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("prev3").addEventListener("click", function () {
    div2.style.display = "block";
    div3.style.display = "none";

    document.getElementById("div2").scrollIntoView({ block: 'start' });
});

document.getElementById("next3").addEventListener("click", function () {
    div3.style.display = "none";
    div4.style.display = "block";

    document.getElementById("div4").scrollIntoView({ block: 'start' });
});

// // STEP 4
document.getElementById("prev4").addEventListener("click", function () {
    div3.style.display = "block";
    div4.style.display = "none";

    document.getElementById("div3").scrollIntoView({ block: 'start' });
});

document.getElementById("next4").addEventListener("click", function () {
    div4.style.display = "none";
    div5.style.display = "block";

    document.getElementById("div5").scrollIntoView({ block: 'start' });
});

// // STEP 5
document.getElementById("step5").addEventListener("click", function () {
    img5finger.style.display = "block";
    txt5.style.display = "block";
    btn5.style.display = "block";

    document.getElementById("img5finger").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("prev5").addEventListener("click", function () {
    div4.style.display = "block";
    div5.style.display = "none";

    document.getElementById("div4").scrollIntoView({ block: 'start' });
});

document.getElementById("next5").addEventListener("click", function () {
    div5.style.display = "none";
    div6.style.display = "block";

    document.getElementById("div6").scrollIntoView({ block: 'start' });
});

// // STEP 6
document.getElementById("prev6").addEventListener("click", function () {
    div5.style.display = "block";
    div6.style.display = "none";

    document.getElementById("div5").scrollIntoView({ block: 'start' });
});

document.getElementById("next6").addEventListener("click", function () {
    div6.style.display = "none";
    div7.style.display = "block";

    document.getElementById("div7").scrollIntoView({ block: 'start' });
});

// // STEP 7
document.getElementById("step7talking").addEventListener("click", function () {
    txt7talking.style.display = "block";
    txt7fingers.style.display = "none";
    txt7hair.style.display = "none";
    txt7nipples.style.display = "none";
    txt7hj.style.display = "none";
    img7.style.display = "none";
    btn7.style.display = "none";

    document.getElementById("txt7talking").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("step7fingers").addEventListener("click", function () {
    txt7talking.style.display = "none";
    txt7fingers.style.display = "block";
    txt7hair.style.display = "none";
    txt7nipples.style.display = "none";
    txt7hj.style.display = "none";
    img7.style.display = "none";
    btn7.style.display = "none";

    document.getElementById("txt7fingers").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("step7hair").addEventListener("click", function () {
    txt7talking.style.display = "none";
    txt7fingers.style.display = "none";
    txt7hair.style.display = "block";
    txt7nipples.style.display = "none";
    txt7hj.style.display = "none";
    img7.style.display = "none";
    btn7.style.display = "none";

    document.getElementById("txt7hair").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("step7nipples").addEventListener("click", function () {
    txt7talking.style.display = "none";
    txt7fingers.style.display = "none";
    txt7hair.style.display = "none";
    txt7nipples.style.display = "block";
    txt7hj.style.display = "none";
    img7.style.display = "none";
    btn7.style.display = "none";

    document.getElementById("txt7nipples").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("step7hj").addEventListener("click", function () {
    txt7talking.style.display = "none";
    txt7fingers.style.display = "none";
    txt7hair.style.display = "none";
    txt7nipples.style.display = "none";
    txt7hj.style.display = "block";
    img7.style.display = "block";
    btn7.style.display = "block";

    document.getElementById("txt7hj").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("prev7").addEventListener("click", function () {
    div6.style.display = "block";
    div7.style.display = "none";

    document.getElementById("div6").scrollIntoView({ block: 'start' });
});

document.getElementById("next7").addEventListener("click", function () {
    div7.style.display = "none";
    div8.style.display = "block";

    document.getElementById("div8").scrollIntoView({ block: 'start' });
});

// STEP 8
document.getElementById("step8").addEventListener("click", function () {
    var bath = document.getElementById("step8bath").checked;
    var water = document.getElementById("step8water").checked;
    var snacks = document.getElementById("step8snacks").checked;
    var cuddles = document.getElementById("step8cuddles").checked;

    if (bath)
        img8bath.style.display = "block";
    if (water)
        img8water.style.display = "block";
    if (snacks) img8snacks.style.display = "block";
    if (cuddles) img8cuddles.style.display = "block";

    if (!bath)
        img8bath.style.display = "none";
    if (!water)
        img8water.style.display = "none";
    if (!snacks) img8snacks.style.display = "none";
    if (!cuddles) img8cuddles.style.display = "none";

    if (bath || water || snacks || cuddles)
        btn8.style.display = "block"

    document.getElementById("img8bath").scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById("img8water").scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById("img8snacks").scrollIntoView({ behavior: 'smooth', block: 'start' });
    document.getElementById("img8cuddles").scrollIntoView({ behavior: 'smooth', block: 'start' });
});

document.getElementById("prev8").addEventListener("click", function () {
    div7.style.display = "block";
    div8.style.display = "none";

    document.getElementById("div7").scrollIntoView({ block: 'start' });
});

document.getElementById("next8").addEventListener("click", function () {
    div8.style.display = "none";
    div9.style.display = "block";

    document.getElementById("div9").scrollIntoView({ block: 'start' });
});

// STEP 9
document.getElementById("prev9").addEventListener("click", function () {
    div8.style.display = "block";
    div9.style.display = "none";

    document.getElementById("div8").scrollIntoView({ block: 'start' });
});

document.getElementById("next9").addEventListener("click", function () {
    div9.style.display = "none";
    div0.style.display = "block";
});