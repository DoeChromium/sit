function info() {
    alert('Version 3.0 STABLE\nMobile Support: n/a\nWebsite Revision Version: 3\n\nCurrent URL: https://doechromium.github.io/sit/\nNon-responsive, no forms or sql\n\nContact Isaac for changes')
}

function developer() {
    alert('Developer error codes\n\n0x01 · Gmail mailto: no longer works\n0x02 · Javascript disabled\n0x03 · Legacy website no longer works\n\nDeveloper attention needed\n\nCSS revision\nLogo revision\nMobile support\nRecoloring/Sat fix\nBroken gradient bar')
}

function gmailSorry() {
    alert('Sorry, the link to bring you to Gmail doesn\'t work anymore!\n\nPlease contact us through orhs.sit@gmail.com\n\n0x01')
}

function removeBanner() {
    document.getElementById('banner').style.display = "none"
    document.getElementById('x').style.display = "none"
    document.getElementById('banner-hr').style.display = "block"
}

function scrollHome() {
    document.getElementById('pre-header').scrollIntoView({ behavior: 'smooth' })
}

function scrollAboutUs() {
    document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })
}

function scrollQA() {
    document.getElementById('qna').scrollIntoView({ behavior: 'smooth' })
}

function scrollMarket() {
    document.getElementById('marketplace').scrollIntoView({ behavior: 'smooth' })
}

function scrollAgents() {
    document.getElementById('agents').scrollIntoView({ behavior: 'smooth' })
}

function scrollOther() {
    document.getElementById('other').scrollIntoView({ behavior: 'smooth' })
}

function contactUs() {
    document.getElementById('footer-img-01').classList.toggle('footer-alert');
    document.getElementById('footer-img-02').classList.toggle('footer-alert');
    document.getElementById('footer-img-03').classList.toggle('footer-alert');
    setTimeout(() => {
        document.getElementById('footer-img-01').classList.toggle('footer-alert');
        document.getElementById('footer-img-02').classList.toggle('footer-alert');
        document.getElementById('footer-img-03').classList.toggle('footer-alert');
      }, 1000);
}