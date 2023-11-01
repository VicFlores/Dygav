// Typescript function to render the email template for the tourist and return the html
export default function touristTemplate(fullname: string) {
 return `
 <!DOCTYPE html>
 <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
 <head>
	 <meta charset="utf-8"> <!-- utf-8 works for most cases -->
	 <meta name="viewport" content="width=device-width"> <!-- Forcing initial-scale shouldn't be necessary -->
	 <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- Use the latest (edge) version of IE rendering engine -->
	 <meta name="x-apple-disable-message-reformatting">  <!-- Disable auto-scale in iOS 10 Mail entirely -->
	 <title></title> <!-- The title tag shows in email notifications, like Android 4.4. -->
 
	 <link href="https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700" rel="stylesheet">
		
	 <!-- CSS Reset : BEGIN -->
	 <style>
 
		 /* What it does: Remove spaces around the email design added by some email clients. */
		 /* Beware: It can remove the padding / margin and add a background color to the compose a reply window. */
		 html,
 body {
	 margin: 0 auto !important;
	 padding: 0 !important;
	 height: 100% !important;
	 width: 100% !important;
	 background: #f1f1f1;
 }
 
 /* What it does: Stops email clients resizing small text. */
 * {
	 -ms-text-size-adjust: 100%;
	 -webkit-text-size-adjust: 100%;
 }
 
 /* What it does: Centers email on Android 4.4 */
 div[style*="margin: 16px 0"] {
	 margin: 0 !important;
 }
 
 /* What it does: Stops Outlook from adding extra spacing to tables. */
 
 /* What it does: Fixes webkit padding issue. */
 table {
	 border-spacing: 0 !important;
	 border-collapse: collapse !important;
	 table-layout: fixed !important;
	 margin: 0 auto !important;
 }
 
 /* What it does: Uses a better rendering method when resizing images in IE. */
 img {
	 -ms-interpolation-mode:bicubic;
 }
 
 /* What it does: Prevents Windows 10 Mail from underlining links despite inline CSS. Styles for underlined links should be inline. */
 a {
	 text-decoration: none;
 }
 
 /* What it does: A work-around for email clients meddling in triggered links. */
 *[x-apple-data-detectors],  /* iOS */
 .unstyle-auto-detected-links *,
 .aBn {
	 border-bottom: 0 !important;
	 cursor: default !important;
	 color: inherit !important;
	 text-decoration: none !important;
	 font-size: inherit !important;
	 font-family: inherit !important;
	 font-weight: inherit !important;
	 line-height: inherit !important;
 }
 
 /* What it does: Prevents Gmail from displaying a download button on large, non-linked images. */
 .a6S {
	 display: none !important;
	 opacity: 0.01 !important;
 }
 
 /* What it does: Prevents Gmail from changing the text color in conversation threads. */
 .im {
	 color: inherit !important;
 }
 
 /* If the above doesn't work, add a .g-img class to any image in question. */
 img.g-img + div {
	 display: none !important;
 }
 
 /* What it does: Removes right gutter in Gmail iOS app: https://github.com/TedGoas/Cerberus/issues/89  */
 /* Create one of these media queries for each additional viewport size you'd like to fix */
 
 /* iPhone 4, 4S, 5, 5S, 5C, and 5SE */
 @media only screen and (min-device-width: 320px) and (max-device-width: 374px) {
	 u ~ div .email-container {
		 min-width: 320px !important;
	 }
 }
 /* iPhone 6, 6S, 7, 8, and X */
 @media only screen and (min-device-width: 375px) and (max-device-width: 413px) {
	 u ~ div .email-container {
		 min-width: 375px !important;
	 }
 }
 /* iPhone 6+, 7+, and 8+ */
 @media only screen and (min-device-width: 414px) {
	 u ~ div .email-container {
		 min-width: 414px !important;
	 }
 }
 
 
	 </style>
 
	 <!-- CSS Reset : END -->
 
	 <!-- Progressive Enhancements : BEGIN -->
	 <style>
 
		 .primary{
	 background: #F4511E;
 }
 .bg_white{
	 background: #ffffff;
 }
 .bg_light{
	 background: #f7fafa;
 }
 .bg_black{
	 background: #000000;
 }
 .bg_dark{
	 background: rgba(0,0,0,.8);
 }
 .email-section{
	 padding:2.5em;
 }
 
 /*BUTTON*/
 .btn{
	 padding: 10px 15px;
	 display: inline-block;
 }
 .btn.btn-primary{
	 border-radius: 5px;
	 background: #F4511E;
	 color: #ffffff;
 }
 .btn.btn-white{
	 border-radius: 5px;
	 background: #ffffff;
	 color: #000000;
 }
 .btn.btn-white-outline{
	 border-radius: 5px;
	 background: transparent;
	 border: 1px solid #fff;
	 color: #fff;
 }
 .btn.btn-black-outline{
	 border-radius: 0px;
	 background: transparent;
	 border: 2px solid #000;
	 color: #000;
	 font-weight: 700;
 }
 .btn-custom{
	 color: rgba(0,0,0,.3);
	 text-decoration: underline;
 }
 
 h1,h2,h3,h4,h5,h6{
	 font-family: 'Poppins', sans-serif;
	 color: #000000;
	 margin-top: 0;
	 font-weight: 400;
 }
 
 body{
	 font-family: 'Poppins', sans-serif;
	 font-weight: 400;
	 font-size: 15px;
	 line-height: 1.8;
	 color: rgba(0,0,0,.4);
 }
 
 a{
	 color: #F4511E;
 }
 
 /*LOGO*/
 
 .logo h1{
	 margin: 0;
 }
 .logo h1 a{
	 color: #F4511E;
	 font-size: 24px;
	 font-weight: 700;
	 font-family: 'Poppins', sans-serif;
 }
 
 /*HERO*/
 .hero{
	 position: relative;
	 z-index: 0;
 }
 
 .hero .text{
	 color: rgba(0,0,0,.3);
 }
 .hero .text h2{
	 color: #000;
	 font-size: 34px;
	 margin-bottom: 0;
	 font-weight: 200;
	 line-height: 1.4;
 }
 .hero .text h3{
	 font-size: 24px;
	 font-weight: 300;
 }
 .hero .text h2 span{
	 font-weight: 600;
	 color: #000;
 }
 
 .text-author{
	 max-width: 80%;
	 margin: 0 auto;
	 padding: 2em;
 }
 .text-author img{
	 border-radius: 50%;
	 padding-bottom: 20px;
 }
 .text-author h3{
	 margin-bottom: 0;
 }
 ul.social{
	 padding: 0;
 }
 ul.social li{
	 display: inline-block;
	 margin-right: 10px;
 }
 
 .text-highlight{
	 color: #F4511E;
	 font-weight: 700;
 }
 
 .text-bold{
	 font-weight: 700;
 }
 
 /*FOOTER*/
 
 .footer{
	 border-top: 1px solid rgba(0,0,0,.05);
	 color: rgba(0,0,0,.5);
 }
 .footer .heading{
	 color: #000;
	 font-size: 20px;
 }
 .footer ul{
	 margin: 0;
	 padding: 0;
 }
 .footer ul li{
	 list-style: none;
	 margin-bottom: 10px;
 }
 .footer ul li a{
	 color: rgba(0,0,0,1);
 }
 
 
 @media screen and (max-width: 500px) {
 
 
 }
 
 
	 </style>
 
 
 </head>
 
 <body width="100%" style="margin: 0; padding: 0 !important; background-color: #f1f1f1;">
	 <center style="width: 100%; background-color: #f1f1f1;">
	 <div style="display: none; font-size: 1px;max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden; mso-hide: all; font-family: sans-serif;">
	   &zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
	 </div>
	 <div style="max-width: 600px; margin: 0 auto;" class="email-container">
		 <!-- BEGIN BODY -->
	   <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
		   <tr>
		   <td valign="top" class="bg_white" style="padding: 1em 2.5em 0 2.5em;">
			   <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
				   <tr>
					   <td class="logo" style="text-align: center;">
					   <h1><a href="#">Bienvenido a DYGAV</a></h1>
					   </td>
				   </tr>
			   </table>
		   </td>
		   </tr><!-- end tr -->
				 <tr>
		   <td valign="middle" class="hero bg_white" style="padding: 2em 0 4em 0;">
			 <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
				 <tr>
					 <td style="padding: 0 2.5em; text-align: center; padding-bottom: 3em;">
						 <div class="text">
							 <h2>Estimado/a ${fullname}</h2>
						 </div>
					 </td>
				 </tr>
				 <tr>
					   <td style="text-align: center;">
 
						 <p></p>
 
 
						   <div class="text-author">
							 Es un placer darte la bienvenida a <span class="text-highlight"><a href="https://www.dygav.es/" target="_blank">DYGAV</a></span>, la plataforma que te brindará acceso a un mundo de emocionantes aventuras y a una gran variedad de alojamientos vacacionales en Madrid y la Costa Blanca. 
 
							 Queremos que te sientas como en casa desde el primer momento y que descubras todo lo que tenemos preparado para ti.
 
							 Con tu nueva cuenta en DYGAV, podrás explorar una amplia variedad de alojamientos vacacionales en los destinos más atractivos de la Costa Blanca. Desde <span class="text-bold">apartamentos acogedores</span> hasta <span class="text-bold">lujosas villas frente al mar</span>, estamos seguros de que encontrarás el <span class="text-bold">lugar perfecto para tus vacaciones.</span>
 
							 Además de reservar tu alojamiento ideal, nuestra plataforma te ofrece una serie de herramientas para que tu experiencia de viaje sea aún más especial. Podrás guardar tus <span class="text-bold">alojamientos favoritos</span> , ver el historial de <span class="text-bold">tus reservas</span>, recibir <span class="text-bold">recomendaciones personalizadas</span> y mucho más.
 
							 Nuestro sistema de gestión digitalizado te permitirá realizar check-ins y check-outs sin complicaciones, y tendrás acceso a información en tiempo real sobre tus reservas.
 
							 Nuestro equipo de atención al cliente está siempre disponible para ayudarte en cada paso del camino. Si tienes alguna pregunta, inquietud o necesitas asistencia durante tu estancia, no dudes en contactarnos. Estamos aquí para garantizar que <span class="text-bold">cada detalle de tus vacaciones sea perfecto.</span>
														 
							   <h3 class="name">Puedes acceder a tu panel</h3>
						   
								<p><a href="https://www.dygav.es/private/tourist/dashboard" class="btn btn-primary">Acceder al panel de control</a></p>
								<p><a href="https://www.dygav.es/" class="btn-custom">Ir a la pagina inicial</a></p>
							</div>
					   </td>
					 </tr>
			 </table>
		   </td>
		   </tr><!-- end tr -->
	   <!-- 1 Column Text + Button : END -->
	   </table>
	   <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;">
		   <tr>
		   <td valign="middle" class="bg_light footer email-section">
			 <table>
				 <tr>
				 <td valign="top" width="33.333%" style="padding-top: 20px;">
				   <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					 <tr>
					   <td style="text-align: left; padding-right: 10px;">
						   <h3 class="heading">DYGAV</h3>
						   <p>hogares que son destinos y viajes que se sienten como en casa.</p>
					   </td>
					 </tr>
				   </table>
				 </td>
				 <td valign="top" width="33.333%" style="padding-top: 20px;">
				   <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					 <tr>
					   <td style="text-align: left; padding-left: 5px; padding-right: 5px;">
						   <h3 class="heading">Contacto</h3>
						   <ul>
								<li><span class="text"> C/ Orihuela 6, Torrevieja, Alicante 03181</span></li>
								<li><span class="text">+34 614 214 250</span></a></li>
								<li><span class="text">info@dygav.es</span></a></li>
							</ul>
					   </td>
					 </tr>
				   </table>
				 </td>
				 <td valign="top" width="33.333%" style="padding-top: 20px;">
				   <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%">
					 <tr>
					   <td style="text-align: left; padding-left: 10px;">
						   <h3 class="heading">Enlaces</h3>
						   <ul>
							 <li><a href="https://www.dygav.es/">Inicio</a></li>
							 <li><a href="https://www.dygav.es/private/tourist/dashboard">Panel de control</a></li>
							 <li><a href="https://www.dygav.es/licencias-turisticas">Licencias</a></li>
							 <li><a href="https://www.dygav.es/apartamentos">Alojamientos</a></li>
						 </ul>
					   </td>
					 </tr>
				   </table>
				 </td>
			   </tr>
			 </table>
		   </td>
		 </tr><!-- end: tr -->
		
	   </table>
 
	 </div>
   </center>
 </body>
 </html>
	`
}