function sleep(milliSeconds){
	var startTime = new Date().getTime(); // get the current time
	while (new Date().getTime() < startTime + milliSeconds); // hog cpu
}

StoryBoard = function(){
	var singular_keys = ["heading", "module", "title", "description"];
	var dimensional_keys = ["activities"];
	this.draw = function(data){
		var self = this;
		var data = data["data"];
		data.forEach(function(each){
			// Do zooming things here and sidelining the previous one here
			self.putObject(each);
		});
	};

	this.putObject = function(dataset){
		var self = this;
		var content = d3.select("body");
		for(var temp in dataset){
			var entry = dataset[temp];
			singular_keys.forEach(function(key){
				self.generateText(content, entry[key]);
			});
			dimensional_keys.forEach(function(key){
				var records = entry[key];
				//One hop requests
				if(records instanceof Array){
					records.forEach(function(item){
						var values = item.keys;
						values.forEach(function(value){
							self.generateText(content, value);
						});
					});
				}
			});
		}
	};

	this.generateText = function(content, value){
		var line_text = content.append("svg").attr('width', 100).attr('height', 200);	
		line_text.append('text').html("<p>"+value+"</p>");
	};
};
