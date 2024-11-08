{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.


    class Car {
        name: string;
        model: string;
        year: number;


        constructor( name: string, model: string, year: number) {
            this.name = name ;
            this.model = model;
            this.year = year;
        }
        getCarAge() : string {
            const  currentAge =new Date().getFullYear();
            const age = currentAge - this.year;
            const result = `My car age ${age} Years old`;
            return result
        }
        
    }

   
    // const car = new Car("Honda", "Civic", 2018);
    // console.log(car.getCarAge());







    //
}