// Import React and CSS
import React, { useState } from 'react';
import './App.css';

// Import Components
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import Input from './components/Input/Input';
import Select from './components/Select/Select';
import Textarea from './components/Textarea/Textarea';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

function App() {
  // Manage States
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userTopic, setUserTopic] = useState();
  const [userContent, setUserContent] = useState();

  // Manage State for Modal Window
  const [showModal, setShowModal] = useState();


  return (
    <div className="App">
      <Card>
        <Form>
          <Input
            inputLabel="Name: "
            inputId="userName"
            inputName="userName"
            inputType="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
          />
          <Input
            inputLabel="Email: "
            inputId="userEmail"
            inputName="userEmail"
            inputType="email"
            value={userEmail}
            onChange={(event) => setUserEmail(event.target.value)}
          />
          <Select
            selectLabel="Topics: "
            selectId="userTopic"
            selectName="userTopic"
            optionOne="Subscribe"
            optionTwo="Unsubscribe"
            optionThree="OptIn"
            optionFour="Other"
            value={userTopic}
            onChange={(event) => setUserTopic(event.target.value)}
          />
          <Textarea
            textareaLabel="Content: "
            textareaId="userContent"
            textareaName="userContent"
            value={userContent}
            onChange={(event) => setUserContent(event.target.value)}
          />
          <Button
            buttonText="Submit"
          />
        </Form>

      </Card>
      {
        
        showModal && (
          <Modal modalTitle = "Display Message"
           modalName={userName}
           modalEmail={userEmail}
           modalTopic={userTopic}
           modalContent={userContent}
          >
            <button buttonText="Close" handleClick={() => setShowModal(false)} />
          </Modal>
        )
      }
    </div>
  );
}

export default App;
