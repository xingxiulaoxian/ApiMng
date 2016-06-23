var dataCount = [];
module.exports = {
	addDataCount : function(data){
		dataCount.push(data);
	},
	getDataCount : function(){
		return dataCount;
	}
};
