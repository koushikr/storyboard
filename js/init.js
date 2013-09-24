
function get_data(){
	var data = {"data" : [
		{	
			"sms": {
                "heading": "Gateway for sellers to enter into flipkart ecosystem",
                "module": "SMS",
                "title": "Seller Management System",
                "description": "Consolidated interface for seller to interact with relevant modules",
                "activities": [
                    {
                        "keys": [
                            "Onboarding",
                            "Profile Enrichment",
                            "Listing Upload",
                            "Order Management",
                            "Returns",
                            "Payments & Settlement",
                            "Metrics"
                        ]
                    },
                    {
                        "keys": [
                            "BD",
                            "Customers"
                        ]
                    }
                ]
            }
        },
        {
        	"cms": {
                "heading": "Gateway for cmd to enter into flipkart ecosystem",
                "module": "CMS",
                "title": "Content Management System",
                "description": "Consolidated interface for seller to interact with relevant modules",
                "activities": [
                    {
                        "keys": [
                            "Onboarding",
                            "Profile Enrichment",
                            "Listing Upload",
                            "Order Management",
                            "Returns",
                            "Payments & Settlement",
                            "Metrics"
                        ]
                    },
                    {
                        "keys": [
                            "BD",
                            "Customers"
                        ]
                    }
                ]
            }
        }
     ]}
   return data;
}

(function($){
    var init = function(){
        console.log("Initializing Storyboard");
        SB = new StoryBoard();
        SB.draw(get_data())
    }
    var $doc = $(document);
    $doc.on('ready', init);
})(jQuery);

