function TSV_arr(nm, arr)
{
	let tx='';
	for(let i=0;i<arr.length;i++)
	{
		for(let j=0;j<arr[i].length;j++,tx+='\t')
		{
			tx+=arr[i][j];
		}
		tx+='\n';
	}
	return tx;
}


function formatDate() {
    let d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        h = d.getHours(),
        m = d.getMinutes(),
        s = d.getSeconds();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day, h,m,s].join('-');
}
 
function downloadTSV(f, arr, dl_id)
{
	let nm='data_TSV';
	download(f(nm,arr), nm+ formatDate() +'.txt', 'text/plain', dl_id);
} 

function download(text, name, type, dl_id) {	//console.log(text, name, type, dl_id);
	let download_a = $(dl_id);
	let file = new Blob([text], {type: type});
	download_a.href = URL.createObjectURL(file);
	download_a.download = name;
	download_a.innerHTML = 'download file';
}