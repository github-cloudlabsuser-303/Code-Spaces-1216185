import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState('type markdown here');

  const handleInputChange = (event) => {
    setMarkdown(event.target.value);
  };

  return (
    <div>
      <textarea 
        value={markdown} 
        onChange={handleInputChange} 
      />
      <ReactMarkdown source={markdown} />
    </div>
  );
};

function reverseSentence(sentence) {
    let reversed = sentence.split(' ').reverse().join(' ');
    return reversed.charAt(0).toUpperCase() + reversed.slice(1);
  }

  function getNames(data) {
    let names = [];
    data.forEach(subArray => {
      subArray.forEach(item => {
        names.push(item.name);
      });
    });
    return names;
  }
  
  console.log(getNames(data)); // ["John", "Jane", "Bob"]


  const data = [
    [
      { name: 'John', age: 25 },
      { name: 'Jane', age: 30 }
    ],
    [
      { name: 'Bob', age: 40 }
    ]
  ];
  const names = data.flatMap(arr => arr.map(item => item.name));
  console.log(names); // ["John", "Jane", "Bob"]
export default MarkdownEditor;