
guidedModel =// @startlock
{
	Invoice :
	{
		totalPrice :
		{
			onGet:function()
			{// @endlock
				var res = 0;
				this.repairCollection.forEach(function(repair){
					res += repair.price;
				});
				return res;
			}// @startlock
		}
	}
};// @endlock
