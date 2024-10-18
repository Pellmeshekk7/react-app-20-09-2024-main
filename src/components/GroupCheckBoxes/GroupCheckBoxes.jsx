import { useState } from "react";
const interestsList = [
    "Photography",
    "Traveling",
    "Reading",
    "Music",
    "Cooking",
    "Gaming",
    "Hiking",
    "Fitness",
    "Art",
    "Technology",
    "Writing",
    "Gardening",
    "Cycling",
    "Dancing",
    "Swimming"
  ];
  
const GroupCheckBoxes = () => {
    const initialState = interestsList.reduce((acc, interest) => {
        acc[interest] = false;
        return acc;
      }, {});
    const [interests, setInterest] = useState(initialState)
    // const [isSport, setIsSport] = useState(false);
    // const [isMusic, setIsMusic] = useState(false);
    // const [isBooks, setIsBooks] = useState(false);
    const changeInterests = (event) => {
        setInterest({...interests,  [event.target.name]:event.target.checked})
    }
    // const changeIsSport = (event) => {setIsSport(event.target.checked)}
    // const changeIsMusic = (event) => {setIsMusic(event.target.checked)}
    // const changeIsBook = (event) => {setIsBooks(event.target.checked)}
    return (
        <div>
            {interestsList.map((interes) => (
        <label key={interes} style={{display:'block'}}>
          <input
            type="checkbox"
            name={interes}
            checked={interests[{ interes }]}
            onChange={changeInterests}
          />
          {interes}
        </label>
      ))}
        </div>
    )}

export default GroupCheckBoxes;
