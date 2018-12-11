function addition()
{
	var Value1= document.getElementById('Value1').value;
	Value1= Number(Value1);
	if (Value1%100==0)
		{
			alert('AMOUNT ACCEPTED')
		}
		else {
			alert ('AMOUNT NOT ACCEPTED')
		}
}