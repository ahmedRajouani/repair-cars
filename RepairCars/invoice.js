function report(request,response) {
	var param = JSON.parse(request.body);
	var result = '';
	var rep = ds.Report.find('critere=:1',param.ID);
	if(rep)
	{
		result+=rep.ID;
	}
	else
	{
		var csvFileName = generateUUID()+'.csv';
		var modelFolder = ds.getModelFolder().path;
		var csvFile = File(modelFolder+csvFileName);
		var csvContent ='';
		
			
		csvContent = 'customer,car,repairDate,breakdown,repairInfo,price';
		
		var repairCol = ds.Repair.query('ID=:1',param.ID);
			
		for(var i=0;i<repairCol.length;i++)
		{
			var rep = repairCol[i];
			var breakDown = rep.breakdown;
			var info='\n';
			breakDown = breakDown.replace('\n','|');
			
			
			info+=rep.car.customer.fullName+','+rep.car.regNumber+','+rep.repairDate+','+breakDown+','+rep.repairInfo+','+rep.price;
			csvContent+=info;
		}
			
		saveText(csvContent,csvFile);
		
		var pdfFileName = generateUUID();
		var execCommand =  'java -jar '+modelFolder+'aa.jar ' + csvFileName + ' invoice ' + pdfFileName;
		var test = SystemWorker.exec( execCommand , "" , modelFolder);
		var pdfFic=File(modelFolder+pdfFileName+'.pdf');
		
		/*response.contentType ='application/pdf';
		
		var buf = new Buffer(pdfFic.size);
		pdfFic.toBuffer().copy(buf);
		response.body = buf.toBlob();
		*/	
		if(pdfFic.exists)
		{
			var report = ds.Report.createEntity();
			report.pdf = loadImage(pdfFic);
			report.critere=param.ID;
			report.pdfDate = new Date();
			report.save();
			result += report.ID;
			response.responseText = result;
			pdfFic.remove();
		}
		
		if(csvFile.exists)
			csvFile.remove();
	}
		
	return result;
}
