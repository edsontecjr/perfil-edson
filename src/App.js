import React, { useState } from 'react';

function Profile() {
  const [name, setName] = useState('Edson');
  const [age, setAge] = useState('42');
  const [profession, setProfession] = useState('Manutencao');
  const [photo, setPhoto] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  }

  const handleProfessionChange = (event) => {
    setProfession(event.target.value);
  }

  const handlePhotoChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setPhoto(URL.createObjectURL(event.target.files[0]));
    }
  }

  return (
    <div>
      <label>
        Nome:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <br />
      <label>
        Idade:
        <input type="number" value={age} onChange={handleAgeChange} />
      </label>
      <br />
      <label>
        Profissão:
        <input type="text" value={profession} onChange={handleProfessionChange} />
      </label>
      <br />
      <label>
        Foto:
        <input type="file" onChange={handlePhotoChange} />
      </label>
      <br />
      {photo && <img src={photo} alt="Foto do perfil" />}
    </div>
  );
}

export default Profile;
