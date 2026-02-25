import { useState } from "react";

export default function Profile() {
    const [profile, setProfile] = useState({
        name: "Alex",
        age: 25,
        job: "Developer"
    });

    function increaseAge() {
        setProfile(prevProfile => ({
            ...prevProfile,
            age: prev.age + 1
        }));
    }

    //...prevProfile is easier to read than prev => ({...prev, age: prev.age + 1}), but they do the same thing.

    function changeJob() {
        setProfile(prev => ({
            ...prev,
            job: "Senior Developer"
        }));
    }

    return (
        <div>
            <h1>{profile.name}</h1>
            <p>Age: {profile.age}</p>
            <p>Job: {profile.job}</p>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={changeJob}>Change Job</button>
        </div>
    );
}