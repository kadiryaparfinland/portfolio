namespace Exercise015
{
    public class Money
    {

        private int euros;
        private int cents;

        public Money(int euros, int cents)
        {
            if (cents > 99)
            {
                euros = euros + cents / 100;
                cents = cents % 100;
            }

            this.euros = euros;
            this.cents = cents;
        }


                public Money Plus(Money addition)
                {
                    Money newMoney = new Money(0,0);
                    // create a new Money object that has the correct worth

                    // return the new Money object
                    return newMoney;
                }

                public Money Minus(Money decreaser)
                {
                    Money newMoney = new Money(0,0);
                    // create a new Money object that has the correct worth

                    // return the new Money object
                    return newMoney;
                }

                public bool LessThan(Money compared)
                {
                    // Do something here
                    return false;
                }

        public override string ToString()
        {
            string zero = "";
            if (this.cents <= 10)
            {
                zero = "0";
            }

            return this.euros + "." + zero + this.cents + "e";
        }
    }
}