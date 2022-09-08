///////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
// 1) install live sass compiler extention
// 2) create a styles.scss file to let the watch sass button appear down in the status bar (gamb goLive button)
// 3) type css in the styles.scss file and press the sass button and bom it will generate a css file
// 4) here's why you will need a styles mkdir to hold the css files also there will be a .css.map file genereted automaticly
// 5) this is how you create vars in sass !!! => next 2 lines 
//$primaryBtn : rgba(182, 85, 153, 0.5);
//$textColor: rgb(43, 43, 43);

// 6) sass can red this => 
//Example "a"
// header {
//     background-color: lightblue;
//     display: flex;
//     justify-content: center;
//     color: $textColor;

//     button {
//         background: $primaryBtn;
//     }
// }
// the same as this ! =>
//Example "b"
// header button {
//     // background: red;
//     background: $primaryBtn;
// }
// y3ny 3shan t2ol el zorar el gowa el header htktbha zai example "a".

// 7) you can seperate your code in diffrent files (something like react components) and import it in the same file as this =>
// @import './header';
// N:B:- mohema gedan (el seperate file da yb2a esmo ( _file.scss ))

// 8) This is how you make a function :D => 
// @mixin flexCenterOrAnyThingYouWant ($directionssss, $loonelbacka) {
//     height: 100vh;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: $directionssss;
//     background-color: $loonelbacka;
// }

// 9) law 3awez t5ally maslan el header zay el div of class .contact =>
// .contact {
//     @extend header;
// }
// NB:- Any style sheets goes form up to down y3ny lama akteb keda => 
// .contact {
//     @extend header;
//     background-color: white;
// }
// keda ana 5alit el .contact fih nafs el styles bta3et el header bas el bg color mo5talef men foo2 l ta7t

// 10) a5er 7aga ana lghayt delwa2ti shifha tafha bas enta momken tkteb width: 100% -20%; aw width: 200px - 100px; m3rfsh leh h7tag 7aga //
//zai de bas akeed hanshoof !!


// Calculating from rem to pixels :D !!!
// const result = 16 * 16;
// console.log(result);