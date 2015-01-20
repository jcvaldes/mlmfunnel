
function getURLParameter(name) {
  return decodeURIComponent(
    (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
  );
}
$(function(){
  $('input[name="purchase[product_id]"], input[name="order[product_ids][]"], input[name="purchase[product_ids][]"]').on('change click', function(e){
    var parent = $(this).parents('[data-cf-product-template=true]');
    var name = $(parent).find("[data-cf-product-name='true']").html();
    $('.product-name').html(name);
    var price = $(parent).find("[data-cf-product-price='true']").html();
    $('.product-price').html(price);
    $('.product-price').attr('taxamo-currency', $(parent).find("[data-cf-product-price='true']").attr('taxamo-currency'));
    // set any other radios matching - hidden AR form
    $('input[name="'+$(this).attr('name')+'"]'+":radio[value="+$(this).val()+"]").attr('checked',true);
    try{
      // calcTaxamo if defined
      calcTaxamo();
    }catch(err){ }
  });
  $('input[name="purchase[product_id]"], input[name="order[product_ids][]"], input[name="purchase[product_ids][]"]').first().click();
  $('input[name="order_upsell[unique_order_token]"]').val(getURLParameter('unique_token'));
  
});



// used for stripe and other payment integrations
jQuery(function($) {
  $('#cfAR').submit(function(event) {
    // Sync to #cfAR
    console.log("copy of data stripe vals");
    $(this).find('[data-stripe=number]').val($('[data-stripe=number]').first().val());
    $(this).find('[data-stripe=exp-month]').val($('[data-stripe=exp-month]').first().val());
    $(this).find('[data-stripe=exp-year]').val($('[data-stripe=exp-year]').first().val());
    $(this).find('[data-stripe=cvc]').val($('[data-stripe=cvc]').first().val());
    $(this).find('[name="purchase[payment_method_nonce]"]').val($('[name="purchase[payment_method_nonce]"]').first().val());

    if(typeof(Stripe) != 'undefined'){
      // If stripe was enabled via page.rb

      // Disable the submit button to prevent repeated clicks
      $('button').prop('disabled', true);
      $('[href=#submit-form]').text('Submitting...');
      $('[href=#submit-form]').prop('disabled', true);

      if(typeof(stripeResponseHandler) != 'undefined'){
        // only if stripe handler is included
        Stripe.card.createToken($('#cfAR'), stripeResponseHandler);
      }

      // Prevent the form from submitting with the default action
      return false;
    }else{
      //alert('stripe not found');
      return true;
    }
  });
});



$(document).ready(function(){
  try{
    $("form").each(function(){
      $(this).parsley();
    });
  }catch(e){}


  fillGetVars();
  if( getVars['declined'] == 'true' )
  {
    location.href = "#order-declined-message";
    $('#order-declined-message').show();  
    $("#add-to-cart-form").fadeIn();
  }

  function fillGetVars()
  {
    getVars=undefined;
    getVars=(document.location.search.length>1) ? document.location.search.substring(1).split('&') : new Array(0);
    for (var i=0; i<getVars.length; i++)
    {
      tempArray=getVars[i].split('=');
      getVars[tempArray[0]]=decodeURIComponent(tempArray[1]);
      delete tempArray;
    }
  }

}); 

// prevent dup oto clicks
$(function(){
  $('[href*="#yes-link"], [href*="#no-link"], [data-cf-id=yes-link], [data-cf-id=yes-link-2], [data-cf-id=no-link]').click(function(e){
    if( $(this).data("clicked") ){
      e.preventDefault();
      return false;
    }
    $(this).data("clicked", true);
    $(this).attr("disabled", "disabled");
    return true;
  });
}); 
