import {useState} from 'react';

const Filter = () => {
  const options = [
    {value: '', text: '--Choose an option--'},
    {value: 'song', text: 'Song'},
    {value: 'artist', text: 'Artist'},
    {value: 'playlist', text: 'Playlist'},
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <div>
      <select className="form-select filter m-3 float-start" value={selected} onChange={handleChange}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
