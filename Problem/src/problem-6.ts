{
    //Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.

    let person = {
        name: 'Yeasin',
        age: 22,
        email: 'yeasin@gmail.com'
    }
    interface profile: Profile {
        name: string;
        age: number;
        email: string
    }


    const updateProfile = (data: Profile, updated :Partial<Profile>):Profile => {
        person = {
            ...data,
            ...updated
        }

    }
    const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(updateProfile(myProfile, { age: 26 }));












    //
}