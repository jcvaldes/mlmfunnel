<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="es">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="initial-scale=1.0"> <!-- So that mobile webkit will display zoomed in -->
  <meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
  <title>{{ $title }}</title>
  <style type="text/css">

    a {color: #3686be;}

    /* Force Hotmail to display emails at full width */
    .ReadMsgBody {
			width: 100%;
			background-color: #eeeeee;
    }

    /* Force Hotmail to display emails at full width */
    .ExternalClass {
			width: 100%;
			background-color: #eeeeee;
    }

    /* Forces Hotmail to display normal line spacing. */
		.ExternalClass,
		.ExternalClass p,
		.ExternalClass span,
		.ExternalClass font,
		.ExternalClass td,
		.ExternalClass div {
			line-height:100%;
    }

    /* Resolves webkit padding issue. */
    table {
			border-spacing:0;
    }

    /* Resolves the Outlook 2007, 2010, and Gmail td padding issue. */
    table td {
			border-collapse:collapse;
    }

    /* Yahoo auto-sensing link color and border */
    .yshortcuts a {
			border-bottom: none !important;
    }
    
    /* Media queries for when the viewport is smaller than the default email width but not too narrow. */
    @media screen and (max-device-width: 700px), screen and (max-width:700px) {

			/* Constrain email width for small screens */
			table[class="email-container"] {
				width: 100% !important;
			}
			/* Constrain tables for small screens */
			table[class="fluid"] {
				width: 100% !important;
			}
			
      div[class='content-block'] {
        width:auto !important;
        text-align: center;
      }

      h1 {
        font-size: 30px !important;
        margin-bottom: 15px !important;
      }

      div[class='container-flex'] {
        text-align: center;
        padding-top: 35px !important;
      }

      div [class='content-block'] h2 {
        margin-top: 20px !important;
      }

      img[class='img-center-align'] {
        float: none !important;
        margin: 0 !important;
      }

			/* Force images to resize to full width of their container */
			img[class="force-col-center"] {
				width: 100% !important;
				max-width: 100% !important;
				height: auto !important;
			}
			/* And center these ones */
			img[class="force-col-center"] {
				margin: auto !important;
			}
			
			/* Force table cells into rows */
			td[class="force-col"],
			td[class="force-col-center"] {
				display: block !important;
				width: 100% !important;
				clear: both;
			}
			/* And center these ones */
			td[class="force-col-center"] {
				text-align: center !important;
			}
			
			/* Force table cells into rows */
			/* Float a previously stacked image to the left */
			img[class="col-3-img-l"] {
				float: left;
				margin: 0 15px 15px 0;
			}
			/* Float a previously stacked image to the right */
			img[class="col-3-img-r"] {
				float: right;
				margin: 0 0 15px 15px;
			}
			
			/* Make bulletproof buttons full width */
			a[class="button"] {
				width: 100% !important;
			}

      td[class="hide"] {
        display: none;
        visibility: hidden;
        opacity: 0;s
      }

      .w-switch {
        width: 80% !important;
      }

    }

    @media screen and (max-device-width: 470px), screen and (max-width:470px) {

      img[class="fluid"] {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }

    }
          
  </style>
</head>
<body bgcolor="#f4f4f4" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="margin:0; padding:0;-webkit-text-size-adjust:none; -ms-text-size-adjust:none;background: #f4f4f4;">


<!-- CSS Image background in Outlook : BEGIN -->
<!-- Best used with absolute image paths -->
<!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
    <v:fill type="tile" color="#eeeeee" src="https://assets.digitalocean.com/email/background-fallback.png">
  </v:background>
<![endif]-->
<!-- CSS Image background in Outlook : END -->  
  <!-- Logo Left Nav Right + Vertical Padding : BEGIN -->
 <table border="0" width="700" cellpadding="0" cellspacing="0" align="center" class="email-container">
    <tr>
      <td height="30" style="font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>
    <tr>
      <td valign="bottom" style="padding: 20px 0 20px 20px;text-align: left;">
        <a href="{{ url() }}" style="display:inline-block;" target="_blank">
          <img src="{{ url() . Setting::key('app_logo')->first()->value}}" alt="alt text" border="0">
        </a>
      </td>
      <td valign="bottom" style="padding: 20px 20px 20px 0;text-align: right; font-family: Helvetica, Arial, sans-serif; font-size: 12px;">
        <!--<a href="#" style="font-size:13px;color:#999;">
          View in browser
        </a>-->
      </td>
    </tr>
    <tr>
      <td height="10" style="font-size: 0; line-height: 0;">&nbsp;</td>
    </tr>
  </table>
  <!-- Logo Left Nav Right + Vertical Padding : END -->
 
  <!-- Email Container : BEGIN -->
  <!-- This table wraps the whole body email within it's width (600px), sets the background color (white) and border (thin, gray, solid) -->
    <table border="0" width="700" cellpadding="0" cellspacing="0" align="center" style="background: #ffffff;border:4px solid #eeeeee;" class="email-container">
  
      <!-- Single Fluid Image, No Crop : BEGIN -->
      <tr>
        <td>
          
        </td>
      </tr>
      <!-- Single Fluid Image, No Crop : END -->
    
      <!-- Full Width, Fluid Column : BEGIN -->
      <tr>
        <td>
          <table border="0" width="100%" cellpadding="0" cellspacing="0" align="center">
            <tr>
         <td>

        <!-- Logo Left, Nav Right : BEGIN -->
        <table border="0" width="100%" cellpadding="0" cellspacing="0">
         
        <tr>
          <td style="padding: 30px 40px 0 40px; font-family: sans-serif; font-size: 16px; line-height: 27px;">
            
            <p style="color: #333; font-size: 16px;">
          </td>
        </tr>     

          <!-- Full Width, Fluid Column : BEGIN -->
          <tr>
            <td style="padding: 1px 40px 20px 40px; font-family: sans-serif; font-size: 16px; line-height: 27px; color: #333;">
            	<h3 style="font-weight: 600; font-size: 25px;">
                {{ $title }}
              </h3>

              <hr>
            	<p>
            		{{ $body }}
            	</p>  

            	<!--UPDATE-->
              {{--
            	<a href="{{ url() }}" style="background-color:#008dd0; color:#fff; font-size: 18px; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; display: block; text-decoration: none; margin: 30px 0px 30px 0px; padding:20px; text-align: center;">Ver mas</a>
          --}}

            </td>
        </tr>



            </td></tr>


        <table border="0" width="100%" cellpadding="0" cellspacing="0">

    <!-- Footer : BEGIN -->
    <?php $uid = (isset($id)) ? $id : 0; ?>
    <tr>
      <td style="text-align: center;padding: 40px 0px 0px 0px;font-family: sans-serif; font-size: 12px; line-height: 18px;color: #888888;">
        © {{ Setting::key('app_name')->first()->value }}<br>
        <p>{{ Setting::key('app_address')->first()->value }}</p>
        <a href="mailto:{{ Setting::key('app_mail')->first()->value }}" style="font-weight:bold; color: #8a929f;">{{ Setting::key('app_mail')->first()->value }}</a> &nbsp; | &nbsp; <a href="{{ url() }}/dashboard/unsuscribe/{{ $uid }}?crypt={{ Hash::make($uid) }}"> <unsubscribe style="font-weight:bold; color: #8a929f; padding: 0;text-decoration: underline;">Unsubscribe</unsubscribe></a><br><br>
      </td>
    </tr>
    <tr>
      <td style="text-align: center;padding: 10px 0px 40px 0px;font-family: sans-serif; font-size: 12px; line-height: 18px;color: #888888;">
        <a href="{{ Setting::key('app_twitter')->first()->value }}"><img src="https://assets.digitalocean.com/email/twitter-icon.png"></a>&nbsp; &nbsp;
        <a href="{{ Setting::key('app_google')->first()->value }}"><img src="https://assets.digitalocean.com/email/google-plus-icon.png"></a>&nbsp; &nbsp;
        <a href="{{ Setting::key('app_facebook')->first()->value }}"><img src="https://assets.digitalocean.com/email/facebook-icon.png"></a>
      </td>
    </tr>

      <!-- Full Width, Fluid Column : END -->

  </table>
  <!-- Footer : END -->

</body>
</html>