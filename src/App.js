import logo from "./logo.svg";
import "./App.css";
import { Mention, MentionsInput } from "react-mentions";
import React, { useEffect, useState } from "react";
import mentionsInputStyle from "../src/mentionsInputStyles";
import mentionStyle from "../src/mentionStyles";

function App() {
  const [value, setValue] = useState("");
  const [link, setLink] = useState([]);

  const [users, setUsers] = useState([
    {
      id: "isaac",
      display: "Isaac Newton",
    },
    {
      id: "sam",
      display: "Sam Victor",
    },
    {
      id: "emma",
      display: "emmanuel@nobody.com",
    },
  ]);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    // console.log(inputValue, "------------------28");
    const urlRegex = /(https?:\/\/[^\s]+)/g;

    // Find all URLs in the input text
    const urls = inputValue.match(urlRegex);
    // console.log(urls, "----------------32");

    // Check if any URLs are found
    if (urls && urls.length > 0) {
      // Filter out duplicate URLs
      const uniqueUrls = urls.filter((url) => !link.includes(url));
      // Add unique URLs to the link state
      if (uniqueUrls.length > 0) {
        setLink((prevLinks) => [...prevLinks, ...uniqueUrls]);
      }
    }
    setValue(inputValue);
  };
  console.log(link, "---------------47");
  // const addObjectToArray = () => {
  // Create a new object to add
  let newObj;
  if (link && link.length > 0) {
    newObj = {
      id: link[0],
      display: link[0],
    };
  }
  console.log(newObj, "-----------57");
  // Update the state by adding the new object to the array
  useEffect(() => {
    if (newObj) {
      setUsers([...users, newObj]);
      setLink([]);
    }
  }, [newObj, users]);
  // setUsers([...users, newObj]);
  // };

  console.log(users, "-------------------62");
  return (
    <div className="App">
      <MentionsInput
        style={mentionsInputStyle}
        value={value}
        onChange={handleChange}
        placeholder="Type @ to mention users..."
      >
        <Mention style={mentionStyle} data={users} />
        {/* <Mention style={mentionStyle} data={link} /> */}
      </MentionsInput>
    </div>
  );
}

export default App;
