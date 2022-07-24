
const billInput = document.getElementById( "billTotalInput" );
const tipInput = document.getElementById( "tipInput" );
const perPersonTotalDiv = document.getElementById( "perPersonTotal" );
const numberOfPeopleDiv = document.getElementById( "numberOfPeople" );

let numberOfPeople = Number( numberOfPeopleDiv.innerText )

const calculateBill = () =>
{
  const bill = Number( billInput.value );
  const tipPercentage = Number( tipInput.value ) / 100;
  const tipAmount = bill * tipPercentage;
  const total = tipAmount + bill;
  perPersonTotal = total / numberOfPeople;
  perPersonTotalDiv.innerText = `$${ perPersonTotal.toFixed( 2 ) }`;
}

const increasePeople = () =>
{
  document.getElementById( "buttonDecrease" ).removeAttribute( "disabled" );
  numberOfPeople++;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}

const decreasePeople = () =>
{
  if ( numberOfPeople <= 1 )
  {
    document.getElementById( "buttonDecrease" ).setAttribute( "disabled", "" );
    return;
  }
  numberOfPeople--;
  numberOfPeopleDiv.innerText = numberOfPeople;
  calculateBill();
}