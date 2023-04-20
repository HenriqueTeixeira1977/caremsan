//  Script para navegação bar com efeito de on scroll

window.addEventListener("scroll", function(){
	var header = document.querySelector("header");
	header.classList.toggle('sticky', window.scrollY > 0);
});

//Script para Navigation sidebar menu responsivo

var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
	menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
	menu.classList.remove('active');
});

//<!-- GetButton.io widget -->
//<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "+55(13) 98858-9976", // WhatsApp number
            call_to_action: "Envia-nos uma mensagem", // Call to action
            position: "right", // Position may be 'right' or 'left'
            pre_filled_message: "Olá!  venho do seu site, eu gostaria de fazer um orçamento!!!", // WhatsApp pre-filled message
        };
        var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
//</script>
//<!-- /GetButton.io widget -->
