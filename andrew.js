// Write a JavaScript program to redirect to a specified URL

// const redirect = (url, asLink) =>{
//     if (asLink == true) {
//         return (window.location.href = url)
//     }else {
//        return window.location.replace(url).redirect('https://google.com');
//     }
// };
//
// redirect("https://yahoo.com", false);
//     asLink ? (window.location.href = url) : window.location.replace(url);
// redirect('https://google.com');


function myFunction() {

    if (window.location.href.indexOf("andrew2")> -1) {
        window.location.replace("andrew.html")
    } else {
        window.location.replace("andrew2.html")
    }
}
